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
      className="relative flex flex-col overflow-hidden bg-[#0A0906] md:min-h-[100dvh]"
    >

      {/* ── MOBILE ONLY: centered portrait card ── */}
      <div className="md:hidden w-full px-4 pt-24 pb-2">
        <div className="relative w-full overflow-hidden rounded-3xl" style={{ height: "58vh" }}>
          <Image
            src="/paulo-picture/hero-section-paulo.JPEG"
            alt="Pastor Paulo Oliveira"
            fill
            priority
            className="object-cover object-[center_12%]"
            sizes="100vw"
          />
          {/* Bottom fade — merges into dark content below */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(10,9,6,0.85)] to-transparent" />
        </div>
      </div>

      {/* ── DESKTOP ONLY: parallax background ── */}
      <div
        ref={bgRef}
        className="hidden md:block absolute"
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
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0A0906] via-[rgba(10,9,6,0.42)] to-transparent" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[rgba(10,9,6,0.78)] via-[rgba(10,9,6,0.24)] to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col md:flex-1">

        {/* Desktop: push text to bottom. Mobile: flows naturally below image */}
        <div className="md:flex-1 md:flex md:items-end">
          <div className="max-w-[88rem] mx-auto w-full px-6 md:px-12 lg:px-16 pt-6 md:pt-32 pb-8 md:pb-20">
            <div className="max-w-[820px]">

              {/* Eyebrow */}
              <div className="hero-eyebrow mb-5 md:mb-7 text-center md:text-left">
                <span className="text-[#C4903A] text-[10px] font-medium tracking-[0.34em] uppercase">
                  {siteData.hero.eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 md:mb-9 text-center md:text-left">
                {siteData.hero.headlineParts.map((part, i) => (
                  <div key={i} className="overflow-hidden" style={{ paddingBottom: "0.04em" }}>
                    <div className="hero-line font-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-[-0.04em] text-[#F5F0E8]">
                      {part}
                    </div>
                  </div>
                ))}
                <div className="overflow-hidden" style={{ paddingBottom: "0.16em" }}>
                  <div className="hero-line font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-[-0.01em] italic text-amber-gradient pb-1">
                    {siteData.hero.headlineAccent}
                  </div>
                </div>
              </h1>

              {/* Subtext + CTAs */}
              <div
                className="hero-sub rounded-[1.5rem] px-6 py-6 md:px-9 md:py-8 max-w-[520px] mx-auto md:mx-0"
                style={{
                  background: "rgba(10,9,6,0.52)",
                  backdropFilter: "blur(20px) saturate(160%)",
                  WebkitBackdropFilter: "blur(20px) saturate(160%)",
                  border: "1px solid rgba(196,144,58,0.14)",
                }}
              >
                <p className="text-[rgba(245,240,232,0.72)] text-sm md:text-[17px] leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                  {siteData.hero.subtext}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-5">
                  <a
                    href="https://tally.so/r/Ek0VyA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#C4903A] text-[#0A0906] px-6 py-3.5 md:px-7 md:py-4 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
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

        {/* Stats strip */}
        <div className="hero-stats-strip border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,9,6,0.60)] backdrop-blur-md">
          <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16 py-4 md:py-5 flex items-center gap-0 overflow-x-auto scrollbar-none">
            {siteData.hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center shrink-0">
                <div className="flex items-baseline gap-2 md:gap-2.5 pr-6 md:pr-14">
                  <span className="font-display text-[1.5rem] md:text-[2.1rem] font-bold text-[#C4903A] leading-none tracking-[-0.02em]">
                    {stat.number}
                  </span>
                  <span className="text-[11px] md:text-[13px] text-[rgba(245,240,232,0.60)] tracking-wide whitespace-nowrap font-medium">
                    {stat.label}
                  </span>
                </div>
                {i < siteData.hero.stats.length - 1 && (
                  <div className="w-px h-4 md:h-5 bg-[rgba(255,255,255,0.08)] mr-6 md:mr-12" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
