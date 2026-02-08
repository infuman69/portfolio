import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/blog";
import { getPostViews } from "@/app/lib/analytics";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and creative process.",
};

export default async function BlogPage() {
  const posts = getAllPosts();

  const viewCounts = await Promise.all(
    posts.map(async (post) => ({
      slug: post.slug,
      views: await getPostViews(post.slug),
    }))
  );

  const viewsMap = Object.fromEntries(
    viewCounts.map((v) => [v.slug, v.views])
  );

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
              <div className="flex items-center gap-3">
                <p className="blog-post-readtime">{post.readTime} min read</p>
                <span className="blog-post-readtime">·</span>
                <p className="blog-post-readtime">
                  {viewsMap[post.slug]?.toLocaleString() ?? 0} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
