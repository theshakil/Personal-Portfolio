"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Extra delay in milliseconds, used to stagger siblings. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "style">;

type Phase = "idle" | "armed" | "shown";

/**
 * Slides its content up when it scrolls into view.
 * It renders fully visible on the server and without JavaScript, and only
 * dims itself once the browser can observe it, so nothing is ever stuck hidden.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps<T>) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setPhase("armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPhase("shown");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const phaseClass = phase === "armed" ? "opacity-35 translate-y-7" : phase === "shown" ? "animate-rise" : "";
  const phaseStyle: CSSProperties | undefined =
    phase === "shown" && delay > 0 ? { ...style, animationDelay: `${delay}ms` } : style;

  return <Tag ref={ref} className={`${className} ${phaseClass}`.trim()} style={phaseStyle} {...rest} />;
}
