import Link from "next/link";
import { getPaginatedPosts, PER_PAGE } from "@/lib/posts";
import { Button } from "@/components/ui/button";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const { posts, totalPages } = getPaginatedPosts(page);

  return (
    <div>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Read all about it.
      </h1>

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
          <div key={slug} className="py-5">
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
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" size="sm" asChild disabled={page <= 1}>
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
    </div>
  );
}
