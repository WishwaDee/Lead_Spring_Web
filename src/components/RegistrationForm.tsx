import React, { useState } from 'react';
import { Wand2, Mail, Phone, User, MessageSquare, Utensils } from 'lucide-react';
import { supabase } from '../lib/supabase';

const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    house_preference: '',
    dietary_restrictions: '',
    additional_notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('participants')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        house_preference: '',
        dietary_restrictions: '',
        additional_notes: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Wand2 className="w-16 h-16 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'serif' }}>
            Magical Event Registration
          </h1>
          <p className="text-amber-200 text-lg">Join us for an enchanting experience</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-600/50 rounded-lg shadow-2xl p-8">
          {success && (
            <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-lg text-green-200">
              Registration successful! We'll see you at the event.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <User className="w-5 h-5 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Wand2 className="w-5 h-5 mr-2" />
                House Preference
              </label>
              <select
                name="house_preference"
                value={formData.house_preference}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="">Choose your house...</option>
                {houses.map((house) => (
                  <option key={house} value={house}>
                    {house}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Utensils className="w-5 h-5 mr-2" />
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietary_restrictions"
                value={formData.dietary_restrictions}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="Any dietary requirements?"
              />
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <MessageSquare className="w-5 h-5 mr-2" />
                Additional Notes
              </label>
              <textarea
                name="additional_notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 resize-none"
                placeholder="Anything else we should know?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {loading ? 'Registering...' : 'Complete Registration'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/admin"
              className="text-amber-400 hover:text-amber-300 text-sm underline"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
