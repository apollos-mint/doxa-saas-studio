"use client";

import { useI18n } from "@/lib/i18n";
import { PromptSandboxWidget } from "@/components/PromptSandboxWidget";
import { LivePreviewSimulator } from "@/components/LivePreviewSimulator";
import { ROICalculatorWidget } from "@/components/ROICalculatorWidget";
import { PerformanceGaugeWidget } from "@/components/PerformanceGaugeWidget";
import { PricingCustomizerWidget } from "@/components/PricingCustomizerWidget";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";

export default function Home() {
  const { dict } = useI18n();

  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          {dict.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
          {dict.hero.subtitle}
        </p>
        
        <PromptSandboxWidget />
      </section>

      {/* Simulator Section */}
      <section id="features" className="px-6 relative w-full">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{dict.simulator.title}</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">See your agency's generated sites in action across any device, instantly.</p>
        </div>
        <LivePreviewSimulator />
      </section>

      {/* Performance & Features */}
      <section className="px-6 relative w-full bg-gradient-to-b from-transparent via-brand-900/10 to-transparent py-20">
        <PerformanceGaugeWidget />
      </section>

      {/* ROI Section */}
      <section className="px-6 relative w-full">
        <ROICalculatorWidget />
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="px-6 relative w-full pt-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stunning Portfolio</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">Explore high-converting websites created for global brands.</p>
        </div>
        <PortfolioShowcase />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 relative w-full pt-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{dict.pricing.title}</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">Flexible plans for agencies of all sizes. Upgrade or downgrade anytime.</p>
        </div>
        <PricingCustomizerWidget />
      </section>

    </div>
  );
}
