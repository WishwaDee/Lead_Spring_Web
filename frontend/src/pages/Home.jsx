import React, { useEffect, useState } from 'react';
import goldLogo from '../assets/LeadSpring_logo.png';
import ieeeLogo from '../assets/IEEE_.png';
import iasLogo from '../assets/IAS.png';
import pesLogo from '../assets/PES_White.png';

const registerUrl = '#';

export default function Home() {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3
    }));
    setStars(newStars);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(244, 201, 93, 0.5), 0 0 40px rgba(244, 201, 93, 0.3); }
          50% { text-shadow: 0 0 30px rgba(244, 201, 93, 0.8), 0 0 60px rgba(244, 201, 93, 0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .twinkle { animation: twinkle 3s infinite; }
        .float { animation: float 4s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(244, 201, 93, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .gradient-text {
          background: linear-gradient(135deg, #F4C95D 0%, #FFD700 50%, #F4C95D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Animated Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-300 twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,201,93,0.1)_0%,_transparent_70%)]" />
        
        <div 
          className="relative mx-auto max-w-5xl text-center space-y-12"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
          }}
        >
          {/* Gold Logo */}
          <div className="flex justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src={goldLogo}
              alt="Lead Spring gold logo"
              className="h-auto w-full max-w-2xl drop-shadow-[0_0_35px_rgba(244,201,93,0.45)]"
            />
          </div>

          {/* Subtitle */}
          <div className="fade-in-up space-y-4" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl font-light tracking-wide text-slate-200">
              Transform Ambition Into Action
            </p>
            <p className="text-lg text-slate-300 tracking-wider">
              LEADERS • INNOVATORS • ENTREPRENEURS
            </p>
          </div>

          {/* CTA Button */}
          <div className="fade-in-up pt-8" style={{ animationDelay: '0.6s' }}>
            <a
              href={registerUrl}
              className="group relative inline-block"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-full px-12 py-5 text-xl font-semibold uppercase tracking-wider transition-all group-hover:scale-105"
                   style={{
                     background: 'linear-gradient(135deg, #F4C95D 0%, #FFD700 50%, #F4C95D 100%)',
                     color: '#1a1a1a',
                     boxShadow: '0 10px 30px rgba(244, 201, 93, 0.5)'
                   }}>
                ✨ Reserve Your Seat ✨
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative mx-auto max-w-5xl px-6 pb-20 space-y-16">
        {/* Podcast 1 */}
        <section className="fade-in-up relative group" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text">
              PODCAST 1
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer" />
            <p className="mt-8 font-serif text-4xl font-light tracking-wide text-slate-200">
              Leadership Spells
            </p>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Practical rituals to amplify your influence</p>
          </div>
        </section>

        {/* Podcast 2 */}
        <section className="fade-in-up relative group" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text">
              PODCAST 2
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer" style={{ animationDelay: '0.5s' }} />
            <p className="mt-8 font-serif text-4xl font-light tracking-wide text-slate-200">
              Entrepreneurship Secrets
            </p>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Field notes from founders in the wild</p>
          </div>
        </section>

        {/* Live Sessions */}
        <section className="fade-in-up relative group" style={{ animationDelay: '1.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text">
              LIVE SESSIONS
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer" style={{ animationDelay: '1s' }} />
            <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
              <span className="text-3xl font-light tracking-wide text-slate-200">Discover Track</span>
              <span className="text-amber-500 text-3xl">✦</span>
              <span className="text-3xl font-light tracking-wide text-slate-200">Pitch Perfect</span>
            </div>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Guided experiences to refine your vision</p>
          </div>
        </section>

        {/* Footer Logos */}
        <section className="fade-in-up border-t border-amber-500/30 pt-16" style={{ animationDelay: '1.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src={ieeeLogo}
              alt="SLIIT IEEE Student Branch logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]"
            />
            <img
              src={iasLogo}
              alt="IEEE IAS logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]"
            />
            <img
              src={pesLogo}
              alt="IEEE PES logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}