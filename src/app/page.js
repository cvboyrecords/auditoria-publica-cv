'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';
import PricingSection from '@/components/PricingSection';
import '@/i18n';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-400">{t('title')}</h1>
          <p className="text-sm text-slate-400 mt-1">{t('subtitle')}</p>
        </div>
        <LanguageSelector />
      </div>

      <PricingSection />
    </main>
  );
}
