"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const PricingCustomizerWidget = () => {
  const { dict } = useI18n();
  const [isYearly, setIsYearly] = useState(true);

  const tiers = [
    {
      name: dict.pricing.starter,
      monthly: 49,
      yearly: 39,
      features: ["Up to 5 AI Websites", "Basic Analytics", "Community Support"]
    },
    {
      name: dict.pricing.pro,
      monthly: 99,
      yearly: 79,
      popular: true,
      features: ["Up to 50 AI Websites", "Advanced Analytics", "Custom Domains", "Priority Support"]
    },
    {
      name: dict.pricing.enterprise,
      monthly: 249,
      yearly: 199,
      features: ["Unlimited Websites", "White-label Dashboard", "API Access", "Dedicated Success Manager"]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center mb-12">
        <div className="glass-panel p-1 rounded-full flex items-center">
          <button
            onClick={() => setIsYearly(false)}
            className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all", !isYearly ? "bg-brand-600 text-white" : "text-foreground/60 hover:text-foreground")}
          >
            {dict.pricing.monthly}
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={cn("px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2", isYearly ? "bg-brand-600 text-white" : "text-foreground/60 hover:text-foreground")}
          >
            {dict.pricing.yearly}
            <span className={cn("text-xs px-2 py-0.5 rounded-full", isYearly ? "bg-white/20" : "bg-brand-500/20 text-brand-400")}>-20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div key={tier.name} className={cn("glass-panel rounded-3xl p-8 relative flex flex-col", tier.popular && "border-brand-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] transform md:-translate-y-4")}>
            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
            <div className="mb-6">
              <span className="text-4xl font-black">${isYearly ? tier.yearly : tier.monthly}</span>
              <span className="text-foreground/60">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={cn("w-full py-3 rounded-xl font-medium transition-all", tier.popular ? "bg-brand-600 hover:bg-brand-500 text-white" : "bg-white/10 hover:bg-white/20 text-foreground")}>
              {dict.pricing.getStarted}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
