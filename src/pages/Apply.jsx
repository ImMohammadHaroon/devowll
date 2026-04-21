import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  CheckCircle,
  Code2,
  Copy,
  Globe2,
  HeartHandshake,
  LayoutGrid,
  Palette,
  Send,
  ShoppingCart,
  Sparkles,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useMutation } from 'convex/react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Seo from '../components/common/Seo';
import { api } from '../../convex/_generated/api';

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

const qualificationOptions = ['Matric', 'Intermediate', "Bachelor's", "Master's", 'Other'];
const trackOptions = ['Web Development', 'E-Commerce', 'UI/UX Design', 'Digital Marketing', 'React.js Advanced', 'WordPress'];
const sourceOptions = ['LinkedIn', 'Friend/Referral', 'Google', 'Instagram', 'Other'];

const infoTracks = [
  { icon: Code2, label: 'Web Development' },
  { icon: ShoppingCart, label: 'E-Commerce' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Sparkles, label: 'Digital Marketing' },
  { icon: LayoutGrid, label: 'React.js Advanced' },
  { icon: Globe2, label: 'WordPress' },
];

const paymentDetails = {
  fee: 'Rs. 300',
  method: 'Easypaisa',
  accountNumber: '03428979314',
  iban: 'PK80TMFB0000000064136073',
  accountName: 'Mohammad Haroon',
};

const initialForm = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  location: '',
  qualification: '',
  track: '',
  reason: '',
  source: '',
  linkedinUrl: '',
  portfolioUrl: '',
  paymentScreenshot: null,
  termsAccepted: false,
};

const initialErrors = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  location: '',
  qualification: '',
  track: '',
  reason: '',
  source: '',
  linkedinUrl: '',
  portfolioUrl: '',
  paymentScreenshot: '',
  termsAccepted: '',
};

function Section({ children, className = '' }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
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
  const urlPattern = /^https?:\/\/.+/i;

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!values.emailAddress.trim()) errors.emailAddress = 'Email address is required.';
  else if (!emailPattern.test(values.emailAddress)) errors.emailAddress = 'Enter a valid email address.';

  const digits = values.phoneNumber.replace(/\D/g, '');
  if (!values.phoneNumber.trim()) errors.phoneNumber = 'Phone number is required.';
  else if (digits.length < 10) errors.phoneNumber = 'Phone number must contain at least 10 digits.';

  if (!values.location.trim()) errors.location = 'City / Location is required.';
  if (!values.qualification) errors.qualification = 'Please select your educational qualification.';
  if (!values.track) errors.track = 'Please select an internship track.';
  if (values.reason.trim().length < 50) errors.reason = 'Please write at least 50 characters.';

  if (values.linkedinUrl && !urlPattern.test(values.linkedinUrl)) errors.linkedinUrl = 'Enter a valid URL starting with https:// or http://.';
  if (values.portfolioUrl && !urlPattern.test(values.portfolioUrl)) errors.portfolioUrl = 'Enter a valid URL starting with https:// or http://.';
  if (!values.termsAccepted) errors.termsAccepted = 'You must accept the terms and conditions.';

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

