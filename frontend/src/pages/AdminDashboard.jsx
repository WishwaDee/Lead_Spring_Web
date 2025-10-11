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
    <div className="card">
      <h2 style={{marginTop:0}}>Admin Dashboard</h2>
      {error && <div style={{color:'crimson'}}>{error}</div>}
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <button onClick={load}>Refresh</button>
        <button onClick={exportCsv}>Export CSV</button>
      </div>
      <div style={{overflowX:'auto'}}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>House</th><th>Ticket</th><th>Created</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r._id}>
                <td>{r.fullName}</td>
                <td>{r.email}</td>
                <td>{r.phone || '-'}</td>
                <td><span className="badge">{r.house}</span></td>
                <td>{r.ticketType}</td>
                <td>{new Date(r.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
