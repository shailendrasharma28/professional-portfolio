"use client";

import React from "react";
import {
  GraduationCap,
  Calendar,
  BookOpen,
  MapPin,
} from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ACADEMIC BACKGROUND"
          title="Education & Learning"
          highlightWords="Education & Learning"
          subtitle="Foundational computer science education, distributed systems theory, and rigorous academic training."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <GlassCard key={idx} elevation="elevated" className="p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#261B1E] border border-[rgba(255,109,41,0.25)] flex items-center justify-center text-[#FF8C42] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-[#FF8C42] bg-[#FF6D29]/15 px-3 py-1 rounded-full border border-[#FF6D29]/30 block">
                      {edu.grade}
                    </span>
                    <span className="text-[11px] font-mono text-[#BABABA] mt-1.5 block flex items-center justify-end gap-1">
                      <Calendar className="w-3 h-3 text-[#FF6D29]" />
                      {edu.year}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5722]">
                    {edu.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-medium text-[#BABABA] mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#FF6D29] shrink-0" />
                    {edu.institution}
                  </p>
                </div>

                {edu.focus && (
                  <p className="text-xs text-[#BABABA] leading-relaxed pt-3 border-t border-[rgba(255,255,255,0.06)]">
                    {edu.focus}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[11px] text-[#BABABA] font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FF6D29]" />
                  {edu.location}
                </span>
                <span className="text-[#10b981]">Verified Academic Record</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
