import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="section-pad">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge>Tech Education & Internships</Badge>
          <h1 className="mt-5 max-w-2xl text-5xl font-bold tracking-tight text-dark sm:text-6xl">
            Learn. Build. Launch. with a path made for modern tech careers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Devowll helps learners move from fundamentals to portfolio-ready work through guided learning, real projects, and internship opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/apply">Start Your Application <ArrowRight className="ml-2" size={16} /></Button>
            <Button to="/internships" variant="outline">Explore Internships</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
            {['Mentored learning', 'Portfolio projects', 'Career support'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <CheckCircle2 size={16} className="text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-6 text-white sm:col-span-2">
              <p className="text-sm text-slate-300">Average learning track</p>
              <p className="mt-2 text-4xl font-bold">12 weeks</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Structured roadmap from foundation to internship readiness.</p>
            </div>
            <div className="rounded-3xl bg-violet-50 p-6">
              <p className="text-sm font-medium text-muted">Live mentors</p>
              <p className="mt-2 text-3xl font-bold text-dark">24/7</p>
            </div>
            <div className="rounded-3xl bg-sky-50 p-6">
              <p className="text-sm font-medium text-muted">Projects shipped</p>
              <p className="mt-2 text-3xl font-bold text-dark">100+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}