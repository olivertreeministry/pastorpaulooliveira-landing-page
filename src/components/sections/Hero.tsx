"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { siteData } from "@/content/data";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef        = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-eyebrow",     { y: 18,  opacity: 0, duration: 0.65 })
          .from(".hero-line",        { yPercent: 110, duration: 1.05, stagger: 0.11 }, "-=0.2")
          .from(".hero-sub",         { y: 22,  opacity: 0, duration: 0.75 }, "-=0.4")
          .from(".hero-stats-strip", { y: 14,  opacity: 0, duration: 0.6  }, "-=0.3");

        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.6,
            },
          });
        }
      }
    }, containerRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#0A0906]"
    >
      {/* Background — full width, object-contain so the full photo is visible */}
      <div
        ref={bgRef}
        className="absolute"
        style={{ inset: "-10%", width: "120%", height: "120%" }}
      >
        <Image
          src="/paulo-picture/hero-section-paulo.JPEG"
          alt="Pastor Paulo Oliveira"
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays — lighter so Paulo's face reads through */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0906] via-[rgba(10,9,6,0.42)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,6,0.78)] via-[rgba(10,9,6,0.24)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* Text — pushed to the bottom */}
        <div className="flex-1 flex items-end">
          <div className="max-w-[88rem] mx-auto w-full px-6 md:px-12 lg:px-16 pt-32 pb-14 md:pb-20">
            <div className="max-w-[820px]">

              {/* Eyebrow */}
              <div className="hero-eyebrow mb-7">
                <span className="text-[#C4903A] text-[10px] font-medium tracking-[0.34em] uppercase">
                  {siteData.hero.eyebrow}
                </span>
              </div>

              {/* Headline — Inter Tight */}
              <h1 className="mb-9">
                {siteData.hero.headlineParts.map((part, i) => (
                  <div key={i} className="overflow-hidden" style={{ paddingBottom: "0.04em" }}>
                    <div className="hero-line font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E8]">
                      {part}
                    </div>
                  </div>
                ))}
                {/* Playfair Display italic accent */}
                <div className="overflow-hidden" style={{ paddingBottom: "0.16em" }}>
                  <div className="hero-line font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.01em] italic text-amber-gradient pb-1">
                    {siteData.hero.headlineAccent}
                  </div>
                </div>
              </h1>

              {/* Subtext + CTAs — liquid glass container */}
              <div
                className="hero-sub rounded-[1.5rem] px-7 py-7 md:px-9 md:py-8 max-w-[520px]"
                style={{
                  background: "rgba(10,9,6,0.52)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  border: "1px solid rgba(196,144,58,0.14)",
                }}
              >
                <p className="text-[rgba(245,240,232,0.72)] text-base md:text-[17px] leading-relaxed mb-8">
                  {siteData.hero.subtext}
                </p>

                {/* CTAs — primary pill + text link (Oyster pattern) */}
                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href="https://tally.so/r/Ek0VyA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#C4903A] text-[#0A0906] px-7 py-4 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
                  >
                    Acessar Mentoria
                    <ArrowRight size={14} weight="bold" />
                  </a>
                  <a
                    href="https://wa.link/pk96wl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgba(245,240,232,0.72)] text-sm font-medium hover:text-[#F5F0E8] transition-colors duration-200 group"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-[#4CAF50]" />
                    Entrar em Contato
                    <ArrowDown size={13} weight="bold" className="group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats strip — anchored to bottom */}
        <div className="hero-stats-strip border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,9,6,0.60)] backdrop-blur-md">
          <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center gap-0 overflow-x-auto scrollbar-none">
            {siteData.hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center shrink-0">
                <div className="flex items-baseline gap-2.5 pr-8 md:pr-14">
                  <span className="font-display text-[1.75rem] md:text-[2.1rem] font-bold text-[#C4903A] leading-none tracking-[-0.02em]">
                    {stat.number}
                  </span>
                  <span className="text-[13px] text-[rgba(245,240,232,0.60)] tracking-wide whitespace-nowrap font-medium">
                    {stat.label}
                  </span>
                </div>
                {i < siteData.hero.stats.length - 1 && (
                  <div className="w-px h-5 bg-[rgba(255,255,255,0.08)] mr-8 md:mr-12" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
