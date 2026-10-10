import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Team from '../components/sections/Team';
import Vision from '../components/sections/Vision';

export default function About() {
  return (
    <>
      <Seo
        title="Company"
        description="Devowll is a remote studio for websites, products, and the workflows around them."
        path="/about"
      />
      <section className="container-page pb-4 pt-32 md:pt-40">
        <p className="label">Company</p>
        <h1 className="mt-4 max-w-3xl text-5xl tracking-[-0.05em] sm:text-7xl">A studio built to ship the whole thing.</h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-mist">
          <p>
            Devowll exists for teams who are tired of splitting a product across a designer, a developer, and a tools person who never meet.
          </p>
          <p>
            We take the story, the interface, and the build. When a workflow is eating the week, we automate the repeated part and leave the judgment with the people who have it.
          </p>
          <p>The studio is remote-first and deliberately small, so the people you meet are the people who do the work.</p>
        </div>
        <Link to="/contact" className="pill mt-10">
          Talk to the studio
        </Link>
      </section>
      <Vision />
      <Team />
    </>
  );
}
