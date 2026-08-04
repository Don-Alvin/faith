"use client"

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import type { Blog } from "@/types";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0')
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

  const limit = 6;
  const content = (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, limit)?.map((blog, index) => (
          <div
            key={blog.id}
            ref={el => { cardRefs.current[index] = el }}
            data-index={index}
            className={`group transition-all duration-700 ${
              visibleCards.has(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
              <Card className='relative overflow-hidden rounded-2xl border border-border shadow-xl hover-lift hover-glow bg-white h-full'>
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
                      <span className="gradient-gold text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        Real Estate
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='p-6 flex flex-col h-full'>
                  {/* Meta Information */}
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

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-accent-foreground transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {blog.intro}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-[#b07d10] font-semibold group-hover:text-accent transition-colors duration-300">
                        Read More
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#b07d10] group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/15 text-[#b07d10] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Expert Insights
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Blogs</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with our expert analysis, market trends, and insider tips from the world of real estate.
          </p>
        </div>

        {/* Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href='/blogs'>
            <Button className='btn-primary gradient-gold text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105'>
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
