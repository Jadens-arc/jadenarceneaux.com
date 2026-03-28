"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/posts", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/misc", label: "Misc" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Button variant="ghost" size="icon-sm" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute left-0 right-0 top-[57px] z-10 border-b border-border bg-background px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Button key={href} variant="ghost" size="sm" asChild className="justify-start">
              <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
