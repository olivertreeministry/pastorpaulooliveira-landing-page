"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface LineRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  triggerStart?: string;
}

/**
 * Wraps its children in an overflow-hidden mask and slides the content
 * up from yPercent:110 to 0 as it enters the viewport.
 * Used for headline lines to achieve the premium "printing press" reveal.
 */
export function LineReveal({
  children,
  delay = 0,
  className = "",
  triggerStart = "top 88%",
}: LineRevealProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !outerRef.current || !innerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(innerRef.current, {
        yPercent: 105,
        duration: 1.0,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: outerRef.current,
          start: triggerStart,
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [delay, reduce, triggerStart]);

  return (
    <div
      ref={outerRef}
      className={`overflow-hidden ${className}`}
      style={{ paddingBottom: "0.08em" }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
