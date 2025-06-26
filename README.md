
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
excerpt: "Brief description of the post"
tags:
  - tag1
  - tag2
author: "Author Name"
published: true
---

# Your blog post content here

Write your post content in markdown format.
```

## Deployment

This project is configured to work with:

- **Replit**: Ready to deploy with the Run button
- **Netlify**: Includes `netlify.toml` configuration
- **Other platforms**: Standard Node.js application

### Deploy on Replit

1. Fork this Repl
2. Click the "Run" button
3. Use Replit's deployment features to publish

### Deploy on Netlify (with CMS)

For full blog functionality with Decap CMS:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Deploy Site**: The build settings are automatically configured via `netlify.toml`
3. **Enable Identity**: Go to Site settings > Identity > Enable Identity
4. **Enable Git Gateway**: Go to Site settings > Identity > Services > Enable Git Gateway
5. **Update Site URL**: In `client/public/admin/config.yml`, update the site_url:
   ```yaml
   site_url: https://your-actual-site-name.netlify.app
   ```
6. **Add Admin Users**: Go to Site settings > Identity > Users and invite admin users
7. **Access CMS**: Visit `yoursite.netlify.app/admin` to manage blog posts

Once configured, the CMS will allow you to create, edit, and publish blog posts directly through the admin interface, with changes automatically committing to your GitHub repository.

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
