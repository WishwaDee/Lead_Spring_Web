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
    <form
      className="bg-cream border-2 border-gold rounded-lg p-5 shadow-[0_4px_0_#740001]"
      onSubmit={submit}
    >
      <h2 className="mt-0">Register for the Event</h2>
      {error && <div className="text-red-600">{error}</div>}

      <label className="block font-medium mt-3">Full name</label>
      <input
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        value={form.fullName}
        onChange={e=>setForm({...form, fullName:e.target.value})}
        required
      />

      <label className="block font-medium">Email</label>
      <input
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        type="email"
        value={form.email}
        onChange={e=>setForm({...form, email:e.target.value})}
        required
      />

      <label className="block font-medium">Phone</label>
      <input
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        value={form.phone}
        onChange={e=>setForm({...form, phone:e.target.value})}
      />

      <label className="block font-medium">House</label>
      <select
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        value={form.house}
        onChange={e=>setForm({...form, house:e.target.value})}
        required
      >
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Ravenclaw</option>
        <option>Hufflepuff</option>
        <option>Muggle</option>
      </select>

      <label className="block font-medium">Ticket Type</label>
      <select
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        value={form.ticketType}
        onChange={e=>setForm({...form, ticketType:e.target.value})}
      >
        <option>Standard</option>
        <option>VIP</option>
      </select>

      <label className="block font-medium">Notes</label>
      <textarea
        className="w-full px-3 py-2 my-2.5 border border-maroon rounded-md bg-paper"
        rows="4"
        value={form.notes}
        onChange={e=>setForm({...form, notes:e.target.value})}
      />

      <button
        className="bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold transition hover:brightness-95 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
