import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      id: 'starter',
      name: t('starterTitle'),
      stripeUrl: 'https://buy.stripe.com/8x2aEXgNhd8y5bf2IP1Jm07',
      features: t('starterFeatures', { returnObjects: true }),
      highlight: false
    },
    {
      id: 'pro',
      name: t('proTitle'),
      stripeUrl: 'https://buy.stripe.com/3cI4gz40vd8y47bdnt1Jm08',
      features: t('proFeatures', { returnObjects: true }),
      highlight: true
    },
    {
      id: 'enterprise',
      name: t('enterpriseTitle'),
      stripeUrl: 'https://buy.stripe.com/28E00jfJdc4u0UZ8391Jm09',
      features: t('enterpriseFeatures', { returnObjects: true }),
      highlight: false
    }
  ];

  return (
    <section className="py-12 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('plansTitle')}</h2>
        <p className="text-slate-400 mb-10">{t('plansSubtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                plan.highlight
                  ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 scale-105'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-6">{plan.name}</h3>

                <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
                  {Array.isArray(plan.features) && plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-semibold transition-all text-center ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {t('subscribe')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
