import { BlogIndex } from "./blog-index";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
  title: "Bangkok Real Estate Journal",
  description:
    "Qart guides for Bangkok luxury rentals, Thonglor condos, Sukhumvit living, pet-friendly residences, and expat relocation.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogIndex posts={blogPosts} />;
}
