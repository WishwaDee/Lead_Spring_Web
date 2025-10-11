import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api.js';

export default function RegistrationForm(){
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    house: 'Gryffindor',
    ticketType: 'Standard',
    notes: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    setError('');
    setLoading(true);
    try{
      await api.post('/registrations', form);
      navigate('/success');
    }catch(err){
      setError(err.response?.data?.error || 'Failed to register');
    }finally{
      setLoading(false);
    }
  }

  return (
    <form className="card" onSubmit={submit}>
      <h2 style={{marginTop:0}}>Register for the Event</h2>
      {error && <div style={{color:'crimson'}}>{error}</div>}
      <label>Full name</label>
      <input value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} required />
      <label>Email</label>
      <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
      <label>Phone</label>
      <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
      <label>House</label>
      <select value={form.house} onChange={e=>setForm({...form, house:e.target.value})} required>
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Ravenclaw</option>
        <option>Hufflepuff</option>
        <option>Muggle</option>
      </select>
      <label>Ticket Type</label>
      <select value={form.ticketType} onChange={e=>setForm({...form, ticketType:e.target.value})}>
        <option>Standard</option>
        <option>VIP</option>
      </select>
      <label>Notes</label>
      <textarea rows="4" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
      <button disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
    </form>
  );
}
