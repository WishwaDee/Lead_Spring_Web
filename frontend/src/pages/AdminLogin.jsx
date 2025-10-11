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
    <form className="card" onSubmit={login}>
      <h2 style={{marginTop:0}}>Admin Login</h2>
      {error && <div style={{color:'crimson'}}>{error}</div>}
      <label>Username</label>
      <input value={username} onChange={e=>setUsername(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <button>Login</button>
    </form>
  );
}
