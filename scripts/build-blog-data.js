import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
// Output to both client/public/data (for dev) and dist/public/data (for Netlify build)
const OUTPUT_DIR = path.join(process.cwd(), 'client/public/data');
const NETLIFY_OUTPUT_DIR = path.join(process.cwd(), 'dist/public/data');

function buildBlogData() {
  // Ensure output directories exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  if (!fs.existsSync(NETLIFY_OUTPUT_DIR)) {
    fs.mkdirSync(NETLIFY_OUTPUT_DIR, { recursive: true });
  }

  if (!fs.existsSync(BLOG_DIR)) {
    console.log('No blog directory found, creating empty blog data...');
    fs.writeFileSync(path.join(OUTPUT_DIR, 'blog-posts.json'), JSON.stringify([]));
    fs.writeFileSync(path.join(NETLIFY_OUTPUT_DIR, 'blog-posts.json'), JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        author: data.author || 'Sarah',
        published: data.published !== false,
        content,
        image: data.image || undefined
      };
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Write all posts data to both locations
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'blog-posts.json'), 
    JSON.stringify(posts, null, 2)
  );
  fs.writeFileSync(
    path.join(NETLIFY_OUTPUT_DIR, 'blog-posts.json'), 
    JSON.stringify(posts, null, 2)
  );

  // Write individual post files to both locations
  posts.forEach(post => {
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `blog-${post.slug}.json`),
      JSON.stringify(post, null, 2)
    );
    fs.writeFileSync(
      path.join(NETLIFY_OUTPUT_DIR, `blog-${post.slug}.json`),
      JSON.stringify(post, null, 2)
    );
  });

  console.log(`Generated blog data for ${posts.length} posts`);
}

buildBlogData();