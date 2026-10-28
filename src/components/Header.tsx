"use client";

import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Layers } from "lucide-react";

export const Header = () => {
  const { dict } = useI18n();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-8 h-8 text-brand-500" />
          <span className="text-xl font-bold tracking-tight">Doxa Digital</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{dict.nav.features}</a>
          <a href="#pricing" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{dict.nav.pricing}</a>
          <a href="#portfolio" className="text-sm text-foreground/80 hover:text-foreground transition-colors">{dict.nav.portfolio}</a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="hidden sm:block px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            {dict.nav.buildSite}
          </button>
        </div>
      </div>
    </header>
  );
};
