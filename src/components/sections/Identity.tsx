"use client";

import { ArrowRight, Check } from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";

export default function Identity() {
  const { identity } = siteData;

  return (
    <section id="caminho" className="relative bg-[#0D0B08] py-24 lg:py-32 overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, #C4903A 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #C4903A 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="max-w-[88rem] mx-auto px-6">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#F5F0E8] mb-5 text-balance">
              {identity.headline}
            </h2>
            <p className="text-[rgba(245,240,232,0.52)] text-base md:text-lg leading-relaxed">
              {identity.subtext}
            </p>
          </div>
        </Reveal>

        {/* FROM / TO columns */}
        <Reveal delay={80}>
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-5">

            {/* FROM */}
            <div className="flex-1 glass rounded-3xl p-7 md:p-8">
              <div className="mb-6">
                <p className="text-[rgba(245,240,232,0.3)] text-xs tracking-[0.18em] uppercase mb-2">
                  De onde
                </p>
                <h3 className="font-display text-[1.4rem] md:text-[1.7rem] font-medium text-[rgba(245,240,232,0.65)] tracking-[-0.025em]">
                  {identity.from.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {identity.from.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[rgba(245,240,232,0.52)] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.18)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex md:flex-col items-center justify-center gap-3 px-2 py-4">
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-[rgba(196,144,58,0.35)] to-transparent" />
              <div className="w-10 h-10 glass-amber rounded-full flex items-center justify-center shrink-0">
                <ArrowRight size={15} weight="bold" className="text-[#C4903A] md:rotate-90" />
              </div>
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-[rgba(196,144,58,0.35)] to-transparent" />
            </div>

            {/* TO */}
            <div className="flex-1 glass-strong rounded-3xl p-7 md:p-8">
              <div className="mb-6">
                <p className="text-[#C4903A] text-xs tracking-[0.18em] uppercase mb-2">
                  Para onde
                </p>
                <h3 className="font-display text-[1.4rem] md:text-[1.7rem] font-medium text-[#F5F0E8] tracking-[-0.025em]">
                  {identity.to.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {identity.to.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[rgba(245,240,232,0.75)] text-sm">
                    <span className="w-4 h-4 rounded-full bg-[rgba(196,144,58,0.16)] flex items-center justify-center shrink-0">
                      <Check size={9} weight="bold" className="text-[#C4903A]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Reveal>

        {/* Scripture */}
        <Reveal delay={140}>
          <blockquote className="mt-12 text-center max-w-xl mx-auto">
            <p className="font-serif text-[1.2rem] md:text-[1.5rem] italic text-[rgba(245,240,232,0.50)] leading-[1.5] mb-3">
              &ldquo;{identity.verseText}&rdquo;
            </p>
            <cite className="text-xs text-[rgba(245,240,232,0.28)] tracking-widest uppercase not-italic font-medium">
              {identity.verse}
            </cite>
          </blockquote>
        </Reveal>

      </div>
    </section>
  );
}
