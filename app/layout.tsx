import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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

export const metadata: Metadata = {
  title: "Jaden Arceneaux",
  description: "Full Stack Developer specializing in scalable applications, automation, and business process optimization.",
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
<body className="min-h-full flex flex-col">
        <ThemeProvider>
          <header className="border-b border-border">
            <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
              <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
                Jaden Arceneaux
              </Link>
              <div className="flex items-center gap-1">
                {navLinks.map(({ href, label }) => (
                  <Button key={href} variant="ghost" size="sm" asChild>
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                <ThemeToggle />
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
