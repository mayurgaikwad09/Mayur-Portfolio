import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Sparkles, CheckCircle2, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications, currentlyExploring } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative bg-[#070a13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Upskilling & R&D</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-purple-cyan">Learning</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Verified certifications and active self-driven exploration in next-generation Java AI frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Certifications Card Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex"
          >
            <div className="bento-card bento-card-hover p-6 sm:p-8 flex-1 flex flex-col justify-between bg-slate-900/80 border border-white/10 text-left">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Industry Certification
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Verified Training Program
                    </p>
                  </div>
                </div>

                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-purple-300 font-medium">
                          Provider: {cert.provider}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                        Completed
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Skills Acquired:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Core2Web Certificate</span>
                <span className="text-amber-400">AI & Mobile</span>
              </div>
            </div>
          </motion.div>

          {/* Currently Exploring Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex"
          >
            <div className="bento-card bento-card-purple p-6 sm:p-8 flex-1 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/30">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Currently Learning
                    </h3>
                    <p className="text-xs font-mono text-purple-400">
                      Self-Directed Technology Roadmap
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      <h4 className="text-xl font-bold text-gradient-purple-cyan">
                        {currentlyExploring.topic}
                      </h4>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-bento-pulse" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {currentlyExploring.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center text-purple-300">
                      <Sparkles className="w-3.5 h-3.5 mr-1 text-purple-400" />
                      AI Integration in Java
                    </span>
                    <span className="text-cyan-400">Active R&D</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Exploring Modern Java AI</span>
                <span className="text-purple-300 font-semibold">Active Roadmap</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

