import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug, getAllSlugs } from "@/app/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toLowerCase();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <article className="page-container">
        <Link href="/blog" className="blog-back-link">
          ← back to blogs
        </Link>

        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-meta">
          {formattedDate} · {post.readTime} min read
        </p>

        <div className="mdx-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
