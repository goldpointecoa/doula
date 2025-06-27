
# Doula Website

A modern, responsive doula website built with React, TypeScript, and Express.js. Features a nurturing design with sections for services, about, testimonials, pricing, and contact information.

## Features

- 🌿 Modern, nature-inspired design
- 📱 Fully responsive (mobile & desktop)
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI components with shadcn/ui
- 📧 Contact form functionality
- 🎯 SEO-friendly structure
- 📝 Integrated blog with Decap CMS
- 🔐 Admin interface for content management

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Content**: Markdown files with frontmatter
- **Build Tool**: Vite
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Fonts**: Lora, Open Sans

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Local Development

1. **Clone the repository** (or fork on Replit)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5000`

The development server will automatically reload when you make changes to the code.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check with TypeScript

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
│   └── public/admin/       # Decap CMS admin interface
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript types
├── content/                # Blog content and pages
│   └── blog/               # Blog posts (markdown files)
└── dist/                   # Built files (generated)
```

## Blog Management

The website includes an integrated blog powered by Decap CMS. Blog posts are stored as markdown files with frontmatter metadata.

### Blog Administration

- Access the admin interface at `/admin` (requires Netlify deployment and authentication)
- Content management through Decap CMS with Git Gateway integration
- Real-time preview and publishing workflow

### Content Structure

Blog posts are stored in `content/blog/` as markdown files with this structure:

```markdown
---
title: "Your Blog Post Title"
date: 2025-01-01T10:00:00.000Z
image: "/images/blog/your-featured-image.jpg"
excerpt: "Brief description of the post"
tags:
  - tag1
  - tag2
author: "Author Name"
authorPhoto: "/assets/author-photo.jpg"
authorRole: "Certified Birth Doula"
published: true
---

# Your blog post content here

Write your post content in markdown format.
```

## Complete Setup Guide

This project is designed to work seamlessly with Replit development and Netlify deployment with Decap CMS. Here's how everything works together:

### Architecture Overview

The blog system uses a **static file approach** instead of API calls to ensure proper Netlify deployment:

1. **Content Storage**: Blog posts are stored as markdown files in `content/blog/`
2. **Build Process**: `scripts/build-blog-data.js` converts markdown to JSON files at build time
3. **Frontend**: React components read static JSON files from `/data/` endpoints
4. **CMS Integration**: Decap CMS manages the markdown files via Git Gateway

This approach avoids server dependencies and ensures your site works as a static deployment.

### Setting Up From Scratch in Replit

When creating this project structure from an AI agent, follow these steps to avoid common pitfalls:

#### 1. Project Structure Setup

Ensure your Replit has this exact structure:
```
├── client/public/admin/          # Decap CMS admin interface
│   ├── config.yml               # CMS configuration
│   └── index.html               # CMS entry point
├── content/blog/                # Markdown blog posts
├── scripts/build-blog-data.js   # Build script for static data
├── netlify.toml                 # Netlify deployment config
└── package.json                 # Must include build script
```

#### 2. Critical Files Configuration

**netlify.toml** - Essential for proper deployment:
```toml
[build]
  publish = "dist/public"
  command = "node scripts/build-blog-data.js && npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

**package.json** - Must include the build script:
```json
{
  "scripts": {
    "build": "tsc && vite build",
    "dev": "cross-env NODE_ENV=development tsx server/index.ts"
  }
}
```

**client/public/admin/config.yml** - CMS configuration:
```yml
backend:
  name: git-gateway
  branch: main

site_url: https://your-site-name.netlify.app

media_folder: "client/public/images/blog"
public_folder: "/images/blog"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Excerpt", name: "excerpt", widget: "text", required: false}
      - {label: "Tags", name: "tags", widget: "list", required: false}
      - {label: "Author", name: "author", widget: "string", default: "Your Name"}
      - {label: "Published", name: "published", widget: "boolean", default: true}
      - {label: "Body", name: "body", widget: "markdown"}
