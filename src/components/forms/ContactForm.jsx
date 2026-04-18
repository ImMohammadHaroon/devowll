import Button from '../common/Button';

export default function ContactForm() {
  return (
    <form className="glass-card grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Your name" />
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Email address" type="email" />
      </div>
      <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Subject" />
      <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="How can we help?"></textarea>
      <Button type="submit">Send Message</Button>
    </form>
  );
}