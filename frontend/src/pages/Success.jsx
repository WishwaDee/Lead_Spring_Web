import React from 'react';
import { Link } from 'react-router-dom';

export default function Success(){
  return (
    <div className="card">
      <h2>Registration successful!</h2>
      <p>See you at the event.</p>
      <Link className="btn" to="/">Back to Home</Link>
    </div>
  );
}
