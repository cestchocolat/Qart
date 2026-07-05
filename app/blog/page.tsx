import { Suspense } from "react";
import { BlogIndex } from "./blog-index";
import { getBlogPosts } from "@/lib/sanity-blog";

export const metadata = {
  title: "Bangkok Real Estate Journal",
  description:
    "Qart guides for Bangkok luxury rentals, Thonglor condos, Sukhumvit living, pet-friendly residences, and expat relocation.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Suspense fallback={null}>
      <BlogIndex posts={posts} />
    </Suspense>
  );
}
