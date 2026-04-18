import Card from '../common/Card';

const testimonials = [
  {
    quote: 'Devowll helped me move from theory to real product work. The internship guidance made the transition easier.',
    name: 'Aarav Mehta',
    role: 'Frontend Intern',
  },
  {
    quote: 'The structure is clear and practical. I could finally build a portfolio I felt confident sharing.',
    name: 'Sara Khan',
    role: 'Web Development Learner',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Learners trust the process because it feels real.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-dark">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}