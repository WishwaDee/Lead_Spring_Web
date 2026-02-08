import React from 'react';
import { Link } from 'react-router-dom';

export default function Success(){
  return (
    <div className="bg-cream border-2 border-gold rounded-lg p-5 shadow-[0_4px_0_#740001]">
      <h2 className="mt-0">Registration successful!</h2>
      <p>See you at the event.</p>
      <Link
        className="inline-block bg-gold text-ink border-2 border-maroon py-2.5 px-4 rounded-md font-bold hover:brightness-95"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
