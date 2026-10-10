import Reveal from '../common/Reveal';

export default function Vision() {
  return (
    <section className="border-t border-white/10">
      <div className="container-page py-20 md:py-32">
        <Reveal>
          <p className="label">Mohammad Haroon — Founder</p>
          <p className="label mt-10">Our vision</p>
          <h2 className="mt-6 max-w-5xl font-serif text-[clamp(2.2rem,5vw,4.6rem)] italic leading-[1.12] tracking-[-0.03em]">
            The work should amplify the people using it — not add another system they have to survive.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-mist">
            We pair a clear interface with engineering that holds up after launch. The result is not a demo. It is something your team can keep shipping.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
