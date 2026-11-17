import { Band } from "@/components/Band";
import { Reveal } from "@/components/Reveal";
import { disciplines } from "@/lib/content";

export function Disciplines() {
  return (
    <Band id="disciplines" label="Disciplines">
      <div className="flex flex-col">
        {disciplines.map((discipline, i) => (
          <Reveal
            key={discipline.title}
            as="article"
            className="group grid grid-cols-1 gap-6 border-t border-line py-[clamp(32px,5vw,64px)] first:border-t-0 first:pt-0 min-[721px]:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] min-[721px]:gap-x-[clamp(24px,5vw,72px)]"
          >
            <div
              aria-hidden="true"
              className="self-start font-display text-[clamp(5rem,28vw,8rem)] font-normal leading-[0.9] tracking-[-0.04em] text-transparent transition-[color,-webkit-text-stroke-color] duration-400 [-webkit-text-stroke:1px_var(--c-fg)] group-hover:text-accent group-hover:[-webkit-text-stroke-color:var(--c-accent)] min-[721px]:text-[clamp(5.5rem,17vw,14rem)]"
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="flex min-w-0 flex-col gap-3.5">
              <h3 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-none tracking-[-0.04em] text-balance">
                {discipline.title}
              </h3>
              <p className="max-w-[44ch] text-[0.9375rem] text-mute">{discipline.blurb}</p>
              <ul className="mt-[clamp(16px,3vw,40px)]">
                {discipline.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-t border-line py-3.5 text-sm font-medium transition-[color,padding] duration-200 last:border-b hover:pl-1.5 hover:text-accent"
                  >
                    {item.name}
                    <span className="text-right font-display text-xs font-normal text-mute">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}
