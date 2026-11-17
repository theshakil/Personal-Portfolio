"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The cropped wordmark at the bottom of the page. Its letters rise one by one when it
 * scrolls into view. Server render and reduced motion show it already in place.
 */
export function FooterMark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="h-[0.62em] select-none overflow-hidden whitespace-nowrap font-display text-[12.4vw] font-medium leading-[0.86] tracking-[-0.055em] text-foot-mark min-[721px]:text-[min(13.8vw,176px)]"
    >
      {[...text].map((char, i) =>
        char === " " ? (
          " "
        ) : (
          <span
            key={i}
            style={{ transitionDelay: hidden ? "0ms" : `${i * 45}ms` }}
            className={`inline-block transition-[transform,color] duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-[0.05em] hover:text-foot-fg hover:delay-0 ${
              hidden ? "translate-y-[110%]" : "translate-y-0"
            }`}
          >
            {char}
          </span>
        ),
      )}
    </div>
  );
}
