import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogNavigation } from "../blog-navigation";
import { BlogCta } from "../blog-index";
import { SiteFooter } from "@/components/qart/site-footer";
import {
  blogPosts,
  findPostBySlug,
  formatDate,
  getRelatedPosts,
} from "@/lib/blog-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage, alt: post.title }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <main>
      <BlogNavigation />
      <article>
        <header className="article-hero">
          <div className="blog-shell article-header-grid">
            <div>
              <Link className="back-link" href="/blog">
                Back to journal
              </Link>
              <p className="blog-kicker">{post.category}</p>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
              <div className="post-meta article-meta">
                <span>{formatDate(post.publishedAt)}</span>
                <span>{post.readingTime} min read</span>
                <span>{post.author.name}</span>
              </div>
            </div>
            <img className="article-cover" src={post.coverImage} alt="" />
          </div>
        </header>

        <div className="blog-shell article-layout">
          <aside className="toc-card" aria-label="Table of contents">
            <span>In this guide</span>
            {post.content.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.heading}
              </a>
            ))}
          </aside>

          <div className="article-content">
            <div className="author-card">
              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
              <p>{post.author.bio}</p>
            </div>

            {post.content.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="tag-list" aria-label="Article tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="blog-shell blog-section">
        <div className="blog-section-heading">
          <div>
            <p className="blog-kicker">Related articles</p>
            <h2>Continue planning your Bangkok move.</h2>
          </div>
        </div>
        <div className="blog-card-grid related-grid">
          {relatedPosts.map((relatedPost) => (
            <Link className="blog-card" href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
              <img src={relatedPost.coverImage} alt="" />
              <div>
                <span>{relatedPost.category}</span>
                <h3>{relatedPost.title}</h3>
                <p>{relatedPost.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BlogCta />
      <SiteFooter />
    </main>
  );
}
