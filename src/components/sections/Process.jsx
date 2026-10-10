import { useState } from 'react';
import { process } from '../../data/site';
import Reveal from '../common/Reveal';

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="scroll-mt-24 border-t border-white/10">
      <div className="container-page py-20 md:py-28">
        <Reveal>
          <p className="label">Our process</p>
          <h2 className="mt-4 max-w-3xl text-4xl tracking-[-0.045em] sm:text-6xl">From a raw brief to something the team can run.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {process.map((step, index) => {
            const selected = index === active;
            return (
              <button
                key={step.index}
                type="button"
                onClick={() => setActive(index)}
                aria-expanded={selected}
                className={`rounded-[1.5rem] border p-5 text-left transition ${
                  selected ? 'border-white/30 bg-white/[0.04]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <p className="font-mono text-xs text-white/50">// {step.index}</p>
                <h3 className="mt-6 text-2xl tracking-[-0.04em]">{step.title}</h3>
                <p className={`mt-4 text-sm leading-6 ${selected ? 'text-mist' : 'text-white/40'}`}>{step.text}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
