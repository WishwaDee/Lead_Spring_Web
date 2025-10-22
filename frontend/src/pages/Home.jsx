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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden relative">
      <style>{`
        @keyframes aurora {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(-30%) translateY(-60%) rotate(180deg);
            opacity: 0.6;
          }
        }
        @keyframes riseParticle {
          0% { 
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) translateX(var(--drift)) scale(1);
            opacity: 0;
          }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, -20px); }
          75% { transform: translate(-10px, -10px); }
        }
        @keyframes twinkleDrift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes reveal3D {
          from { 
            opacity: 0; 
            transform: perspective(1000px) rotateX(-20deg) translateY(50px);
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: perspective(1000px) rotateX(0deg) translateY(0);
            filter: blur(0);
          }
        }
        @keyframes pulseGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(244, 201, 93, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 40px rgba(244, 201, 93, 0.7));
          }
        }
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmerFlow {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes diamondRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }
        
        .aurora-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(244, 201, 93, 0.15), transparent 70%);
          animation: aurora 20s ease-in-out infinite;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, #FFD700, transparent);
          border-radius: 50%;
          animation: riseParticle linear infinite;
          pointer-events: none;
        }
        .star-drift {
          animation: drift 8s ease-in-out infinite, twinkleDrift 3s infinite;
        }
        .reveal-3d {
          animation: reveal3D 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .float-gentle {
          animation: floatGentle 6s ease-in-out infinite;
        }
        .shimmer-flow {
          background: linear-gradient(90deg, transparent, rgba(244, 201, 93, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmerFlow 3s infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #F4C95D 0%, #FFD700 50%, #F4C95D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hover-scale {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-scale:hover {
          transform: scale(1.03);
          filter: blur(0) brightness(1.1);
        }
        .hover-tracking {
          transition: letter-spacing 0.5s ease, text-shadow 0.5s ease;
        }
        .hover-tracking:hover {
          letter-spacing: 0.15em;
          text-shadow: 0 0 20px rgba(244, 201, 93, 0.6);
        }
        .logo-hover {
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .logo-hover:hover {
          transform: scale(1.1);
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8));
        }
        .diamond-spin {
          display: inline-block;
          transition: transform 0.6s ease;
        }
        .hover-parent:hover .diamond-spin {
          transform: rotate(180deg);
        }
        .emoji-bounce {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .button-hover:hover .emoji-bounce {
          transform: scale(1.3);
        }
        .button-hover {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .button-hover:hover {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 0 20px 50px rgba(244, 201, 93, 0.8) !important;
        }
      `}</style>

      {/* Aurora Background */}
      <div className="aurora-bg" />
      <div className="aurora-bg" style={{ animationDelay: '10s', animationDirection: 'reverse' }} />

      {/* Rising Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              '--drift': `${(Math.random() - 0.5) * 100}px`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Drifting Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-300 star-drift"
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
          <div className="flex justify-center reveal-3d float-gentle" style={{ animationDelay: '0.2s' }}>
            <img
              src={goldLogo}
              alt="Lead Spring gold logo"
              className="h-auto w-full max-w-2xl pulse-glow"
            />
          </div>

          {/* Subtitle */}
          <div className="reveal-3d space-y-4" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl font-light tracking-wide text-slate-200 hover-tracking">
              Transform Ambition Into Action
            </p>
            <p className="text-lg text-slate-300 tracking-wider hover-tracking">
              LEADERS • INNOVATORS • ENTREPRENEURS
            </p>
          </div>

          {/* CTA Button */}
          <div className="reveal-3d pt-8" style={{ animationDelay: '0.6s' }}>
            <a
              href={registerUrl}
              className="group relative inline-block"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="button-hover relative rounded-full px-12 py-5 text-xl font-semibold uppercase tracking-wider"
                   style={{
                     background: 'linear-gradient(135deg, #F4C95D 0%, #FFD700 50%, #F4C95D 100%)',
                     color: '#1a1a1a',
                     boxShadow: '0 10px 30px rgba(244, 201, 93, 0.5)'
                   }}>
                <span className="emoji-bounce">✨</span> Reserve Your Seat <span className="emoji-bounce">✨</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative mx-auto max-w-5xl px-6 pb-20 space-y-16">
        {/* Podcast 1 */}
        <section className="reveal-3d relative group hover-scale hover-parent" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text hover-tracking">
              PODCAST 1
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer-flow" />
            <p className="mt-8 font-serif text-4xl font-light tracking-wide text-slate-200 hover-tracking">
              Leadership Spells
            </p>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Practical rituals to amplify your influence</p>
          </div>
        </section>

        {/* Podcast 2 */}
        <section className="reveal-3d relative group hover-scale hover-parent" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text hover-tracking">
              PODCAST 2
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer-flow" style={{ animationDelay: '0.5s' }} />
            <p className="mt-8 font-serif text-4xl font-light tracking-wide text-slate-200 hover-tracking">
              Entrepreneurship Secrets
            </p>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Field notes from founders in the wild</p>
          </div>
        </section>

        {/* Live Sessions */}
        <section className="reveal-3d relative group hover-scale hover-parent" style={{ animationDelay: '1.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative border-t border-amber-500/30 py-16 text-center">
            <h3 className="font-serif text-5xl font-bold tracking-wider gradient-text hover-tracking">
              LIVE SESSIONS
            </h3>
            <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent shimmer-flow" style={{ animationDelay: '1s' }} />
            <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
              <span className="text-3xl font-light tracking-wide text-slate-200 hover-tracking">Discover Track</span>
              <span className="text-amber-500 text-3xl diamond-spin">✦</span>
              <span className="text-3xl font-light tracking-wide text-slate-200 hover-tracking">Pitch Perfect</span>
            </div>
            <p className="mt-4 text-amber-200/60 text-sm tracking-wider">Guided experiences to refine your vision</p>
          </div>
        </section>

        {/* Footer Logos */}
        <section className="reveal-3d border-t border-amber-500/30 pt-16" style={{ animationDelay: '1.4s' }}>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src={ieeeLogo}
              alt="SLIIT IEEE Student Branch logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] logo-hover"
            />
            <img
              src={iasLogo}
              alt="IEEE IAS logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] logo-hover"
            />
            <img
              src={pesLogo}
              alt="IEEE PES logo"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.45)] logo-hover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}