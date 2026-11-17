import { stack } from "@/lib/content";

/** Scrolling tech-stack strip. The second copy is hidden from assistive tech; reduced motion shows a static wrapped list. */
export function Stack() {
  return (
    <section aria-label="Tech stack" className="group/stack flex w-full overflow-hidden border-t border-line py-[18px]">
      {[false, true].map((hidden) => (
        <ul
          key={String(hidden)}
          aria-hidden={hidden || undefined}
          className={`flex min-w-full flex-none animate-marquee items-center justify-around gap-10 pr-10 group-hover/stack:[animation-play-state:paused] motion-reduce:min-w-0 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-start motion-reduce:px-6 ${hidden ? "motion-reduce:hidden" : ""}`}
        >
          {stack.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap font-display text-[clamp(1.25rem,3vw,2.25rem)] tracking-[-0.03em] text-fg transition-colors duration-200 after:ml-10 after:text-accent after:content-['/'] hover:text-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
}
