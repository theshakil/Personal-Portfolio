import { Clock } from "@/components/Clock";
import { FooterMark } from "@/components/FooterMark";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";
import { footerColumns, profile, quickLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-foot text-foot-fg">
      <div className="wrap flex flex-col gap-12 pt-14 min-[721px]:pt-16">
        <a
          href={`mailto:${profile.email}`}
          className="group flex flex-col gap-2.5 border-b border-foot-fg/15 pb-10"
        >
          <span className="font-display text-xs tracking-[0.04em] text-foot-mark">Got an idea?</span>
          <span className="flex items-center justify-between gap-5 font-display text-[clamp(3rem,14vw,9rem)] font-semibold leading-[0.95] tracking-[-0.055em] transition-[color,transform] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-2 group-hover:text-foot-mark">
            Let&apos;s talk
            <span
              aria-hidden="true"
              className="grid size-[clamp(48px,10vw,104px)] flex-none place-items-center rounded-full border-2 border-current transition-[background-color,border-color,color,transform] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-45 group-hover:border-foot-mark group-hover:bg-foot-mark group-hover:text-foot"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-[44%]">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </span>
          <span className="w-fit bg-gradient-to-r from-foot-mark to-foot-mark bg-[length:0_2px] bg-left-bottom bg-no-repeat pb-1 font-display text-[clamp(0.875rem,2.4vw,1.25rem)] text-foot-mute transition-[background-size,color] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:bg-[length:100%_2px] group-hover:text-foot-fg">
            {profile.email}
          </span>
        </a>

        <div className="grid grid-cols-1 gap-12 min-[721px]:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-4">
              <a href="/#top" aria-label={`${profile.name}, ${profile.tagline}`} className="self-start">
                <Logo />
              </a>
              <p className="text-[0.8125rem] text-foot-mute">Build. Break. Learn. Ship. Repeat.</p>
            </div>

            <ul className="flex gap-2.5">
              {quickLinks.map((social, i) => (
                <li key={social.href} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
                  <a
                    href={social.href}
                    {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={social.label}
                    className="grid size-8 place-items-center rounded-lg bg-foot-fg text-foot transition duration-300 hover:-translate-y-1 hover:-rotate-6 hover:bg-foot-mark hover:text-foot-fg"
                  >
                    <SocialIcon name={social.short} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 min-[721px]:grid-cols-3">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4 text-[0.8125rem]">
                {column.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-foot-mute transition-colors duration-200 hover:text-foot-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-display text-xs text-foot-mute">
          <span>&copy; {profile.year} {profile.name}</span>
          <Clock />
          <a href="#top" aria-label="Back to top" className="group inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-foot-fg">
            Back to top
            <i className="grid size-8 place-items-center rounded-full border border-foot-fg/30 transition-colors duration-200 group-hover:border-foot-mark group-hover:bg-foot-mark group-hover:text-foot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-3.5 group-hover:animate-[hop_0.6s_ease-in-out_infinite_alternate]">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </i>
          </a>
        </div>

        {/* The wordmark is cropped by the bottom edge of the page, like the reference. */}
        <FooterMark text={profile.name} />
      </div>
    </footer>
  );
}
