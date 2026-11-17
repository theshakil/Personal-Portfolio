import { Logo } from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";
import { SocialIcon } from "@/components/SocialIcon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile, socials } from "@/lib/content";
import { pill } from "@/lib/ui";

type Part = { word: string; underline?: boolean } | { shape: "avatar" | "blob" | "chip" };

/** The statement, word by word, with small shapes set inline like the words around them. */
const statement: Part[] = [
  { word: "Hi," },
  { word: "I'm" },
  { shape: "avatar" },
  { word: "Shakil." },
  { word: "I" },
  { word: "build" },
  { shape: "blob" },
  { word: "AI‑powered", underline: true },
  { word: "Android" },
  { word: "apps" },
  { word: "that" },
  { shape: "chip" },
  { word: "look" },
  { word: "as" },
  { word: "sharp" },
  { word: "as" },
  { word: "they" },
  { word: "work." },
];

/** Icons in the navbar, in this order. */
const navSocials = ["GitHub", "LinkedIn", "Behance"]
  .map((name) => socials.find((social) => social.short === name))
  .filter((social): social is (typeof socials)[number] => Boolean(social));

const wordClass = "inline-block animate-rise";

function Shape({ kind }: { kind: "avatar" | "blob" | "chip" }) {
  if (kind === "avatar") {
    return (
      <span className="mx-[0.12em] inline-flex size-[0.9em] animate-[bob_4.5s_ease-in-out_1.5s_infinite_alternate] items-center justify-center rounded-full bg-accent align-middle text-on-accent">
        <b className="text-[0.36em] font-bold leading-none tracking-[-0.06em]">{profile.initials}</b>
      </span>
    );
  }
  if (kind === "blob") {
    return (
      <span className="mx-[0.12em] inline-block h-[0.38em] w-[0.6em] animate-[blobby_3.6s_ease-in-out_1.5s_infinite_alternate] rounded-full bg-accent align-middle" />
    );
  }
  return (
    <span className="mx-[0.12em] inline-flex h-[0.82em] w-[1.25em] items-center justify-center overflow-hidden rounded-[0.2em] bg-[linear-gradient(135deg,var(--c-accent),color-mix(in_srgb,var(--c-accent)_35%,var(--c-fg)))] align-middle">
      <span className="relative block h-[0.6em] w-[0.34em] animate-[tilt_3s_ease-in-out_infinite_alternate] rounded-[0.08em] bg-page shadow-[0_0.04em_0.12em_rgba(0,0,0,0.35)] after:absolute after:inset-[0.05em] after:rounded-[0.04em] after:bg-[linear-gradient(180deg,var(--c-accent),color-mix(in_srgb,var(--c-accent)_30%,var(--c-page)))] after:content-['']" />
    </span>
  );
}

export function Hero() {
  let w = 0;
  return (
    <header id="top" className="relative overflow-hidden border-b border-line bg-page text-fg">
      <div aria-hidden="true" className="hero-glow" />
      <div className="wrap relative flex min-h-svh flex-col pb-[26px] pt-4">
        {/* Floating pill: logo, mode toggle, menu and a contact button. */}
        <div className="flex animate-rise items-center gap-2.5 self-center rounded-full border border-edge bg-raise/80 py-[5px] pl-4 pr-1.5 backdrop-blur-[10px] min-[721px]:gap-[18px] min-[721px]:pl-5">
          <a href="#top" aria-label={`${profile.name}, ${profile.tagline}`}>
            <Logo compact />
          </a>
          <ul aria-label="Profiles" className="hidden items-center gap-0.5 border-x border-line px-2.5 min-[721px]:flex">
            {navSocials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.short}
                  title={social.short}
                  className="grid size-9 place-items-center rounded-full text-mute transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-raise hover:text-accent"
                >
                  <SocialIcon name={social.short} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <NavMenu />
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-9 items-center rounded-full bg-fg px-4 text-[0.8125rem] font-semibold text-page transition-[background-color,color,transform] duration-200 hover:-translate-y-px hover:bg-accent hover:text-on-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="m-auto flex flex-col items-center gap-[30px] pb-6 pt-9 text-center">
          <p
            style={{ animationDelay: "100ms" }}
            className="animate-rise rounded-full border border-edge px-3.5 py-[7px] font-display text-[0.6875rem] uppercase tracking-[0.14em] text-mute"
          >
            AI Android engineer &middot; Full&#8209;stack &middot; {profile.city}
          </p>

          <h1
            aria-label="Hi, I'm Shakil. I build AI-powered Android apps that look as sharp as they work."
            className="max-w-[15em] font-display text-[clamp(2.35rem,7.6vw,6rem)] font-medium leading-[1.06] tracking-[-0.045em] text-balance"
          >
            {statement.map((part, i) => {
              const delay = { animationDelay: `${w++ * 60 + 150}ms` };
              if ("shape" in part) {
                return (
                  <span key={i} aria-hidden="true" style={delay} className={wordClass}>
                    <Shape kind={part.shape} />{" "}
                  </span>
                );
              }
              return (
                <span key={i} aria-hidden="true">
                  <span
                    style={delay}
                    className={`${wordClass} ${part.underline ? "underline decoration-accent decoration-dotted decoration-[3px] underline-offset-[0.12em]" : ""}`}
                  >
                    {part.word}
                  </span>{" "}
                </span>
              );
            })}
          </h1>

          <div style={{ animationDelay: "1300ms" }} className="flex animate-rise flex-wrap justify-center gap-3">
            <a href="#work" className={pill}>
              See my work
            </a>
            <a href="#contact" className={pill}>
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[22px]">
          <ul className="flex flex-wrap items-center justify-center gap-x-[22px] gap-y-2 text-sm font-medium">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-accent"
                >
                  <SocialIcon
                    name={social.short}
                    className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-[8deg] group-hover:scale-[1.15]"
                  />
                  {social.short === "X" ? "Twitter" : social.short}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-accent"
              >
                <SocialIcon name="Email" className="size-3.5" />
                Email
              </a>
            </li>
          </ul>

          <a
            href="#work"
            className="flex flex-col items-center gap-2.5 font-display text-[0.6875rem] uppercase tracking-[0.14em] text-mute transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true" className="relative block h-[26px] w-4 rounded-[10px] border-[1.5px] border-current">
              <i className="absolute left-1/2 top-[5px] -ml-[1.5px] h-[5px] w-[3px] animate-[wheel_1.8s_ease-in-out_infinite] rounded-sm bg-current" />
            </span>
            Scroll to enter selected work
          </a>
        </div>
      </div>
    </header>
  );
}
