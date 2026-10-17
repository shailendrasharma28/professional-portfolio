import React from "react";

interface TechnologyTagProps {
  name: string;
  size?: "sm" | "md";
  highlight?: boolean;
  className?: string;
}

export function TechnologyTag({
  name,
  size = "md",
  highlight = false,
  className = "",
}: TechnologyTagProps) {
  const sizeStyles = {
    sm: "px-3 py-1 text-xs font-mono",
    md: "px-3.5 py-1.5 text-xs font-mono tracking-tight",
  };

  const highlightStyles = highlight
    ? "bg-[#FF6D29]/15 text-[#FF8C42] border-[#FF6D29]/40 shadow-sm shadow-[#FF6D29]/20"
    : "bg-[#1C1618]/80 text-[#BABABA] border-[rgba(255,255,255,0.1)] hover:text-[#FFFFFF] hover:border-[#FF6D29]/35";

  return (
    <span
      className={`inline-flex items-center rounded-full border transition-all duration-200 select-none ${sizeStyles[size]} ${highlightStyles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-2 bg-[#FF6D29] shrink-0" />
      {name}
    </span>
  );
}
