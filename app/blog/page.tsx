import { Metadata } from "next";
import { getAllPosts } from "@/app/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and creative process.",
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return <BlogListClient posts={posts} />;
}
