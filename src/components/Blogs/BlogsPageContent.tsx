import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import type { Blog } from "@/types";

interface BlogsPageContentProps {
  blogs: Blog[];
}

const BlogsPageContent = ({ blogs }: BlogsPageContentProps) => {
  const content = (
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${encodeURIComponent(blog.title)}`} className="group">
            <Card className="relative overflow-hidden rounded-2xl border border-border shadow-xl hover-lift hover-glow bg-card h-full transition-all duration-300">
              <CardHeader className="relative p-0 overflow-hidden">
                <div className="relative group">
                  <img
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={blog.imageUrl}
                    alt={blog.title}
                    title={blog.title}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-white">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm font-medium">Read Article</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="gradient-gold text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      Real Estate
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5 min read</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3 group-hover:text-accent-foreground transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm sm:text-base">
                    {blog.intro}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-[#b07d10] dark:text-accent font-semibold group-hover:text-accent transition-colors duration-300 text-sm sm:text-base">
                      Read More
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#b07d10] dark:text-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
  );

  return (
    <section className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <header className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-accent/15 text-[#b07d10] dark:text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Expert Insights
        </div>

        <h1 className="heading-responsive font-bold text-foreground mb-4 sm:mb-6">
          Our <span className="text-gradient">Blog</span>
        </h1>

        <p className="text-responsive text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Stay informed with our expert analysis, market trends, and insider tips from the world of real estate.
        </p>
      </header>

      <article className="mb-12 sm:mb-16">
        {content}
      </article>
    </section>
  );
};

export default BlogsPageContent;
