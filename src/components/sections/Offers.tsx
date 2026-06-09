"use client";

import { ArrowRight, WhatsappLogo, Check, Star } from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import Reveal from "@/components/ui/Reveal";

export default function Offers() {
  const { offers } = siteData;

  return (
    <section id="mentoria" className="relative py-24 lg:py-32 bg-[#0D0B08] overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[#C4903A] text-[10px] font-medium tracking-[0.34em] uppercase mb-4">
              {offers.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.06] tracking-[-0.035em] text-[#F5F0E8]">
              {offers.headline}
            </h2>
          </div>
        </Reveal>

        {/* Cards — badge is inside the card at top-right, tier label at top-left */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {offers.cards.map((card) => (
              <div key={card.tier} className="flex flex-col">

                {/* Glass card */}
                <div className={`flex flex-col flex-1 ${card.featured ? "glass-strong" : "glass"} rounded-3xl p-7 md:p-8`}>
                  {/* Top row: tier label left, badge right */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-medium tracking-[0.2em] uppercase ${
                      card.featured ? "text-[#C4903A]" : "text-[rgba(245,240,232,0.4)]"
                    }`}>
                      {card.tier}
                    </span>
                    {card.featured && (
                      <div className="glass-amber flex items-center gap-1.5 px-3 py-1 rounded-full whitespace-nowrap">
                        <Star size={10} weight="fill" className="text-[#C4903A]" />
                        <span className="text-[10px] font-medium text-[#C4903A] tracking-wider">
                          Mais popular
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-display text-[1.4rem] md:text-[1.7rem] font-medium text-[#F5F0E8] leading-[1.12] tracking-[-0.025em] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[rgba(245,240,232,0.55)] text-[14px] leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <Check size={13} weight="bold" className={card.featured ? "text-[#C4903A]" : "text-[rgba(255,255,255,0.35)]"} />
                        <span className="text-[rgba(245,240,232,0.65)] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <OfferCTA card={card} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function OfferCTA({ card }: { card: typeof siteData.offers.cards[0] }) {
  const { cta } = card;
  const base = "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95";

  if (cta.variant === "primary") return (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={`${base} glass-amber text-[#C4903A]`}>
      {cta.label}<ArrowRight size={14} weight="bold" />
    </a>
  );
  if (cta.variant === "whatsapp") return (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={`${base} glass text-[#F5F0E8]`}>
      <WhatsappLogo size={16} weight="fill" className="text-[#4CAF50]" />{cta.label}
    </a>
  );
  return (
    <a href={cta.href} className={`${base} glass text-[rgba(245,240,232,0.65)]`}>{cta.label}</a>
  );
}
