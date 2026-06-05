import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Portfolio",
  },
  twitter: {
    title: "Portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
