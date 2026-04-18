import Button from '../common/Button';

export default function ApplyForm() {
  return (
    <form className="glass-card grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Full name" />
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Email address" type="email" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="College / Company" />
        <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Area of interest" />
      </div>
      <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-primary" placeholder="Tell us about your goals"></textarea>
      <Button type="submit">Submit Application</Button>
    </form>
  );
}