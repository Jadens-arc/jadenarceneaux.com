import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Music, Briefcase, Key } from "lucide-react";
import { IconGithub, IconInstagram, IconLinkedin } from "@/lib/icons";

function getSeasonalGreeting(): string | null {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month === 11 && day === 2) return "Happy Jaden Day 🎆";
  if (month === 12 && day === 25) return "Merry Christmas ❄️⛄️";
  if (month === 2) return "Happy Black History Month ✊🏾";
  if (month === 3) return "Happy Women's History Month 💜";
  if (month === 6) return "Happy Pride Month 🏳️‍🌈";
  if (month === 10) return "Happy Las Vegas Pride 🏳️‍🌈";
  return null;
}

const socialLinks = [
  { href: "mailto:contact@jadenarceneaux.com", label: "Email", icon: Mail, external: false },
  { href: "/misc#pgp-key", label: "PGP Key", icon: Key, external: false},
  { href: "https://github.com/jadens-arc", label: "GitHub", icon: IconGithub, external: true },
  { href: "https://www.linkedin.com/in/jaden-arceneaux/", label: "LinkedIn", icon: IconLinkedin, external: true },
  { href: "https://www.instagram.com/jaden.svg/", label: "Instagram", icon: IconInstagram, external: true },
  { href: "https://open.spotify.com/artist/37FSUfROYvcy3tgQAWHOo9", label: "Spotify", icon: Music, external: true },
];

export default function Home() {
  const greeting = getSeasonalGreeting();

  return (
    <div>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Hey, I&apos;m Jaden.
      </h1>
      
      {greeting && (
        <p className="mt-8 text-sm text-muted-foreground">{greeting}</p>
      )}

      <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
        Software engineer, occasional writer, and dedicated Neovim user based in beautiful Las Vegas, Nevada🌵
      </p>

      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Feel free to explore my{" "}
        <Link href="/projects" className="underline underline-offset-4 hover:text-foreground transition-colors">
          projects
        </Link>{" "}
        and{" "}
        <Link href="/posts" className="underline underline-offset-4 hover:text-foreground transition-colors">
          blog
        </Link>
        .
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-2">
        {socialLinks.map(({ href, label, icon: Icon, external }) => (
          <Button key={label} variant="outline" size="lg" asChild>
            <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
              <Icon />
              {label}
            </a>
          </Button>
        ))}
      </div>

      <div className="mt-16 mb-16">
        <h2 className="font-heading text-2xl font-bold tracking-tight">A Little More About me.</h2>
        <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-muted-foreground">
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Born and raised in Las Vegas. I taught myself to code at 13 and never really stopped.
            These days I build production software, ERPs, CRMs, and whatever else makes people's work lives easier.
            I've been a professional software engineer for over 4 years.
            Outside of that I also make music as a hobby and you can find that on my Spotify.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            This website is one of my favorite projects and it's open source. Check out the code on{" "}
            <a href="https://github.com/jadens-arc/jadenarceneaux.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
