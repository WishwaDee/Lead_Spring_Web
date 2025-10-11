import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="bg-cream border-2 border-gold rounded-lg p-5 shadow-[0_4px_0_#740001]">
      <h1 className="mt-0">Welcome to the Wizarding Event</h1>
      <p>Join us for a magical gathering. Choose your house colors and get your ticket.</p>
      <Link
        className="inline-block bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold hover:brightness-95"
        to="/register"
      >
        Register Now
      </Link>
    </div>
  );
}