export default function Apply() {
  const generateUploadUrl = useMutation(api.image.generateUploadUrl);
  const saveImage = useMutation(api.image.saveImage);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedField, setCopiedField] = useState('');

  const reasonCount = form.reason.length;
  const [paymentFileName, setPaymentFileName] = useState('');

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

  function handlePaymentFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setPaymentFileName(file.name);
      updateField('paymentScreenshot', file);
    }
  }

  function handleCopyToClipboard(text, fieldName) {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
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

    let paymentScreenshotUrl = 'Not provided';

    try {
      if (form.paymentScreenshot) {
        const uploadUrl = await generateUploadUrl({});
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          headers: {
            'Content-Type': form.paymentScreenshot.type,
          },
          body: form.paymentScreenshot,
        });

        if (!uploadResponse.ok) {
          throw new Error('Unable to upload payment screenshot.');
        }

        const uploadResult = await uploadResponse.json();
        const savedImage = await saveImage({
          storageId: uploadResult.storageId,
          fileName: form.paymentScreenshot.name,
          contentType: form.paymentScreenshot.type || undefined,
        });

        paymentScreenshotUrl = savedImage.url || 'Not provided';
      }

      const templateParams = {
        full_name: form.fullName,
        email: form.emailAddress,
        phone_number: form.phoneNumber,
        location: form.location,
        qualification: form.qualification,
        track: form.track,
        reason: form.reason,
        source: form.source || 'Not specified',
        linkedin_url: form.linkedinUrl || 'Not provided',
        portfolio_url: form.portfolioUrl || 'Not provided',
        payment_screenshot_url: paymentScreenshotUrl,
        payment_screenshot: paymentScreenshotUrl,
        terms_accepted: form.termsAccepted ? 'Yes' : 'No',
      };

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
      setSubmitError('We could not submit your application right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <Card className="mx-auto max-w-2xl border border-emerald-200 bg-emerald-50 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle size={36} />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-dark">Application Submitted!</h1>
            <p className="mt-3 text-lg leading-8 text-slate-700">We will contact you within 48 hours.</p>
          </Card>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Seo
        title="Apply for a Remote Internship"
        description="Apply for a Devowll remote internship by completing the full application form and choosing your preferred track."
        path="/apply"
        keywords="Devowll, remote internship, apply for remote internship, internship application, online internship"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Apply for a Remote Internship</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Apply for a Remote Internship</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Complete the form and our team will review your application for the right Devowll internship track.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <Card className="bg-slate-900 text-white shadow-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Apply for an Internship</p>
                <p className="mt-4 text-2xl font-bold">Join a track that fits your goals.</p>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Benefits</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {['Certificate', 'Remote', 'Flexible Hours', 'Real Projects'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <BadgeCheck className="text-violet-300" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Tracks</p>
                  <div className="mt-4 grid gap-3">
                    {infoTracks.map((track) => {
                      const Icon = track.icon;
                      return (
                        <div key={track.label} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                          <Icon size={18} className="text-violet-300" />
                          <span className="text-sm font-medium text-slate-100">{track.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-white">
                  Questions? Contact us <HeartHandshake size={16} />
                </Link>
              </Card>
            </aside>

            <div>
              <Card className="border border-slate-200 bg-white shadow-sm">
                <form onSubmit={handleSubmit} noValidate className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
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
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phoneNumber" required>Phone Number</Label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(event) => updateField('phoneNumber', event.target.value)}
                        onBlur={() => handleBlur('phoneNumber')}
                        type="tel"
                        required
                        placeholder="03xx xxxxxxx"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      <p className="mt-2 text-xs text-muted">WhatsApp preferred.</p>
                      {visibleErrors.phoneNumber ? <p className="mt-2 text-sm text-red-600">{visibleErrors.phoneNumber}</p> : null}
                    </div>

                    <div>
                      <Label htmlFor="location" required>City / Location</Label>
                      <input
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={(event) => updateField('location', event.target.value)}
                        onBlur={() => handleBlur('location')}
                        type="text"
                        required
                        placeholder="e.g. Lahore"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      {visibleErrors.location ? <p className="mt-2 text-sm text-red-600">{visibleErrors.location}</p> : null}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <Label htmlFor="qualification" required>Educational Qualification</Label>
                      <select
                        id="qualification"
                        name="qualification"
                        value={form.qualification}
                        onChange={(event) => updateField('qualification', event.target.value)}
                        onBlur={() => handleBlur('qualification')}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                      >
                        <option value="">Select your qualification</option>
                        {qualificationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {visibleErrors.qualification ? <p className="mt-2 text-sm text-red-600">{visibleErrors.qualification}</p> : null}
                    </div>

                    <div>
                      <Label htmlFor="track" required>Internship Track</Label>
                      <select
                        id="track"
                        name="track"
                        value={form.track}
                        onChange={(event) => updateField('track', event.target.value)}
                        onBlur={() => handleBlur('track')}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                      >
                        <option value="">Select internship track</option>
                        {trackOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {visibleErrors.track ? <p className="mt-2 text-sm text-red-600">{visibleErrors.track}</p> : null}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <Label htmlFor="reason" required>Why do you want to join?</Label>
                      <p className={`text-xs font-medium ${reasonCount < 50 ? 'text-muted' : 'text-emerald-600'}`}>
                        {reasonCount} / 50 characters
                      </p>
                    </div>
                    <textarea
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={(event) => updateField('reason', event.target.value)}
                      onBlur={() => handleBlur('reason')}
                      required
                      minLength={50}
                      placeholder="Tell us what you want to learn, build, and improve during the internship."
                      className="min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                    />
                    {visibleErrors.reason ? <p className="mt-2 text-sm text-red-600">{visibleErrors.reason}</p> : null}
                  </div>

                  <div>
                    <Label htmlFor="source">How did you hear about us?</Label>
                    <select
                      id="source"
                      name="source"
                      value={form.source}
                      onChange={(event) => updateField('source', event.target.value)}
                      onBlur={() => handleBlur('source')}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition-colors focus:border-primary"
                    >
                      <option value="">Select an option</option>
                      {sourceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {visibleErrors.source ? <p className="mt-2 text-sm text-red-600">{visibleErrors.source}</p> : null}
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
                      <input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        value={form.linkedinUrl}
                        onChange={(event) => updateField('linkedinUrl', event.target.value)}
                        onBlur={() => handleBlur('linkedinUrl')}
                        type="url"
                        placeholder="https://linkedin.com/in/your-profile"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      {visibleErrors.linkedinUrl ? <p className="mt-2 text-sm text-red-600">{visibleErrors.linkedinUrl}</p> : null}
                    </div>

                    <div>
                      <Label htmlFor="portfolioUrl">Portfolio / GitHub URL</Label>
                      <input
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={form.portfolioUrl}
                        onChange={(event) => updateField('portfolioUrl', event.target.value)}
                        onBlur={() => handleBlur('portfolioUrl')}
                        type="url"
                        placeholder="https://github.com/your-profile"
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                      />
                      {visibleErrors.portfolioUrl ? <p className="mt-2 text-sm text-red-600">{visibleErrors.portfolioUrl}</p> : null}
                    </div>
                  </div>

                  <div className="rounded-3xl border-2 border-cyan-200 bg-cyan-50 p-6 text-[#0f172a]" style={{ backgroundColor: '#ecfeff' }}>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white text-sm font-bold">₨</div>
                      <div>
                        <p className="font-bold text-[#0f172a]">Enrollment Fee Required</p>
                        <p className="text-sm text-[#475569]">Pay {paymentDetails.fee} using Easypaisa</p>
                      </div>
                    </div>
                    <div
                      className="space-y-3 rounded-2xl p-4 text-sm text-[#0f172a] shadow-sm ring-1 ring-cyan-100"
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[#475569]">Account Number:</span>
                          <p className="font-mono font-semibold text-[#0f172a]">{paymentDetails.accountNumber}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(paymentDetails.accountNumber, 'accountNumber')}
                          className="ml-2 flex shrink-0 items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-[#334155] transition-colors hover:bg-slate-200"
                        >
                          <Copy size={14} />
                          {copiedField === 'accountNumber' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[#475569]">IBAN:</span>
                          <p className="font-mono font-semibold text-[#0f172a]">{paymentDetails.iban}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(paymentDetails.iban, 'iban')}
                          className="ml-2 flex shrink-0 items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-[#334155] transition-colors hover:bg-slate-200"
                        >
                          <Copy size={14} />
                          {copiedField === 'iban' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[#475569]">Account Name:</span>
                          <p className="font-semibold text-[#0f172a]">{paymentDetails.accountName}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(paymentDetails.accountName, 'accountName')}
                          className="ml-2 flex shrink-0 items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-[#334155] transition-colors hover:bg-slate-200"
                        >
                          <Copy size={14} />
                          {copiedField === 'accountName' ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-[#334155]">After payment, upload the transaction receipt below. This payment will automatically be returned to your account within 48 hours. We'll verify and contact you on {form.phoneNumber || 'your phone number'} within 24 hours.</p>
                  </div>

                  <div>
                    <Label htmlFor="paymentScreenshot" required>Payment Receipt / Screenshot</Label>
                    <div className="relative">
                      <input
                        id="paymentScreenshot"
                        name="paymentScreenshot"
                        onChange={handlePaymentFileChange}
                        onBlur={() => handleBlur('paymentScreenshot')}
                        type="file"
                        accept="image/*,.pdf"
                        required
                        className="hidden"
                      />
                      <label htmlFor="paymentScreenshot" className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 px-6 py-8 transition-colors hover:border-primary hover:bg-slate-50">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">{paymentFileName || 'Click to upload receipt'}</p>
                            <p className="text-xs text-muted">PNG, JPG, or PDF (Max 10MB)</p>
                          </div>
                        </div>
                      </label>
                    </div>
                    {visibleErrors.paymentScreenshot ? <p className="mt-2 text-sm text-red-600">{visibleErrors.paymentScreenshot}</p> : null}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 px-4 py-4">
                      <input
                        name="termsAccepted"
                        checked={form.termsAccepted}
                        onChange={(event) => updateField('termsAccepted', event.target.checked)}
                        onBlur={() => handleBlur('termsAccepted')}
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm leading-6 text-slate-700">
                        I accept the terms and conditions for applying to Devowll internship programs.
                      </span>
                    </label>
                    {visibleErrors.termsAccepted ? <p className="mt-2 text-sm text-red-600">{visibleErrors.termsAccepted}</p> : null}
                  </div>

                  {submitError ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p> : null}

                  <Button type="submit" className="w-full rounded-lg bg-primary px-6 py-4 text-base text-white hover:bg-violet-700" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}