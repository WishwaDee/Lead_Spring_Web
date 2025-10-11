import React, { useState } from 'react';
import { Wand2, Mail, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const AdminLogin: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
    } catch (err: any) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Wand2 className="w-16 h-16 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'serif' }}>
            Admin Portal
          </h1>
          <p className="text-amber-200 text-lg">Access the magical registry</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-600/50 rounded-lg shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="flex items-center text-amber-200 mb-2 font-semibold">
                <Lock className="w-5 h-5 mr-2" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-amber-600/30 rounded-lg text-amber-100 placeholder-amber-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <a
              href="/admin/signup"
              className="block text-amber-400 hover:text-amber-300 text-sm underline"
            >
              Create Admin Account
            </a>
            <a
              href="/"
              className="block text-amber-400 hover:text-amber-300 text-sm underline"
            >
              Back to Registration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
