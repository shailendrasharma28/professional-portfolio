"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const specialties = ["Full-stack development", "Web applications", "APIs & data systems"];

export function HeroSection() {
  return (
    <section id="home" className="hero-shell relative isolate overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="section-wrap relative z-10">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Hey, I&apos;m</p>
            <h1 className="hero-title-enter">Shailendra<br /><span>Sharma</span></h1>
            <p className="hero-description">I&apos;m a Software Engineer with 2+ years of experience building web applications, REST APIs, and data systems using Node.js, TypeScript, and SQL.</p>
            <div className="hero-actions">
              <Button href="#projects" variant="primary" size="lg" icon={<ArrowUpRight size={17} />}>Explore my work</Button>
              <Button href={PERSONAL_INFO.resumePath} variant="secondary" size="lg" download icon={<Download size={16} />}>Download CV</Button>
            </div>
            <div className="hero-location"><MapPin size={15} /> {PERSONAL_INFO.location}</div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-photo-frame">
              <Image src={PERSONAL_INFO.profileImage} alt={PERSONAL_INFO.name} fill priority sizes="(max-width: 768px) 80vw, 440px" className="hero-photo" />
            </div>
            <div className="hero-float-card">
              <div className="hero-float-content">
                <span className="hero-float-label">CURRENTLY</span>
                <strong>Building reliable digital foundations.</strong>
              </div>
              <span className="hero-float-status"><i /> Open to opportunities</span>
            </div>
            <div className="hero-socials">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon className="w-[17px] h-[17px]" /></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon className="w-[17px] h-[17px]" /></a>
            </div>
          </div>
        </div>

        <div className="hero-bottomline">
          <a href="#about" className="scroll-link"><span><ArrowDown size={15} /></span> Scroll to explore</a>
          <div className="specialty-list">{specialties.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
