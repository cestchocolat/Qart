import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogNavigation } from "../blog-navigation";
import { BlogCta } from "../blog-index";
import { SiteFooter } from "@/components/qart/site-footer";
import type { BlogRichTextBlock, BlogRichTextSpan } from "@/lib/blog-data";
import { formatDate } from "@/lib/blog-data";
import {
  getBlockText,
  getBlogPostBySlug,
  getBlogPosts,
  getRelatedBlogPosts,
} from "@/lib/sanity-blog";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

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
  const [post, posts] = await Promise.all([getBlogPostBySlug(slug), getBlogPosts()]);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post, posts);

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

            {post.richContent ? (
              <RichArticleContent blocks={post.richContent} />
            ) : (
              post.content.map((section) => (
                <section id={section.id} key={section.id}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))
            )}

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

function RichArticleContent({ blocks }: { blocks: BlogRichTextBlock[] }) {
  const elements = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];

    if (block.listItem) {
      const listType = block.listItem;
      const listItems = [];

      while (index < blocks.length && blocks[index].listItem === listType) {
        const listBlock = blocks[index];
        listItems.push(
          <li key={listBlock._key ?? index}>{renderSpans(listBlock.children, listBlock.markDefs)}</li>,
        );
        index += 1;
      }

      index -= 1;
      const ListTag = listType === "number" ? "ol" : "ul";
      elements.push(<ListTag key={block._key ?? `list-${index}`}>{listItems}</ListTag>);
      continue;
    }

    if (block._type === "image" && block.assetUrl) {
      elements.push(
        <figure className="article-inline-image" key={block._key ?? block.assetUrl}>
          <img src={block.assetUrl} alt={block.alt ?? ""} />
          {block.alt ? <figcaption>{block.alt}</figcaption> : null}
        </figure>,
      );
      continue;
    }

    if (block._type !== "block") {
      continue;
    }

    const children = renderSpans(block.children, block.markDefs);

    if (block.style === "h2" || block.style === "h3") {
      const HeadingTag = block.style;
      const heading = getBlockText(block);
      elements.push(
        <section id={block._key ?? heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={block._key ?? heading}>
          <HeadingTag>{children}</HeadingTag>
        </section>,
      );
      continue;
    }

    if (block.style === "blockquote") {
      elements.push(<blockquote key={block._key}>{children}</blockquote>);
      continue;
    }

    elements.push(<p key={block._key}>{children}</p>);
  }

  return <>{elements}</>;
}

function renderSpans(
  spans: BlogRichTextSpan[] = [],
  markDefs: BlogRichTextBlock["markDefs"] = [],
) {
  return spans.map((span, index) => {
    const marks = span.marks ?? [];
    let node: React.ReactNode = span.text ?? "";

    for (const mark of marks) {
      if (mark === "strong") {
        node = <strong>{node}</strong>;
      } else if (mark === "em") {
        node = <em>{node}</em>;
      } else {
        const link = markDefs.find((definition) => definition._key === mark && definition.href);

        if (link?.href) {
          node = (
            <a href={link.href} rel="noreferrer" target={link.href.startsWith("http") ? "_blank" : undefined}>
              {node}
            </a>
          );
        }
      }
    }

    return <span key={span._key ?? index}>{node}</span>;
  });
}
