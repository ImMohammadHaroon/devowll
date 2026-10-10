import { Link } from 'react-router-dom';
import ArtPanel from '../visual/ArtPanel';

export default function Spotlight() {
  return (
    <section className="border-t border-white/10">
      <div className="container-page grid gap-8 py-20 md:grid-cols-2 md:items-center md:py-28">
        <ArtPanel
          colors={['#10140c', '#d6ff4a', '#7dffb3']}
          label="2 min read"
          className="h-72 rounded-[1.6rem] md:h-[420px]"
        />
        <div>
          <p className="label">Craft</p>
          <h2 className="mt-4 text-4xl tracking-[-0.045em] sm:text-6xl">Intelligence, only where it earns the interface.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-mist">
            Exploring the line between a person’s judgment and a system that can take the repetitive pass.
          </p>
          <Link to="/insights/where-automation-helps" className="pill mt-8">
            Read the note
          </Link>
        </div>
      </div>
    </section>
  );
}
