import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
  },
  twitter: {
    title: "Blog",
  },
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
