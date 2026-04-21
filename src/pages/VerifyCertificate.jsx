import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, LoaderCircle, ShieldCheck, XCircle } from 'lucide-react';
import Card from '../components/common/Card';
import Seo from '../components/common/Seo';

const mockCertificates = {
  'DWL-2025-0001': { name: 'Ali Hassan', track: 'Web Development', date: 'March 2025' },
  'DWL-2025-0002': { name: 'Sara Khan', track: 'UI/UX Design', date: 'March 2025' },
};

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

export default function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setResult(null);

    // TODO: Replace with API call to backend/database
    setTimeout(() => {
      const normalizedId = certificateId.trim().toUpperCase();
      const certificate = mockCertificates[normalizedId];

      if (certificate) {
        setResult({ id: normalizedId, ...certificate });
        setStatus('valid');
      } else {
        setStatus('invalid');
      }
    }, 900);
  }

  return (
    <>
      <Seo
        title="Verify Devowll Certificate"
        description="Verify the authenticity of a Devowll certificate from a remote internship program using a unique certificate ID."
        path="/verify-certificate"
        keywords="Devowll, remote internship certificate, verify certificate, certificate ID, internship verification"
      />
      <Section className="bg-slate-50">
        <div className="container-page py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-primary shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-dark sm:text-5xl">Verify Certificate</h1>
            <p className="mt-5 text-lg leading-8 text-muted">Enter a certificate ID to verify its authenticity.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-page py-10 sm:py-14">
          <div className="mx-auto max-w-[480px]">
            <Card className="border border-slate-200 bg-white shadow-sm">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="certificateId" className="mb-2 block text-sm font-semibold text-dark">
                    Enter Certificate ID
                  </label>
                  <input
                    id="certificateId"
                    value={certificateId}
                    onChange={(event) => setCertificateId(event.target.value)}
                    type="text"
                    placeholder="e.g., DWL-2025-0042"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <LoaderCircle className="mr-2 animate-spin" size={16} />
                      Verifying...
                    </>
                  ) : (
                    'Verify Certificate'
                  )}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {status === 'valid' && result ? (
        <Section className="bg-slate-50">
          <div className="container-page py-10 sm:py-14">
            <div className="mx-auto max-w-[480px]">
              <Card className="border border-emerald-200 bg-emerald-50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-dark">Certificate is Valid</h2>
                      <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold tracking-[0.2em] text-white">VALID</span>
                    </div>
                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      <p>
                        <span className="font-semibold text-dark">Intern Name:</span> {result.name}
                      </p>
                      <p>
                        <span className="font-semibold text-dark">Track:</span> {result.track}
                      </p>
                      <p>
                        <span className="font-semibold text-dark">Completion Date:</span> {result.date}
                      </p>
                      <p>
                        <span className="font-semibold text-dark">Certificate ID:</span> {result.id}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      ) : null}

      {status === 'invalid' ? (
        <Section className="bg-slate-50">
          <div className="container-page py-10 sm:py-14">
            <div className="mx-auto max-w-[480px]">
              <Card className="border border-red-200 bg-red-50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <XCircle size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark">Certificate Not Found</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-700">No certificate found with this ID. Please check and try again.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}