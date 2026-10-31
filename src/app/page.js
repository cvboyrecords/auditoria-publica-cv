'use client';
import '@/i18n';
import LanguageSelector from '@/components/LanguageSelector';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <header className="flex justify-between items-center mb-10 max-w-6xl mx-auto border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-400">Auditoria Pública CV</h1>
          <p className="text-slate-400 text-sm">Sistema Inteligente de Contratação Pública</p>
        </div>
        <LanguageSelector />
      </header>
      <PricingSection />
    </main>
  );
}
