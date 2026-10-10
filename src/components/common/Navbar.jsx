import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { nav, site } from '../../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className="container-page flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-[-0.04em]" aria-label={`${site.name} home`}>
          {site.mark}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.label} to={item.to} className="text-sm text-white/70 transition hover:text-cream">
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="pill">
            Start a build
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.label} to={item.to} className="py-3 text-2xl tracking-[-0.04em]">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="pill mt-4 w-fit">
              Start a build
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
