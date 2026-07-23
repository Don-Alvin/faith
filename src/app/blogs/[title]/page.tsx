import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBlogByTitle } from "@/api/blogsApi";
import BlogDetail from "@/components/Blog/BlogDetail";

export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
  const blog = await getBlogByTitle(params.title);

  if (!blog) {
    return buildMetadata({
      title: "Article Not Found",
      description: "This article could not be found.",
      url: `/blogs/${params.title}`,
    });
  }

  return buildMetadata({
    title: blog.title,
    description: blog.intro,
    keywords: `${blog.title}, real estate blog, property market, Kenya real estate`,
    url: `/blogs/${params.title}`,
    image: blog.imageUrl,
    type: "article",
  });
}

export default async function BlogPage({ params }: { params: { title: string } }) {
  const blog = await getBlogByTitle(params.title);
  return <BlogDetail blog={blog} />;
}
