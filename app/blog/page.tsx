import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and creative process.",
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <main className="page-container">
        <h1 className="blog-title">Welcome to my Blog 👨‍💻</h1>
        <p className="blog-subtitle">
          Here I write down my learnings about topics which I find interesting. 
        </p>

        <div>
          {posts.map((post) => (
            <div key={post.slug} className="blog-post-item">
              <div className="blog-post-header">
                <Link href={`/blog/${post.slug}`} className="link-accent">
                  {post.title}
                </Link>
                <span className="blog-post-date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).toLowerCase()}
                </span>
              </div>
              <p className="blog-post-description">{post.description}</p>
              <p className="blog-post-readtime">{post.readTime} min read</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
