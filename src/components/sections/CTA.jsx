import Button from '../common/Button';

export default function CTA() {
  return (
    <section className="section-pad pt-0">
      <div className="container-page">
        <div className="rounded-[2rem] bg-slate-900 px-6 py-12 text-center text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Ready to begin?</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Join Devowll and start building your career path.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Apply for an internship, explore services, or get in touch to learn how Devowll can support your next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/apply">Apply Now</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}