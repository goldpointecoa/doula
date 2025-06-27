import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from '@tanstack/react-query';
import OrganicDivider from "./organic-divider";

export default function BlogPreviewSection() {
  const { data: allPosts = [] } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const response = await fetch('/data/blog-posts.json');
      if (!response.ok) return [];
      return response.json();
    }
  });

  const recentPosts = allPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="relative py-20 bg-gradient-to-b from-sage-50 to-cream-50">
      <OrganicDivider topColor="bg-cream-50" bottomColor="bg-sage-50" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-sage-500" />
            <span className="text-sage-600 font-medium">From the Heart</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Sharing experiences and insights for your pregnancy and birth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {recentPosts.map((post: any) => (
            <Card key={post.slug} className="bg-white/70 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              {post.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-sage-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <CardTitle className="text-sage-800 group-hover:text-sage-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sage-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="w-full text-sage-700 hover:bg-sage-50 hover:text-sage-700 group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}

        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white hover:text-white px-8 py-3">
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      
      <OrganicDivider topColor="bg-sage-50" bottomColor="bg-cream-50" reverse={true} />
    </section>
  );
}