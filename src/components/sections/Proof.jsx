import Reveal from '../common/Reveal';

const figures = [
  { value: '01', label: 'Design', text: 'Story, interface, and the system around them.' },
  { value: '02', label: 'Build', text: 'Working software your team can keep.' },
  { value: '03', label: 'Automate', text: 'Workflows that remove a repeated hour.' },
];

export default function Proof() {
  return (
    <section className="container-page border-t border-white/10 py-20 md:py-28">
      <Reveal>
        <p className="max-w-3xl text-2xl leading-snug tracking-[-0.03em] text-cream sm:text-4xl">
          A remote studio for teams who want the site, the product, and the workflow handled together.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {figures.map((figure) => (
          <Reveal key={figure.value}>
            <p className="font-serif text-6xl italic tracking-[-0.04em] sm:text-7xl">{figure.value}</p>
            <h2 className="mt-4 text-xl">{figure.label}</h2>
            <p className="mt-2 max-w-xs text-sm leading-6 text-mist">{figure.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
