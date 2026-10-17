"use client";

import React from "react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolio";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A080A] border-t border-[rgba(255,109,41,0.18)] text-[#BABABA] pt-16 pb-12 overflow-hidden select-none">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6D29]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(255,255,255,0.06)]">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF8C42] via-[#FF6D29] to-[#FF3D00] p-[1px] shadow-lg shadow-[#FF6D29]/25">
                <div className="w-full h-full bg-[#17100D] rounded-2xl flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-[#FF8C42]">
                    SS
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-[#FF8C42]">
                  {PERSONAL_INFO.role} ({PERSONAL_INFO.techStack})
                </p>
              </div>
            </div>

            <p className="text-xs text-[#BABABA] leading-relaxed max-w-sm">
              Crafting high-throughput REST APIs, modular backend microservices, and reliable database architectures with Node.js, Express.js, TypeScript, and SQL.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#BABABA]">
              <MapPin className="w-3.5 h-3.5 text-[#FF6D29] shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29] shrink-0" aria-hidden="true" />
                  <a
                    href={link.href}
                    className="text-[#BABABA] hover:text-[#FF8C42] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Connect Directly
            </h4>
            <p className="text-xs text-[#BABABA]">
              Open for software engineering discussions and opportunities.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#1B130F] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#BABABA] hover:text-[#FF8C42] hover:border-[#FF6D29]/40 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-[#1B130F] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#BABABA] hover:text-[#FF8C42] hover:border-[#FF6D29]/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-2xl bg-[#1B130F] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#BABABA] hover:text-[#FF8C42] hover:border-[#FF6D29]/40 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-10 h-10 rounded-2xl bg-[#1B130F] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#BABABA] hover:text-[#FF8C42] hover:border-[#FF6D29]/40 transition-all"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                {PERSONAL_INFO.statusText}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BABABA]">
          <p>© 2026 · Designed and developed by Shailendra Sharma.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#FF8C42] transition-colors font-mono"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
