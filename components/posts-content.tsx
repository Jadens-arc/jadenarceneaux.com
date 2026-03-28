"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { animation_container, animation_item } from "@/lib/animation";

type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
};

type Props = {
  posts: Post[];
  page: number;
  totalPages: number;
};

export function PostsContent({ posts, page, totalPages }: Props) {
  return (
    <motion.div variants={animation_container} initial="hidden" animate="show">
      <motion.h1 variants={animation_item} className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Read All About It.
      </motion.h1>

      {page > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/posts?page=${page - 1}`}>Previous</Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" asChild disabled={page >= totalPages}>
            <Link href={`/posts?page=${page + 1}`}>Next</Link>
          </Button>
        </div>
      )}

      <div className="mt-10 divide-y divide-border">
        {posts.map(({ slug, title, date, tags, summary }) => (
          <motion.div variants={animation_item} key={slug} className="py-5">
            <div className="flex items-baseline justify-between gap-4">
              <Link
                href={`/posts/${slug}`}
                className="font-heading text-lg font-semibold hover:underline underline-offset-4"
              >
                {title}
              </Link>
              <span className="shrink-0 text-sm text-muted-foreground">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-7">{summary}</p>
            {tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <motion.div variants={animation_item} className="mt-8 flex items-center justify-between">
          <Button variant="outline" size="sm" asChild disabled={page <= 1}>
            <Link href={`/posts?page=${page - 1}`}>Previous</Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" asChild disabled={page >= totalPages}>
            <Link href={`/posts?page=${page + 1}`}>Next</Link>
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
