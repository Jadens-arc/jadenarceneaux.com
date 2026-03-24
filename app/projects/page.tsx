const projects = [
  {
    name: "ISP.Net",
    href: "https://isp.net",
    period: "2022–present",
    description: "My actual job lmao. A local internet service provider. Built and maintained a Lead Management System, HR Information System, Access Control System, Billing System, and CRM. Refactored legacy code throughout.",
    tags: ["PHP", "Symfony"],
  },
  {
    name: "jadenarceneaux.com",
    href: "https://github.com/jadens-arc/jadenarceneaux.com",
    period: "2023–present",
    description: "This very website. 400+ readers annually.",
    tags: ["React", "Next.js", "TypeScript", "Vercel"],
  },
  {
    name: "Ironmind",
    href: "https://github.com/jadens-arc/Ironmind",
    period: "2024",
    description: "Esoteric language interpreter and code execution visualizer. Available on crates.io, Snap, and Homebrew. Over 40,000 downloads.",
    tags: ["Rust"],
  },
  {
    name: "Opium.press",
    href: "https://github.com/jadens-arc/opium.press",
    period: "2022–23",
    description: "A platform for writers to share ideas and opinions, built post-high school.",
    tags: ["PHP", "Symfony", "Google Cloud"],
  },
  {
    name: "Penny",
    href: "https://github.com/jadens-arc/Penny",
    period: "2021–22",
    description: "AES256 encrypted journaling desktop app.",
    tags: ["JavaScript", "Electron"],
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Projects.
      </h1>

      <div className="mt-10 divide-y divide-border">
        {projects.map(({ name, href, period, description, tags }) => (
          <div key={name} className="py-6">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-xl font-semibold hover:underline underline-offset-4"
              >
                {name}
              </a>
              {period && (
                <span className="shrink-0 text-sm text-muted-foreground">{period}</span>
              )}
            </div>
            <p className="mt-2 max-w-xl text-muted-foreground leading-relaxed">{description}</p>
            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
