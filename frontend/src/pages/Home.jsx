import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="card">
      <h1 style={{marginTop:0}}>Welcome to the Wizarding Event</h1>
      <p>Join us for a magical gathering. Choose your house colors and get your ticket.</p>
      <Link className="btn" to="/register">Register Now</Link>
    </div>
  );
}
