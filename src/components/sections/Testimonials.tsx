"use client";

import { Quotes } from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section id="contato" className="bg-[#F5F0E8] py-24 lg:py-32">
      <div className="max-w-[88rem] mx-auto px-6">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-[-0.035em] text-[#0A0906] mb-5">
              Vidas transformadas.
            </h2>
            <p className="text-[rgba(10,9,6,0.52)] text-base md:text-lg leading-relaxed">
              O que acontece quando a identidade é restaurada.
            </p>
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {siteData.testimonials.map((t, i) => (
              <div
                key={t.author}
                className={`flex flex-col rounded-3xl p-7 ${
                  i === 1
                    ? "bg-[#0A0906] text-[#F5F0E8]"
                    : "bg-white border border-[rgba(10,9,6,0.07)]"
                }`}
              >
                <Quotes
                  size={24}
                  weight="fill"
                  className={`mb-5 opacity-50 ${i === 1 ? "text-[#C4903A]" : "text-[#C4903A]"}`}
                />

                <p
                  className={`font-serif italic text-[1rem] md:text-[1.1rem] leading-[1.65] mb-6 flex-1 ${
                    i === 1
                      ? "text-[rgba(245,240,232,0.78)]"
                      : "text-[rgba(10,9,6,0.72)]"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div
                  className={`pt-5 border-t ${
                    i === 1
                      ? "border-[rgba(255,255,255,0.07)]"
                      : "border-[rgba(10,9,6,0.07)]"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      i === 1 ? "text-[#F5F0E8]" : "text-[#0A0906]"
                    }`}
                  >
                    {t.author}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      i === 1 ? "text-[rgba(245,240,232,0.45)]" : "text-[rgba(10,9,6,0.45)]"
                    }`}
                  >
                    {t.role}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      i === 1 ? "text-[rgba(245,240,232,0.3)]" : "text-[rgba(10,9,6,0.3)]"
                    }`}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
