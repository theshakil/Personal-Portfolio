import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getProject, profile, projects, projectTemplate } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...projects, projectTemplate].map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.blurb,
    // The blank template is a layout example, not content to index.
    robots: slug === projectTemplate.slug ? { index: false, follow: false } : undefined,
    alternates: { canonical: `/work/${slug}` },
  };
}

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

const button =
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-edge px-[22px] py-3 font-body text-[0.8125rem] font-medium text-fg transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <header id="top" className="border-b border-line">
        <div className="wrap flex min-h-[72px] items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-display text-sm font-medium transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span> All projects
          </Link>
          <Link href="/" aria-label={`${profile.name}, home`} className="hidden min-[721px]:block">
            <Logo />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        <article className="wrap flex flex-col gap-10 py-[clamp(40px,8vw,88px)]">
          <div className="flex flex-col gap-4">
            <p className="font-display text-xs tracking-[0.04em] text-accent">
              {"// "}
              {project.kind}
              {project.year ? ` · ${project.year}` : ""}
              {project.slug === projectTemplate.slug ? " · Template" : ""}
            </p>
            <h1 className="max-w-[18ch] font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
              {project.title}
            </h1>
          </div>

          {/* Preview image. Swap the placeholder by setting `image` on the project. */}
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`Preview of ${project.title}`}
              className="aspect-video w-full rounded-2xl border border-line object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label="Project preview image placeholder"
              className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-2xl border border-dashed border-edge bg-raise"
            >
              <div className="flex flex-col items-center gap-3 text-center text-mute">
                <svg {...iconProps} className="size-10">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="9" cy="10" r="1.8" />
                  <path d="m21 16-5-5-8 8" />
                </svg>
                <span className="font-display text-xs uppercase tracking-[0.14em]">Project preview image</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-12 min-[721px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[721px]:gap-[clamp(32px,6vw,96px)]">
            <section aria-labelledby="about" className="flex flex-col gap-4">
              <h2 id="about" className="font-display text-xs uppercase tracking-[0.04em] text-mute">
                About the project
              </h2>
              {project.description.map((paragraph) => (
                <p key={paragraph} className="max-w-[56ch] text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            <section aria-labelledby="stack" className="flex flex-col gap-4">
              <h2 id="stack" className="font-display text-xs uppercase tracking-[0.04em] text-mute">
                Tech stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-edge px-3 py-1.5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {project.site || project.github ? (
            <div className="flex flex-wrap gap-3">
              {project.site ? (
                <a href={project.site} target="_blank" rel="noopener noreferrer" className={button}>
                  <svg {...iconProps}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Visit website
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={button}>
                  <svg {...iconProps}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  View source
                </a>
              ) : null}
            </div>
          ) : null}
        </article>
      </main>

      <Footer />
    </>
  );
}
