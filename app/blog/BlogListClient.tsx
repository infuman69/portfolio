"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPostMeta } from "@/app/lib/blog";

type Category = "all" | "technical" | "non-technical";

interface Props {
  posts: BlogPostMeta[];
}

export default function BlogListClient({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const categoryPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const visibleTagCounts: Array<[string, number]> = (() => {
    const counts: Record<string, number> = {};
    for (const post of categoryPosts) {
      for (const tag of post.tags) {
        counts[tag] = (counts[tag] ?? 0) + 1;
      }
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  })();

  const filteredPosts = categoryPosts.filter(
    (post) => activeTag === null || post.tags.includes(activeTag)
  );

  function handleCategoryChange(cat: Category) {
    setActiveCategory(cat);
    if (activeTag) {
      const newCategoryPosts =
        cat === "all" ? posts : posts.filter((p) => p.category === cat);
      const tagStillVisible = newCategoryPosts.some((p) =>
        p.tags.includes(activeTag)
      );
      if (!tagStillVisible) setActiveTag(null);
    }
  }

  function handleTagClick(tag: string) {
    setActiveTag((prev) => (prev === tag ? null : tag));
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <main className="page-container">
        <h1 className="blog-title">Welcome to my Blog 👨‍💻</h1>
        <p className="blog-subtitle">
          Here I write down my learnings about topics which I find interesting.
        </p>

        {/* Category tabs */}
        <div className="blog-categories">
          {(["all", "technical", "non-technical"] as Category[]).map((cat) => (
            <button
              key={cat}
              className={`blog-category-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tag chips */}
        {visibleTagCounts.length > 0 && (
          <div className="blog-tag-list">
            {visibleTagCounts.map(([tag, count]) => (
              <button
                key={tag}
                className={`blog-tag-chip${activeTag === tag ? " active" : ""}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
                <span className="blog-tag-count">{count}</span>
              </button>
            ))}
          </div>
        )}

        {/* Post list */}
        <div>
          {filteredPosts.map((post) => (
            <div key={post.slug} className="blog-post-item">
              <div className="blog-post-header">
                <Link href={`/blog/${post.slug}`} className="link-accent">
                  {post.title}
                </Link>
                <span className="blog-post-date">
                  {new Date(post.date)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    .toLowerCase()}
                </span>
              </div>
              {post.description && (
                <p className="blog-post-description">{post.description}</p>
              )}
              <div className="blog-post-meta-row">
                <span className="blog-post-readtime">
                  {post.readTime} min read
                </span>
                <span className="blog-meta-sep">·</span>
                <span className="blog-post-category">{post.category}</span>
              </div>
              {post.tags.length > 0 && (
                <div className="blog-post-inline-tags">
                  {post.tags.map((tag) => (
                    <button
                      key={tag}
                      className={`blog-inline-tag${activeTag === tag ? " active" : ""}`}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="blog-no-results">no posts found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
