import React from 'react';
export default function Navbar(){
  return (
    <header className="bg-gradient-to-r from-maroon to-maroon-dark text-gold px-5 py-3">
      <div className="max-w-[900px] mx-auto flex items-center justify-between">
        <div className="font-extrabold tracking-wide">Wizarding Event</div>
        <nav className="flex items-center gap-4 text-sm sm:text-base">
          <a className="text-gold no-underline" href="#about">About</a>
          <a className="text-gold no-underline" href="#schedule">Schedule</a>
          <a className="text-gold no-underline" href="#register">Register</a>
        </nav>
      </div>
    </header>
  );
}
