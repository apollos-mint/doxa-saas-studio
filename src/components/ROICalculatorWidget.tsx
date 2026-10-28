"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

export const ROICalculatorWidget = () => {
  const { dict } = useI18n();
  const [clientValue, setClientValue] = useState(1500);
  const [leads, setLeads] = useState(20);

  const conversionRate = 0.05; // 5% conversion rate
  const monthlyClients = Math.round(leads * conversionRate);
  const monthlyRevenue = monthlyClients * clientValue;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl w-full max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-brand-500/20 rounded-xl">
          <Calculator className="w-6 h-6 text-brand-500" />
        </div>
        <h3 className="text-xl font-bold">{dict.roi.title}</h3>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-foreground/80">{dict.roi.clientValue}</label>
            <span className="text-brand-400 font-bold">${clientValue}</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={clientValue}
            onChange={(e) => setClientValue(Number(e.target.value))}
            className="w-full accent-brand-500 bg-white/10 rounded-full appearance-none h-2 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-foreground/80">{dict.roi.targetLeads}</label>
            <span className="text-brand-400 font-bold">{leads}</span>
          </div>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={leads}
            onChange={(e) => setLeads(Number(e.target.value))}
            className="w-full accent-brand-500 bg-white/10 rounded-full appearance-none h-2 cursor-pointer"
          />
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-brand-900/40 to-purple-900/40 border border-brand-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-sm text-foreground/60 mb-1">{dict.roi.projectedRevenue}</span>
            <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
              ${yearlyRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
