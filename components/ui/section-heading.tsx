import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWords?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightWords,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  let titleContent: React.ReactNode = title;
  if (highlightWords && title.includes(highlightWords)) {
    const parts = title.split(highlightWords);
    titleContent = (
      <>
        {parts[0]}
        <span className="gradient-text-orange font-extrabold">{highlightWords}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={`mb-14 md:mb-20 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${isCenter ? "justify-center" : ""}`}>
          <span className="font-mono text-xs uppercase tracking-wider text-[#FF8C42] font-semibold px-3.5 py-1.5 rounded-full bg-[#FF6D29]/15 border border-[#FF6D29]/35 shadow-sm">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.12]">
        {titleContent}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-[#BABABA] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
