"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ExternalLink, Lock, Maximize2, X } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { TechnologyTag } from "@/components/ui/technology-tag";
import { GearBeeMockup } from "@/components/projects/gearbee-mockup";
import { JobPortalMockup } from "@/components/projects/job-portal-mockup";
import { HRMSMockup } from "@/components/projects/hrms-mockup";

export function ProjectsSection() {
  const renderProjectMockup = (id: string) => {
    switch (id) {
      case "gearbee-erp":
        return <GearBeeMockup />;
      case "india-sarkari-naukri":
        return <JobPortalMockup />;
      case "hrms-software":
        return <HRMSMockup />;
      default:
        return <GearBeeMockup />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Selected Work"
          highlightWords="Selected Work"
          subtitle="Systems, platforms, and applications built to solve real problems."
        />

        <div className="space-y-10 sm:space-y-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-1 bg-gradient-to-b from-[rgba(255,109,41,0.22)] via-[rgba(69,48,39,0.15)] to-transparent"
            >
              <GlassCard elevation="elevated" className="p-4 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  <div className="lg:col-span-12 mx-auto w-full max-w-5xl min-w-0 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#FF8C42] bg-[#FF6D29]/15 px-3 py-1 rounded-full border border-[#FF6D29]/30">
                        {project.category}
                      </span>
                      {project.isPrivate ? (
                        <span className="font-mono text-xs text-[#BABABA] bg-[#1E1618] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center gap-1">
                          <Lock className="w-3 h-3 text-[#eab308]" /> Enterprise Internal
                        </span>
                      ) : project.liveUrl ? (
                        <span className="font-mono text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/25 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                          Live Production
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-[#BABABA] bg-[#1E1618] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)]">
                          Project Preview
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#FF8C42] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#BABABA] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-2xl bg-[#241911]/80 border border-[rgba(255,255,255,0.08)]"
                        >
                          <span className="text-[10px] text-[#BABABA] block font-mono">
                            {metric.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 block">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#BABABA]">
                        Core Engineering Scope
                      </h4>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#BABABA]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29] mt-2 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <TechnologyTag key={tag} name={tag} size="sm" highlight={tag === "Node.js" || tag === "TypeScript" || tag === "MySQL"} />
                        ))}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6D29] to-[#FF4500] text-xs font-mono text-white hover:brightness-110 transition-all font-semibold shadow-md shadow-[#FF6D29]/25"
                        >
                          <span>Visit Production Portal</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="lg:col-span-12">
                    <ProjectImageCarousel
                      images={project.images ?? []}
                      title={project.title}
                      fallback={renderProjectMockup(project.id)}
                    />
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

function ProjectImageCarousel({
  images,
  title,
  fallback,
}: {
  images: { src: string; alt?: string }[];
  title: string;
  fallback: React.ReactNode;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const previewRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const slideCount = images.length || 3;
  const closePreview = useCallback(() => {
    setIsExpanded(false);
    previewRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded, closePreview]);

  const showImage = (index: number) => setActiveImage((index + slideCount) % slideCount);
  const handleSwipe = (endX?: number) => {
    if (touchStartX.current === null || endX === undefined) return;
    const distance = endX - touchStartX.current;
    if (distance > 48) showImage(activeImage - 1);
    if (distance < -48) showImage(activeImage + 1);
    touchStartX.current = null;
  };

  return (
    <div className="project-preview project-image-carousel">
      <div className="project-image-stage">
        <button className="project-image-side-nav" aria-label={`Previous ${title} image`} onClick={() => showImage(activeImage - 1)}><ChevronLeft size={19} /></button>
        <div
          className={`project-image-window ${images.length === 0 ? "project-mockup-window" : ""}`}
          onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => handleSwipe(event.changedTouches[0]?.clientX)}
        >
          <div className="project-image-track" style={{ width: `${slideCount * 100}%`, transform: `translateX(-${activeImage * (100 / slideCount)}%)` }}>
            {Array.from({ length: slideCount }, (_, index) => (
              <div className="project-image-slide" style={{ width: `${100 / slideCount}%`, flexBasis: `${100 / slideCount}%` }} key={images[index]?.src ?? `placeholder-${index}`} aria-hidden={activeImage !== index} inert={activeImage !== index}>
                {images[index] ? (
                  <Image src={images[index].src} alt={images[index].alt ?? `${title} preview ${index + 1}`} fill sizes="(max-width: 900px) 90vw, 560px" />
                ) : (
                  <div className="project-fallback-slide">{fallback}</div>
                )}
              </div>
            ))}
          </div>
          <button ref={previewRef} className="project-preview-zoom" onClick={() => setIsExpanded(true)} aria-label={`Open ${title} preview larger`}>
            <span className="project-preview-zoom-label"><Maximize2 size={15} /> Enlarge preview</span>
          </button>
        </div>
        <button className="project-image-side-nav" aria-label={`Next ${title} image`} onClick={() => showImage(activeImage + 1)}><ChevronRight size={19} /></button>
      </div>
      <div className="project-image-controls">
        <span>{String(activeImage + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}</span>
        {slideCount > 1 && <div className="project-image-dots">
          {Array.from({ length: slideCount }, (_, index) => (
            <button key={images[index]?.src ?? `placeholder-dot-${index}`} aria-label={`Show image ${index + 1} of ${title}`} aria-pressed={activeImage === index} className={activeImage === index ? "active" : ""} onClick={() => showImage(index)} />
          ))}
        </div>}
      </div>
      {isExpanded && typeof document !== "undefined" && createPortal(
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${title} preview`} onClick={closePreview}>
          <div className={`project-lightbox-panel ${images[activeImage] ? "" : "project-lightbox-mockup"}`} onClick={(event) => event.stopPropagation()}>
            <button ref={closeButtonRef} className="project-lightbox-close" onClick={closePreview} aria-label="Close enlarged preview"><X size={19} /></button>
            <div className="project-lightbox-content">
              {images[activeImage] ? (
                <Image src={images[activeImage].src} alt={images[activeImage].alt ?? `${title} preview ${activeImage + 1}`} fill sizes="96vw" />
              ) : fallback}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
