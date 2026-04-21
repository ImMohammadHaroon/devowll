import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  CalendarRange,
  CircleDot,
  Code2,
  Globe2,
  Layers3,
  Lightbulb,
  Megaphone,
  Palette,
  Star,
} from 'lucide-react';
import Button from '../components/common/Button';
import Seo from '../components/common/Seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

const filters = ['All', 'Web Dev', 'E-Commerce', 'Design', 'Marketing'];

const programs = [
  {
    category: 'Web Dev',
    icon: Code2,
    title: 'Web Development',
    duration: '4 or 8 weeks',
    mode: 'Remote',
    spots: '12 spots open',
    description:
      'Build modern web experiences with structured tasks, practical reviews, and project work that mirrors how real product teams operate.',
    level: 'Beginner to Intermediate',
  },
  {
    category: 'E-Commerce',
    icon: Globe2,
    title: 'E-Commerce Development',
    duration: '4 weeks',
    mode: 'Online',
    spots: '8 spots open',
    description:
      'Learn how commerce websites are structured, how product flows work, and how to ship storefront experiences that support sales.',
    level: 'Beginner',
  },
  {
    category: 'Design',
    icon: Palette,
    title: 'UI/UX Design',
    duration: '4 weeks',
    mode: 'Remote',
    spots: '10 spots open',
    description:
      'Practice user flows, wireframes, and interface thinking while building a design foundation that translates into clear product experiences.',
    level: 'Beginner',
  },
  {
    category: 'Marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    duration: '4 weeks',
    mode: 'Online',
    spots: '6 spots open',
    description:
      'Explore digital campaign basics, audience thinking, and growth workflows that help interns understand practical marketing delivery.',
    level: 'Beginner',
  },
  {
    category: 'Web Dev',
    icon: Layers3,
    title: 'React.js Advanced',
    duration: '8 weeks',
    mode: 'Remote',
    spots: '5 spots open',
    description:
      'Go deeper into component architecture, state handling, and project structure so you can confidently build more advanced applications.',
    level: 'Intermediate',
  },
  {
    category: 'Web Dev',
    icon: BookOpenText,
    title: 'WordPress Development',
    duration: '4 weeks',
    mode: 'Online',
    spots: '9 spots open',
    description:
      'Learn how to assemble and manage content-driven websites with WordPress while understanding practical theme and page workflows.',
    level: 'Beginner',
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Official Certificate',
    text: 'Receive a branded completion certificate after finishing the program.',
  },
  {
    icon: Star,
    title: 'LinkedIn Mention',
    text: 'Get recognized for your effort and add credibility to your profile.',
  },
  {
    icon: Lightbulb,
    title: 'Portfolio Project',
    text: 'Leave with work you can show and discuss in interviews.',
  },
  {
    icon: CalendarRange,
    title: 'Weekly Mentorship',
    text: 'Stay on track with structured guidance and consistent support.',
  },
];

const timeline = [
  {
    week: 'Week 1',
    title: 'Orientation & Tools Setup',
    text: 'Join the cohort, set up your tools, and understand the internship workflow.',
  },
  {
    week: 'Week 2-3',
    title: 'Core Tasks & Project Building',
    text: 'Work through tasks, get feedback, and build the core project deliverables.',
  },
  {
    week: 'Week 4',
    title: 'Final Submission & Review',
    text: 'Submit your work, review outcomes, and prepare your final presentation.',
  },
  {
    week: 'Completion',
    title: 'Certificate Issued',
    text: 'Complete the track and receive your official Devowll certificate.',
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

export default function Internships() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visiblePrograms = useMemo(
    () => (activeFilter === 'All' ? programs : programs.filter((program) => program.category === activeFilter)),
    [activeFilter],
  );

  return (
    <>
      <Seo
        title="Remote Internship Programs"
        description="Explore Devowll remote internship programs, compare tracks, and learn through real tasks, mentorship, and certificate-backed completion."
        path="/internships"
        keywords="Devowll, remote internship, remote internship programs, online internship, internship tracks"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Remote Internship Programs</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Remote Internship Programs</h1>
            <p className="mt-5 text-lg leading-8 text-muted">Join a remote program, complete real tasks, and earn your certificate.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-16 sm:py-20">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visiblePrograms.map((program) => {
              const Icon = program.icon;
              return (
                <motion.article
                  key={program.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                      <Icon size={24} />
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{program.duration}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{program.mode}</span>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{program.spots}</span>
                    </div>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-dark">{program.title}</h2>
                  <p className="mt-2 text-sm font-semibold text-primary">{program.level}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{program.description}</p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Button to="/apply" className="rounded-lg px-5 py-3">
                      Apply Now
                    </Button>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{program.category}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">What You Get</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Support, proof, and progress built into the program.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Internship Timeline</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">A clear path through the program.</h2>
          </div>

          <div className="mt-10 space-y-6">
            {timeline.map((step, index) => (
              <div key={step.title} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="flex items-start gap-4 md:justify-end md:text-right">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary ring-8 ring-violet-100" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{step.week}</p>
                    {index < timeline.length - 1 ? (
                      <div className="ml-[7px] mt-4 hidden h-full w-px bg-slate-200 md:block" />
                    ) : null}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Certificate Preview</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Your completion certificate.</h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Every intern who completes the program receives an official Devowll certificate.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-3xl rounded-[2rem] border border-dashed border-violet-300 bg-white p-6 shadow-xl">
              <div className="flex min-h-[280px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-violet-50 via-white to-slate-50 text-center">
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-primary shadow-sm">
                    <CircleDot size={34} />
                  </div>
                  <p className="mt-5 text-lg font-semibold text-dark">Certificate Mockup Frame</p>
                  <p className="mt-2 text-sm leading-6 text-muted">Use this space for the certificate preview image placeholder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Need help choosing a track?</h2>
          </div>
          <Button to="/contact" className="bg-white text-primary hover:bg-slate-100">
            Contact Us <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </Section>
    </>
  );
}