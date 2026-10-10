import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import ArtPanel from '../components/visual/ArtPanel';
import { projects } from '../data/site';

export default function Work() {
  return (
    <>
      <Seo
        title="Work"
        description="Selected Devowll builds across commerce, product, brand, and internal tools."
        path="/work"
      />
      <section className="container-page pb-20 pt-32 md:pt-40">
        <p className="label">Work</p>
        <h1 className="mt-4 max-w-3xl text-5xl tracking-[-0.05em] sm:text-7xl">Selected builds.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
          A sample of the kinds of systems the studio ships. Each one is scoped work, not a borrowed case study.
        </p>
        <div className="mt-14 grid gap-12">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <Link to={`/work/${project.slug}`}>
                <ArtPanel colors={project.colors} label={project.sector} className="h-64 rounded-[1.6rem] sm:h-80" />
              </Link>
              <div>
                <p className="label">{project.sector}</p>
                <h2 className="mt-3 text-4xl tracking-[-0.04em]">
                  <Link to={`/work/${project.slug}`}>{project.name}</Link>
                </h2>
                <p className="mt-4 text-mist">{project.summary}</p>
                <p className="mt-4 leading-7">{project.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
