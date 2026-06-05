"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { animation_container, animation_item } from "@/lib/animation";
import { IconGithub } from "@/lib/icons";

const capabilities = [
  {
    title: "Business software",
    items: ["CRMs", "lead management", "billing workflows", "internal tools"],
  },
  {
    title: "Full-stack web",
    items: ["PHP/Symfony", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Operations",
    items: ["Linux", "infrastructure", "integrations", "legacy modernization"],
  },
];

const projects = [
  {
    name: "isp.net",
    period: "2022-present",
    type: "Professional software engineering",
    href: "https://isp.net",
    description:
      "Production engineering work for a local internet service provider, focused on practical internal systems that help sales, operations, HR, billing, and support teams move faster.",
    details: [
      "Worked on CRM, lead management, HRIS, access control, billing, and other internal tools.",
      "Modernized legacy PHP/Symfony code while maintaining active business workflows.",
      "Supported Linux-based infrastructure, third-party integrations, and operational reliability.",
      "Details are intentionally high-level to respect employer confidentiality.",
    ],
    tags: ["PHP", "Symfony", "Linux", "Infrastructure", "Integrations"],
  },
  {
    name: "Ironmind",
    period: "2024",
    type: "Rust interpreter and visualizer",
    href: "https://github.com/jadens-arc/Ironmind",
    description:
      "A Rust esoteric language interpreter with a code execution visualizer, built as both a programming exercise and a distributable developer tool.",
    details: [
      "Implements interpreter behavior and visual execution feedback for understanding program state.",
      "Distributed through crates.io, Snap, and Homebrew, with existing project copy noting 40,000+ downloads.",
    ],
    tags: ["Rust", "CLI", "crates.io", "Snap", "Homebrew"],
  },
  {
    name: "Foothill Grill",
    period: "Small-business client work",
    type: "Restaurant web and ordering setup",
    description:
      "A practical web presence and Square ordering setup for a bar kitchen/restaurant, focused on making the menu easier to find and orders easier to manage.",
    details: [
      "Set up online ordering around the business's existing operations.",
      "Kept the implementation simple enough for staff to maintain without technical overhead.",
    ],
    tags: ["Square", "Small business", "Web setup"],
  },
  {
    name: "Tres Tacos",
    period: "Small-business client work",
    type: "Taco truck web and ordering setup",
    description:
      "A lean Square online ordering and web presence project for a taco truck, built around speed, clarity, and easy customer access on mobile.",
    details: [
      "Configured ordering flows and basic web presence for a service-first food business.",
      "Prioritized a low-maintenance setup that matches how small teams actually work.",
    ],
    tags: ["Square", "Mobile web", "Small business"],
  },
  {
    name: "jadenarceneaux.com",
    period: "2023-present",
    type: "Personal site and technical blog",
    href: "https://github.com/jadens-arc/jadenarceneaux.com",
    description:
      "This website: a fast, typed, open-source personal site for writing, project notes, and contact.",
    details: [
      "Built with the Next.js App Router, React, TypeScript, Tailwind, and shadcn-style UI primitives.",
      "Includes markdown blog publishing, search, responsive navigation, analytics, and a contact flow.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
  },
];

export default function Portfolio() {
  return (
    <motion.div variants={animation_container} initial="hidden" animate="show">
      <motion.section variants={animation_item}>
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Software that makes real work easier.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          I&apos;m Jaden Arceneaux, a software engineer in Las Vegas building internal business systems,
          web apps, developer tools, and small-business web setups. I care about clean interfaces,
          maintainable code, and tools that fit the way people already work.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Button asChild>
            <Link href="/contact">
              <Mail />
              Work with me
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/jadens-arc" target="_blank" rel="noopener noreferrer">
              <IconGithub />
              GitHub
            </a>
          </Button>
        </div>
      </motion.section>

      <motion.section variants={animation_item} className="mt-14">
        <h2 className="font-heading text-2xl font-bold tracking-tight">What I Build</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {capabilities.map(({ title, items }) => (
            <div key={title} className="rounded-md border border-border p-4">
              <h3 className="font-heading text-base font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1 text-sm leading-6 text-muted-foreground">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="mt-16">
        <motion.h2 variants={animation_item} className="font-heading text-2xl font-bold tracking-tight">
          Selected Work
        </motion.h2>

        <div className="mt-6 divide-y divide-border">
          {projects.map(({ name, href, period, type, description, details, tags }) => (
            <motion.article variants={animation_item} key={name} className="py-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{type}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-heading text-xl font-semibold hover:underline underline-offset-4"
                    >
                      {name}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  ) : (
                    <h3 className="mt-1 font-heading text-xl font-semibold">{name}</h3>
                  )}
                </div>
                <span className="text-sm text-muted-foreground sm:shrink-0">{period}</span>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{description}</p>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" aria-hidden />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section variants={animation_item} className="mt-10 border-t border-border pt-8">
        <h2 className="font-heading text-2xl font-bold tracking-tight">Have a project?</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          I&apos;m a good fit for small businesses that need a polished web presence, online ordering,
          automation, or custom software that replaces repetitive manual work.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/contact">
              <Mail />
              Contact Jaden
            </Link>
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
}
