import { getPaginatedPosts, getAllPostMeta } from "@/lib/posts";
import { PostsContent } from "@/components/posts-content";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const { posts, totalPages } = getPaginatedPosts(page);
  const allPosts = getAllPostMeta();

  return <PostsContent posts={posts} page={page} totalPages={totalPages} allPosts={allPosts} />;
}
