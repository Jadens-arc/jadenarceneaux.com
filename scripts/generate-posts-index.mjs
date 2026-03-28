import fs from "fs";
import path from "path";
import matter from "gray-matter";
import TOML from "@iarna/toml";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "..", "blog-posts");
const OUT_FILE = path.join(__dirname, "..", "lib", "generated", "posts-index.json");

function parsePost(filename) {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");

  const { data, content } = matter(raw, {
    delimiters: ["+++", "+++"],
    engines: { toml: { parse: TOML.parse, stringify: () => "" } },
    language: "toml",
  });

  if (data.draft === true) return null;

  const words = content
    .replace(/\{\{<[^>]+>\}\}/g, "")
    .replace(/[#*`>_~\[\]]/g, "")
    .trim()
    .split(/\s+/);
  const summary =
    words.length > 100 ? words.slice(0, 100).join(" ") + "..." : words.join(" ");

  return {
    slug,
    title: String(data.title ?? slug),
    date: data.date instanceof Date ? data.date.toISOString() : String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    isFavorite: data.isFavorite === true,
    summary,
  };
}

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map(parsePost)
  .filter(Boolean)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));
console.log(`Generated posts index: ${posts.length} posts → ${OUT_FILE}`);
