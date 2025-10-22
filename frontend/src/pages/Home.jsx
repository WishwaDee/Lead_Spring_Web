import React from 'react';

const registerUrl = import.meta.env.VITE_REGISTER_URL || '#';

export default function Home(){
  return (
    <div className="space-y-12">
      <section
        className="relative overflow-hidden rounded-2xl border border-ember/40 bg-gradient-to-br from-midnight/40 via-twilight/60 to-forest/60 p-8 sm:p-12 shadow-[0_15px_40px_rgba(9,5,25,0.45)] text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,201,93,0.18),_transparent_55%)]" aria-hidden="true" />
        <div className="relative space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-ember">Lead • Learn • Grow</p>
          <h1 className="mt-0 text-4xl sm:text-5xl font-black text-mist drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Lead Spring Summit 2024
          </h1>
          <p className="text-base sm:text-lg text-mist/80 max-w-2xl mx-auto">
            Transform twilight inspiration into action under the forest canopy. Join visionary leaders,
            innovators, and entrepreneurs for an unforgettable night of strategy, storytelling, and shared ambition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-4">
            <a
              className="inline-flex items-center justify-center rounded-full border border-ember bg-ember px-8 py-3 text-base font-semibold uppercase tracking-wide text-midnight shadow-[0_6px_20px_rgba(244,201,93,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-ember-dark hover:border-ember-dark"
              href={registerUrl}
              id="register"
              target={registerUrl.startsWith('http') ? '_blank' : undefined}
              rel={registerUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              Reserve Your Seat
            </a>
            <span className="text-sm text-plume/80">Limited twilight passes available</span>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="rounded-2xl border border-ember/30 bg-white/5 p-8 shadow-[0_12px_32px_rgba(8,4,24,0.4)] backdrop-blur-sm"
      >
        <h2 className="mt-0 text-3xl font-semibold text-ember">What is Lead Spring?</h2>
        <p className="mt-4 text-mist/80">
          Lead Spring is where ambition takes flight. Through immersive conversations and curated encounters,
          you will ignite leadership spells, sharpen entrepreneurial instincts, and celebrate the courage to build
          what is next.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-left text-sm text-mist/70">
          <div className="rounded-xl border border-mist/10 bg-midnight/40 p-4">
            <h3 className="text-ember font-semibold uppercase tracking-wide text-xs">Podcast I</h3>
            <p className="mt-2 text-sm text-mist/80">Leadership Spells — practical rituals to amplify your influence.</p>
          </div>
          <div className="rounded-xl border border-mist/10 bg-midnight/40 p-4">
            <h3 className="text-ember font-semibold uppercase tracking-wide text-xs">Podcast II</h3>
            <p className="mt-2 text-sm text-mist/80">Entrepreneurship Secrets — field notes from founders in the wild.</p>
          </div>
          <div className="rounded-xl border border-mist/10 bg-midnight/40 p-4">
            <h3 className="text-ember font-semibold uppercase tracking-wide text-xs">Live Sessions</h3>
            <p className="mt-2 text-sm text-mist/80">Discover Track &amp; Pitch Perfect — guided experiences to refine your vision.</p>
          </div>
        </div>
      </section>

      <section
        id="program"
        className="rounded-2xl border border-ember/25 bg-gradient-to-br from-midnight/50 via-twilight/45 to-forest/50 p-8 shadow-[0_12px_32px_rgba(6,4,20,0.45)]"
      >
        <h2 className="mt-0 text-3xl font-semibold text-ember">Evening Flow</h2>
        <ol className="mt-6 space-y-4 text-mist/80">
          <li>
            <strong className="text-ember">6:00 PM</strong> — Forest welcome &amp; twilight networking rituals.
          </li>
          <li>
            <strong className="text-ember">7:30 PM</strong> — Leadership Spells live recording with special guests.
          </li>
          <li>
            <strong className="text-ember">8:15 PM</strong> — Entrepreneurship Secrets fireside conversations.
          </li>
          <li>
            <strong className="text-ember">9:30 PM</strong> — Pitch Perfect finale &amp; celebration toast.
          </li>
        </ol>
      </section>
    </div>
  );
}
