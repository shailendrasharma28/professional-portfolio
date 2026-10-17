"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "orange";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  download,
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6D29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B0D] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FF6D29] via-[#FF5722] to-[#FF3D00] text-white shadow-lg shadow-[#FF6D29]/30 hover:shadow-[#FF6D29]/50 hover:from-[#FF8C42] hover:to-[#FF6D29] border border-[#FF8C42]/40",
    secondary:
      "bg-[#241C1F]/80 text-[#FFFFFF] hover:bg-[#322428] border border-[rgba(255,255,255,0.14)] hover:border-[#FF6D29]/40 shadow-md backdrop-blur-md",
    outline:
      "bg-transparent text-[#FFFFFF] hover:bg-[#FF6D29]/10 border border-[rgba(255,109,41,0.35)] hover:border-[#FF6D29] hover:text-[#FF8C42]",
    ghost:
      "bg-transparent text-[#BABABA] hover:text-[#FFFFFF] hover:bg-[#241C1F]/50",
    orange:
      "bg-[#FF6D29] text-white font-semibold hover:bg-[#FF8C42] shadow-lg shadow-[#FF6D29]/35 hover:shadow-[#FF6D29]/55",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (download || external) {
      return (
        <a
          href={href}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClass}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
}
