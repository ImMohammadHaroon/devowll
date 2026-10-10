import { useState } from 'react';
import { Link } from 'react-router-dom';
import { capabilities } from '../../data/site';
import Reveal from '../common/Reveal';

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section id="services" className="scroll-mt-24 border-t border-white/10">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="label">Capabilities</p>
          <h2 className="mt-4 text-4xl tracking-[-0.045em] sm:text-6xl">Systems that are useful on a Tuesday.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-mist">
            We close the gap between a concept and something a team can run. The craft is the same whether the surface is a site, a product, or a workflow.
          </p>
          <Link to="/contact" className="pill mt-8">
            Start a build
          </Link>
        </Reveal>

        <div>
          <p className="text-xl leading-8 text-cream sm:text-2xl">{current.text}</p>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.index}
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={selected}
                  onClick={() => setActive(index)}
                >
                  <span className={`text-lg sm:text-2xl ${selected ? 'text-cream' : 'text-white/45'}`}>{item.title}</span>
                  <span className="font-mono text-xs text-white/50">{item.index}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
