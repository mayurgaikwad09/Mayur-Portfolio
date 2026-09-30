import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070f] border-t border-white/10 py-6 sm:py-10 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center justify-center font-mono font-black text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 select-none">
                MG
              </div>
              <span className="text-base font-bold text-white tracking-tight font-mono">
                Mayur Gaikwad
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              © 2026 Mayur Gaikwad • Bento Developer Dashboard Theme
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-purple-300 border border-slate-800 hover:border-purple-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={social.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 transition-all hover:scale-110 ml-2"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

