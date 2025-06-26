
# Doula Website

A modern, responsive doula website built with React, TypeScript, and Express.js. Features a nurturing design with sections for services, about, testimonials, pricing, and contact information.

## Features

- 🌿 Modern, nature-inspired design
- 📱 Fully responsive (mobile & desktop)
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI components with shadcn/ui
- 📧 Contact form functionality
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
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
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript types
└── dist/                   # Built files (generated)
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

### Deploy on Netlify

1. Connect your GitHub repository to Netlify
2. The build settings are automatically configured via `netlify.toml`
3. Deploy with one click

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
