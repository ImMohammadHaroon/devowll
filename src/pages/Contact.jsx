import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Linkedin, MapPin, Mail, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Seo from '../components/common/Seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.55, ease: 'easeOut' };

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

const contactCards = [
  { icon: Mail, label: 'Email', value: 'info@devowll.com', color: 'text-primary bg-violet-50' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 XXX XXXXXXX', color: 'text-emerald-600 bg-emerald-50' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/company/devowll', color: 'text-blue-600 bg-blue-50' },
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', color: 'text-red-600 bg-red-50' },
];

const subjectOptions = ['General Inquiry', 'Internship Question', 'Partnership', 'Other'];

const initialForm = {
  fullName: '',
  emailAddress: '',
  subject: '',
  message: '',
};

const initialErrors = {
  fullName: '',
  emailAddress: '',
  subject: '',
  message: '',
};

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

function validate(values) {
  const errors = { ...initialErrors };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!values.emailAddress.trim()) errors.emailAddress = 'Email address is required.';
  else if (!emailPattern.test(values.emailAddress)) errors.emailAddress = 'Enter a valid email address.';
  if (!values.subject) errors.subject = 'Please select a subject.';
  if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';

  return errors;
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean);
}

function Label({ htmlFor, children, required = false }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-dark">
      {children}
      {required ? <span className="ml-1 text-primary">*</span> : null}
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const visibleErrors = useMemo(() => {
    const current = validate(form);
    const merged = { ...errors };

    Object.keys(current).forEach((key) => {
      if (touched[key] || isSubmitted) {
        merged[key] = current[key];
      }
    });

    return merged;
  }, [errors, form, isSubmitted, touched]);

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitError('');
  }

  function handleBlur(name) {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validate(form)[name] }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError('');

    const nextTouched = Object.keys(initialForm).reduce((accumulator, key) => {
      accumulator[key] = true;
      return accumulator;
    }, {});
    setTouched(nextTouched);

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      full_name: form.fullName,
      email: form.emailAddress,
      subject: form.subject,
      message: form.message,
    };

    try {
      const configured = !emailjsConfig.serviceId.startsWith('YOUR_') && !emailjsConfig.templateId.startsWith('YOUR_') && !emailjsConfig.publicKey.startsWith('YOUR_');

      if (configured) {
        await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams, {
          publicKey: emailjsConfig.publicKey,
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError('We could not send your message right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <Card className="mx-auto max-w-xl border border-emerald-200 bg-emerald-50 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle size={36} />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-dark">Message sent!</h1>
            <p className="mt-3 text-lg leading-8 text-slate-700">We will reply within 24 hours.</p>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Seo
        title="Contact Devowll"
        description="Contact Devowll for remote internship questions, partnerships, and general inquiries."
        path="/contact"
        keywords="Devowll, remote internship, contact Devowll, internship support, partnerships"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Contact Us</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Get in touch with Devowll</h1>
            <p className="mt-5 text-lg leading-8 text-muted">We are here to answer questions about internships, programs, and partnerships.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-12 sm:py-16">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-dark">{item.value}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container-page py-10 sm:py-14">
          <div className="mx-auto max-w-[600px]">
            <Card className="border border-slate-200 bg-white shadow-sm">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-dark">Send us a message</h2>
                <p className="mt-2 text-sm text-muted">We usually respond within one business day.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="grid gap-5">
                <div>
                  <Label htmlFor="fullName" required>Full Name</Label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                    onBlur={() => handleBlur('fullName')}
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                  {visibleErrors.fullName ? <p className="mt-2 text-sm text-red-600">{visibleErrors.fullName}</p> : null}
                </div>

                <div>
                  <Label htmlFor="emailAddress" required>Email Address</Label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    value={form.emailAddress}
                    onChange={(event) => updateField('emailAddress', event.target.value)}
                    onBlur={() => handleBlur('emailAddress')}
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                  {visibleErrors.emailAddress ? <p className="mt-2 text-sm text-red-600">{visibleErrors.emailAddress}</p> : null}
                </div>

                <div>
                  <Label htmlFor="subject" required>Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={(event) => updateField('subject', event.target.value)}
                    onBlur={() => handleBlur('subject')}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {visibleErrors.subject ? <p className="mt-2 text-sm text-red-600">{visibleErrors.subject}</p> : null}
                </div>

                <div>
                  <Label htmlFor="message" required>Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    onBlur={() => handleBlur('message')}
                    required
                    minLength={20}
                    placeholder="Tell us how we can help you."
                    className="min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                  <div className="mt-2 flex items-center justify-between gap-4 text-xs">
                    <p className={reasonCountText(form.message.length)}>{form.message.length} / 20 characters</p>
                    <p className="text-muted">Minimum 20 characters.</p>
                  </div>
                  {visibleErrors.message ? <p className="mt-2 text-sm text-red-600">{visibleErrors.message}</p> : null}
                </div>

                {submitError ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p> : null}

                <Button type="submit" className="w-full rounded-lg bg-primary px-6 py-4 text-base text-white hover:bg-violet-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={16} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-4 sm:py-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-sm">
            <iframe
              title="Devowll Lahore Map"
              src="https://www.google.com/maps?q=Lahore,%20Pakistan&output=embed"
              className="h-[350px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function reasonCountText(length) {
  return length >= 20 ? 'text-emerald-600 font-medium' : 'text-muted';
}