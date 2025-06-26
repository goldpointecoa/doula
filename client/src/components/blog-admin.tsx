import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Download } from 'lucide-react';

export default function BlogAdmin() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Sarah');
  const [tags, setTags] = useState('');

  const generateSlug = (title: string) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${year}-${month}-${day}-${slug}`;
  };

  const generateMarkdown = () => {
    const currentDate = new Date().toISOString();
    const tagList = tags.split(',').map(tag => `  - ${tag.trim()}`).join('\n');
    
    return `---
title: "${title}"
date: ${currentDate}
excerpt: "${excerpt}"
tags:
${tagList}
author: "${author}"
published: true
---

${content}`;
  };

  const copyToClipboard = () => {
    const markdown = generateMarkdown();
    navigator.clipboard.writeText(markdown);
  };

  const downloadFile = () => {
    const markdown = generateMarkdown();
    const filename = `${generateSlug(title)}.md`;
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-cream-50 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Card className="bg-white/70 backdrop-blur-sm border-sage-200">
          <CardHeader>
            <CardTitle className="text-2xl text-sage-800">Create New Blog Post</CardTitle>
            <p className="text-sage-600">
              Use this form to create blog posts. Copy the output to your content/blog folder.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog post title"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief description of your post"
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author name"
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="pregnancy, birth, doula"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="content">Content (Markdown)</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog post content in Markdown..."
                rows={12}
              />
            </div>

            <div className="flex gap-4">
              <Button onClick={copyToClipboard} className="bg-sage-600 hover:bg-sage-700">
                <Copy className="w-4 h-4 mr-2" />
                Copy Markdown
              </Button>
              <Button onClick={downloadFile} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download File
              </Button>
            </div>

            {title && (
              <div className="mt-6 p-4 bg-sage-50 rounded-lg">
                <p className="text-sm text-sage-600 mb-2">
                  Filename: <code>{generateSlug(title)}.md</code>
                </p>
                <p className="text-xs text-sage-500">
                  Save this file to your content/blog folder and restart the development server.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}