import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";

const merriweather = Merriweather({subsets:['latin'],variable:'--font-serif'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://jadenarceneaux.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Jaden Arceneaux",
  description: "Full Stack Developer specializing in scalable applications, automation, and business process optimization.",
  icons: {
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Jaden Arceneaux",
    title: "Jaden Arceneaux",
    description: "Full Stack Developer specializing in scalable applications, automation, and business process optimization.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "Jaden Arceneaux",
      "description": "Full Stack Developer specializing in scalable applications, automation, and business process optimization.",
      "inLanguage": "en",
    },
    {
      "@type": "ItemList",
      "name": "Main Navigation",
      "itemListElement": [
        { "@type": "SiteNavigationElement", "position": 1, "name": "Projects", "url": `${BASE_URL}/projects` },
        { "@type": "SiteNavigationElement", "position": 2, "name": "Blog", "url": `${BASE_URL}/posts` },
        { "@type": "SiteNavigationElement", "position": 3, "name": "Contact", "url": `${BASE_URL}/contact` },
        { "@type": "SiteNavigationElement", "position": 4, "name": "Misc", "url": `${BASE_URL}/misc` },
      ],
    },
  ],
};

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/misc", label: "Misc" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-serif", merriweather.variable)}
      suppressHydrationWarning
    >
      <SpeedInsights />
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <header className="relative border-b border-border">
            <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
              <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
                Jaden Arceneaux
              </Link>
              <div className="flex items-center gap-1">
                <div className="hidden sm:flex items-center gap-1">
                  {navLinks.map(({ href, label }) => (
                    <Button key={href} variant="ghost" size="sm" asChild>
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
                <ThemeToggle />
                <MobileNav />
              </div>
            </nav>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-3xl px-6 py-6">{children}</div>
          </main>
          <footer className="border-t border-border">
            <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-muted-foreground text-center ">
              2026 &copy; Jaden Arceneaux
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
