import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Seo from '../components/common/Seo';

const faqs = [
  {
    question: 'Is the internship paid?',
    answer:
      'Currently unpaid. Interns receive an official certificate, portfolio project, and LinkedIn recognition.',
  },
  {
    question: 'Is it online or in-person?',
    answer:
      'Fully remote. All tasks and communication happen online via WhatsApp and Google Meet.',
  },
  {
    question: 'How long is the internship?',
    answer: '4 or 8 weeks depending on the track chosen.',
  },
  {
    question: 'What do I need to apply?',
    answer: 'Basic computer knowledge. No prior experience needed for beginner tracks.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes. An official Devowll certificate is issued upon successful task completion.',
  },
  {
    question: 'Can I list this on LinkedIn?',
    answer: 'Absolutely. We encourage every intern to share their certificate on LinkedIn.',
  },
  {
    question: 'How many hours per week?',
    answer: 'Approximately 10-15 hours per week with a flexible schedule.',
  },
  {
    question: 'What tasks will I work on?',
    answer: 'Real mini-projects relevant to your chosen internship track.',
  },
  {
    question: 'How do I verify a certificate?',
    answer: 'Visit devowll.com/verify-certificate and enter your unique certificate ID.',
  },
  {
    question: 'Can I apply for multiple tracks?',
    answer: 'No. Please choose one track per application cycle.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Seo
        title="Remote Internship FAQ"
        description="Find answers to common questions about Devowll remote internship programs, certificates, schedules, and verification."
        path="/faq"
        keywords="Devowll, remote internship, internship FAQ, certificate verification, remote internship questions"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-5 text-lg leading-8 text-muted">Everything you need to know about our internship programs.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-14 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-label={isOpen ? `Collapse ${item.question}` : `Expand ${item.question}`}
                  className={`w-full rounded-3xl border bg-white p-0 text-left transition-all duration-300 ${
                    isOpen ? 'border-primary shadow-lg' : 'border-slate-200 shadow-sm'
                  }`}
                >
                  <div className={`flex items-center justify-between gap-4 border-l-4 px-6 py-5 sm:px-7 ${isOpen ? 'border-primary' : 'border-transparent'}`}>
                    <h2 className={`text-lg font-bold sm:text-xl ${isOpen ? 'text-primary' : 'text-dark'}`}>{item.question}</h2>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${isOpen ? 'border-primary text-primary' : 'border-slate-200 text-slate-600'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </div>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 sm:px-7">
                        <p className="text-sm leading-7 text-muted">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-16 sm:py-20">
          <Card className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark">Still have questions?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Our team can help you choose the right track and explain the process.</p>
            </div>
            <Button to="/contact" className="rounded-lg bg-primary px-6 py-3 text-base text-white hover:bg-violet-700">
              Contact Us
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}