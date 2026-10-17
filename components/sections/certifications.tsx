"use client";

import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CREDENTIALS"
          title="Certifications"
          highlightWords="Certifications"
          subtitle="Formal industry training and verified engineering competencies."
        />

        <div className="max-w-3xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <GlassCard key={idx} elevation="elevated" glow className="p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6D29]/25 to-[#453027]/40 border border-[#FF6D29]/35 flex items-center justify-center text-[#FF8C42] shadow-lg shadow-[#FF6D29]/20">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#FF8C42] mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#10b981] bg-[#10b981]/10 px-3.5 py-1.5 rounded-full border border-[#10b981]/25">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>Credential Completed</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-sm sm:text-base text-[#BABABA] leading-relaxed">
                  {cert.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#BABABA] mb-3">
                    Curriculum &amp; Core Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cert.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#241911]/70 border border-[rgba(255,255,255,0.06)] text-xs text-[#BABABA]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF6D29] shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
