"use client";

import { useI18n } from "@/lib/i18n";
import { Layers, CheckCircle2 } from "lucide-react";

export const Footer = () => {
  const { dict } = useI18n();

  return (
    <footer className="glass-panel border-x-0 border-b-0 py-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-brand-500" />
            <span className="text-lg font-bold">Doxa Digital</span>
          </div>
          <p className="text-sm text-foreground/60">
            {dict.hero.subtitle}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><a href="#" className="hover:text-brand-500">{dict.nav.features}</a></li>
            <li><a href="#" className="hover:text-brand-500">{dict.nav.pricing}</a></li>
            <li><a href="#" className="hover:text-brand-500">{dict.nav.portfolio}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li><a href="#" className="hover:text-brand-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-500">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">System</h4>
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>{dict.footer.status}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-foreground/40">
        {dict.footer.rights}
      </div>
    </footer>
  );
};
