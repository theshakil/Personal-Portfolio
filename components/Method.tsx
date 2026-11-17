import { Band } from "@/components/Band";
import { Reveal } from "@/components/Reveal";
import { MethodPath } from "@/components/MethodPath";
import { availability } from "@/lib/content";
import { statement } from "@/lib/ui";

export function Method() {
  return (
    <Band id="method" label="Method">
      <Reveal as="p" className={statement}>
        Every project goes through the same nine steps, then loops.
      </Reveal>

      <MethodPath />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        {availability.map((item, i) => (
          <Reveal key={item.label} delay={Math.min(i, 6) * 70} className="flex flex-col gap-1.5 border-t border-line pt-4">
            <span className="font-display text-xs text-mute">{item.label}</span>
            <span className="font-display text-xl font-semibold tracking-[-0.02em]">
              {item.label === "Local" ? <i aria-hidden="true" className="pulse" /> : null}
              {item.value}
            </span>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}
