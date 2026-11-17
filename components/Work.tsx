import Link from "next/link";
import { Band } from "@/components/Band";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "size-5",
} as const;

function WebsiteIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const iconLink =
  "grid size-11 place-items-center rounded-full border border-edge text-fg transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-[3px] hover:-rotate-6 hover:border-accent hover:bg-accent hover:text-on-accent";

export function Work() {
  return (
    <Band id="work" label="Projects">
      {projects.length === 0 ? (
        <p className="border-y border-line py-[clamp(28px,5vw,56px)] text-base text-mute">
          New projects are on the way. Check back soon.
        </p>
      ) : null}
      <div className="flex flex-col">
        {projects.map((project, i) => {
          return (
            <Reveal
              key={project.slug}
              as="article"
              data-spot=""
              delay={Math.min(i, 6) * 70}
              className="spot group relative isolate grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-8 gap-y-2 border-t border-line py-[clamp(20px,3vw,34px)] transition-colors duration-200 before:absolute before:inset-y-0 before:-inset-x-3 before:-z-10 before:origin-left before:scale-x-0 before:bg-raise before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.2,0.7,0.2,1)] before:content-[''] last:border-b hover:before:scale-x-100 min-[721px]:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_96px]"
            >
              <div>
              <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance transition-colors duration-200 group-hover:text-accent">
                {/* The title link stretches over the whole row, so the row is clickable. */}
                <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
                  {project.title}
                </Link>
              </h3>
                <span className="mt-1.5 block font-display text-xs font-normal tracking-[0.01em] text-mute">
                  {project.kind}
                </span>
              </div>
              <div className="col-start-1 flex flex-col items-start gap-3.5 min-[721px]:col-auto">
                <p className="text-sm text-mute">{project.blurb}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="group/btn relative z-[1] inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-[18px] text-[0.8125rem] font-semibold text-on-accent transition-[background-color,color] duration-200 hover:bg-fg hover:text-page"
                >
                  Check Out The Project
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover/btn:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
              <div className="relative z-[1] col-start-2 row-start-1 flex justify-end gap-1.5 min-[721px]:col-auto min-[721px]:row-auto">
                {project.site ? (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title}: website`}
                    className={iconLink}
                  >
                    <WebsiteIcon />
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title}: GitHub`}
                    className={iconLink}
                  >
                    <GitHubIcon />
                  </a>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Band>
  );
}
