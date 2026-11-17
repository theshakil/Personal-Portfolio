/** Small outline icons for the profile links. */
export function SocialIcon({ name, className = "size-3.5" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    "aria-hidden": true,
    className,
  } as const;

  switch (name) {
    case "LinkedIn":
      return (
        <svg {...common}>
          <rect x="2.5" y="2.5" width="15" height="15" rx="3" />
          <path d="M7 9v5M7 6.4v.1M10 14V9m0 2.5c0-1.4.9-2.5 2.1-2.5S14 10 14 11.5V14" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...common} viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "Behance":
      return (
        <svg {...common}>
          <text x="10" y="14.2" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Arial, Helvetica, sans-serif">
            Be
          </text>
        </svg>
      );
    case "Playbook":
      return (
        <svg {...common}>
          <path d="M5 3.5h10v13l-5-3-5 3z" />
        </svg>
      );
    case "Email":
      return (
        <svg {...common}>
          <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
          <path d="m3 6 7 5 7-5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M3.5 3.5 16.5 16.5M16.5 3.5 3.5 16.5" />
        </svg>
      );
  }
}
