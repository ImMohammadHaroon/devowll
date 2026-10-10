import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { notes } from '../../data/site';

export default function Experiences() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const note = notes[index];

  function step(direction) {
    setIndex((current) => (current + direction + notes.length) % notes.length);
  }

  return (
    <section className="border-t border-white/10">
      <div className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label">Notes</p>
            <h2 className="mt-4 max-w-xl text-4xl tracking-[-0.045em] sm:text-5xl">What changed after the work shipped.</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" className="pill-ghost h-12 w-12 px-0" aria-label="Previous note" onClick={() => step(-1)}>
              <ArrowLeft size={18} />
            </button>
            <button type="button" className="pill-ghost h-12 w-12 px-0" aria-label="Next note" onClick={() => step(1)}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={note.org}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <p className="max-w-4xl font-serif text-3xl italic leading-snug sm:text-5xl">“{note.quote}”</p>
              <footer className="mt-8 text-sm text-white/60">
                <span className="text-cream">{note.name}</span>
                <span> — {note.org}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
