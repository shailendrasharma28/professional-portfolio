"use client";

import React from "react";
import {
  Lightbulb,
  BarChart3,
  Users2,
  ArrowUpRight,
  GraduationCap,
  Terminal,
} from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      num: "01",
      icon: <Lightbulb className="w-6 h-6 text-[#FF8C42]" />,
      title: "Scalability with purpose",
      desc: "Modular microservices, centralized auth, and decoupled logic that handle real enterprise load effortlessly.",
    },
    {
      num: "02",
      icon: <BarChart3 className="w-6 h-6 text-[#FF6D29]" />,
      title: "Integrity in everything",
      desc: "Strict ACID transactions, dual-entry financial ledgers, and zero-drift database consistency across all states.",
    },
    {
      num: "03",
      icon: <Users2 className="w-6 h-6 text-[#FF8C42]" />,
      title: "Performance that matters",
      desc: "Dynamic XML sitemaps for SEO spiders, low-latency endpoints, and real-time Socket.IO synchronization.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6D29]/20 via-[#453027]/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#FF4500]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF8C42] font-semibold px-4 py-1.5 rounded-full bg-[#FF6D29]/15 border border-[#FF6D29]/35 shadow-sm">
                Built on
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Built on <span className="gradient-text-orange">Principles.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#BABABA] max-w-xl leading-relaxed">
              These engineering values drive everything I build â€” from database schema design to high-throughput production deployment.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 rounded-3xl bg-[#1C1517]/85 backdrop-blur-2xl border border-[rgba(255,109,41,0.25)] shadow-2xl flex items-center justify-between gap-6 max-w-xs w-full">
              <div className="space-y-1 text-sm font-semibold text-white">
                <p>Architecture.</p>
                <p>Process.</p>
                <p className="text-[#FF8C42]">Reliability.</p>
              </div>

              <a
                href="#experience"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6D29] to-[#FF3D00] flex items-center justify-center text-white shadow-lg shadow-[#FF6D29]/35 hover:scale-105 transition-transform"
                aria-label="View Experience"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-5 mb-16">
          {principles.map((principle) => (
            <div
              key={principle.num}
              className="p-6 sm:p-8 rounded-3xl bg-[#1A1315]/80 backdrop-blur-xl border border-[rgba(255,109,41,0.2)] hover:border-[#FF6D29]/50 hover:bg-[#22181B] transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3D2522] to-[#1E1416] border border-[rgba(255,109,41,0.35)] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF6D29]/15 group-hover:scale-105 transition-transform">
                    {principle.icon}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF8C42] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#BABABA] mt-1 max-w-2xl leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>

                <span className="text-3xl sm:text-5xl font-black font-mono text-[#BABABA]/30 group-hover:text-[#FF6D29]/50 transition-colors">
                  {principle.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#181214]/90 backdrop-blur-2xl border border-[rgba(255,109,41,0.22)] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-12 max-w-4xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF8C42]">
                <Terminal className="w-4 h-4" />
                <span>EXPERIENCE &amp; ARCHITECTURAL EXPERTISE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Engineering high-concurrency backend services with{" "}
                <span className="gradient-text-orange">clean data models.</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#BABABA] leading-relaxed">
                <p>
                  I am a Software Engineer with <strong className="text-white">2+ years</strong> of dedicated production experience building web applications, RESTful services, database transaction pipelines, and multi-tenant architectures using Node.js, Express.js, TypeScript, MySQL, and PostgreSQL.
                </p>
                <p>
                  At <strong className="text-[#FF8C42]">Media Tech Temple Pvt. Ltd.</strong>, I built mission-critical backend modules for the GearBee ERP platform (handling centralized authentication, tenant billing, banquet event reservations, and dynamic workflow task boards) as well as the high-traffic government employment portal <strong className="text-white">India Sarkari Naukri</strong> with automated XML sitemaps for SEO spiders.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#BABABA]">
                  <GraduationCap className="w-4 h-4 text-[#FF8C42]" />
                  <span><strong className="text-white">MCA completed</strong> (University of Technology, 2026)</span>
                </div>
                <span className="text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/20">
                  Open to Backend Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#BABABA] pt-6 border-t border-[rgba(255,255,255,0.06)]">
          <span>Ideas. Architecture. Scalability.</span>
          <a
            href="#contact"
            className="flex items-center gap-2 text-white hover:text-[#FF8C42] transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 text-[#FF6D29]" />
            <span>Let&apos;s build scalable systems together.</span>
          </a>
        </div>
      </div>
    </section>
  );
}
