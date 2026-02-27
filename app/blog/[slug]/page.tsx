import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug, getAllSlugs, slugify } from "@/app/lib/blog";
import { notFound } from "next/navigation";
import React from "react";
import remarkGfm from "remark-gfm";
import { TableOfContents } from "./TableOfContents";

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ssroy.com";

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(post.image && {
        images: [{ url: `${baseUrl}${post.image}` }],
      }),
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      ...(post.image && {
        images: [`${baseUrl}${post.image}`],
      }),
    },
  };
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (React.isValidElement(children)) {
    return getTextContent(
      (children as React.ReactElement<{ children?: React.ReactNode }>).props
        .children
    );
  }
  return "";
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(getTextContent(props.children));
    return <h2 id={id} {...props} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(getTextContent(props.children));
    return <h3 id={id} {...props} />;
  },
};


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
          {formattedDate} · {post.readTime} min read · {post.category}
        </p>

        {post.tags.length > 0 && (
          <div className="blog-post-tag-row">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-post-tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        <TableOfContents toc={post.toc} />

        <hr className="blog-toc-divider" />

        <div className="mdx-content">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </div>
  );
}
