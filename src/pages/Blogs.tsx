import { PulseLoader } from "react-spinners";
import { useBlogs } from "@/hooks/useBlogs";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MetaData from "@/components/Meta/meta";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blogs: React.FC = () => {
  const { isLoading, isError, error, blogs } = useBlogs();

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color="#BB7F10" size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">
          Oops! We encountered an error: {error?.message}
        </p>
      </div>
    );
  }

  if (blogs) {
    content = (
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.title}`} className="group">
            <Card className="relative overflow-hidden rounded-2xl border-0 shadow-xl hover-lift hover-glow bg-white h-full transition-all duration-300">
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
                    <span className="bg-yellow-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      Real Estate
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm sm:text-base">
                    {blog.intro}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold group-hover:text-yellow-600 transition-colors duration-300 text-sm sm:text-base">
                      Read More
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <section className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <MetaData 
        title="Real Estate Blog" 
        description="Stay informed with expert real estate insights, market trends, and property investment tips from Lamona Realtors. Your guide to the Kenyan property market."
        keywords="real estate blog, property market Kenya, investment tips, real estate news, property trends"
        url="/blogs"
      />
      
      <header className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Expert Insights
        </div>
        
        <h1 className="heading-responsive font-bold text-gray-900 mb-4 sm:mb-6">
          Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        
        <p className="text-responsive text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay informed with our expert analysis, market trends, and insider tips from the world of real estate.
        </p>
      </header>

      <article className="mb-12 sm:mb-16">
        {content}
      </article>
    </section>
  );
};

export default Blogs;