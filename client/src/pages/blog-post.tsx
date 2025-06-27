import { useRoute } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  const { toast } = useToast();
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);
  
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

  // Custom components for ReactMarkdown
  const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-sage-800 mb-4 mt-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold text-sage-700 mb-3 mt-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-medium text-sage-700 mb-2 mt-4">{children}</h3>,
    p: ({ children }: any) => <p className="text-sage-600 mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-1 text-sage-600">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-1 text-sage-600">{children}</ol>,
    li: ({ children }: any) => <li className="text-sage-600">{children}</li>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-sage-300 pl-4 py-2 mb-4 italic text-sage-700 bg-sage-50 rounded-r">{children}</blockquote>,
    code: ({ inline, children }: any) => 
      inline 
        ? <code className="bg-sage-100 text-sage-800 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
        : <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto"><code className="font-mono text-sm">{children}</code></pre>,
    a: ({ href, children }: any) => <a href={href} className="text-sage-600 hover:text-sage-800 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
    img: ({ src, alt }: any) => <img src={src} alt={alt} className="max-w-full h-auto rounded-lg mb-4 shadow-md" />,
    strong: ({ children }: any) => <strong className="font-semibold text-sage-800">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-sage-700">{children}</em>,
  };

  const handleShare = async () => {
    const shareData = {
      title: post?.title || 'Blog Post',
      text: post?.excerpt || 'Check out this blog post!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Post has been shared via your device's share menu.",
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The blog post link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The blog post link has been copied to your clipboard.",
        });
      } catch (clipboardError) {
        // Final fallback: show URL in toast
        toast({
          title: "Share this post",
          description: window.location.href,
          duration: 10000,
        });
      }
    }
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
            <Button variant="outline" className="hover:text-white">
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
          <Button variant="ghost" className="mb-8 hover:text-white">
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
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-sage-100 text-sage-700">
                  {tag}
                </Badge>
              ))}
            </div>

            {post.image && (
              <div className="h-64 md:h-96 rounded-lg mb-8 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-sage-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {post.authorPhoto ? (
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-sage-200 flex-shrink-0">
                    <img 
                      src={post.authorPhoto} 
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-sage-600" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sage-800">{post.author}</p>
                  <p className="text-sm text-sage-600">{post.authorRole || 'Certified Birth Doula'}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-sage-300 text-sage-700 hover:bg-sage-50 hover:text-sage-700"
                onClick={handleShare}
              >
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