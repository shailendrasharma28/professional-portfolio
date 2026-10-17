"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  elevation?: "default" | "elevated" | "flat";
  hoverEffect?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  glow = false,
  elevation = "default",
  hoverEffect = true,
  onClick,
}: GlassCardProps) {
  const elevationClasses = {
    flat: "bg-[#181315]/70 border border-[rgba(255,255,255,0.08)]",
    default: "glass-panel",
    elevated: "glass-panel-elevated",
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-3xl transition-all duration-350 relative overflow-hidden ${
        elevationClasses[elevation]
      } ${glow ? "glass-panel-glow" : ""} ${
        hoverEffect && !glow
          ? "hover:border-[rgba(255,109,41,0.4)] hover:shadow-2xl hover:shadow-[#0d0b0d]/90 hover:-translate-y-1"
          : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,109,41,0.35)] to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
