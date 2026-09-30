import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  ChevronDown,
  ChevronUp,
  Tag,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const [expandedItems, setExpandedItems] = useState({
    "exp-1": true,
    "exp-2": true,
    "exp-3": true,
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-20 relative bg-[#070a13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Internship Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-purple-cyan">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Practical software development experience with Java, Spring Boot, REST APIs, databases, and version control across industry internships.
          </p>
        </div>

        {/* Experience Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {experience.map((item, idx) => {
            const isExpanded = expandedItems[item.id];
            // Give the first card a slightly wider span (e.g. 12 cols or 6 cols depending on grid)
            const colSpan = idx === 0 ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`${colSpan} bento-card bento-card-hover p-6 sm:p-7 bg-slate-900/80 border border-white/10 flex flex-col justify-between text-left group overflow-hidden`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="cursor-pointer flex items-start justify-between select-none pb-4 border-b border-white/10"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                          <Calendar className="w-3 h-3 mr-1.5 text-purple-400" />
                          {item.period}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                          Internship
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-slate-300 text-sm font-medium">
                        <Building2 className="w-4 h-4 mr-1.5 text-cyan-400" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-purple-300 border border-slate-800 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 space-y-4"
                      >
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {/* Skills Used */}
                        <div className="pt-3 border-t border-slate-800/80">
                          <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 mb-2.5">
                            <Tag className="w-3.5 h-3.5 text-purple-400" />
                            <span>Technologies Used:</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-300 text-xs font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

