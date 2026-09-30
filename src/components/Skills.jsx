import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Server,
  Globe,
  Database,
  Wrench,
  Layers,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Programming: Code2,
    "Core Computer Science": Cpu,
    "Backend Development": Server,
    "Web Technologies": Globe,
    Database: Database,
    "Developer Tools": Wrench,
  };

  const categoryGradients = {
    Programming: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    "Core Computer Science": "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
    "Backend Development": "from-purple-600/20 to-cyan-500/20 text-purple-300 border-purple-500/30",
    "Web Technologies": "from-blue-500/20 to-teal-500/20 text-blue-300 border-blue-500/30",
    Database: "from-cyan-500/20 to-indigo-500/20 text-cyan-300 border-cyan-500/30",
    "Developer Tools": "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
  };

  return (
    <section id="skills" className="py-8 md:py-20 relative bg-[#070a13] bg-bento-grid overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple-cyan">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Categorized technical stack focused on enterprise Java backend architecture, databases, core CS concepts, and modern tools.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((categoryGroup, index) => {
            const IconComponent = categoryIcons[categoryGroup.category] || Code2;
            const badgeStyle =
              categoryGradients[categoryGroup.category] ||
              "from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30";

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bento-card bento-card-hover p-5 sm:p-6 flex flex-col justify-between group bg-slate-900/80 border border-white/10 text-left"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${badgeStyle} border shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {categoryGroup.items.length} Tech Items
                      </span>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.items.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 text-xs font-mono font-medium hover:border-purple-500/40 hover:text-purple-300 hover:bg-slate-900 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>ENTERPRISE READY</span>
                  <span className="text-purple-400/80 font-bold group-hover:text-purple-300 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

