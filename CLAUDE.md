# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
```bash
npm run dev      # Start development server with Turbopack on http://localhost:3000
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint to check code quality
```

### Testing
No test framework is currently configured. Consider adding tests with Jest or Vitest when needed.

## Project Architecture

This is a Next.js 15.4.1 application using the App Router architecture with TypeScript.

### Key Directories
- `app/` - App Router pages and layouts. The root layout (app/layout.tsx) contains metadata and global imports.
- `components/` - React components including Hero section and custom SVG icons (Instagram, Mail, Vimeo)
- `public/fonts/` - Custom web fonts: Bastardo, Boogy Brut, and Akkurat families
- `public/videos/` - Video assets for the site

### Important Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` for imports from root
- **Styling**: Global CSS in app/globals.css, using CSS custom properties for theming
- **Fonts**: Custom fonts are loaded via local files, not Google Fonts

### Development Notes
- This appears to be a film production company website (BKCH/Boki Chelo)
- The project uses modern React 19.1.0 features
- ESLint is configured with Next.js core web vitals rules
- No CSS framework (Tailwind, etc.) - uses vanilla CSS

### Before Making Changes
1. Check existing component patterns in `components/` directory
2. Maintain consistent TypeScript types and interfaces
3. Follow the established CSS variable naming in globals.css
4. Preserve the custom font loading setup when modifying layout.tsx