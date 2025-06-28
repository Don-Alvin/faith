import { useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import MetaData from '@/components/Meta/meta';
import { Separator } from '@/components/ui/separator';
import { useBlogs } from '@/hooks/useBlogs';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Blog: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { blogs, error, isLoading, isError } = useBlogs();

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color="#BB7F10" size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading article...</p>
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

  const blog = blogs?.find(blog => blog.title === title);

  if (blog) {
    content = (
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blogs">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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

          <h1 className="heading-responsive font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
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
          <div className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {blog.intro}
          </div>
          
          <div className="text-gray-700 leading-relaxed text-responsive space-y-6">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Lamona Realtors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your trusted partner in real estate. We provide expert insights and guidance to help you make informed property decisions in Kenya's dynamic market.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    );
  } else if (!isLoading && !blog) {
    content = (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blogs">
          <Button className="bg-primary text-white hover:bg-primary/90">
            Browse All Articles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24">
      <MetaData 
        title={blog?.title || 'Article Not Found'} 
        description={blog?.intro || 'Read expert real estate insights and market analysis from Lamona Realtors'}
        keywords={`${blog?.title}, real estate blog, property market, Kenya real estate`}
        url={`/blogs/${title}`}
        image={blog?.imageUrl}
      />
      {content}
    </div>
  );
};

export default Blog;