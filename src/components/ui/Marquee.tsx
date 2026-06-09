"use client";

import { Leaf } from "@phosphor-icons/react";

const ITEMS = [
  "Restaurando Identidades",
  "Cura Emocional",
  "Fortalecendo Famílias",
  "Filiação em Deus",
  "João 1:12",
  "Maturidade Espiritual",
  "Identidade antes de Relacionamentos",
  "Oliver Tree Ministry",
];

export default function Marquee() {
  return (
    <div
      className="relative py-[18px] bg-[#0A0906] border-y border-[rgba(255,255,255,0.05)] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-10 whitespace-nowrap select-none"
        style={{ animation: "marquee-slide 36s linear infinite" }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-[rgba(245,240,232,0.22)] text-[10px] font-medium tracking-[0.24em] uppercase shrink-0"
          >
            <Leaf size={8} weight="fill" className="text-[#C4903A] opacity-45" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
