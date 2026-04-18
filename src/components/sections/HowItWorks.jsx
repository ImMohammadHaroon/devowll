import { BookOpen, Code2, Rocket } from 'lucide-react';
import Card from '../common/Card';

const steps = [
  { icon: BookOpen, title: 'Learn the foundations', text: 'Start with guided lessons, clear milestones, and focused technical foundations.' },
  { icon: Code2, title: 'Build real projects', text: 'Apply what you learn through portfolio-quality projects and collaboration.' },
  { icon: Rocket, title: 'Launch with confidence', text: 'Prepare for internships, interviews, and the next step in your career.' },
];

export default function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">A simple, practical journey from learning to launch.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-500">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}