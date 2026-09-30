import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Building, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-8 md:py-20 relative bg-[#070a13] bg-bento-grid overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-purple-cyan">Degrees</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Formal academic journey in Computer Science & Engineering and secondary education foundation.
          </p>
        </div>

        {/* Education Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bento-card bento-card-hover p-4 sm:p-6 flex flex-col justify-between group bg-slate-900/80 border border-white/10 text-left overflow-hidden"
              >
                <div>
                  {/* Degree Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs font-mono bg-slate-950/90 border border-slate-800 text-purple-300">
                      <Calendar className="w-3 h-3 mr-1.5 text-purple-400 shrink-0" />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium mt-2 leading-relaxed break-words">
                    {edu.institution}
                  </p>
                </div>

                {/* Grade Badge & Type */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                    {edu.type}
                  </span>
                  <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold font-mono">
                    <Award className="w-3.5 h-3.5 mr-1 text-purple-400 shrink-0" />
                    <span>{edu.grade}</span>
                  </span>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