```

### Deploying to Netlify with Full CMS Functionality

#### Step 1: Initial Deployment

1. **Push to GitHub**: Ensure your Replit code is in a GitHub repository
2. **Connect to Netlify**: 
   - Go to [Netlify](https://netlify.com) and create a new site
   - Connect your GitHub repository
   - Netlify will automatically detect the `netlify.toml` settings

#### Step 2: Enable Netlify Identity (Critical for Security)

1. **Enable Identity Service**:
   - Go to Site settings > Identity
   - Click "Enable Identity"

2. **Secure Registration** (THIS IS CRUCIAL):
   - Go to Site settings > Identity > Registration preferences
   - **CHANGE from "Open" to "Invite only"**
   - This prevents random people from accessing your CMS

3. **Configure External Providers** (Optional):
   - You can enable Google, GitHub, etc. for easier login
   - Still requires invitation even with external providers

#### Step 3: Configure Git Gateway

1. **Enable Git Gateway**:
   - Go to Site settings > Identity > Services
   - Click "Enable Git Gateway"
   - This allows the CMS to commit to your repository

2. **Verify Repository Access**:
   - Ensure your Netlify site is connected to the correct GitHub repo
   - Git Gateway will use this connection

#### Step 4: Add Admin Users

1. **Invite Users**:
   - Go to Site settings > Identity > Users
   - Click "Invite users"
   - Enter email addresses of people who should access the CMS
   - They'll receive email invitations

2. **User Workflow**:
   - Invited users click the email link
   - They set up their password
   - They can then access `/admin` on your site

#### Step 5: Access and Test CMS

1. **Admin Interface**: Visit `https://your-site-name.netlify.app/admin`
2. **Login**: Use the account created from the invitation
3. **Create Posts**: Posts are saved as markdown files and auto-deployed

### Markdown Rendering Setup

The project uses `react-markdown` with `remark-gfm` for proper markdown rendering:

#### Required Dependencies
```bash
npm install react-markdown remark-gfm
```

#### Custom Markdown Components

The blog post component includes styled markdown components for proper rendering:

```typescript
const markdownComponents = {
  h1: ({ children }: any) => <h1 className="text-3xl font-bold text-sage-800 mb-4 mt-6">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-2xl font-semibold text-sage-700 mb-3 mt-5">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-xl font-medium text-sage-700 mb-2 mt-4">{children}</h3>,
  p: ({ children }: any) => <p className="text-sage-600 mb-4 leading-relaxed">{children}</p>,
  ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-1 text-sage-600">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-1 text-sage-600">{children}</ol>,
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
```

### Static vs API Approach

**Why Static Files Work Better:**

1. **Netlify Compatibility**: Static files are served directly by Netlify's CDN
2. **Performance**: No server-side processing required
3. **Reliability**: No backend dependencies to fail
4. **SEO**: All content is available at build time

**How the Build Process Works:**

1. `scripts/build-blog-data.js` runs during Netlify build
2. It reads all markdown files from `content/blog/`
3. Converts them to JSON files in `client/public/data/`
4. React components fetch these static JSON files
5. Netlify serves everything as static assets

### Common Pitfalls to Avoid

1. **Open Registration**: Always set Identity to "Invite only"
2. **Missing Build Script**: Ensure `netlify.toml` includes the data build command
3. **API Dependencies**: Don't use server APIs that won't work in static deployment
4. **Wrong Publish Directory**: Must be `dist/public` for this setup
5. **Missing Redirects**: The `/*` redirect is essential for SPA routing
6. **CMS Config Errors**: Ensure `config.yml` paths match your actual structure

### Testing Your Setup

1. **Local Development**: Use `npm run dev` in Replit
2. **Build Test**: Run `npm run build` to ensure static files generate
3. **CMS Test**: After Netlify deployment, test `/admin` access
4. **Content Test**: Create a blog post via CMS and verify it appears on site

### Deploy on Replit

For simpler deployment without CMS features:

1. Fork this Repl
2. Click the "Run" button  
3. Use Replit's deployment features to publish

Note: Full CMS functionality requires Netlify due to Git Gateway requirements.

## Customization

### Content

- Update the doula's information in `client/src/components/about-section.tsx`
- Modify services in `client/src/components/services-section.tsx`
- Adjust pricing in `client/src/components/pricing-section.tsx`
- Update testimonials in `client/src/components/testimonials-section.tsx`

### Styling

- Colors and theme: `client/src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

### Images

- Replace the placeholder images with actual photos
- Update image URLs in the respective component files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions about this doula website template, please open an issue on GitHub or contact the maintainers.
