"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#FF6D29]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-[#453027]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Have a System to Build?"
          highlightWords="System to Build"
          subtitle="Let's connect and discuss software engineering, web applications, APIs, scalable services, or interesting projects."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard elevation="elevated" glow className="p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid-dense opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(255,255,255,0.08)]">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Shailendra Sharma
                  </h3>
                  <p className="text-sm font-mono text-[#FF8C42] mt-1">
                    {PERSONAL_INFO.role} · {PERSONAL_INFO.techStack}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="font-mono text-xs text-[#10b981] bg-[#10b981]/15 px-3.5 py-1 rounded-full border border-[#10b981]/30 font-semibold">
                    Available for Backend Opportunities
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-[#22171A]/70 border border-[rgba(255,109,41,0.2)] flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6D29]/20 border border-[#FF6D29]/35 flex items-center justify-center text-[#FF8C42]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-full bg-[#161214] border border-[rgba(255,255,255,0.12)] text-xs font-mono text-[#BABABA] hover:text-[#FF8C42] flex items-center gap-1.5 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#10b981]" />
                          <span className="text-[#10b981] font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#BABABA] uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#FF8C42] transition-colors break-all mt-1 block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#22171A]/70 border border-[rgba(255,109,41,0.2)] flex flex-col justify-between space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/20 border border-[#FF5722]/35 flex items-center justify-center text-[#FF8C42]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#BABABA] bg-[#161214] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
                      Voice / WhatsApp
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#BABABA] uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#FF8C42] transition-colors font-mono mt-1 block"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#BABABA]">
                  <MapPin className="w-4 h-4 text-[#FF6D29] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#22171A] border border-[rgba(255,255,255,0.12)] text-xs font-mono text-white hover:border-[#FF6D29]/50 hover:text-[#FF8C42] transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#22171A] border border-[rgba(255,255,255,0.12)] text-xs font-mono text-white hover:border-[#FF6D29]/50 hover:text-[#FF8C42] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-gradient-to-r from-[#FF6D29]/20 via-[#453027]/30 to-transparent border border-[rgba(255,109,41,0.3)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-white">
                    Ready to collaborate on backend services or APIs?
                  </p>
                  <p className="text-xs text-[#BABABA] mt-0.5">
                    Fast response guaranteed via email or telephone.
                  </p>
                </div>

                <Button
                  href={`mailto:${PERSONAL_INFO.email}?subject=Backend%20Engineering%20Inquiry%20-%20Shailendra%20Sharma`}
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                >
                  Initiate Discussion
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
