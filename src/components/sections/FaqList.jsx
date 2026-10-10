import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/site';

export default function FaqList({ compact = false }) {
  const items = compact ? faqs.slice(0, 5) : faqs;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-white/10">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="label">Common queries</p>
          <h2 className="mt-4 text-4xl tracking-[-0.045em] sm:text-5xl">What teams ask before we start.</h2>
          <Link to="/contact" className="pill mt-8">
            Contact the studio
          </Link>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {items.map((item, index) => {
            const selected = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={selected}
                  onClick={() => setOpen(selected ? -1 : index)}
                >
                  <span className="text-lg">{item.q}</span>
                  <span className="font-mono text-lg text-white/50" aria-hidden="true">
                    {selected ? '–' : '+'}
                  </span>
                </button>
                {selected ? <p className="pb-5 text-sm leading-7 text-mist">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
