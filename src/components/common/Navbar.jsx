import { useEffect, useState } from 'react';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Internships', to: '/internships' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('devowll-theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('devowll-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="font-heading text-2xl font-bold tracking-tight text-primary">
          Devowll
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          >
            Apply Now
          </NavLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-slate-800 dark:text-slate-100"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden dark:border-slate-800 dark:text-slate-100"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-slate-950 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="font-heading text-2xl font-bold tracking-tight text-primary">
              Devowll
            </NavLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 dark:border-slate-800 dark:text-slate-100"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 py-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-50 text-primary dark:bg-slate-800'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              Apply Now
            </NavLink>
            <button
              type="button"
              className="mt-3 inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:text-slate-100"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunMedium className="mr-2" size={16} /> : <MoonStar className="mr-2" size={16} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </aside>
      </div>
    </header>
  );
}