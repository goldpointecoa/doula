import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  authorPhoto?: string;
  authorRole?: string;
  content: string;
  image?: string;
}

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 12;

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const { data: allPosts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const response = await fetch('/data/blog-posts.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      return response.json();
    }
  });

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-sage-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-sage-200 rounded w-1/2 mb-8"></div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-sage-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Birth Stories & Insights
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Sharing wisdom, experiences, and support for your pregnancy and birth journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post: BlogPost) => (
            <Card key={post.slug} className="bg-white/70 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {post.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-sage-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <CardTitle className="text-sage-800 hover:text-sage-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="bg-sage-100 text-sage-700 hover:bg-sage-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="border-sage-300 text-sage-700 hover:bg-sage-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={page === currentPage 
                    ? "bg-sage-600 hover:bg-sage-700 text-white" 
                    : "border-sage-300 text-sage-700 hover:bg-sage-50"
                  }
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="border-sage-300 text-sage-700 hover:bg-sage-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {/* Empty State */}
        {allPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-sage-700 mb-2">No posts yet</h3>
            <p className="text-sage-600">
              Check back soon for inspiring stories and helpful insights!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}