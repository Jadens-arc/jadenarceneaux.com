import { getAllPostMeta } from "@/lib/posts";
import { PostsContent } from "@/components/posts-content";

export default function Blog() {
  const allPosts = getAllPostMeta();

  return <PostsContent allPosts={allPosts} />;
}
