import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return getAllSlugs().map((name) => ({ name }));
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const post = getPost(name);
  if (!post) return {};
  return { title: `${post.title} — Jaden Arceneaux` };
}

export default async function PostPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const post = getPost(name);
  if (!post) notFound();

  // Convert Hugo img shortcodes to markdown images, strip any remaining shortcodes
  const content = post.content
    .replace(/\{\{<\s*img([\s\S]*?)>\}\}/g, (_, attrs) => {
      const url = attrs.match(/url="([^"]+)"/)?.[1] ?? "";
      const description = attrs.match(/description="([^"]+)"/)?.[1] ?? "";
      const align = attrs.match(/align="([^"]+)"/)?.[1] ?? "left";
      return `![${description}](${url} "${align}")`;
    })
    .replace(/\{\{<[^>]+>\}\}/g, "");

  return (
    <div>
      <Link
        href="/posts"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← All posts
      </Link>

      <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        {post.title}
      </h1>

      <div className="mt-3 flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
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

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img({ src, alt, title }) {
              if (!src) return null;
              const alignClass =
                title === "center"
                  ? "mx-auto"
                  : title === "right"
                  ? "ml-auto"
                  : "mr-auto";
              return (
                <span className={`block ${alignClass}`}>
                  <Image
                    src={src}
                    alt={alt ?? ""}
                    width={800}
                    height={600}
                    className="rounded-md"
                    style={{ width: "100%", height: "auto" }}
                  />
                  {alt && (
                    <span className="mt-1 block text-center text-sm text-muted-foreground">
                      {alt}
                    </span>
                  )}
                </span>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
