import Card from '../common/Card';

const stats = [
  { label: 'Learners guided', value: '5k+' },
  { label: 'Internship partners', value: '80+' },
  { label: 'Placement support', value: '1:1' },
  { label: 'Completion rate', value: '94%' },
];

export default function Stats() {
  return (
    <section className="section-pad pt-0">
      <div className="container-page grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}