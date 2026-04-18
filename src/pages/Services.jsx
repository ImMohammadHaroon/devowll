import { motion } from 'framer-motion';
import {
  Code2,
  Globe2,
  Megaphone,
  PenTool,
  ShoppingCart,
  MonitorSmartphone,
  ArrowRight,
} from 'lucide-react';
import Button from '../components/common/Button';
import Seo from '../components/common/Seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    duration: '4 or 8 weeks',
    level: 'Beginner to Intermediate',
    levelClass: 'bg-violet-50 text-primary',
    description:
      'Build responsive websites and learn how frontend pieces connect with real product workflows. You will work on layouts, components, and practical delivery habits that mirror team environments.',
    learn: ['HTML, CSS, and modern layouts', 'Reusable React components', 'Responsive design patterns', 'Project deployment basics'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    duration: '4 weeks',
    level: 'Beginner',
    levelClass: 'bg-sky-50 text-sky-700',
    description:
      'Learn how online storefronts are structured and how product pages, carts, and checkout flows are assembled. The track focuses on the core building blocks behind conversion-ready commerce sites.',
    learn: ['Storefront structure', 'Product listing pages', 'Cart and checkout UI', 'Commerce workflow thinking'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    duration: '4 weeks',
    level: 'Beginner',
    levelClass: 'bg-emerald-50 text-emerald-700',
    description:
      'Explore user-centered design, wireframes, and interface thinking with an emphasis on clarity and usability. You will practice turning ideas into layouts that are easy to understand and simple to use.',
    learn: ['Wireframes and user flows', 'Interface hierarchy', 'Design systems basics', 'Prototype presentation'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    duration: '4 weeks',
    level: 'Beginner',
    levelClass: 'bg-amber-50 text-amber-700',
    description:
      'Understand how digital campaigns work across channels and how teams create awareness, leads, and engagement. This service helps you connect growth strategy with practical execution.',
    learn: ['Campaign fundamentals', 'Audience and channel planning', 'Content and messaging basics', 'Performance tracking'],
  },
  {
    icon: Code2,
    title: 'React.js Advanced',
    duration: '8 weeks',
    level: 'Intermediate',
    levelClass: 'bg-fuchsia-50 text-fuchsia-700',
    description:
      'Deepen your React skills with component architecture, state management patterns, and advanced product thinking. The track is designed for learners who are ready to build more complex interfaces and ship stronger work.',
    learn: ['Component composition', 'State and data flow', 'Routing and page structure', 'Project scalability practices'],
  },
  {
    icon: Globe2,
    title: 'WordPress Development',
    duration: '4 weeks',
    level: 'Beginner',
    levelClass: 'bg-indigo-50 text-indigo-700',
    description:
      'Learn how to build and manage websites with WordPress while understanding the practical side of content-driven development. You will work through themes, structure, and efficient site setup.',
    learn: ['WordPress setup and admin', 'Theme customization', 'Pages and content management', 'Basic site maintenance'],
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

export default function Services() {
  return (
    <>
      <Seo
        title="Our Internship Services"
        description="Explore Devowll internship services including web development, e-commerce, UI/UX design, digital marketing, React.js advanced, and WordPress development."
        path="/services"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">What We Offer</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Our Internship Services</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Real programs. Real projects. Real experience.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                      <Icon size={26} />
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{service.duration}</span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${service.levelClass}`}>{service.level}</span>
                    </div>
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-dark">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-dark">What interns learn</p>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                      {service.learn.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Button to="/apply" className="rounded-lg px-5 py-3">
                      Apply Now
                    </Button>
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary">
                      Track Details
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-slate-900 px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Need help deciding?</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Not sure which track to choose?</h2>
            </div>
            <Button to="/contact" className="bg-white text-primary hover:bg-slate-100">
              Contact Us <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}