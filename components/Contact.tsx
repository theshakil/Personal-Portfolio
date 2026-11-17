import { Band } from "@/components/Band";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { profile, socials } from "@/lib/content";
import { rowHover } from "@/lib/ui";

export function Contact() {
  return (
    <Band id="contact" label="Contact">
      <Reveal
        as="p"
        className="font-display text-[clamp(2.6rem,9.5vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.055em] text-balance"
      >
        Let&apos;s build <em className="not-italic text-accent">something.</em>
      </Reveal>

      <Reveal>
        <CopyEmail email={profile.email} />
      </Reveal>

      <nav aria-label="Profiles" className="flex flex-col">
        {socials.map((social, i) => (
          <Reveal
            key={social.href}
            as="a"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-spot=""
            delay={Math.min(i, 6) * 70}
            className={`spot flex justify-between gap-4 border-t border-line py-4 text-base font-medium last:border-b ${rowHover}`}
          >
            {social.label}
            <span className="text-right font-display text-[0.8125rem] font-normal text-mute wrap-anywhere">
              {social.handle}
            </span>
          </Reveal>
        ))}
      </nav>
    </Band>
  );
}
