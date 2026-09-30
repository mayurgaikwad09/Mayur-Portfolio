import React, { useState, useEffect, useRef } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5 sm:py-3 bento-nav shadow-2xl shadow-black/60" : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Bento Tag */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none rounded-xl p-1 touch-target min-h-[44px]"
            aria-label="Mayur Gaikwad Portfolio Home"
          >
            <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-lg sm:rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 shrink-0 select-none">
              <span className="font-mono font-extrabold text-xs sm:text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                MG
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors font-mono">
                Mayur Gaikwad
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 tracking-widest uppercase -mt-0.5">
                Developer Dashboard
              </span>
            </div>
          </a>

          {/* Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center space-x-1 bento-card px-4 py-1.5 rounded-full border border-white/10 shadow-xl bg-slate-900/70 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-purple-300 bg-purple-500/20 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Mayur_Gaikwad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-4.5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-xl hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] focus:outline-none"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bento-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-3 min-h-[44px] flex items-center rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-purple-300 bg-purple-500/20 border-l-4 border-purple-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Mayur_Gaikwad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl shadow-lg shadow-purple-500/25"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


