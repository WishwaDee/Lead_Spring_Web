import React from 'react';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-parchment text-ink font-serif">
      <Navbar />
      <main className="max-w-[900px] mx-auto my-6 px-4">
        <Home />
      </main>
    </div>
  );
}
