import { useState, useEffect, useRef } from "react";
import { PulseLoader } from "react-spinners";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlogs";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blogs = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])
  const {isLoading, isError, error, blogs} = useBlogs()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [blogs])

  let content;
  let limit = 6;

  if(isLoading) {
    content = (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <PulseLoader color='#BB7F10' size={15} />
          <p className="mt-4 text-gray-600 font-medium">Loading latest insights...</p>
        </div>
      </div>
    )
  }

  if(blogs) {
    content = (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0,limit)?.map((blog, index) => (
          <div
            key={blog.id}
            ref={el => cardRefs.current[index] = el}
            data-index={index}
            className={`group transition-all duration-700 ${
              visibleCards.has(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link to={`/blogs/${blog.title}`}>
              <Card className='relative overflow-hidden rounded-2xl border-0 shadow-xl hover-lift hover-glow bg-white h-full'>
                {/* Image Container */}
                <CardHeader className='relative p-0 overflow-hidden'>
                  <div className="relative group">
                    <img
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      title={blog?.title}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2 text-white">
                          <BookOpen className="h-4 w-4" />
                          <span className="text-sm font-medium">Read Article</span>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        Real Estate
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='p-6 flex flex-col h-full'>
                  {/* Meta Information */}
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

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {blog.intro}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold group-hover:text-yellow-600 transition-colors duration-300">
                        Read More
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Expert Insights
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Blogs</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our expert analysis, market trends, and insider tips from the world of real estate.
          </p>
        </div>

        {/* Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in">
          <Link to='/blogs'>
            <Button className='btn-primary bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
              Read All Articles
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs