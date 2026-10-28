"use client";

import { useI18n } from "@/lib/i18n";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gauge = ({ label, value, delay }: { label: string; value: number; delay: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const interval = setInterval(() => {
        if (start < value) {
          start += 2;
          setCurrent(start > value ? value : start);
        } else {
          clearInterval(interval);
        }
      }, 20);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  const circumference = 2 * Math.PI * 36; // r=36
  const offset = circumference - (current / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="36" className="stroke-white/10" strokeWidth="8" fill="none" />
          <motion.circle
            cx="48"
            cy="48"
            r="36"
            className="stroke-green-400"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xl font-bold text-green-400">{current}</span>
      </div>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
    </div>
  );
};

export const PerformanceGaugeWidget = () => {
  const { dict } = useI18n();

  return (
    <div className="glass-panel p-8 rounded-3xl w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-green-500/20 rounded-full mb-4 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <Zap className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold">{dict.performance.title}</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Gauge label={dict.performance.speed} value={100} delay={500} />
        <Gauge label={dict.performance.seo} value={100} delay={700} />
        <Gauge label={dict.performance.accessibility} value={100} delay={900} />
        <Gauge label={dict.performance.bestPractices} value={100} delay={1100} />
      </div>
    </div>
  );
};
