import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Internships', to: '/internships' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/113160345', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
  { label: 'WhatsApp', href: 'https://www.whatsapp.com', icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3 md:gap-8">
        <div>
          <NavLink to="/" className="font-heading text-3xl font-bold tracking-tight text-white">
            Devowll
          </NavLink>
          <p className="mt-2 text-sm font-medium text-violet-300">Learn. Build. Launch.</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Devowll is a tech education and internship platform helping learners build practical skills, complete real projects, and move forward with confidence.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Quick Links</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Follow Us</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-300">
        © 2026 Devowll. All rights reserved.
      </div>
    </footer>
  );
}