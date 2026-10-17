"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Flame,
  Globe2,
  TrendingUp,
} from "lucide-react";

export function JobPortalMockup() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Railway", "Bank", "SSC", "Police", "State Jobs"];

  const jobs = [
    {
      title: "RRB Non-Technical Popular Categories (NTPC)",
      dept: "Railway Recruitment Board",
      tag: "Railway",
      posts: "11,558 Posts",
      lastDate: "Apply by Nov 20, 2026",
      status: "Active Notification",
    },
    {
      title: "SBI Probationary Officer (PO) Recruitment 2026",
      dept: "State Bank of India",
      tag: "Bank",
      posts: "2,000 Posts",
      lastDate: "Apply by Nov 15, 2026",
      status: "Admit Card Out",
    },
    {
      title: "SSC Combined Graduate Level (CGL) Tier-I",
      dept: "Staff Selection Commission",
      tag: "SSC",
      posts: "17,727 Posts",
      lastDate: "Exam City Slip Live",
      status: "Results Declared",
    },
    {
      title: "Rajasthan Police Constable & SI Examination",
      dept: "Rajasthan Police Department",
      tag: "Police",
      posts: "3,578 Posts",
      lastDate: "Apply by Dec 05, 2026",
      status: "Online Form",
    },
  ];

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter((j) => j.tag === activeCategory);

  return (
    <div className="w-full bg-[#130E10] rounded-2xl border border-[rgba(255,109,41,0.22)] overflow-hidden shadow-2xl text-xs font-sans select-none">
      <div className="bg-[#1C1417] px-4 py-3 border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
          </div>
          <a
            href="https://indiasarkarinaukri.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 font-mono text-[11px] text-[#FF8C42] flex items-center gap-1.5 hover:underline"
          >
            <Globe2 className="w-3.5 h-3.5" />
            https://indiasarkarinaukri.com
            <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-70" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 px-2.5 py-0.5 rounded-full font-mono text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            XML Sitemap Auto-Sync
          </span>
        </div>
      </div>

      <div className="bg-[#181114] p-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FF6D29]/20 border border-[#FF6D29]/40 flex items-center justify-center text-[#FF8C42] font-bold">
              ISN
            </div>
            <div>
              <h4 className="font-bold text-white text-sm leading-none">
                India Sarkari Naukri
              </h4>
              <p className="text-[10px] text-[#BABABA] mt-1 font-mono">
                Govt Job Notifications · Dynamic REST APIs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-[#FF8C42] bg-[#22171A] px-3 py-1 rounded-full border border-[rgba(255,109,41,0.25)]">
            <Flame className="w-3 h-3 text-[#FF6D29]" />
            <span className="font-medium">Live Feed: 14 New Updates Today</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#FF6D29] to-[#FF4500] text-white shadow-md shadow-[#FF6D29]/30 font-semibold"
                  : "bg-[#22171A] text-[#BABABA] hover:text-white hover:bg-[#2A1D21]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-[#120D0F] space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-[#1C1417]/80 hover:bg-[#22181B] p-3.5 rounded-2xl border border-[rgba(255,255,255,0.06)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[10px] text-[#FF8C42] bg-[#FF6D29]/15 px-2.5 py-0.5 rounded-full border border-[#FF6D29]/30">
                    {job.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#BABABA]">
                    {job.posts}
                  </span>
                </div>
                <h5 className="font-semibold text-white text-xs group-hover:text-[#FF8C42] transition-colors leading-snug">
                  {job.title}
                </h5>
                <p className="text-[10px] text-[#BABABA] mt-1">{job.dept}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px]">
                <span className="text-[#BABABA] font-mono">{job.lastDate}</span>
                <span className="text-[#10b981] font-semibold">{job.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#181114] rounded-xl border border-[rgba(255,255,255,0.06)] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#BABABA] font-mono">
          <span className="flex items-center gap-1.5 text-[#FF8C42]">
            <CheckCircle2 className="w-3.5 h-3.5" /> RESTful Indexing Engine
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#FF6D29]" /> Dynamic XML Sitemaps
          </span>
          <span className="text-white">Node.js · Express.js · MySQL</span>
        </div>
      </div>
    </div>
  );
}
