import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBlogs } from "@/api/blogsApi";
import BlogsPageContent from "@/components/Blogs/BlogsPageContent";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Blog",
  description:
    "Stay informed with expert real estate insights, market trends, and property investment tips from Lamona Realtors. Your guide to the Kenyan property market.",
  keywords:
    "real estate blog, property market Kenya, investment tips, real estate news, property trends",
  url: "/blogs",
});

export default async function BlogsPage() {
  const blogs = await getBlogs().catch(() => []);
  return <BlogsPageContent blogs={blogs} />;
}
