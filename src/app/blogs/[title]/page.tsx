import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BlogDetail from "@/components/Blog/BlogDetail";

export const metadata: Metadata = buildMetadata({
  title: "Article",
  description:
    "Read expert real estate insights and market analysis from Lamona Realtors",
  keywords: "real estate blog, property market, Kenya real estate",
  url: "/blogs",
});

export default function BlogPage({ params }: { params: { title: string } }) {
  return <BlogDetail title={params.title} />;
}
