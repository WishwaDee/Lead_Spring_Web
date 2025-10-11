import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand">Wizarding Event</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin/login">Admin</Link>
      </nav>
    </header>
  );
}
