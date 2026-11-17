"use client";

import { useEffect, useRef, useState } from "react";
import { Clock } from "@/components/Clock";
import { Logo } from "@/components/Logo";
import { menuLinks, socials } from "@/lib/content";

/** Hamburger button plus the full-height panel it opens. */
export function NavMenu() {
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Lock page scroll while open and move focus between the two buttons.
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (wasOpen.current !== open) {
      (open ? closeButton : openButton).current?.focus({ preventScroll: true });
      wasOpen.current = open;
    }
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        ref={openButton}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="menu-panel"
        onClick={() => setOpen(true)}
        className="group -mr-2.5 grid size-11 cursor-pointer place-items-center rounded-full"
      >
        <span
          aria-hidden="true"
          className="relative block h-2.5 w-6 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-current before:transition-transform before:duration-300 before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-current after:transition-transform after:duration-300 after:content-[''] group-hover:before:-translate-x-1 group-hover:after:translate-x-1"
        />
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-30 text-fg transition-[visibility] duration-0 ${
          open ? "visible pointer-events-auto delay-0" : "invisible pointer-events-none delay-[550ms]"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-page/55 backdrop-blur-[14px] transition-opacity duration-[450ms] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <span
          aria-hidden="true"
          className="absolute left-[max(24px,env(safe-area-inset-left,0px))] top-[calc(env(safe-area-inset-top,0px)+20px)] flex min-h-11 items-center"
        >
          <Logo />
        </span>

        <nav
          id="menu-panel"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[min(82%,600px)] flex-col overflow-y-auto bg-panel pb-[calc(env(safe-area-inset-bottom,0px)+24px)] pl-6 pr-[max(24px,env(safe-area-inset-right,0px))] pt-[calc(env(safe-area-inset-top,0px)+20px)] text-panel-fg transition-transform duration-[550ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            ref={closeButton}
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="group -mr-2.5 grid size-11 cursor-pointer place-items-center self-end rounded-full"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="size-5 transition-transform duration-300 group-hover:rotate-90"
            >
              <path d="M3 3l14 14M17 3L3 17" />
            </svg>
          </button>

          <ul className="mt-[clamp(28px,8vw,64px)] flex flex-col items-end gap-[clamp(8px,2vw,16px)]">
            {menuLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${i * 70 + 220}ms` : "0ms" }}
                className={`transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                  open ? "translate-x-0 opacity-100" : "translate-x-7 opacity-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-[clamp(2.4rem,9.5vw,4.8rem)] font-medium uppercase leading-[1.02] tracking-[-0.045em] underline decoration-2 underline-offset-[0.14em] transition-colors duration-200 hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap justify-end gap-x-5 gap-y-2 pt-10 font-display text-xs">
            <Clock />
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-200 hover:-translate-y-0.5 hover:text-accent"
              >
                {social.short}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
