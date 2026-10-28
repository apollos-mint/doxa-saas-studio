"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const PromptSandboxWidget = () => {
  const { dict } = useI18n();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    "Analyzing Brand Identity...",
    "Building Layout & Components...",
    "Generating i18n Dictionaries...",
    "Deploying to Edge Network..."
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setStep(0);
    
    // Simulate steps
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsGenerating(false), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 p-1 rounded-2xl bg-gradient-to-r from-brand-500/30 via-purple-500/30 to-brand-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
      <div className="glass-panel rounded-xl p-2 md:p-4 flex flex-col md:flex-row gap-4 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex-grow relative z-10">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
            placeholder={dict.hero.placeholder}
            className="w-full bg-transparent border-0 text-foreground px-4 py-3 md:py-4 focus:ring-0 text-lg md:text-xl placeholder:text-foreground/30 outline-none"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className={cn(
            "relative z-10 flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium transition-all",
            isGenerating || !prompt.trim() 
              ? "bg-white/5 text-foreground/40 cursor-not-allowed" 
              : "bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          )}
        >
          {isGenerating ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
          <span className="whitespace-nowrap">{isGenerating ? "Generating..." : dict.hero.button}</span>
        </button>

        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 z-20 glass-panel bg-background/80 flex items-center justify-center px-4"
            >
              <div className="flex items-center gap-4">
                <Loader2 className="w-6 h-6 animate-spin text-brand-500" />
                <span className="text-lg font-medium bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                  {steps[step]}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Preset tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["AI SaaS Startup", "Boutique Law Firm", "Modern Architecture Studio"].map((tag) => (
          <button
            key={tag}
            onClick={() => setPrompt(tag)}
            className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-foreground/60 hover:text-foreground hover:bg-white/5 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
