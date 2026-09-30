import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function CodeAndConnect() {
  const { social } = portfolioData;

  const profiles = [
    {
      platform: "GitHub",
      username: social.github.username,
      url: social.github.url,
      icon: GithubIcon,
      color: "hover:border-purple-500/50 hover:shadow-purple-500/15 text-purple-300",
      accentBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      description: "Explore open-source repositories and enterprise backend projects.",
    },
    {
      platform: "LinkedIn",
      username: social.linkedin.username,
      url: social.linkedin.url,
      icon: LinkedinIcon,
      color: "hover:border-blue-500/50 hover:shadow-blue-500/15 text-blue-300",
      accentBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
      description: "Connect professionally and stay updated on career milestones.",
    },
    {
      platform: "LeetCode",
      username: social.leetcode.username,
      url: social.leetcode.url,
      icon: LeetCodeIcon,
      color: "hover:border-amber-500/50 hover:shadow-amber-500/15 text-amber-300",
      accentBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      description: "Data Structures & Algorithms problem-solving profile.",
    },
  ];

  return (
    <section className="py-16 relative bg-[#070a13] bg-bento-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Code & <span className="text-gradient-purple-cyan">Connect</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Official developer accounts and professional networking profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => {
            const IconComponent = profile.icon;

            return (
              <motion.a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bento-card bento-card-hover p-6 flex flex-col justify-between group bg-slate-900/80 border border-white/10 text-left ${profile.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${profile.accentBg} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-sm font-mono text-purple-300/90 mt-0.5">
                    {profile.username}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>Visit Profile</span>
                  <span>↗</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

