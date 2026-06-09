"use client";

import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  const { finalCTA } = siteData;

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-[#0D0B08] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #C4903A 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-[88rem] mx-auto px-6">
        <Reveal>
          <div className="glass-strong rounded-[2.5rem] px-8 md:px-16 py-14 md:py-20 text-center relative overflow-hidden max-w-4xl mx-auto">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(196,144,58,0.4), transparent)" }}
            />

            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#F5F0E8] mb-5 max-w-2xl mx-auto text-balance">
              {finalCTA.headline}
            </h2>

            <p className="text-[rgba(245,240,232,0.55)] text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10">
              {finalCTA.sub}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.link/pk96wl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 glass px-7 py-3.5 rounded-full text-[#F5F0E8] text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <WhatsappLogo size={17} weight="fill" className="text-[#4CAF50]" />
                Entrar em Contato
              </a>
              <a
                href="https://tally.so/r/Ek0VyA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 glass-amber px-7 py-3.5 rounded-full text-[#C4903A] text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-200 group"
              >
                Acessar Mentoria
                <span className="w-5 h-5 rounded-full bg-[rgba(196,144,58,0.2)] flex items-center justify-center group-hover:bg-[rgba(196,144,58,0.3)] transition-colors">
                  <ArrowRight size={11} weight="bold" />
                </span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)]">
              <p className="font-serif italic text-[rgba(245,240,232,0.30)] text-[17px] md:text-[1.1rem] leading-relaxed">
                &ldquo;Quando a identidade é restaurada, os relacionamentos se tornam saudáveis.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
