import type { ReactNode } from "react";

/** A full-width section with a hairline on top and a red "// label" eyebrow. */
export function Band({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="wrap flex flex-col gap-[clamp(32px,5vw,64px)] py-[clamp(56px,9vw,120px)]">
        <h2 className="font-display text-xs font-normal tracking-[0.04em] text-accent">{`// ${label}`}</h2>
        {children}
      </div>
    </section>
  );
}
