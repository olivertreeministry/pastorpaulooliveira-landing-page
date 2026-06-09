"use client";

import { siteData } from "@/content/data";
import { InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const socialIcons: Record<string, Icon> = {
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo,
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#0A0906]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-display text-lg font-medium text-[#F5F0E8]">
                Oliver Tree
              </span>
              <span className="font-display text-lg text-[#C4903A]">
                Ministry
              </span>
            </div>
            <p className="text-sm text-[rgba(245,240,232,0.45)] max-w-[260px] leading-relaxed">
              {siteData.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-3">
              {siteData.footer.social.map((s) => {
                const Icon = socialIcons[s.platform];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[rgba(245,240,232,0.5)] hover:text-[#F5F0E8] transition-colors duration-200 hover:scale-105 active:scale-95"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              {siteData.footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[rgba(245,240,232,0.35)] hover:text-[rgba(245,240,232,0.6)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)]">
          <p className="text-xs text-[rgba(245,240,232,0.3)] text-center">
            {siteData.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
