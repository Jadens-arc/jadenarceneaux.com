import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    title: "Contact",
  },
  twitter: {
    title: "Contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
