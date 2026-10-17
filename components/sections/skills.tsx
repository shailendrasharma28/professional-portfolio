import { SKILL_CATEGORIES } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CORE COMPETENCIES"
          title="My Technical Toolkit"
          highlightWords="Technical Toolkit"
          subtitle="The tools I use to build web applications, APIs, and data systems."
        />

        <GlassCard elevation="elevated" glow className="p-5 sm:p-8 lg:p-10">
          <div className="divide-y divide-white/[0.08]">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="grid gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[minmax(170px,0.7fr)_2fr] sm:items-center sm:gap-8"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9A67]">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-[#F4EDE8] transition-colors hover:border-[#FF6D29]/50 hover:text-white sm:text-sm"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
