import { useRoute } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  content: string;
  image?: string;
}

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', params?.slug],
    queryFn: async () => {
      if (!params?.slug) return null;
      const response = await fetch(`/data/blog-${params.slug}.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      return response.json();
    },
    enabled: !!params?.slug
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-sage-800 mb-4 mt-8">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold text-sage-700 mb-3 mt-6">{line.slice(3)}</h2>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="text-sage-600 ml-4 mb-1">{line.slice(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="text-sage-600 mb-4 leading-relaxed">{line}</p>;
      });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-sage-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-sage-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-sage-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-sage-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-sage-800 mb-4">Post Not Found</h1>
          <p className="text-sage-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Navigation */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 text-sage-600 hover:text-sage-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-sage-200 p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-sage-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-sage-100 text-sage-700">
                  {tag}
                </Badge>
              ))}
            </div>

            {post.image && (
              <div className="h-64 md:h-96 bg-sage-100 rounded-lg mb-8"></div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-sage max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-sage-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <p className="font-semibold text-sage-800">{post.author}</p>
                  <p className="text-sm text-sage-600">Certified Birth Doula</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-sage-300 text-sage-700 hover:bg-sage-50">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </footer>
        </article>

        {/* Related Posts or CTA */}
        <div className="mt-12 text-center bg-sage-100/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-sage-800 mb-2">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-sage-600 mb-4">
            I'd love to support you through your pregnancy and birth experience.
          </p>
          <Link href="/#contact">
            <Button className="bg-sage-600 hover:bg-sage-700 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}