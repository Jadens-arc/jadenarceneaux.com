"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { animation_container, animation_item } from "@/lib/animation";
import type { PostMeta } from "@/lib/posts";

type Props = {
  posts: PostMeta[];
  page: number;
  totalPages: number;
  allPosts: PostMeta[];
};

export function PostsContent({ posts, page, totalPages, allPosts }: Props) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(allPosts, {
        keys: [
          { name: "title", weight: 2 },
          { name: "tags", weight: 1.5 },
          { name: "summary", weight: 1 },
        ],
        threshold: 0.35,
      }),
    [allPosts]
  );

  const trimmed = query.trim();
  const searchResults: PostMeta[] = trimmed ? fuse.search(trimmed).map((r) => r.item) : [];
  const displayedPosts = trimmed ? searchResults : posts;
  const showPagination = !trimmed && totalPages > 1;

  return (
    <motion.div variants={animation_container} initial="hidden" animate="show">
      <motion.h1 variants={animation_item} className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Read All About It.
      </motion.h1>

      <motion.div variants={animation_item} className="relative mt-6">
        <Search
          className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
          aria-hidden
        />
        <Input
          type="search"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-8"
        />
      </motion.div>

      {showPagination && page > 1 && (
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
        {trimmed && displayedPosts.length === 0 ? (
          <motion.p variants={animation_item} className="py-10 text-sm text-muted-foreground text-center">
            No posts match &ldquo;{trimmed}&rdquo;.
          </motion.p>
        ) : (
          displayedPosts.map(({ slug, title, date, tags, summary }) => (
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
          ))
        )}
      </div>

      {showPagination && (
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
