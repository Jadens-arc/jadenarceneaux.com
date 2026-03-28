import fs from "fs";
import path from "path";
import matter from "gray-matter";
import TOML from "@iarna/toml";
import postsIndex from "./generated/posts-index.json";

const POSTS_DIR = path.join(process.cwd(), "blog-posts");
const PER_PAGE = 10;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  isFavorite: boolean;
  summary: string;
};

export type Post = PostMeta & {
  content: string;
};

function parsePost(filename: string): Post | null {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");

  const { data, content } = matter(raw, {
    delimiters: ["+++", "+++"],
    engines: {
      toml: { parse: TOML.parse as (s: string) => Record<string, unknown>, stringify: () => "" },
    },
    language: "toml",
  });

  if (data.draft === true) return null;

  const words = content
    .replace(/\{\{<[^>]+>\}\}/g, "")
    .replace(/[#*`>_~\[\]]/g, "")
    .trim()
    .split(/\s+/);
  const summary = words.length > 100 ? words.slice(0, 100).join(" ") + "..." : words.join(" ");

  return {
    slug,
    title: String(data.title ?? slug),
    date: data.date instanceof Date ? data.date.toISOString() : String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    isFavorite: data.isFavorite === true,
    summary,
    content,
  };
}

export function getAllPostMeta(): PostMeta[] {
  return postsIndex as PostMeta[];
}

export function getPaginatedPosts(page: number): { posts: PostMeta[]; totalPages: number } {
  const all = getAllPostMeta();
  const totalPages = Math.ceil(all.length / PER_PAGE);
  const posts = all.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return { posts, totalPages };
}

export function getPost(slug: string): Post | null {
  const filename = `${slug}.md`;
  const filePath = path.join(POSTS_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(filename);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePost(f))
    .filter((p): p is Post => p !== null)
    .map((p) => p.slug);
}

export { PER_PAGE };
