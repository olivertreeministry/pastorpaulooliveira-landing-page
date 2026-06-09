"use client";

import {
  ArrowsCounterClockwise,
  UsersThree,
  Compass,
  Repeat,
  Link,
  Anchor,
} from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";
import type { Icon } from "@phosphor-icons/react";

interface PainCard {
  icon: Icon;
  title: string;
  description: string;
  num: string;
}

const PAIN_CARDS: PainCard[] = [
  {
    icon: ArrowsCounterClockwise,
    title: "Conflitos constantes sem resolução real",
    description: "Discussões que voltam sempre ao mesmo ponto. Ninguém se sente ouvido, entendido ou valorizado — apenas ferido.",
    num: "01",
  },
  {
    icon: UsersThree,
    title: "Distância emocional do cônjuge ou família",
    description: "Vocês vivem na mesma casa, mas existe um muro invisível. A intimidade real parece cada vez mais distante.",
    num: "02",
  },
  {
    icon: Compass,
    title: "Falta de propósito e direção na vida",
    description: "Você trabalha, cumpre responsabilidades, mas sente que está apenas sobrevivendo. Algo essencial está faltando.",
    num: "03",
  },
  {
    icon: Repeat,
    title: "Padrões familiares dolorosos que se repetem",
    description: "Você jurou que seria diferente dos seus pais — mas se pega repetindo os mesmos comportamentos.",
    num: "04",
  },
  {
    icon: Link,
    title: "Codependência emocional nos relacionamentos",
    description: "Você precisa da aprovação do outro para se sentir bem. Sua paz depende do humor de quem está ao seu redor.",
    num: "05",
  },
  {
    icon: Anchor,
    title: "Instabilidade espiritual e falta de identidade",
    description: "Você sabe quem Deus é, mas não sabe quem você é para Ele. A fé existe, mas a identidade ainda está ferida.",
    num: "06",
  },
];

export default function Problem() {
  const { problem } = siteData;

  return (
    <section id="ensinamentos" className="bg-[#F5F0E8] py-28 lg:py-36">
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header — 2-col layout: headline left, description right aligned to bottom */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end mb-14">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.04] tracking-[-0.035em] text-[#0A0906] text-balance">
              {problem.headline}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[rgba(10,9,6,0.54)] text-lg leading-relaxed md:justify-self-end md:max-w-md">
              {problem.intro}
            </p>
          </Reveal>
        </div>

        {/* Pain cards — seamless Oyster Metodo grid */}
        <div className="mt-14 mb-16 grid gap-px overflow-hidden rounded-2xl border border-[rgba(10,9,6,0.09)] bg-[rgba(10,9,6,0.08)] sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_CARDS.map(({ icon: PainIcon, title, description, num }, i) => (
            <Reveal key={num} delay={(i % 3) * 70} className="h-full">
              <article className="group flex h-full flex-col justify-between gap-12 bg-[#F5F0E8] p-8 transition-colors duration-300 hover:bg-white cursor-default">
                {/* Top row: icon left, number right */}
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(196,144,58,0.10)] transition-colors duration-300 group-hover:bg-[rgba(196,144,58,0.18)]">
                    <PainIcon
                      size={20}
                      weight="duotone"
                      className="text-[#C4903A] transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span className="font-display text-sm font-medium tracking-[0.2em] text-[rgba(10,9,6,0.18)] transition-colors duration-300 group-hover:text-[rgba(196,144,58,0.55)]">
                    {num}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="font-display text-[1.15rem] md:text-[1.3rem] font-medium tracking-[-0.025em] text-[#0A0906] leading-snug">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[rgba(10,9,6,0.54)]">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Root cause — dark card */}
        <Reveal delay={120}>
          <div className="rounded-3xl bg-[#0A0906] p-10 md:p-14 lg:p-20 max-w-3xl mx-auto text-center">
            <p className="text-[#C4903A] text-[10px] font-medium tracking-[0.34em] uppercase mb-7">
              {problem.rootCause.label}
            </p>
            <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-[#F5F0E8] leading-[1.12] tracking-[-0.035em] mb-6 text-balance">
              A raiz não é o relacionamento.{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-[rgba(245,240,232,0.48)]">A raiz é a identidade.</span>
            </h3>
            <p className="text-[rgba(245,240,232,0.50)] text-base md:text-[17px] leading-relaxed max-w-lg mx-auto">
              {problem.rootCause.description}
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
