"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const founderStats = [
  { number: "+10 anos",   sub: "de ministério ativo" },
  { number: "+5.000",     sub: "vidas impactadas" },
  { number: "2 nações",   sub: "Brasil e Estados Unidos" },
  { number: "Casais, Famílias e Líderes", sub: "mentorados" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current || !photoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(photoRef.current, {
        x: -56,
        opacity: 0,
        scale: 0.94,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: { trigger: photoRef.current, start: "top 82%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  const { about } = siteData;

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0906]"
    >
      {/* Ambient orange glow — top-right, like Rodolfo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8%] top-[8%] h-[36rem] w-[36rem] rounded-full bg-[#C4903A]/12 blur-[140px]" />
        <div className="absolute left-[-5%] bottom-[15%] h-[24rem] w-[24rem] rounded-full bg-[#C4903A]/06 blur-[120px]" />
      </div>
      {/* Subtle top separator gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0906] to-transparent pointer-events-none" />
      {/* Subtle bottom separator gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0906] to-transparent pointer-events-none" />

      <div className="relative max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-28">

        {/* ── Two-column: photo left, text right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT — photo */}
          <div ref={photoRef}>
            <figure className="glass relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/paulo-picture/paulo-description-section.JPG"
                alt="Pastor Paulo Oliveira"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              {/* Bottom gradient for name legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(10,9,6,0.85)] via-[rgba(10,9,6,0.25)] to-transparent" />
              <figcaption className="absolute bottom-5 left-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C4903A]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[rgba(245,240,232,0.80)] font-medium">
                  Paulo Oliveira · Pastor
                </span>
              </figcaption>
            </figure>
          </div>

          {/* RIGHT — text */}
          <Reveal>
            <div className="pt-0 lg:pt-4">

              {/* Eyebrow */}
              <p className="text-[#C4903A] text-[10px] font-medium tracking-[0.34em] uppercase mb-7">
                {about.eyebrow}
              </p>

              {/* Headline — Inter Tight + Playfair accent */}
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#F5F0E8] mb-9 text-balance">
                10 anos. Duas nações.
                Identidades restauradas. Um{" "}
                <span className="font-serif font-normal italic tracking-[-0.01em] text-amber-gradient">
                  ministério.
                </span>
              </h2>

              {/* Body */}
              <div className="space-y-4 mb-9">
                {about.paragraphs.map((para, i) => (
                  <p key={i} className="text-[rgba(245,240,232,0.52)] text-[15px] md:text-base leading-relaxed max-w-[520px]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quote — Playfair italic block, like Oyster's AVirada blockquote */}
              <blockquote className="pt-8 border-t border-[rgba(255,255,255,0.07)]">
                <p className="font-serif italic text-[rgba(245,240,232,0.40)] text-[17px] md:text-[1.15rem] leading-[1.6] max-w-[500px]">
                  &ldquo;{about.quote}&rdquo;
                </p>
              </blockquote>

            </div>
          </Reveal>
        </div>

        {/* ── Stats strip — 4 glass cards ── */}
        <Reveal delay={80}>
          <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {founderStats.map((stat) => (
              <div
                key={stat.number}
                className="glass rounded-2xl px-6 py-6"
              >
                <p className="font-display text-2xl md:text-3xl font-medium text-[#C4903A] leading-tight mb-1.5 tracking-[-0.02em]">
                  {stat.number}
                </p>
                <p className="text-[rgba(245,240,232,0.48)] text-xs leading-snug">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
