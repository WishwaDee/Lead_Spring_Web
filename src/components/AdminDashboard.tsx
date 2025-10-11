import React, { useEffect, useState } from 'react';
import { LogOut, Users, Mail, Phone, Home, Utensils, MessageSquare, Trash2 } from 'lucide-react';
import { supabase, Participant } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const AdminDashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetchParticipants();
    }
  }, [user]);

  const fetchParticipants = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from('participants')
        .select('*')
        .order('registered_at', { ascending: false });

      if (fetchError) throw fetchError;
      setParticipants(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this participant?')) return;

    try {
      const { error: deleteError } = await supabase
        .from('participants')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      setParticipants(participants.filter((p) => p.id !== id));
    } catch (err: any) {
      alert('Failed to delete participant: ' + err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err: any) {
      alert('Failed to sign out: ' + err.message);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-600/50 rounded-lg shadow-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'serif' }}>
                Admin Dashboard
              </h1>
              <p className="text-amber-200">Welcome, {user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 bg-red-900/50 hover:bg-red-800/50 text-red-200 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200">
            {error}
          </div>
        )}

        <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-600/50 rounded-lg shadow-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-amber-400">
              Registered Participants ({participants.length})
            </h2>
          </div>

          {participants.length === 0 ? (
            <p className="text-amber-200 text-center py-8">No participants registered yet.</p>
          ) : (
            <div className="space-y-4">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="bg-slate-900/50 border border-amber-600/30 rounded-lg p-6 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-amber-300 mb-1">
                        {participant.full_name}
                      </h3>
                      <p className="text-amber-500 text-sm">
                        Registered: {formatDate(participant.registered_at)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(participant.id)}
                      className="text-red-400 hover:text-red-300 transition-colors p-2"
                      title="Delete participant"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2 text-amber-200">
                      <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-amber-400 text-sm font-semibold">Email</p>
                        <p>{participant.email}</p>
                      </div>
                    </div>

                    {participant.phone && (
                      <div className="flex items-start gap-2 text-amber-200">
                        <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-400 text-sm font-semibold">Phone</p>
                          <p>{participant.phone}</p>
                        </div>
                      </div>
                    )}

                    {participant.house_preference && (
                      <div className="flex items-start gap-2 text-amber-200">
                        <Home className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-400 text-sm font-semibold">House Preference</p>
                          <p>{participant.house_preference}</p>
                        </div>
                      </div>
                    )}

                    {participant.dietary_restrictions && (
                      <div className="flex items-start gap-2 text-amber-200">
                        <Utensils className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-400 text-sm font-semibold">Dietary Restrictions</p>
                          <p>{participant.dietary_restrictions}</p>
                        </div>
                      </div>
                    )}

                    {participant.additional_notes && (
                      <div className="flex items-start gap-2 text-amber-200 md:col-span-2">
                        <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-400 text-sm font-semibold">Additional Notes</p>
                          <p>{participant.additional_notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
