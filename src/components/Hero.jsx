import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileDown,
  ArrowRight,
  Mail,
  Terminal,
  Server,
  Database,
  Cpu,
  MapPin,
  Sparkles,
  Layers,
  ExternalLink,
  Compass,
  CheckCircle2,
  Wrench,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, social, about, currentlyExploring } = portfolioData;

  const techStackList = [
    { name: "Java", category: "Core" },
    { name: "Spring Boot", category: "Backend" },
    { name: "Spring Framework", category: "Backend" },
    { name: "REST API", category: "Backend" },
    { name: "JPA", category: "ORM" },
    { name: "Hibernate", category: "ORM" },
    { name: "SQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "JavaScript", category: "Web" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Maven", category: "Build" },
    { name: "Postman", category: "API" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-screen pt-20 pb-6 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden bg-bento-grid bg-purple-radial-glow"
    >
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 max-w-full" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 space-y-4 sm:space-y-6">
        {/* Main Hero & Top Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* ================================================== */}
          {/* 1. HERO / INTRO BENTO CARD (Span 8 Cols Desktop)  */}
          {/* ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bento-card bento-card-hover p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-purple-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-purple-950/20 w-full min-w-0"
          >
            {/* Subtle background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500 max-w-full" />
            
            <div className="space-y-4 sm:space-y-6 relative z-10 w-full min-w-0">
              {/* Badge Status */}
              <div className="flex flex-col min-[420px]:flex-row items-start min-[420px]:items-center justify-between gap-2.5 w-full min-w-0">
                <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)] max-w-full">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                  </span>
                  <span className="break-words sm:truncate leading-tight">{personal.badgeText}</span>
                </div>

                <div className="text-[10px] sm:text-xs font-mono text-cyan-400/90 bg-cyan-500/10 px-2.5 sm:px-3 py-1 rounded-full border border-cyan-500/20 shrink-0">
                  Java Full Stack
                </div>
              </div>

              {/* Tag & Large Name Header */}
              <div className="space-y-1.5 sm:space-y-2 text-left">
                <div className="text-xs sm:text-sm font-mono text-purple-400 font-bold tracking-wider flex items-center space-x-1">
                  <span>&lt; Developer /&gt;</span>
                </div>
                <h1 className="hero-clamp-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none uppercase">
                  MAYUR<br />
                  <span className="text-gradient-purple-cyan">GAIKWAD</span>
                </h1>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-200">
                  {personal.gradientRole}
                </h2>
              </div>

              {/* Bio Summary */}
              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-left">
                {personal.heroText}
              </p>

              {/* Highlight Tech Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 font-mono text-[11px] sm:text-xs text-purple-300">
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 font-semibold">Java</span>
                <span className="text-purple-500">•</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 font-semibold text-cyan-300">Spring Boot</span>
                <span className="text-purple-500">•</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 font-semibold text-blue-300">REST APIs</span>
                <span className="text-purple-500">•</span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 font-semibold text-indigo-300">SQL</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-6 relative z-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 min-h-[44px]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all duration-300 min-h-[44px]"
              >
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                Contact Me
              </a>

              <a
                href={personal.resumeUrl}
                download="Mayur_Gaikwad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-medium text-xs text-slate-300 hover:text-purple-300 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 min-h-[44px]"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Resume PDF
              </a>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* 2. PROFILE BENTO CARD (Span 4 Cols Desktop)        */}
          {/* ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 bento-card bento-card-hover p-6 flex flex-col justify-between bg-slate-900/80 border border-white/10 space-y-4"
          >
            <div>
              {/* Profile Card Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-mono font-bold text-lg">
                    MG
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {personal.shortName}
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    Java Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3 pt-4 text-left text-xs font-sans">
                <div className="flex items-center text-slate-300 space-x-2">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Computer Science & Engineering Student</span>
                </div>
                <div className="flex items-center text-slate-300 space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center text-slate-300 space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Open for Software Developer Roles</span>
                </div>
              </div>
            </div>

            {/* Terminal Window Card Mini Snippet */}
            <div className="rounded-xl bg-[#090d16] border border-white/10 overflow-hidden text-left font-mono text-xs mt-2">
              <div className="bg-slate-950 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-500">Developer.java</span>
              </div>
              <div className="p-3 text-[11px] leading-relaxed text-slate-300 space-y-0.5">
                <p><span className="text-purple-400">public class</span> <span className="text-amber-300">Developer</span> &#123;</p>
                <p className="pl-3"><span className="text-purple-400">String</span> name = <span className="text-emerald-300">"Mayur Gaikwad"</span>;</p>
                <p className="pl-3"><span className="text-purple-400">String</span> focus = <span className="text-emerald-300">"Java + Spring Boot"</span>;</p>
                <p>&#125;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row Bento Grid: Social Cards + Currently Learning */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6">
          {/* ================================================== */}
          {/* 3. SOCIAL CARDS (GitHub, LinkedIn, LeetCode - 3x4 Cols) */}
          {/* ================================================== */}
          {/* GitHub Card */}
          <motion.a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 bento-card bento-card-hover p-5 flex items-center justify-between bg-slate-900/80 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center space-x-3.5 text-left">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">GitHub</span>
                <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {social.github.username}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bento-card bento-card-hover p-5 flex items-center justify-between bg-slate-900/80 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center space-x-3.5 text-left">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {social.linkedin.label}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </motion.a>

          {/* LeetCode Card */}
          <motion.a
            href={social.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-4 bento-card bento-card-hover p-5 flex items-center justify-between bg-slate-900/80 border border-white/10 group cursor-pointer"
          >
            <div className="flex items-center space-x-3.5 text-left">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <LeetCodeIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">LeetCode</span>
                <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {social.leetcode.username}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
          </motion.a>
        </div>

        {/* Third Row Bento Grid: Tech Stack Highlights + Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* ================================================== */}
          {/* 4. TECH STACK BENTO CARD (Span 7 Cols Desktop)     */}
          {/* ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bento-card bento-card-hover p-6 sm:p-7 flex flex-col justify-between bg-slate-900/80 border border-white/10 text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Tech Stack
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Core Development Stack
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {techStackList.length} Skills
                </span>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {techStackList.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-mono font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Java • Spring Boot • SQL • Web</span>
              <span className="text-cyan-400 font-semibold">ENTERPRISE READY</span>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* 5. CURRENTLY LEARNING CARD (Span 5 Cols Desktop)   */}
          {/* ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5 bento-card bento-card-purple p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden group"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Currently Learning
                    </h3>
                    <p className="text-xs font-mono text-purple-400">
                      R&D & Upskilling
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bento-pulse" />
                  <span>Active</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-gradient-purple-cyan">
                    {currentlyExploring.topic}
                  </h4>
                  <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "{currentlyExploring.description}"
                </p>
              </div>
            </div>

            {/* Subtle animated learning wave graphic (No fake percentage) */}
            <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-300 flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-purple-400" />
                Modern Java + AI Models
              </span>
              <span className="text-cyan-400">Exploring</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

