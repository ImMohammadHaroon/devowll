import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { saveNote } from '../../lib/notes';

const columns = [
  {
    title: 'Studio',
    links: [
      { label: 'Work', to: '/work' },
      { label: 'Services', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Insights', to: '/insights' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email.');
      return;
    }
    saveNote({ type: 'newsletter', email });
    setDone(true);
    setError('');
    setEmail('');
  }

  return (
    <footer className="border-t border-white/10">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
        <div>
          <p className="label">Studio list</p>
          <h2 className="mt-4 max-w-md text-3xl tracking-[-0.04em] sm:text-4xl">Notes when a build window opens.</h2>
          <form onSubmit={onSubmit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="field"
              required
            />
            <button type="submit" className="pill shrink-0">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-white/50" role="status">
            {done
              ? 'Saved on this device. For a reply now, email hello@devowll.com.'
              : error || 'This list stays in your browser until a sending service is connected.'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="label">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-white/75 transition hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-end sm:justify-between">
        <Link to="/" className="text-5xl tracking-[-0.06em] sm:text-7xl">
          {site.mark}
        </Link>
        <div className="text-sm text-white/50">
          <a className="transition hover:text-cream" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-2">© {new Date().getFullYear()} Devowll. Remote-first studio.</p>
        </div>
      </div>
    </footer>
  );
}
