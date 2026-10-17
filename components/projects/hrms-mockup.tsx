"use client";

import React, { useState } from "react";
import {
  Clock,
  CalendarCheck,
  DollarSign,
  Database,
  Zap,
  CheckCircle,
} from "lucide-react";

export function HRMSMockup() {
  const [view, setView] = useState<"attendance" | "payroll" | "leaves">("payroll");

  return (
    <div className="w-full bg-[#130E10] rounded-2xl border border-[rgba(255,109,41,0.22)] overflow-hidden shadow-2xl text-xs font-sans select-none">
      <div className="bg-[#1C1417] px-4 py-3 border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-[#BABABA] flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-[#FF6D29]" />
            hrms-core.enterprise/api/v1/payroll-engine
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#FF6D29]/15 text-[#FF8C42] border border-[#FF6D29]/30 px-2.5 py-0.5 rounded-full font-mono text-[10px] flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#FF6D29]" />
            Redis Session Cache: HIT
          </span>
        </div>
      </div>

      <div className="p-4 bg-[#120D0F] space-y-3">
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-2.5">
          <div className="flex gap-2">
            <button
              onClick={() => setView("payroll")}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-all ${
                view === "payroll"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] border border-[#FF6D29]/35 font-semibold"
                  : "bg-[#1C1417] text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 text-[#FF6D29]" />
              Payroll Calculation
            </button>
            <button
              onClick={() => setView("attendance")}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-all ${
                view === "attendance"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] border border-[#FF6D29]/35 font-semibold"
                  : "bg-[#1C1417] text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-[#FF8C42]" />
              Attendance &amp; Shifts
            </button>
            <button
              onClick={() => setView("leaves")}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-all ${
                view === "leaves"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] border border-[#FF6D29]/35 font-semibold"
                  : "bg-[#1C1417] text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#FF5722]" />
              Leave Approvals
            </button>
          </div>
          <span className="hidden sm:inline font-mono text-[10px] text-[#BABABA]">
            PostgreSQL Schema: v2.4
          </span>
        </div>

        {view === "payroll" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-[#1C1417]/80 p-3 rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">Monthly Disbursal</span>
                <p className="text-base font-bold text-white font-mono mt-0.5">₹24,85,500</p>
                <span className="text-[9px] text-[#10b981]">Calculated automatically</span>
              </div>
              <div className="bg-[#1C1417]/80 p-3 rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">Deductions &amp; TDS</span>
                <p className="text-base font-bold text-[#FF8C42] font-mono mt-0.5">₹2,14,300</p>
                <span className="text-[9px] text-[#BABABA]">Form 16 Tax Rules</span>
              </div>
              <div className="bg-[#1C1417]/80 p-3 rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">Employees on Payroll</span>
                <p className="text-base font-bold text-white font-mono mt-0.5">86 Staff</p>
                <span className="text-[9px] text-[#10b981]">100% Payslips Dispatched</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#181114] rounded-2xl border border-[rgba(255,255,255,0.06)] space-y-2">
              <div className="flex justify-between items-center text-[11px] font-semibold text-white">
                <span>Sample Payslip Engine Breakdown</span>
                <span className="font-mono text-[#FF8C42]">Auto-Batch Processing</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                <div className="bg-[#1C1417] p-2.5 rounded-xl">
                  <span className="text-[#BABABA] block">Base Pay</span>
                  <span className="text-white font-semibold">₹65,000</span>
                </div>
                <div className="bg-[#1C1417] p-2.5 rounded-xl">
                  <span className="text-[#BABABA] block">HRA &amp; Allowances</span>
                  <span className="text-[#FF8C42] font-semibold">+₹18,500</span>
                </div>
                <div className="bg-[#1C1417] p-2.5 rounded-xl">
                  <span className="text-[#BABABA] block">PF &amp; Tax</span>
                  <span className="text-[#ef4444] font-semibold">-₹7,200</span>
                </div>
                <div className="bg-[#1C1417] p-2.5 rounded-xl">
                  <span className="text-[#BABABA] block">Net Payable</span>
                  <span className="text-[#10b981] font-semibold">₹76,300</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "attendance" && (
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 bg-[#1C1417] rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">Today Clock-In</span>
                <p className="text-base font-bold text-[#10b981] font-mono">96.4%</p>
                <span className="text-[9px] text-[#BABABA]">82 Present</span>
              </div>
              <div className="p-3 bg-[#1C1417] rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">On Approved Leave</span>
                <p className="text-base font-bold text-[#FF8C42] font-mono">4</p>
                <span className="text-[9px] text-[#BABABA]">Planned PTO</span>
              </div>
              <div className="p-3 bg-[#1C1417] rounded-2xl border border-[rgba(255,255,255,0.06)]">
                <span className="text-[10px] text-[#BABABA]">Shift Compliance</span>
                <p className="text-base font-bold text-white font-mono">99.1%</p>
                <span className="text-[9px] text-[#10b981]">Zero Drift</span>
              </div>
            </div>
          </div>
        )}

        {view === "leaves" && (
          <div className="space-y-2">
            {[
              {
                emp: "Rohan Verma",
                role: "Senior Frontend Engineer",
                type: "Privilege Leave",
                days: "3 Days",
                status: "Approved by Lead",
                color: "text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30",
              },
              {
                emp: "Priya Sundaram",
                role: "Product Designer",
                type: "Medical Leave",
                days: "2 Days",
                status: "Pending HR Audit",
                color: "text-[#eab308] bg-[#eab308]/10 border-[#eab308]/30",
              },
            ].map((leave, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-[#1C1417]/80 border border-[rgba(255,255,255,0.06)] flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-white text-xs">{leave.emp}</p>
                  <p className="text-[10px] text-[#BABABA]">
                    {leave.role} · <span className="font-mono text-[#FF8C42]">{leave.type} ({leave.days})</span>
                  </p>
                </div>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${leave.color}`}>
                  {leave.status}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="p-2.5 bg-[#181114] rounded-xl border border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] text-[#BABABA] font-mono">
          <span className="flex items-center gap-1.5 text-[#FF8C42]">
            <CheckCircle className="w-3.5 h-3.5 text-[#FF6D29]" /> Full-Stack Architecture
          </span>
          <span>Node.js · Express.js · PostgreSQL · Redis · React.js</span>
        </div>
      </div>
    </div>
  );
}
