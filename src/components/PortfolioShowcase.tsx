"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "saas" | "agency" | "local";

export const PortfolioShowcase = () => {
  const [filter, setFilter] = useState<Category>("all");

  const projects = [
    { id: 1, title: "Fintech SaaS", category: "saas", color: "from-blue-500 to-indigo-600" },
    { id: 2, title: "Creative Agency", category: "agency", color: "from-pink-500 to-rose-500" },
    { id: 3, title: "Dental Clinic", category: "local", color: "from-teal-400 to-emerald-500" },
    { id: 4, title: "AI Startup", category: "saas", color: "from-purple-500 to-brand-600" },
    { id: 5, title: "Law Firm", category: "local", color: "from-slate-600 to-slate-800" },
    { id: 6, title: "Marketing Pro", category: "agency", color: "from-orange-400 to-red-500" },
  ];

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
        {[
          { id: "all", label: "All Works" },
          { id: "saas", label: "SaaS & Tech" },
          { id: "agency", label: "Agencies" },
          { id: "local", label: "Local Business" }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as Category)}
            className={cn("px-4 py-2 rounded-full text-sm font-medium border transition-colors", filter === cat.id ? "bg-white text-black border-white" : "border-white/10 text-foreground/60 hover:text-foreground hover:border-white/30")}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div key={project.id} className="group relative glass-panel rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
            {/* Mock abstract representation of a website */}
            <div className={cn("absolute inset-0 opacity-80 transition-transform duration-500 group-hover:scale-110 bg-gradient-to-br", project.color)} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-sm text-white/70 capitalize">{project.category}</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors">
                <ExternalLink className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
