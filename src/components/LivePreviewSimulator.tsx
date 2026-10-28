"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Device = "desktop" | "tablet" | "mobile";
type Theme = "portfolio" | "ecommerce" | "agency";

export const LivePreviewSimulator = () => {
  const { dict } = useI18n();
  const [device, setDevice] = useState<Device>("desktop");
  const [theme, setTheme] = useState<Theme>("portfolio");

  const themes = [
    { id: "portfolio", label: dict.simulator.themePortfolio, color: "from-blue-500 to-cyan-500" },
    { id: "ecommerce", label: dict.simulator.themeEcommerce, color: "from-orange-500 to-red-500" },
    { id: "agency", label: dict.simulator.themeAgency, color: "from-brand-500 to-purple-500" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full justify-between">
        
        {/* Theme Selector */}
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as Theme)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                theme === t.id ? "bg-white/10 text-white" : "text-foreground/60 hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Device Selector */}
        <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setDevice("desktop")}
            className={cn("p-2 rounded-full transition-colors", device === "desktop" ? "bg-white/10 text-white" : "text-foreground/60 hover:text-foreground")}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("tablet")}
            className={cn("p-2 rounded-full transition-colors", device === "tablet" ? "bg-white/10 text-white" : "text-foreground/60 hover:text-foreground")}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={cn("p-2 rounded-full transition-colors", device === "mobile" ? "bg-white/10 text-white" : "text-foreground/60 hover:text-foreground")}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulator Window */}
      <div 
        className={cn(
          "glass-panel rounded-2xl overflow-hidden transition-all duration-500 ease-in-out relative border-t-8 border-t-white/20",
          device === "desktop" ? "w-full aspect-[16/9]" : 
          device === "tablet" ? "w-[768px] aspect-[4/3]" : 
          "w-[375px] aspect-[9/16]"
        )}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl z-0" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex flex-col p-6"
          >
            {/* Header Mock */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className={cn("w-24 h-6 rounded bg-gradient-to-r", themes.find(t=>t.id===theme)?.color)} />
              {device !== "mobile" && (
                <div className="flex gap-4">
                  <div className="w-12 h-2 rounded bg-white/10" />
                  <div className="w-12 h-2 rounded bg-white/10" />
                  <div className="w-12 h-2 rounded bg-white/10" />
                </div>
              )}
            </div>

            {/* Body Mock */}
            <div className="flex-grow flex flex-col justify-center items-center gap-6">
              <div className={cn("w-3/4 max-w-md h-12 rounded-xl bg-gradient-to-r opacity-80", themes.find(t=>t.id===theme)?.color)} />
              <div className="w-1/2 max-w-xs h-4 rounded bg-white/10" />
              <div className="w-1/3 max-w-xs h-4 rounded bg-white/10" />
              <div className="w-32 h-10 mt-4 rounded-full bg-white/20" />
            </div>

            {/* Mock Image Grid for Portfolio */}
            {theme === "portfolio" && device !== "mobile" && (
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="h-24 rounded-lg bg-white/5" />
                <div className="h-24 rounded-lg bg-white/5" />
                <div className="h-24 rounded-lg bg-white/5" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
