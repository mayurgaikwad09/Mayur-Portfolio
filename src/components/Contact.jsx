import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal, social } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Use mailto link for real email client dispatching without fake backend
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a13] bg-purple-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-purple-cyan">Something Together</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            I'm open to software development opportunities, internships and collaborative projects.
          </p>
        </div>

        {/* Large Contact Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Left Bento Card: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex"
          >
            <div className="bento-card bento-card-hover p-6 sm:p-8 flex-1 flex flex-col justify-between bg-slate-900/80 border border-white/10 text-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Contact Details
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Direct developer communications
                  </p>
                </div>

                {/* Email item */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-purple-300 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-slate-400 hover:text-purple-300 transition-colors p-1"
                    aria-label="Copy Email"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200 block">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-md shadow-purple-500/20"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>

                <a
                  href={social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-xs text-slate-200 bg-slate-950/80 hover:bg-slate-900 hover:text-white border border-slate-800 transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 mr-2 text-blue-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Card: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex"
          >
            <div className="bento-card bento-card-hover p-6 sm:p-8 flex-1 flex flex-col justify-between bg-slate-900/80 border border-white/10 text-left">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-6">
                  Fills a preformatted message in your default email application.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project or internship inquiry here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                      <span>Opening your default email application with prefilled message!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

