"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
      if (!sections.length) return;

      const activationLine = Math.min(window.innerHeight * 0.32, 220);
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      const isAtPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (isAtPageBottom) currentSection = sections[sections.length - 1].id;

      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0D0B0D]/85 backdrop-blur-xl border-b border-[rgba(255,109,41,0.18)] shadow-2xl shadow-black/80"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="#home"
          className="group flex items-center gap-3 select-none"
          onClick={() => setActiveSection("home")}
        >
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF8C42] via-[#FF6D29] to-[#FF3D00] p-[1px] shadow-lg shadow-[#FF6D29]/25 group-hover:shadow-[#FF6D29]/45 transition-all">
            <div className="w-full h-full bg-[#161214] rounded-2xl flex items-center justify-center">
              <span className="font-heading font-black text-sm tracking-tighter text-[#FF8C42] group-hover:text-white transition-colors">
                SS
              </span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FF6D29] border-2 border-[#161214]" />
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold leading-tight text-white tracking-tight group-hover:text-[#FF8C42] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-[#BABABA] tracking-widest uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-[#1C1517]/70 backdrop-blur-md px-5 py-2 rounded-full border border-[rgba(255,255,255,0.08)] shadow-lg">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-250 select-none ${
                  isActive
                    ? "text-[#FF8C42] bg-[#2E2024] shadow-sm font-semibold"
                    : "text-[#BABABA] hover:text-white hover:bg-[#251A1D]/60"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#FF6D29] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Hire Me
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl bg-[#1C1517] border border-[rgba(255,255,255,0.12)] text-[#BABABA] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain p-5 rounded-3xl glass-panel-elevated border border-[rgba(255,109,41,0.25)] shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#FF6D29]/20 text-[#FF8C42] font-semibold border border-[#FF6D29]/30"
                      : "text-[#BABABA] hover:bg-[#241C1F] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[rgba(255,255,255,0.1)] flex flex-col gap-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
