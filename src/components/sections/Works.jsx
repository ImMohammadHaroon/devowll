import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/site';
import ArtPanel from '../visual/ArtPanel';
import Reveal from '../common/Reveal';

function ProjectCard({ project }) {
  return (
    <article className="w-[84vw] shrink-0 snap-start sm:w-[440px]">
      <Link to={`/work/${project.slug}`} className="group block">
        <ArtPanel colors={project.colors} label={project.sector} className="h-64 rounded-[1.5rem] sm:h-72" />
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl tracking-[-0.04em]">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-mist">{project.summary}</p>
          </div>
          <ArrowUpRight className="mt-1 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={20} />
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 px-3 py-3">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">{stat.label}</dt>
              <dd className="mt-1 text-lg">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Link>
    </article>
  );
}

export default function Works() {
  const scroller = useRef(null);

  function move(direction) {
    scroller.current?.scrollBy({ left: direction * 460, behavior: 'smooth' });
  }

  return (
    <section id="work" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
      <div className="container-page flex items-end justify-between gap-6">
        <Reveal>
          <p className="label">Selected work</p>
          <h2 className="mt-4 max-w-xl text-4xl tracking-[-0.045em] sm:text-6xl">Recent builds, told in scope — not slogans.</h2>
        </Reveal>
        <div className="hidden gap-2 sm:flex">
          <button type="button" className="pill-ghost h-12 w-12 px-0" aria-label="Previous projects" onClick={() => move(-1)}>
            <ArrowLeft size={18} />
          </button>
          <button type="button" className="pill-ghost h-12 w-12 px-0" aria-label="Next projects" onClick={() => move(1)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-2 md:px-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
