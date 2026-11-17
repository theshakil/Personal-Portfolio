"use client";

/**
 * Switches between night (default) and day mode.
 * The choice lives on <html data-theme> and in localStorage, so it needs no React state
 * and the inline script in app/layout.tsx can restore it before the first paint.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private windows can block storage. The switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between night and day mode"
      className="flex h-11 cursor-pointer items-center rounded-full px-3 font-display text-xs font-medium uppercase tracking-[0.05em] transition-colors duration-200 hover:text-accent"
    >
      <span className="inline-flex items-center gap-2 light:hidden">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-5">
          <path d="M16.5 11.5A6.5 6.5 0 0 1 8.5 3.5a6.5 6.5 0 1 0 8 8Z" />
        </svg>
        <span className="hidden min-[721px]:inline">Night</span>
      </span>
      <span className="hidden items-center gap-2 light:inline-flex">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-5">
          <circle cx="10" cy="10" r="3.5" />
          <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16" />
        </svg>
        <span className="hidden min-[721px]:inline">Day</span>
      </span>
    </button>
  );
}
