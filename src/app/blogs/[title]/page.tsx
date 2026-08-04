import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getBlogByTitle } from "@/api/blogsApi";
import BlogDetail from "@/components/Blog/BlogDetail";

// Next.js doesn't reliably decode dynamic segments before handing them to
// generateMetadata/the page — params.title can arrive still percent-encoded
// (e.g. "Kenya%3A%20A%20Guide"), which never matches a plain-text Firestore
// title. Decode explicitly, tolerating an already-decoded or malformed value.
function decodeTitle(title: string): string {
  try {
    return decodeURIComponent(title);
  } catch {
    return title;
  }
}

export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
  const title = decodeTitle(params.title);
  const blog = await getBlogByTitle(title);

  if (!blog) {
    return buildMetadata({
      title: "Article Not Found",
      description: "This article could not be found.",
      url: `/blogs/${encodeURIComponent(title)}`,
    });
  }

  return buildMetadata({
    title: blog.title,
    description: blog.intro,
    keywords: `${blog.title}, real estate blog, property market, Kenya real estate`,
    url: `/blogs/${encodeURIComponent(blog.title)}`,
    image: blog.imageUrl,
    type: "article",
  });
}

export default async function BlogPage({ params }: { params: { title: string } }) {
  const blog = await getBlogByTitle(decodeTitle(params.title));
  return <BlogDetail blog={blog} />;
}
