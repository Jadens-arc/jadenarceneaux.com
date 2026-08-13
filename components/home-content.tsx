"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { IconGithub, IconInstagram, IconLinkedin } from "@/lib/icons";
import { motion } from "motion/react";
import { animation_container, animation_item } from "@/lib/animation";


const socialLinks = [
  { href: "mailto:contact@jadenarceneaux.com", label: "Email", icon: Mail, external: false },
  { href: "https://github.com/jadens-arc", label: "GitHub", icon: IconGithub, external: true },
  { href: "https://www.linkedin.com/in/jaden-arceneaux/", label: "LinkedIn", icon: IconLinkedin, external: true },
  { href: "https://www.instagram.com/jaden.svg/", label: "Instagram", icon: IconInstagram, external: true },
];

function getSeasonalGreeting(date = new Date()): string | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 11 && day === 2) return "Happy Jaden Day 🎆";
  if (month === 12 && day === 25) return "Merry Christmas ❄️⛄️";
  if (month === 2) return "Happy Black History Month ✊🏾";
  if (month === 3) return "Happy Women's History Month 💜";
  if (month === 6) return "Happy Pride Month 🏳️‍🌈";
  if (month === 10) return "Happy Las Vegas Pride 🏳️‍🌈";
  return null;
}

function subscribeToTimeChange(callback: () => void) {
  const interval = window.setInterval(callback, 60_000);
  return () => window.clearInterval(interval);
}

export function HomeContent() {
  const greeting = useSyncExternalStore(subscribeToTimeChange, getSeasonalGreeting, () => null);

  return (
    <motion.div variants={animation_container} initial="hidden" animate="show">
      <motion.h1
        variants={animation_item}
        className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Hey, I&apos;m Jaden.
      </motion.h1>

      {greeting && (
        <motion.p variants={animation_item} data-nosnippet className="mt-8 text-sm text-muted-foreground">
          {greeting}
        </motion.p>
      )}

      <motion.p variants={animation_item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Software engineer, music enthusiast, and dedicated vim keybind user based in beautiful Las Vegas, Nevada🌵
      </motion.p>

      <motion.p variants={animation_item} className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Feel free to explore my{" "}
        <Link href="/portfolio" className="underline underline-offset-4 hover:text-foreground transition-colors">
          portfolio
        </Link>
        .
      </motion.p>

      <motion.div variants={animation_item} className="mt-10 flex flex-wrap items-center gap-2">
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
        <motion.h2 variants={animation_item} className="font-heading text-2xl font-bold tracking-tight">A Little More About me.</motion.h2>
        <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
          <motion.p variants={animation_item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Born and raised in Las Vegas. I taught myself to code at 13 and never really stopped.
            These days I build production software, ERPs, CRMs, and whatever else makes people&apos;s work lives easier.
            I&apos;ve been a professional software engineer for over 4 years.
          </motion.p>
          <motion.p variants={animation_item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Away from the keyboard I&apos;m a serious music enthusiast. I love synths and grooveboxes.
            An MPC Sample does most of the heavy lifting, and an Arturia MicroFreak is on the way to join it.
            I gravitate toward hip-hop, trap, and electronic music, and I&apos;ve spent free time working
            music festivals.
          </motion.p>
          <motion.p variants={animation_item} className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
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
