import { Band } from "@/components/Band";
import { Reveal } from "@/components/Reveal";
import { toolkit } from "@/lib/content";

/** Skills as plain, readable lists, grouped by area. */
export function Toolkit() {
  return (
    <Band id="toolkit" label="Toolkit">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-6 gap-y-8">
        {toolkit.map((group, i) => (
          <Reveal key={group.group} delay={Math.min(i, 6) * 70} className="border-t border-line pt-4">
            <h3 className="mb-3.5 font-display text-xs font-medium uppercase tracking-[0.04em] text-mute">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-edge px-3 py-1.5 text-sm transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}
