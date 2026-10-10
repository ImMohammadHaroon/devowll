import { Link } from 'react-router-dom';
import ArtPanel from '../visual/ArtPanel';
import Reveal from '../common/Reveal';

export default function Hero() {
  return (
    <section className="container-page pb-16 pt-32 md:pb-24 md:pt-40">
      <Reveal>
        <p className="label">Studio / products, sites, workflows</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.4rem)] font-medium leading-[0.92] tracking-[-0.05em]">
          Scale your ideas.
          <span className="block">Build with Devowll.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.08} className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-lg leading-8 text-mist">
          Websites, product interfaces, and AI-assisted workflows — designed and shipped by one studio.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="pill">
            Start a build
          </Link>
          <Link to="/#work" className="pill-ghost">
            See the work
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.12} className="mt-12 md:mt-16">
        <ArtPanel
          label="Signal // Build 01"
          className="h-[46vw] min-h-[240px] max-h-[560px] rounded-[1.8rem] md:rounded-[2.2rem]"
        />
      </Reveal>
    </section>
  );
}
