import React from 'react';

const registerUrl = import.meta.env.VITE_REGISTER_URL || '#';

export default function Home(){
  return (
    <div className="space-y-12">
      <section
        className="bg-cream border-2 border-gold rounded-lg p-6 sm:p-10 shadow-[0_4px_0_#740001] text-center"
      >
        <h1 className="mt-0 text-3xl sm:text-4xl font-bold text-maroon">Wizarding Weekend Celebration</h1>
        <p className="mt-4 text-lg text-ink/80">
          Step through the brick wall into a night of magic, music, and house pride. Costumes are encouraged,
          wands are optional, and memories are guaranteed.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            className="inline-flex items-center justify-center bg-gold text-ink border-2 border-maroon py-3 px-6 rounded-md font-bold text-lg shadow-[0_3px_0_#740001] transition hover:-translate-y-0.5 hover:brightness-95"
            href={registerUrl}
            id="register"
            target={registerUrl.startsWith('http') ? '_blank' : undefined}
            rel={registerUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            Register Now
          </a>
        </div>
        <p className="mt-3 text-sm text-ink/60">
          (You can update the button link later with your Google Form URL.)
        </p>
      </section>

      <section
        id="about"
        className="bg-paper border-2 border-gold rounded-lg p-6 shadow-[0_3px_0_#740001]"
      >
        <h2 className="mt-0 text-2xl font-semibold">What to Expect</h2>
        <ul className="mt-4 space-y-2 text-ink/80">
          <li>✨ Sorting-inspired icebreakers to meet fellow witches and wizards.</li>
          <li>🍽️ A feast table stocked with butterbeer, chocolate frogs, and themed treats.</li>
          <li>🎶 Live performances and spellbinding photo booths.</li>
        </ul>
      </section>

      <section
        id="schedule"
        className="bg-cream border-2 border-gold rounded-lg p-6 shadow-[0_3px_0_#740001]"
      >
        <h2 className="mt-0 text-2xl font-semibold">Event Timeline</h2>
        <ol className="mt-4 space-y-3 text-ink/80">
          <li><strong>6:00 PM</strong> — Doors open &amp; house check-in.</li>
          <li><strong>7:30 PM</strong> — Magical showcase featuring special guests.</li>
          <li><strong>9:00 PM</strong> — Costume contest &amp; prizes.</li>
          <li><strong>10:30 PM</strong> — Farewell toast under floating candles.</li>
        </ol>
      </section>
    </div>
  );
}
