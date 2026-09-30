import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Info,
  Server,
  Database,
  ShieldCheck,
  ArrowRight,
  Code2,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const projectStyles = {
    "project-1": {
      icon: Server,
      accent: "purple",
      badgeText: "Spring Boot Enterprise",
      cardGradient: "from-purple-950/40 via-slate-900/90 to-slate-900/90",
      borderStyle: "border-purple-500/30 hover:border-purple-500/50",
      buttonGradient: "from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400",
      glowColor: "bg-purple-500/15",
    },
    "project-2": {
      icon: Database,
      accent: "cyan",
      badgeText: "Logistics SaaS Ecosystem",
      cardGradient: "from-cyan-950/40 via-slate-900/90 to-slate-900/90",
      borderStyle: "border-cyan-500/30 hover:border-cyan-500/50",
      buttonGradient: "from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500",
      glowColor: "bg-cyan-500/15",
    },
  };

  return (
    <section id="projects" className="py-8 md:py-20 relative bg-[#070a13] bg-purple-radial-glow overflow-hidden w-full max-w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-purple-500/5 blur-3xl pointer-events-none -z-10 max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Centerpiece Software Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-purple-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Real-world backend and full-stack software applications built with Java, Spring Boot, REST APIs, and database persistence layers.
          </p>
        </div>

        {/* Featured Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
          {projects.map((project, idx) => {
            const style = projectStyles[project.id] || projectStyles["project-1"];
            const IconComponent = style.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`lg:col-span-6 bento-card bento-card-hover p-5 sm:p-8 flex flex-col justify-between group text-left relative overflow-hidden bg-gradient-to-br ${style.cardGradient} ${style.borderStyle}`}
              >
                {/* Background glow circle */}
                <div className={`absolute -right-10 -bottom-10 w-48 h-48 ${style.glowColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div className="space-y-5 relative z-10">
                  {/* Card Header Tag & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {style.badgeText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Technologies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-purple-300 text-xs font-mono"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r ${style.buttonGradient} transition-all duration-300 shadow-md shadow-purple-500/20 min-h-[44px]`}
                  >
                    <Info className="w-4 h-4 mr-2 shrink-0" />
                    <span>View Project Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-purple-500/40 transition-colors min-h-[44px] font-mono text-xs font-semibold"
                      aria-label="View GitHub Repository"
                      title="View GitHub repository"
                    >
                      <GithubIcon className="w-4 h-4 mr-2 shrink-0" />
                      <span>GitHub Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

