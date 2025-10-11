import React, { useEffect, useState } from 'react';
import api, { setAuthToken } from '../api.js';

export default function AdminDashboard(){
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) setAuthToken(token);
    load();
  }, []);

  async function load(){
    try{
      const { data } = await api.get('/registrations');
      setRows(data);
    }catch(err){
      setError(err.response?.data?.error || 'Failed to load registrations');
    }
  }

  async function exportCsv(){
    try {
      const res = await api.get('/registrations/export', { responseType: 'blob' });
      const blob = new Blob([res.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'registrations.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to export CSV');
    }
  }

  return (
    <div className="bg-cream border-2 border-gold rounded-lg p-5 shadow-[0_4px_0_#740001]">
      <h2 className="mt-0">Admin Dashboard</h2>
      {error && <div className="text-red-600">{error}</div>}
      <div className="flex gap-2 mb-3">
        <button
          className="bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold hover:brightness-95"
          onClick={load}
        >
          Refresh
        </button>
        <button
          className="bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold hover:brightness-95"
          onClick={exportCsv}
        >
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              {['Name','Email','Phone','House','Ticket','Created'].map(h=>(
                <th key={h} className="border border-maroon p-2 bg-thbg font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r._id}>
                <td className="border border-maroon p-2">{r.fullName}</td>
                <td className="border border-maroon p-2">{r.email}</td>
                <td className="border border-maroon p-2">{r.phone || '-'}</td>
                <td className="border border-maroon p-2">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-green text-white text-xs">
                    {r.house}
                  </span>
                </td>
                <td className="border border-maroon p-2">{r.ticketType}</td>
                <td className="border border-maroon p-2">{new Date(r.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
