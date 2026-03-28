"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Music, Key } from "lucide-react";
import { IconGithub, IconInstagram, IconLinkedin } from "@/lib/icons";
import { motion } from "motion/react";

const socialLinks = [
  { href: "mailto:contact@jadenarceneaux.com", label: "Email", icon: Mail, external: false },
  { href: "/misc#pgp-key", label: "PGP Key", icon: Key, external: false },
  { href: "https://github.com/jadens-arc", label: "GitHub", icon: IconGithub, external: true },
  { href: "https://www.linkedin.com/in/jaden-arceneaux/", label: "LinkedIn", icon: IconLinkedin, external: true },
  { href: "https://www.instagram.com/jaden.svg/", label: "Instagram", icon: IconInstagram, external: true },
  { href: "https://open.spotify.com/artist/37FSUfROYvcy3tgQAWHOo9", label: "Spotify", icon: Music, external: true },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HomeContent({ greeting }: { greeting: string | null }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1
        variants={item}
        className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Hey, I&apos;m Jaden.
      </motion.h1>

      {greeting && (
        <motion.p variants={item} className="mt-8 text-sm text-muted-foreground">
          {greeting}
        </motion.p>
      )}

      <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Software engineer, occasional writer, and dedicated Neovim user based in beautiful Las Vegas, Nevada🌵
      </motion.p>

      <motion.p variants={item} className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Feel free to explore my{" "}
        <Link href="/projects" className="underline underline-offset-4 hover:text-foreground transition-colors">
          projects
        </Link>{" "}
        and{" "}
        <Link href="/posts" className="underline underline-offset-4 hover:text-foreground transition-colors">
          blog
        </Link>
        .
      </motion.p>

      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-2">
        {socialLinks.map(({ href, label, icon: Icon, external }) => (
          <Button key={label} variant="outline" size="lg" asChild>
            <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
              <Icon />
              {label}
            </a>
          </Button>
        ))}
      </motion.div>

      <motion.div className="mt-16 mb-16">
        <motion.h2 variants={item} className="font-heading text-2xl font-bold tracking-tight">A Little More About me.</motion.h2>
        <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Born and raised in Las Vegas. I taught myself to code at 13 and never really stopped.
            These days I build production software, ERPs, CRMs, and whatever else makes people&apos;s work lives easier.
            I&apos;ve been a professional software engineer for over 4 years.
            Outside of that I also make music as a hobby and you can find that on my Spotify.
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            This website is one of my favorite projects and it&apos;s open source. Check out the code on{" "}
            <a href="https://github.com/jadens-arc/jadenarceneaux.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">
              GitHub
            </a>
            .
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
