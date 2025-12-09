# VoltVentures - Tech Stack

## Core Technologies

### Frontend Framework
- **Next.js 16.0.8** - React framework with App Router
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes support
  - Image optimization
  - Font optimization

### Programming Language
- **TypeScript 5** - Type-safe JavaScript
  - Static type checking
  - Better IDE support
  - Improved code quality

### UI Library
- **React 19.2.1** - JavaScript library for building user interfaces
  - Component-based architecture
  - Client-side interactivity
  - Hooks for state management

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
  - Responsive design utilities
  - Custom animations
  - Dark mode support
  - PostCSS integration

### Build Tools
- **Node.js 20** - JavaScript runtime
- **pnpm 9.15.0** - Fast, disk space efficient package manager
- **ESLint** - Code linting

## Deployment Stack

### Containerization
- **Docker** - Container platform
  - Multi-stage builds
  - Alpine Linux base image
  - Production optimizations

### Hosting
- **Hetzner Coolify** - Self-hosted PaaS
  - Docker-based deployment
  - Git integration
  - Automatic SSL
  - Domain management

## Project Architecture

### File Structure
```
voltventures/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
├── .dockerignore          # Docker ignore rules
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

### Key Features
- **Server Components** - React Server Components for better performance
- **Client Components** - Interactive client-side components
- **Responsive Design** - Mobile-first approach
- **Modern Animations** - CSS animations and transitions
- **SEO Optimized** - Proper metadata and semantic HTML

## Dependencies

### Production
- `next@16.0.8` - Next.js framework
- `react@19.2.1` - React library
- `react-dom@19.2.1` - React DOM renderer

### Development
- `typescript@^5` - TypeScript compiler
- `@types/node@^20` - Node.js type definitions
- `@types/react@^19` - React type definitions
- `@types/react-dom@^19` - React DOM type definitions
- `tailwindcss@^3.4.17` - Tailwind CSS
- `postcss@^8.4.47` - PostCSS processor
- `autoprefixer@^10.4.20` - CSS vendor prefixer
- `eslint@^9` - ESLint
- `eslint-config-next@16.0.8` - Next.js ESLint config

## Build Process

1. **Install Dependencies**: `pnpm install --frozen-lockfile`
2. **Type Check**: TypeScript compilation
3. **Build**: `pnpm run build`
   - Compiles TypeScript
   - Optimizes images
   - Generates static pages
   - Creates standalone output for Docker
4. **Start**: `pnpm start` (production server)

## Runtime

- **Node.js 20** - Runtime environment
- **Port**: 3000 (configurable)
- **Host**: 0.0.0.0 (all interfaces)

## Performance Optimizations

- Standalone output mode (smaller Docker image)
- Multi-stage Docker builds
- Image optimization
- Font optimization
- Code splitting
- Static asset optimization

