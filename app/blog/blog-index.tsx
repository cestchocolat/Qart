"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogNavigation } from "./blog-navigation";
import { SiteFooter } from "@/components/qart/site-footer";
import type { BlogPost } from "@/lib/blog-data";
import { blogCategories, formatDate } from "@/lib/blog-data";

const POSTS_PER_PAGE = 9;

function getPageNumber(value: string | null) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const requestedPage = getPageNumber(searchParams.get("page"));

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
  const currentPage = Math.min(requestedPage, totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  function updatePage(nextPage: number) {
    const nextParams = new URLSearchParams(searchParams.toString());
    const clampedPage = Math.min(Math.max(1, nextPage), totalPages);

    nextParams.set("page", String(clampedPage));

    const queryString = nextParams.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }

  function updateCategory(nextCategory: string) {
    setCategory(nextCategory);
    updatePage(1);
  }

  function updateQuery(nextQuery: string) {
    setQuery(nextQuery);
    updatePage(1);
  }

  return (
    <main className="journal-page">
      <BlogNavigation />

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
            href={`/blog/${posts[0].slug}`}
            aria-label={`Read featured article: ${posts[0].title}`}
          >
            <img src={posts[0].coverImage} alt="" />
          </Link>
        </div>
      </section>

      <section className="blog-shell blog-toolbar journal-toolbar" aria-label="Blog filters">
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

      <section className="blog-shell blog-section journal-articles-section">
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
            onClick={() => updatePage(currentPage - 1)}
          >
            Previous
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              aria-current={pageNumber === currentPage ? "page" : undefined}
              className={`pagination-number${pageNumber === currentPage ? " active" : ""}`}
              key={pageNumber}
              type="button"
              onClick={() => updatePage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => updatePage(currentPage + 1)}
          >
            Next
          </button>
        </nav>
      </section>

      <BlogCta />
      <SiteFooter />
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
