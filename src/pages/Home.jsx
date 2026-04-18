import { motion } from 'framer-motion';
import {
  ArrowRight,
  MonitorSmartphone,
  PenTool,
  ShoppingCart,
  Star,
  Megaphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Seo from '../components/common/Seo';
import { LampContainer } from '../components/ui/lamp';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

const stats = [
  { value: '50+', label: 'Interns Trained' },
  { value: '6+', label: 'Tracks' },
  { value: '100%', label: 'Certificate' },
  { value: '4.9★', label: 'Rating' },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    text: 'Learn modern frontend and backend workflows while building responsive, production-style applications.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    text: 'Explore commerce-focused builds, conversion flows, and the product thinking behind online selling.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    text: 'Design user journeys, craft interfaces, and learn how to present polished product experiences.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    text: 'Understand growth channels, campaign basics, and how digital teams build awareness and traction.',
  },
];

const steps = [
  {
    title: 'Apply',
    text: 'Submit your profile and tell us where you want to grow.',
  },
  {
    title: 'Get Accepted',
    text: 'We review your application and match you with the right track.',
  },
  {
    title: 'Complete Tasks',
    text: 'Work through guided assignments, projects, and feedback cycles.',
  },
  {
    title: 'Get Certificate',
    text: 'Finish the track and receive proof of completion for your portfolio.',
  },
];

const testimonials = [
  {
    name: 'Aarav Mehta',
    track: 'Web Development Intern',
    rating: 5,
    review:
      'The internship track gave me real project experience and the confidence to talk about my work in interviews.',
  },
  {
    name: 'Sara Khan',
    track: 'UI/UX Design Learner',
    rating: 5,
    review:
      'I liked that the process was practical. Every task pushed me closer to something I could actually show.',
  },
  {
    name: 'Rohan Das',
    track: 'Digital Marketing Trainee',
    rating: 5,
    review:
      'Devowll made the path simple to follow. The structure helped me stay consistent and finish strong.',
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

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Devowll helps learners learn, build, and launch through internship programs, practical projects, and mentorship."
        path="/"
      />
      <section className="relative overflow-hidden">
        <LampContainer className="min-h-[92vh] rounded-none bg-slate-900">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
            <p className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Devowll
            </p>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              className="mt-8 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl"
            >
              Learn. Build. Launch.
            </motion.h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Gain real-world tech experience through internship programs, guided projects, and a clear path to certification.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/apply" className="rounded-full bg-cyan-400 px-6 py-3 text-slate-950 hover:bg-cyan-300">
                Apply for Internship
              </Button>
              <Button to="/services" variant="outline" className="rounded-full border-white/30 bg-white/5 px-6 py-3 text-white hover:border-white/50 hover:bg-white/10 hover:text-white">
                Explore Programs
              </Button>
            </div>
          </div>
        </LampContainer>
      </section>

      <Section className="border-b border-slate-200 bg-white">
        <div className="container-page grid gap-4 py-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">What We Offer</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Services Preview</h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Choose a track that fits your goals and build toward real work, not just theory.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-dark">{service.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-muted">{service.text}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-violet-700">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">A clear path from application to certificate.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6">
                {index < steps.length - 1 ? (
                  <div className="absolute right-[-18px] top-12 hidden h-px w-9 bg-slate-300 lg:block" />
                ) : null}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Learners who joined the journey.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-primary">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.track}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-700">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your tech career?</h2>
          </div>
          <Button to="/apply" className="rounded-full bg-white px-6 py-3 text-primary hover:bg-slate-100">
            Apply Now
          </Button>
        </div>
      </Section>
    </>
  );
}