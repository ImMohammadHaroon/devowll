import { Link } from 'react-router-dom';

export default function Statement() {
  return (
    <section className="border-t border-white/10">
      <div className="container-page flex flex-col items-start gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <h2 className="max-w-4xl text-3xl font-medium uppercase leading-[1.05] tracking-[-0.04em] sm:text-5xl">
          We don’t just ship screens. We ship the system your team keeps using.
        </h2>
        <Link to="/contact" className="pill shrink-0">
          Build now
        </Link>
      </div>
    </section>
  );
}
