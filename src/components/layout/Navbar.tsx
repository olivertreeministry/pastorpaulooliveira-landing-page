"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import { siteData } from "@/content/data";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-20 left-0 w-px h-px pointer-events-none" aria-hidden />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3 pb-3 px-4" : "pt-5 px-6"
        }`}
      >
        <div
          className={`mx-auto max-w-[88rem] flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-[#F5F0E8]/90 backdrop-blur-xl rounded-2xl px-6 py-3 border border-[rgba(10,9,6,0.07)] shadow-[0_2px_20px_rgba(10,9,6,0.06)]"
              : "px-0 py-0"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-baseline gap-1.5">
            <span
              className={`font-display text-lg font-medium tracking-wide transition-colors duration-500 ${
                scrolled ? "text-[#0A0906]" : "text-[#F5F0E8]"
              }`}
            >
              Oliver Tree
            </span>
            <span className="font-display text-lg text-[#C4903A] tracking-wide">Ministry</span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8">
            {siteData.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[rgba(10,9,6,0.6)] hover:text-[#0A0906]"
                    : "text-[rgba(245,240,232,0.65)] hover:text-[#F5F0E8]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={siteData.nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
              scrolled
                ? "bg-[#0A0906] text-[#F5F0E8]"
                : "glass-amber text-[#C4903A]"
            }`}
          >
            {siteData.nav.cta.label}
            <ArrowRight size={14} weight="bold" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-[#0A0906] bg-[rgba(10,9,6,0.06)]"
                : "text-[#F5F0E8] glass"
            }`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mx-4 mt-2 rounded-2xl p-6 space-y-1 bg-[#F5F0E8]/95 backdrop-blur-xl border border-[rgba(10,9,6,0.08)]"
            >
              {siteData.nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[rgba(10,9,6,0.75)] hover:text-[#0A0906] transition-colors py-3 border-b border-[rgba(10,9,6,0.06)] last:border-0 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={siteData.nav.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0A0906] text-[#F5F0E8] text-center px-5 py-3.5 rounded-full text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {siteData.nav.cta.label}
                  <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
