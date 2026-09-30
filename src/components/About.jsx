import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Sparkles,
  CheckCircle2,
  Terminal,
  MapPin,
  Target,
  GraduationCap,
  Copy,
  Check,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about, personal, terminalCommands } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyTerminal = () => {
    const text = `$ whoami\n${terminalCommands.whoami}\n\n$ focus\n${terminalCommands.focus}\n\n$ learning\n${terminalCommands.learning}\n\n$ location\n${terminalCommands.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative bg-[#070a13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-purple-cyan">Me</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Passionate software engineering student crafting robust backend systems and modern full-stack web applications.
          </p>
        </div>

        {/* Content Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Bio & Currently Focused On Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Bio Glass Card */}
            <div className="bento-card bento-card-hover p-6 sm:p-8 flex-1 relative overflow-hidden bg-slate-900/80 border border-white/10 text-left">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 text-purple-400 mr-2.5" />
                Engineering Background & Focus
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* Currently Focused On Card */}
            <div className="bento-card bento-card-hover p-6 bg-slate-900/80 border border-white/10 text-left">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white flex items-center">
                  <Target className="w-5 h-5 text-cyan-400 mr-2.5" />
                  Currently Focused On
                </h4>
                <span className="text-xs font-mono text-cyan-400/90 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Active Mastery
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {about.currentFocus.map((focusItem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-purple-500/40 hover:text-purple-300 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>{focusItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal Visual Element Bento Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex"
          >
            <div className="bento-card bento-card-hover rounded-2xl border border-white/10 overflow-hidden shadow-2xl w-full flex flex-col justify-between bg-[#080c16]">
              {/* Terminal Title Bar */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center">
                  <Terminal className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                  mayur@dev-station:~
                </span>
                <button
                  onClick={handleCopyTerminal}
                  className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                  title="Copy terminal contents"
                  aria-label="Copy terminal text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-left bg-[#080d19] space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500">$ whoami</p>
                    <p className="text-cyan-300 font-semibold mt-0.5">
                      {terminalCommands.whoami}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">$ focus</p>
                    <p className="text-emerald-300 font-semibold mt-0.5">
                      {terminalCommands.focus}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">$ learning</p>
                    <p className="text-amber-300 font-semibold mt-0.5">
                      {terminalCommands.learning}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">$ location</p>
                    <p className="text-purple-300 font-semibold mt-0.5 flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-purple-400 inline" />
                      {terminalCommands.location}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center text-slate-500">
                  <span className="text-emerald-400 mr-2">➜</span>
                  <span className="text-slate-300 animate-pulse">|</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

