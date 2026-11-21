"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { animation_container, animation_item } from "@/lib/animation";
import { PER_PAGE } from "@/lib/constants";
import type { PostMeta } from "@/lib/posts";
import Link from "next/link";

type Props = {
  allPosts: PostMeta[];
};

export function PostsContent({ allPosts }: Props) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(allPosts, {
        keys: [
          { name: "title", weight: 1 },
          { name: "summary", weight: 1 },
        ],
        threshold: 0.35,
      }),
    [allPosts]
  );

  const trimmed = query.trim();
  const searchResults: PostMeta[] = trimmed ? fuse.search(trimmed).map((r) => r.item) : [];
  const displayedPosts = trimmed ? searchResults : allPosts.slice(0, visibleCount);
  const hasMore = !trimmed && visibleCount < allPosts.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => Math.min(c + PER_PAGE, allPosts.length));
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [allPosts.length]);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setVisibleCount(PER_PAGE);
  }

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
          onChange={handleQueryChange}
          className="pl-8"
        />
      </motion.div>

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
              <p className="mt-2 text-sm text-muted-foreground leading-7 break-words">{summary}</p>
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

      {hasMore && <div ref={sentinelRef} />}
    </motion.div>
  );
}
