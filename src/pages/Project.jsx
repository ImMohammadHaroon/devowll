import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import ArtPanel from '../components/visual/ArtPanel';
import { getProject } from '../data/site';
import NotFound from './NotFound';

export default function Project() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  return (
    <>
      <Seo title={project.name} description={project.summary} path={`/work/${project.slug}`} />
      <article className="container-page pb-20 pt-32 md:pt-40">
        <Link to="/work" className="label">
          ← All work
        </Link>
        <p className="label mt-8">{project.sector}</p>
        <h1 className="mt-4 text-5xl tracking-[-0.05em] sm:text-7xl">{project.name}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-mist">{project.summary}</p>
        <ArtPanel colors={project.colors} label={project.name} className="mt-10 h-[420px] rounded-[1.8rem]" />
        <p className="mt-10 max-w-2xl text-lg leading-8">{project.outcome}</p>
        <dl className="mt-10 grid gap-4 sm:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 p-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">{stat.label}</dt>
              <dd className="mt-2 text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <Link to="/contact" className="pill mt-12">
          Start a similar build
        </Link>
      </article>
    </>
  );
}
