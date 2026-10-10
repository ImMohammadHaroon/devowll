import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { plans, site } from '../data/site';
import { saveNote } from '../lib/notes';

const empty = {
  name: '',
  email: '',
  company: '',
  budget: 'Not sure yet',
  message: '',
};

export default function Contact() {
  const [params] = useSearchParams();
  const plan = params.get('plan');
  const planName = plans.find((item) => item.id === plan)?.name;
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const intro = useMemo(() => {
    if (!planName) return 'Tell us what you want shipped. A short note is enough to start.';
    return `You picked the ${planName} partnership. Tell us what the first release needs to do.`;
  }, [planName]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    if (form.name.trim().length < 2) {
      setError('Add your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Enter a valid email.');
      return;
    }
    if (form.message.trim().length < 12) {
      setError('Add a little more about the work.');
      return;
    }
    saveNote({ type: 'project', plan: planName || '', ...form });
    setDone(true);
    setError('');
  }

  return (
    <>
      <Seo title="Contact" description="Start a build with Devowll." path="/contact" />
      <section className="container-page grid gap-12 pb-20 pt-32 md:grid-cols-2 md:pt-40">
        <div>
          <p className="label">Start a build</p>
          <h1 className="mt-4 text-5xl tracking-[-0.05em] sm:text-6xl">Tell us what should exist next.</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-mist">{intro}</p>
          <a className="mt-8 inline-block text-cream underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>

        {done ? (
          <div className="rounded-[1.6rem] border border-white/10 p-8" role="status">
            <h2 className="text-3xl tracking-[-0.04em]">Note saved.</h2>
            <p className="mt-4 leading-7 text-mist">
              It is stored in this browser. Email {site.email} if you want a reply before a sending service is connected.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input id="name" name="name" value={form.name} onChange={update} className="field mt-2" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} className="field mt-2" autoComplete="email" />
            </div>
            <div>
              <label htmlFor="company" className="label">
                Company
              </label>
              <input id="company" name="company" value={form.company} onChange={update} className="field mt-2" autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="budget" className="label">
                Budget
              </label>
              <select id="budget" name="budget" value={form.budget} onChange={update} className="field mt-2">
                {['Not sure yet', 'Under $5k', '$5k–$15k', '$15k–$40k', '$40k+'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="label">
                What should we build?
              </label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={update} className="field mt-2 resize-y" />
            </div>
            {error ? (
              <p className="text-sm text-lime" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="pill">
              Send the note
            </button>
          </form>
        )}
      </section>
    </>
  );
}
