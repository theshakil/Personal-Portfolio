import { profile } from "@/lib/content";

/** `compact` hides the tagline on phones, for tight spaces like the floating pill. */
export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <b className="font-display text-[1.75rem] font-bold leading-none tracking-[-0.06em]">{profile.initials}</b>
      <span
        className={`text-[0.6875rem] font-medium uppercase leading-[1.15] tracking-[0.05em] ${compact ? "hidden min-[721px]:inline" : ""}`}
      >
        Great Design
        <br />
        and Softwares
      </span>
    </span>
  );
}
