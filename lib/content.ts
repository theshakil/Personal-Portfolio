/** All copy and links live here. Edit this file to update the site. */

export const profile = {
  name: "Shakil Omondi",
  initials: "SO",
  tagline: "Great Design and Softwares",
  email: "shakilochieng@gmail.com",
  city: "Nairobi",
  timeZone: "Africa/Nairobi",
  year: 2026,
} as const;

export const menuLinks = [
  { label: "Home", href: "#top" },
  { label: "Works", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const roles = ["AI Android Engineer", "Full-Stack Developer"] as const;

export const socials = [
  { label: "LinkedIn", short: "LinkedIn", handle: "shakil-developsanddesign", href: "https://www.linkedin.com/in/0xshakil/" },
  { label: "X / Twitter", short: "X", handle: "@_0xshakil", href: "https://x.com/_0xshakil" },
  { label: "GitHub", short: "GitHub", handle: "theshakil", href: "https://github.com/theshakil" },
  { label: "Behance", short: "Behance", handle: "shakilomondi", href: "https://www.behance.net/shakilomondi" },
  { label: "Playbook", short: "Playbook", handle: "shakil-omondi", href: "https://www.playbook.com/shakil-omondi" },
] as const;

/** Every profile plus email, for the hero and footer icon rows. */
export const quickLinks = [
  ...socials,
  { label: "Email", short: "Email", handle: profile.email, href: `mailto:${profile.email}` },
] as const;

/** Tech stack from the GitHub profile README, shown as a scrolling strip. */
export const stack = [
  "Python", "Java", "Kotlin", "JavaScript", "TypeScript", "Jetpack Compose", "Room", "Retrofit", "Firebase",
  "PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "React", "Next.js", "Tailwind CSS",
  "Spring Boot", "REST", "PostgreSQL", "Git", "Linux", "Docker", "GitHub Actions",
] as const;

/** Skills grouped for the Toolkit section. From the GitHub profile README. */
export const toolkit = [
  { group: "Languages", items: ["Python", "Java", "Kotlin", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { group: "Android", items: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Retrofit"] },
  { group: "AI and ML", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas", "Matplotlib"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
  { group: "Backend and data", items: ["Spring Boot", "REST APIs", "Python APIs", "PostgreSQL", "SQL"] },
  { group: "Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Linux"] },
  { group: "Design", items: ["Brand design", "Graphic design", "Interface design"] },
] as const;

export const seo = {
  title: "Shakil Omondi, AI Android Engineer and Full-Stack Developer in Nairobi",
  description:
    "Shakil Omondi is an AI Android engineer and full-stack developer in Nairobi, Kenya. Kotlin, Jetpack Compose, PyTorch, Next.js and brand design. Open to remote and freelance work.",
} as const;

export const disciplines = [
  {
    title: "Android Engineering",
    blurb: "Native apps in Kotlin with a modern, declarative UI and local-first data.",
    items: [
      { name: "Kotlin", note: "language" },
      { name: "Jetpack Compose", note: "interface" },
      { name: "Coroutines", note: "async work" },
      { name: "Room", note: "local database" },
      { name: "Retrofit", note: "networking" },
      { name: "Firebase", note: "backend services" },
    ],
  },
  {
    title: "AI & Machine Learning",
    blurb: "Training and deploying models, with a focus on hybrid on-device and cloud systems.",
    items: [
      { name: "PyTorch", note: "training" },
      { name: "TensorFlow & Keras", note: "training and deployment" },
      { name: "NumPy & Pandas", note: "data wrangling" },
      { name: "Scikit-learn", note: "classical ML" },
      { name: "Matplotlib", note: "evaluation plots" },
    ],
  },
  {
    title: "Web Development",
    blurb: "Responsive full-stack web apps, built from clean markup up.",
    items: [
      { name: "Next.js", note: "full-stack framework" },
      { name: "React", note: "interface" },
      { name: "TypeScript & JavaScript", note: "languages" },
      { name: "Tailwind CSS", note: "styling" },
      { name: "HTML5 & CSS3", note: "foundations" },
    ],
  },
  {
    title: "Backend Engineering",
    blurb: "REST APIs and services that mobile and web clients can rely on.",
    items: [
      { name: "Java & Spring Boot", note: "services" },
      { name: "REST APIs", note: "contracts" },
      { name: "Python APIs", note: "model serving" },
      { name: "PostgreSQL & SQL", note: "data" },
      { name: "Docker & GitHub Actions", note: "CI/CD" },
    ],
  },
  {
    title: "Design",
    blurb: "A design background that shapes how the software looks and feels.",
    items: [
      { name: "Graphic design", note: "on Behance" },
      { name: "Brand identity", note: "Inkwell Brand Co." },
      { name: "Interface design", note: "apps and web" },
    ],
  },
] as const;

export type Project = {
  /** Used in the address: /work/<slug>. Lowercase letters, numbers and dashes. */
  slug: string;
  title: string;
  /** Short label under the title, for example "Kotlin · Android". */
  kind: string;
  year?: string;
  /** One sentence shown in the Projects list. */
  blurb: string;
  /** Paragraphs shown on the project page. */
  description: string[];
  /** Technologies used. */
  stack: string[];
  /** Preview image: put the file in /public/projects and use "/projects/name.png". Leave out for a placeholder. */
  image?: string;
  /** Live website, when there is one. */
  site?: string;
  /** Source code, when it is public. */
  github?: string;
};

/**
 * Add projects here. While the list is empty the Projects section shows a short message.
 * Every entry gets its own page at /work/<slug>. Copy `projectTemplate` below to start one.
 */
export const projects: Project[] = [
  // Placeholder: replace it with your first real project (or delete it to show the empty message).
  {
    slug: "sample-project",
    title: "Project name",
    kind: "Type of project · Platform",
    year: "2026",
    blurb: "One sentence about what it is.",
    description: [
      "A short paragraph about what the project is and who it is for.",
      "A second paragraph about the problem it solves, what you built, and what you learned.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Room", "PyTorch"],
    site: "https://example.com",
    github: "https://github.com/theshakil",
  },
];

/** The blank project page, live at /work/template. It is not listed on the home page and is hidden from search. */
export const projectTemplate: Project = {
  slug: "template",
  title: "Project name",
  kind: "Type of project · Platform",
  year: "2026",
  blurb: "One sentence about what it is.",
  description: [
    "A short paragraph about what the project is and who it is for.",
    "A second paragraph about the problem it solves, what you built, and what you learned.",
  ],
  stack: ["Kotlin", "Jetpack Compose", "Room", "PyTorch"],
  site: "https://example.com",
  github: "https://github.com/theshakil",
};

export function getProject(slug: string): Project | undefined {
  return [...projects, projectTemplate].find((project) => project.slug === slug);
}

export const steps = [
  { title: "Learn", note: "Start from the docs and the first line, not the shortcut." },
  { title: "Understand", note: "Find the real problem before choosing a tool." },
  { title: "Build", note: "The smallest version that works, end to end." },
  { title: "Break", note: "Push it until it fails, on purpose." },
  { title: "Debug", note: "Read the error, trace the cause, fix the source." },
  { title: "Optimize", note: "Faster, lighter, cleaner, only where it counts." },
  { title: "Test", note: "Prove it works before anyone else has to." },
  { title: "Deploy", note: "Ship it where people can actually use it." },
  { title: "Document", note: "Write it down so the next person can follow." },
] as const;

export const availability = [
  { label: "Remote", value: "Open worldwide" },
  { label: "Local", value: "Available in Kenya" },
  { label: "Engagement", value: "Freelance & contract" },
] as const;

export const footerColumns = [
  [
    { label: "Home", href: "/#top" },
    { label: "Projects", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Method", href: "/#method" },
    { label: "Contact", href: "/#contact" },
  ],
  disciplines.map((d) => ({ label: d.title, href: "/#disciplines" })),
  [
    ...socials.map((s) => ({ label: s.label, href: s.href })),
  ],
] as const;
