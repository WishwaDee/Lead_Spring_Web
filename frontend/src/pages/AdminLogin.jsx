import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../api.js';

export default function AdminLogin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function login(e){
    e.preventDefault();
    setError('');
    try{
      const { data } = await api.post('/admin/login', { username, password });
      localStorage.setItem('adminToken', data.token);
      setAuthToken(data.token);
      navigate('/admin');
    }catch(err){
      setError(err.response?.data?.error || 'Login failed');
    }
  }

  return (
    <form
      className="bg-cream border-2 border-gold rounded-lg p-5 shadow-[0_4px_0_#740001]"
      onSubmit={login}
    >
      <h2 className="mt-0">Admin Login</h2>
      {error && <div className="text-red-600">{error}</div>}
      <label className="block font-medium mt-3">Username</label>
      <input
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        value={username}
        onChange={e=>setUsername(e.target.value)}
        required
      />
      <label className="block font-medium">Password</label>
      <input
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        required
      />
      <button
        className="bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold hover:brightness-95"
      >
        Login
      </button>
    </form>
  );
}
