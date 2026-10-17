"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { TechnologyTag } from "@/components/ui/technology-tag";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WORK EXPERIENCE"
          title="Building Real-World Systems"
          highlightWords="Real-World Systems"
          subtitle="Production software development at startup scale — architecting backend services that drive real-world business operations."
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-6 bottom-6 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-[#FF6D29] via-[#FF8C42] to-[rgba(255,255,255,0.05)]" />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 sm:pl-20 mb-12 last:mb-0">
              <div className="absolute left-1 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-[#100B09] border-2 border-[#FF6D29] flex items-center justify-center shadow-lg shadow-[#FF6D29]/40">
                <span className="w-2 h-2 rounded-full bg-[#FF6D29] animate-ping" />
              </div>

              <GlassCard elevation="elevated" className="p-6 sm:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[rgba(255,255,255,0.08)]">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-[#10b981] bg-[#10b981]/15 px-3 py-0.5 rounded-full border border-[#10b981]/30">
                        Current Role
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6D29]/40 bg-[#FF6D29]/10 px-3 py-1 font-mono text-xs font-semibold text-[#FFB28E] shadow-sm shadow-[#FF6D29]/10">
                        <Calendar className="w-3.5 h-3.5 text-[#FF8C42]" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#BABABA]">
                      <span className="font-semibold text-[#FF8C42]">
                        {exp.company}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-[#BABABA] text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#261B1E] border border-[rgba(255,109,41,0.25)] text-[#FF8C42]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#BABABA] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    Core Engineering Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#BABABA] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#BABABA] mb-3">
                    Architectural Milestones
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {exp.architectureHighlights.map((arch, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 rounded-2xl bg-[#1E1618]/70 border border-[rgba(255,255,255,0.08)] space-y-1"
                      >
                        <p className="text-xs font-semibold text-white">
                          {arch.title}
                        </p>
                        <p className="text-[11px] text-[#BABABA] leading-snug">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#BABABA] mb-2.5">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <TechnologyTag key={tech} name={tech} highlight={tech === "TypeScript" || tech === "Node.js" || tech === "Sequelize ORM"} />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
