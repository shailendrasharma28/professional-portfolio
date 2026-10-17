"use client";

import React, { useState } from "react";
import {
  Layers,
  Calendar,
  CheckSquare,
  CreditCard,
  Shield,
  Activity,
  Building,
} from "lucide-react";

export function GearBeeMockup() {
  const [activeTab, setActiveTab] = useState<"banquet" | "tasks" | "billing">("banquet");

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
            <Shield className="w-3 h-3 text-[#FF8C42]" />
            gearbee-erp.internal/api/v1/tenant-admin
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#FF6D29]/15 text-[#FF8C42] border border-[#FF6D29]/30 px-2.5 py-0.5 rounded-full font-mono text-[10px]">
            Multi-Tenant: ACTIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[380px]">
        <div className="col-span-3 bg-[#181114] p-3 border-r border-[rgba(255,255,255,0.06)] flex flex-col justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 mb-2 text-white font-bold tracking-tight">
              <Layers className="w-4 h-4 text-[#FF6D29]" />
              <span className="hidden sm:inline">GearBee ERP</span>
            </div>

            <button
              onClick={() => setActiveTab("banquet")}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-all ${
                activeTab === "banquet"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] font-semibold border border-[#FF6D29]/35"
                  : "text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#FF8C42]" />
              <span className="hidden sm:inline">Banquet Ops</span>
            </button>

            <button
              onClick={() => setActiveTab("tasks")}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-all ${
                activeTab === "tasks"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] font-semibold border border-[#FF6D29]/35"
                  : "text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#FF6D29]" />
              <span className="hidden sm:inline">Tasks &amp; SaaS</span>
            </button>

            <button
              onClick={() => setActiveTab("billing")}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-all ${
                activeTab === "billing"
                  ? "bg-[#FF6D29]/20 text-[#FF8C42] font-semibold border border-[#FF6D29]/35"
                  : "text-[#BABABA] hover:bg-[#22171A]"
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 text-[#FF5722]" />
              <span className="hidden sm:inline">User &amp; Billing</span>
            </button>
          </div>

          <div className="pt-3 border-t border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-1.5 text-[10px] text-[#BABABA]">
              <Activity className="w-3 h-3 text-[#10b981]" />
              <span className="hidden sm:inline font-mono">Postgres &amp; MySQL</span>
            </div>
          </div>
        </div>

        <div className="col-span-9 p-4 bg-[#120D0F] overflow-x-auto">
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <div className="bg-[#1C1417] p-2.5 rounded-xl border border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#BABABA] block">Active Enquiries</span>
              <span className="text-base font-bold text-white font-mono">142</span>
              <span className="text-[9px] text-[#10b981] block mt-0.5">↑ 18% this month</span>
            </div>
            <div className="bg-[#1C1417] p-2.5 rounded-xl border border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#BABABA] block">Ledger Balance</span>
              <span className="text-base font-bold text-[#FF8C42] font-mono">₹8,42,000</span>
              <span className="text-[9px] text-[#BABABA] block mt-0.5">Dual-entry verified</span>
            </div>
            <div className="bg-[#1C1417] p-2.5 rounded-xl border border-[rgba(255,255,255,0.06)]">
              <span className="text-[10px] text-[#BABABA] block">Tenant Nodes</span>
              <span className="text-base font-bold text-white font-mono">18 Orgs</span>
              <span className="text-[9px] text-[#FF6D29] block mt-0.5">RBAC Enforced</span>
            </div>
          </div>

          {activeTab === "banquet" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#BABABA] font-semibold pb-1 border-b border-[rgba(255,255,255,0.06)]">
                <span>Event Reservations &amp; Multi-Hall Scheduling</span>
                <span className="font-mono text-[#FF8C42]">Sequelize Transactions</span>
              </div>
              <div className="space-y-2">
                {[
                  {
                    client: "Royal Palace Wedding Gala",
                    hall: "Grand Sapphire Hall",
                    date: "24 Oct 2026",
                    status: "Confirmed",
                    payment: "Paid 70%",
                    color: "text-[#10b981] bg-[#10b981]/15 border-[#10b981]/30",
                  },
                  {
                    client: "Tech Conclave 2026",
                    hall: "Convention Center A",
                    date: "02 Nov 2026",
                    status: "Advance Recvd",
                    payment: "Paid 50%",
                    color: "text-[#FF8C42] bg-[#FF6D29]/15 border-[#FF6D29]/30",
                  },
                  {
                    client: "Corporate Executive Dinner",
                    hall: "Skyline Lounge",
                    date: "14 Nov 2026",
                    status: "Enquiry Open",
                    payment: "Pending",
                    color: "text-[#eab308] bg-[#eab308]/15 border-[#eab308]/30",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#1C1417]/80 border border-[rgba(255,255,255,0.06)] flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white text-xs">{item.client}</p>
                      <p className="text-[10px] text-[#BABABA]">
                        {item.hall} · <span className="font-mono">{item.date}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${item.color}`}
                      >
                        {item.status}
                      </span>
                      <p className="text-[9px] text-[#BABABA] mt-0.5 font-mono">{item.payment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tasks" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#BABABA] font-semibold pb-1 border-b border-[rgba(255,255,255,0.06)]">
                <span>Dynamic Task Workflow Pipeline</span>
                <span className="font-mono text-[#FF6D29]">State Machine</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#1C1417]/80 p-3 rounded-xl border border-[rgba(255,255,255,0.06)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#FF8C42]">STAGE: IN-PROGRESS</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29]" />
                  </div>
                  <p className="font-medium text-white">Banquet Ledger Reconciliation</p>
                  <p className="text-[10px] text-[#BABABA] mt-1">Assignee: Finance Operations Lead</p>
                </div>
                <div className="bg-[#1C1417]/80 p-3 rounded-xl border border-[rgba(255,255,255,0.06)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-[#FF5722]">STAGE: AUDIT READY</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                  </div>
                  <p className="font-medium text-white">Tenant RBAC Policy Sync</p>
                  <p className="text-[10px] text-[#BABABA] mt-1">Assignee: Platform Admin</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#BABABA] font-semibold pb-1 border-b border-[rgba(255,255,255,0.06)]">
                <span>Centralized Tenant Subscription Lifecycle</span>
                <span className="font-mono text-[#FF8C42]">JWT &amp; Auth Hooks</span>
              </div>
              <div className="p-3 bg-[#1C1417]/80 rounded-xl border border-[rgba(255,255,255,0.06)] space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-white flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#FF6D29]" /> Enterprise Plan (Annual)
                  </span>
                  <span className="font-mono text-[#10b981] font-semibold">Active &amp; Renewed</span>
                </div>
                <div className="w-full bg-[#120D0F] h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FF6D29] to-[#FF8C42] h-full w-[78%]" />
                </div>
                <div className="flex justify-between text-[10px] text-[#BABABA] font-mono">
                  <span>Seats: 48 / 60 Assigned</span>
                  <span>Invoice: #INV-2026-881</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
