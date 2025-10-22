import React from 'react';
import goldLogo from '../assets/LeadSpring_logo.png';

export default function Navbar(){
  return (
    <header className="bg-gradient-to-r from-midnight/90 via-twilight/90 to-forest/90 backdrop-blur-sm text-ember px-5 py-4 shadow-[0_2px_15px_rgba(10,0,30,0.45)]">
      <div className="max-w-[900px] mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-center">
          <img
            src={goldLogo}
            alt="Lead Spring gold logo"
            className="h-12 w-auto drop-shadow-[0_0_20px_rgba(244,201,93,0.45)]"
          />
        </div>
        <nav className="flex items-center gap-4 text-xs sm:text-sm tracking-wide uppercase">
          <a className="text-mist/90 hover:text-ember transition-colors no-underline" href="#about">About</a>
          <a className="text-mist/90 hover:text-ember transition-colors no-underline" href="#program">Program</a>
          <a className="text-mist/90 hover:text-ember transition-colors no-underline" href="#register">Register</a>
        </nav>
      </div>
    </header>
  );
}
