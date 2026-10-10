import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Capabilities from '../components/sections/Capabilities';
import Process from '../components/sections/Process';
import { services } from '../data/site';

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Devowll designs and builds websites, product interfaces, commerce, and AI-assisted workflows."
        path="/services"
      />
      <section className="container-page pb-8 pt-32 md:pt-40">
        <p className="label">Services</p>
        <h1 className="mt-4 max-w-3xl text-5xl tracking-[-0.05em] sm:text-7xl">What the studio takes on.</h1>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.5rem] border border-white/10 p-6">
              <h2 className="text-2xl tracking-[-0.04em]">{service.title}</h2>
              <p className="mt-3 leading-7 text-mist">{service.text}</p>
            </article>
          ))}
        </div>
        <Link to="/contact" className="pill mt-10">
          Start a build
        </Link>
      </section>
      <Capabilities />
      <Process />
    </>
  );
}
