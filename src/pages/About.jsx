import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Handshake,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Linkedin,
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Seo from '../components/common/Seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

const values = [
  {
    icon: BookOpen,
    title: 'Practical Learning',
    text: 'We focus on hands-on work that turns concepts into usable skills and portfolio output.',
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    text: 'Learners get support from people who understand the path from study to industry.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'We keep our commitments clear, honest, and centered on learner growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    text: 'Every cohort is built to create measurable improvement in skills and confidence.',
  },
];

const team = [
  {
    name: 'Ayesha Khan',
    role: 'Founder / CEO',
    featured: true,
  },
  {
    name: 'Usman Ali',
    role: 'Program Lead',
  },
  {
    name: 'Hira Shah',
    role: 'Mentorship Coordinator',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Partnerships Manager',
  },
];

function Section({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={sectionTransition}
    >
      {children}
    </motion.section>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="About Devowll"
        description="Learn about Devowll's mission, vision, core values, and the team building remote internship programs."
        path="/about"
        keywords="Devowll, remote internship, about Devowll, internship platform, tech training"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-3xl">
            <Badge className="bg-violet-100 text-primary">Our Story</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-dark sm:text-5xl">About Devowll</h1>
            <p className="mt-5 text-lg leading-8 text-muted">We are building the next generation of tech professionals.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Our Story</p>
              <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Bridging education and industry with a practical path forward.</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted">
                <p>
                  Devowll started with a simple idea: learners should not have to choose between learning theory and getting real experience.
                  We build programs that connect both, so students can work on meaningful projects while developing career-ready confidence.
                </p>
                <p>
                  Our mission is to reduce the gap between education and industry by creating guided internships, hands-on tasks, and structured
                  feedback loops that reflect how modern tech teams actually work.
                </p>
                <p>
                  By focusing on practical outcomes, mentorship, and consistent support, we help learners move from uncertainty to momentum and
                  from momentum to opportunity.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* TODO: Compress any production images before placing them in src/assets/images. */}
              <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-violet-100 via-white to-slate-100 p-4 shadow-xl">
                <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-dashed border-violet-200 bg-white/70 p-8 text-center">
                  <div>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 text-primary shadow-sm">
                      <Sparkles size={34} />
                    </div>
                    <p className="mt-5 text-lg font-semibold text-dark">Image Placeholder</p>
                    <p className="mt-2 text-sm leading-6 text-muted">Add a team or campus image here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-l-4 border-l-primary">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-primary">
                  <Users size={20} />
                </div>
                <h3 className="text-2xl font-bold text-dark">Mission</h3>
              </div>
              <p className="mt-5 text-base leading-8 text-muted">
                Empower students with real skills through practical internships.
              </p>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-primary">
                  <Award size={20} />
                </div>
                <h3 className="text-2xl font-bold text-dark">Vision</h3>
              </div>
              <p className="mt-5 text-base leading-8 text-muted">
                Become the #1 tech internship platform in Pakistan.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Core Values</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">The principles that shape how Devowll works.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-dark">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{value.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Meet the Team</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">The people leading Devowll forward.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <Card
                key={member.name}
                className={`${member.featured ? 'md:col-span-2 xl:col-span-2 xl:row-span-2' : ''} flex flex-col items-start`}
              >
                <div className={`${member.featured ? 'h-24 w-24' : 'h-20 w-20'} flex items-center justify-center rounded-full bg-violet-100 text-primary shadow-sm`}>
                  <span className={`${member.featured ? 'text-2xl' : 'text-xl'} font-bold`}>
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                </div>
                <p className={`${member.featured ? 'mt-6 text-2xl' : 'mt-5 text-xl'} font-bold text-dark`}>{member.name}</p>
                <p className="mt-2 text-sm text-muted">{member.role}</p>
                <a
                  href="https://www.linkedin.com/company/113160345"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-violet-700"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}