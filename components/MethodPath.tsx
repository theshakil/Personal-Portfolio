"use client";

import { useEffect, useRef, useState } from "react";
import { steps } from "@/lib/content";

const items = [
  ...steps,
  { title: "Repeat", note: "Every ship teaches the next build. Back to step one, a little sharper." },
] as const;

/**
 * The nine steps as a path: a red rail fills and each step lights up as it passes
 * the middle of the screen. It renders fully lit on the server, without JavaScript
 * and with reduced motion, and only becomes interactive once mounted.
 */
export function MethodPath() {
  const list = useRef<HTMLOListElement>(null);
  const [live, setLive] = useState(false);
  const [progress, setProgress] = useState(1);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const el = list.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLive(true);

    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-node]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const line = window.innerHeight * 0.62;
      setProgress(Math.max(0, Math.min(1, (line - rect.top) / rect.height)));
      setReached(
        nodes.filter((node) => {
          const r = node.getBoundingClientRect();
          return r.top + r.height / 2 < line;
        }).length,
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={list} className="relative m-0 flex list-none flex-col p-0">
      <span aria-hidden="true" className="absolute bottom-[22px] left-[21px] top-[22px] w-0.5 rounded-sm bg-line">
        <span
          className="absolute inset-0 origin-top rounded-sm bg-accent"
          style={{ transform: `scaleY(${live ? progress : 1})` }}
        />
      </span>

      {items.map((item, i) => {
        const last = i === items.length - 1;
        const lit = !live || i < reached;
        return (
          <li
            key={item.title}
            className="group relative grid grid-cols-[44px_minmax(0,1fr)] items-center gap-x-5 gap-y-1 py-3.5 min-[721px]:grid-cols-[44px_minmax(0,1.1fr)_minmax(0,1fr)] min-[721px]:gap-x-[clamp(20px,4vw,56px)] min-[721px]:py-[18px]"
          >
            <i
              data-node=""
              aria-hidden="true"
              className={`relative z-[1] row-span-2 grid size-11 place-items-center rounded-full border-2 font-display text-xs not-italic transition-[background-color,border-color,color] duration-[400ms] min-[721px]:row-span-1 ${
                lit ? "border-accent bg-accent text-on-accent" : "border-edge bg-page text-mute"
              }`}
            >
              {last ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 animate-[spin_6s_linear_infinite]"
                >
                  <path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6" />
                </svg>
              ) : (
                String(i + 1).padStart(2, "0")
              )}
            </i>
            <h3
              className={`col-start-2 font-display text-[clamp(2rem,9vw,3.25rem)] font-semibold leading-none tracking-[-0.045em] transition-[color,-webkit-text-stroke-color,transform] duration-[400ms] [-webkit-text-stroke:1px_var(--c-fg)] group-hover:translate-x-1.5 group-hover:text-accent group-hover:[-webkit-text-stroke-color:var(--c-accent)] min-[721px]:text-[clamp(3rem,6.4vw,5.5rem)] ${
                last ? "text-accent [-webkit-text-stroke-color:var(--c-accent)]" : lit ? "text-fg" : "text-transparent"
              }`}
            >
              {item.title}
            </h3>
            <p className="col-start-2 max-w-[44ch] text-[0.9375rem] text-mute min-[721px]:col-start-3">{item.note}</p>
          </li>
        );
      })}
    </ol>
  );
}
