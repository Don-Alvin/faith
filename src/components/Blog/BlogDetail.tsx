import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Blog } from "@/types";

interface BlogDetailProps {
  blog: Blog | null;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  if (!blog) {
    return (
      <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h2>
          <p className="text-muted-foreground mb-8">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/blogs">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse All Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blogs">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Lamona Realtors</span>
            </div>
          </div>

          <h1 className="heading-responsive font-bold text-foreground mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <span className="bg-accent/15 text-[#b07d10] px-3 py-1 rounded-full text-sm font-semibold">
              Real Estate
            </span>
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Featured Image */}
        <div className="mb-8 sm:mb-12">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            title={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>

        <Separator className="mb-8" />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
            {blog.intro}
          </div>

          <div className="text-foreground/80 leading-relaxed text-responsive space-y-6">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="bg-secondary rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2">Lamona Realtors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your trusted partner in real estate. We provide expert insights and guidance to help you make informed property decisions in Kenya&apos;s dynamic market.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;
