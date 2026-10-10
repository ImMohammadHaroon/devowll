import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../../data/site';

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-24 border-t border-white/10">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label">Pricing</p>
            <h2 className="mt-4 max-w-xl text-4xl tracking-[-0.045em] sm:text-6xl">Partnerships that scale with the work.</h2>
            <p className="mt-4 max-w-md text-mist">Starting points, not a menu of hidden fees. A fixed launch scope is available when that fits better.</p>
          </div>
          <div className="inline-flex rounded-full border border-white/15 p-1" role="group" aria-label="Billing period">
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-sm ${annual ? 'text-white/60' : 'bg-cream text-ink'}`}
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`rounded-full px-4 py-2 text-sm ${annual ? 'bg-cream text-ink' : 'text-white/60'}`}
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
            >
              Annually
              <span className="ml-2 text-xs opacity-70">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = plan.monthly == null ? null : annual ? plan.annual : plan.monthly;
            const featured = plan.featured;
            return (
              <article
                key={plan.id}
                className={`flex flex-col rounded-[1.6rem] border p-5 ${
                  featured ? 'border-cream bg-cream text-ink' : 'border-white/10 bg-panel text-cream'
                }`}
              >
                <p className={`font-mono text-[11px] uppercase tracking-[0.22em] ${featured ? 'text-ink/50' : 'text-white/45'}`}>
                  {plan.name}
                </p>
                <p className="mt-6 text-4xl tracking-[-0.05em]">
                  {price == null ? 'Custom' : money(price)}
                  {price != null ? <span className="text-base font-normal tracking-normal">/mo</span> : null}
                </p>
                <p className={`mt-2 text-xs ${featured ? 'text-ink/60' : 'text-white/45'}`}>
                  {price == null ? 'Scoped to the team' : annual ? 'USD · Billed annually' : 'USD · Billed monthly'}
                </p>
                <p className="mt-5 text-sm leading-6">{plan.text}</p>
                <Link
                  to={`/contact?plan=${plan.id}`}
                  className={`mt-6 inline-flex justify-center rounded-full px-4 py-3 text-sm font-medium ${
                    featured ? 'bg-ink text-cream' : 'bg-cream text-ink'
                  }`}
                >
                  Get started
                </Link>
                <ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${featured ? 'border-ink/10' : 'border-white/10'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
