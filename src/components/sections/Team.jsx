import { team } from '../../data/site';
import ArtPanel from '../visual/ArtPanel';

const palettes = [
  ['#1a140c', '#f2c14e', '#f4f4f1'],
  ['#101820', '#9ad7ff', '#f4f4f1'],
  ['#1c1020', '#e2b6ff', '#d6ff4a'],
  ['#10211c', '#8ef0c4', '#f4f4f1'],
];

export default function Team() {
  return (
    <section className="border-t border-white/10">
      <div className="container-page py-20 md:py-28">
        <p className="label">The studio</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl tracking-[-0.045em] sm:text-6xl">A small team that stays on the work.</h2>
          <p className="max-w-sm text-mist">Design, engineering, and the partnership around them. No handoff into a nameless queue.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {team.map((person, index) => (
            <article key={person.name} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-panel">
              <ArtPanel colors={palettes[index]} className="h-40" />
              <div className="p-6">
                <h3 className="text-xl">{person.name}</h3>
                <p className="mt-1 text-sm text-white/50">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-mist">{person.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
