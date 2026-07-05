import type { BlogContentSection, BlogPost } from "./blog-data";
import { blogPosts } from "./blog-data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "y8yvqb99";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-06";

const sanityEndpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

type SanityPost = Partial<
  Omit<BlogPost, "author" | "content" | "relatedPosts">
> & {
  author?: Partial<BlogPost["author"]> | null;
  content?: Partial<BlogContentSection>[] | null;
  relatedPosts?: (string | null)[] | null;
};

const postFields = `{
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": coverImage.asset->url,
  "category": category->title,
  tags,
  "author": author->{name, role, bio},
  publishedAt,
  updatedAt,
  readingTime,
  content[]{id, heading, paragraphs},
  "relatedPosts": relatedPosts[]->slug.current
}`;

async function sanityFetch<T>(query: string, params: Record<string, string> = {}) {
  const url = new URL(sanityEndpoint);
  url.searchParams.set("query", query);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Sanity request failed: ${response.status}`);
  }

  const payload = (await response.json()) as { result?: T };
  return payload.result;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeContent(post: SanityPost): BlogContentSection[] {
  const sections = post.content?.filter((section) => section.heading) ?? [];

  if (sections.length === 0) {
    return [
      {
        id: "overview",
        heading: "Overview",
        paragraphs: [post.excerpt ?? "Qart editorial guidance for refined Bangkok living."],
      },
    ];
  }

  return sections.map((section) => ({
    id: section.id ?? slugify(section.heading ?? "section"),
    heading: section.heading ?? "Overview",
    paragraphs:
      section.paragraphs?.filter((paragraph): paragraph is string => Boolean(paragraph)) ?? [],
  }));
}

function normalizePost(post: SanityPost): BlogPost | null {
  if (!post.title || !post.slug) {
    return null;
  }

  const publishedAt = post.publishedAt ?? new Date().toISOString().slice(0, 10);

  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? "Qart editorial guidance for refined Bangkok living.",
    coverImage: post.coverImage ?? "/assets/property-lounge.png",
    category: post.category ?? "Market Guides",
    tags: post.tags ?? [],
    author: {
      name: post.author?.name ?? "Qart Editorial Team",
      role: post.author?.role ?? "Bangkok luxury rental advisors",
      bio:
        post.author?.bio ??
        "Qart's editorial team combines neighborhood research, private rental advisory, and Bangkok market knowledge.",
    },
    publishedAt,
    updatedAt: post.updatedAt ?? publishedAt,
    readingTime: post.readingTime ?? 5,
    content: normalizeContent(post),
    relatedPosts:
      post.relatedPosts?.filter((slug): slug is string => Boolean(slug)) ?? [],
  };
}

export async function getBlogPosts() {
  try {
    const result = await sanityFetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postFields}`,
    );
    const posts = result?.map(normalizePost).filter((post): post is BlogPost => Boolean(post));

    return posts && posts.length > 0 ? posts : blogPosts;
  } catch {
    return blogPosts;
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const result = await sanityFetch<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug][0] ${postFields}`,
      { slug },
    );
    const post = result ? normalizePost(result) : null;

    return post ?? blogPosts.find((item) => item.slug === slug) ?? null;
  } catch {
    return blogPosts.find((item) => item.slug === slug) ?? null;
  }
}

export function getRelatedBlogPosts(post: BlogPost, posts: BlogPost[]) {
  const explicitPosts = post.relatedPosts
    .map((slug) => posts.find((item) => item.slug === slug))
    .filter((item): item is BlogPost => Boolean(item));

  if (explicitPosts.length >= 3) {
    return explicitPosts.slice(0, 3);
  }

  const fallbackPosts = posts.filter(
    (item) => item.category === post.category && item.slug !== post.slug,
  );

  return [...explicitPosts, ...fallbackPosts].slice(0, 3);
}
