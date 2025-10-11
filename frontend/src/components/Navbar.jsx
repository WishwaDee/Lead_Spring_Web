import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="bg-gradient-to-r from-maroon to-maroon-dark text-gold px-5 py-3">
      <div className="max-w-[900px] mx-auto flex items-center justify-between">
        <div className="font-extrabold tracking-wide">Wizarding Event</div>
        <nav className="flex items-center gap-4">
          <Link className="text-gold no-underline" to="/">Home</Link>
          <Link className="text-gold no-underline" to="/register">Register</Link>
          <Link className="text-gold no-underline" to="/admin/login">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
