# VoltVentures - Deployment Guide for Hetzner Coolify

## Tech Stack

- **Framework**: Next.js 16.0.8 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.1
- **Styling**: Tailwind CSS 4
- **Runtime**: Node.js 20
- **Container**: Docker (Alpine Linux)

## Project Structure

```
voltventures/
├── app/
│   ├── components/
│   │   └── MobileMenu.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── Dockerfile
├── .dockerignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Docker Configuration

The project includes:
- **Dockerfile**: Multi-stage build optimized for production
- **.dockerignore**: Excludes unnecessary files from Docker build
- **next.config.ts**: Configured with `output: 'standalone'` for Docker deployment

## Deployment on Hetzner Coolify

### Prerequisites
1. Coolify instance running on Hetzner
2. Git repository (GitHub, GitLab, etc.)
3. Domain configured (voltventures961.com)

### Steps

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **In Coolify Dashboard**:
   - Create a new application
   - Connect your Git repository
   - Select "Dockerfile" as build method
   - Coolify will automatically detect the Dockerfile
   - Set environment variables if needed:
     - `NODE_ENV=production`
     - `NEXT_TELEMETRY_DISABLED=1`
   - Configure domain: `voltventures961.com`
   - Deploy!

3. **Build Process**:
   - Coolify will run: `docker build -t voltventures .`
   - The Dockerfile uses multi-stage build:
     - Stage 1: Install dependencies
     - Stage 2: Build Next.js application
     - Stage 3: Create production image with only necessary files

4. **Runtime**:
   - Container runs on port 3000
   - Next.js standalone server handles all requests
   - Static files served from `.next/static`

## Environment Variables

No environment variables required for basic deployment. Add if needed:
- `NODE_ENV=production` (already set in Dockerfile)
- `NEXT_TELEMETRY_DISABLED=1` (already set in Dockerfile)

## Build Optimization

- Uses Node.js 20 Alpine (smaller image size)
- Standalone output (only necessary files in production)
- Multi-stage build (reduces final image size)
- Production optimizations enabled

## Health Checks

Coolify will automatically check:
- Port 3000 availability
- Container health status

## Troubleshooting

1. **Build fails**: Check Dockerfile syntax and Node.js version compatibility
2. **App doesn't start**: Verify port 3000 is exposed and accessible
3. **Static files not loading**: Ensure `.next/static` is copied in Dockerfile

## Notes

- The Dockerfile uses standalone output mode for optimal Docker deployment
- All dependencies are installed in the build stage
- Production image only contains runtime files
- No local testing required - deploy directly to Coolify

