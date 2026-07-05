"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, formatDate } from "@/lib/blog-data";

const POSTS_PER_PAGE = 6;

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const featuredPost = posts[0];

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.tags.join(" "),
        post.author.name,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [category, posts, query]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  function updateCategory(nextCategory: string) {
    setCategory(nextCategory);
    setPage(1);
  }

  function updateQuery(nextQuery: string) {
    setQuery(nextQuery);
    setPage(1);
  }

  return (
    <main className="journal-page">
      <header className="journal-header">
        <div className="blog-shell journal-header-inner">
          <Link className="journal-brand" href="/" aria-label="QART home">
            QART
          </Link>
          <nav className="journal-nav" aria-label="Journal navigation">
            <Link href="/">Properties</Link>
            <Link href="/#areas">Areas</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <Link className="journal-header-cta" href="/#consultation">
            Private Consultation
          </Link>
        </div>
      </header>

      <section className="journal-hero">
        <div className="blog-shell journal-hero-inner">
          <div className="journal-hero-copy">
            <p className="journal-label">QART JOURNAL</p>
            <h1>Bangkok luxury living, curated with clarity.</h1>
            <p>
              Editorial guides on residences, neighborhoods, relocation, and
              refined living in Bangkok.
            </p>
          </div>
          <Link
            className="journal-hero-image"
            href={`/blog/${featuredPost.slug}`}
            aria-label={`Read featured article: ${featuredPost.title}`}
          >
            <img src={featuredPost.coverImage} alt="" />
          </Link>
        </div>
      </section>

      <section className="blog-shell journal-feature-section">
        <Link className="journal-feature-card" href={`/blog/${featuredPost.slug}`}>
          <div className="journal-feature-image">
            <img src={featuredPost.coverImage} alt="" />
          </div>
          <div className="journal-feature-copy">
            <div className="journal-card-meta">
              <span>{featuredPost.category}</span>
              <span>{formatDate(featuredPost.publishedAt)}</span>
            </div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <span className="journal-read-link">Read feature</span>
          </div>
        </Link>
      </section>

      <section className="blog-shell blog-toolbar" aria-label="Blog filters">
        <div className="category-list">
          {blogCategories.map((item) => (
            <button
              className={item === category ? "active" : ""}
              key={item}
              type="button"
              onClick={() => updateCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-box">
          <span>Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search by area, topic, or guide"
          />
        </label>
      </section>

      <section className="blog-shell blog-section">
        <div className="journal-section-heading">
          <div>
            <p className="journal-label">Latest Articles</p>
            <h2>Guides for Bangkok living.</h2>
          </div>
        </div>

        <div className="journal-card-grid">
          {paginatedPosts.map((post) => (
            <Link className="journal-card" href={`/blog/${post.slug}`} key={post.slug}>
              <img src={post.coverImage} alt="" />
              <div>
                <div className="journal-card-meta">
                  <span>{post.category}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="journal-read-link">Read article</span>
              </div>
            </Link>
          ))}
        </div>

        <nav className="pagination" aria-label="Blog pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          >
            Next
          </button>
        </nav>
      </section>

      <BlogCta />
    </main>
  );
}

export function BlogCta() {
  return (
    <section className="blog-shell blog-cta journal-cta">
      <div>
        <p className="journal-label">Private consultation</p>
        <h2>Looking for a residence that fits your lifestyle?</h2>
        <p>
          Tell Qart your budget, preferred lifestyle, and move-in timeline. Our
          advisors will curate residences across Bangkok's most desirable addresses.
        </p>
      </div>
      <a href="/#consultation">Private Consultation</a>
    </section>
  );
}
