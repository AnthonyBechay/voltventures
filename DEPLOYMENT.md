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

## Cloudflare DNS Configuration

### Step 1: Configure DNS Records in Cloudflare

**Your Hetzner Coolify Server IP:** `37.27.181.201`

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Select your domain: `voltventures961.com`

2. **Navigate to DNS Settings**
   - Click on **DNS** in the left sidebar
   - Click **Records** tab

3. **Add DNS Records**

   **For Root Domain (voltventures961.com):**
   ```
   Type: A
   Name: @
   IPv4 address: 37.27.181.201
   Proxy status: Proxied (orange cloud) ✅
   TTL: Auto
   ```

   **For WWW Subdomain (www.voltventures961.com):**
   ```
   Type: A
   Name: www
   IPv4 address: 37.27.181.201
   Proxy status: Proxied (orange cloud) ✅
   TTL: Auto
   ```

4. **Important DNS Settings:**
   - ✅ **Enable Proxy (Orange Cloud)**: This enables Cloudflare's CDN, DDoS protection, and SSL
   - ✅ **SSL/TLS Mode**: Set to **"Full"** or **"Full (strict)"** in SSL/TLS settings
   - ✅ **Always Use HTTPS**: Enable in SSL/TLS → Edge Certificates

### Step 2: Verify DNS Propagation

After adding DNS records, wait 5-30 minutes for propagation, then verify:

```bash
# Check root domain
nslookup voltventures961.com

# Check www subdomain
nslookup www.voltventures961.com

# Both should return: 37.27.181.201
```

**Note:** If you have Cloudflare proxy enabled (orange cloud), the IP shown might be Cloudflare's IP, which is normal. The actual routing still works correctly.

### Step 3: Configure Domain in Coolify

1. **In Coolify Dashboard:**
   - Go to your application/service
   - Navigate to **Domains** section
   - Add domain: `voltventures961.com`
   - Add domain: `www.voltventures961.com` (optional but recommended)
   - Enable **SSL/TLS** (Let's Encrypt)
   - Wait for certificate generation (1-2 minutes)

2. **Verify SSL Certificate:**
   - Check that SSL certificate is valid
   - Test HTTPS access: `https://voltventures961.com`

### Step 4: Cloudflare SSL/TLS Settings

**Recommended Settings in Cloudflare:**

1. **SSL/TLS Mode:**
   - Go to: SSL/TLS → Overview
   - Set to: **"Full"** or **"Full (strict)"**
   - This ensures encrypted connection between Cloudflare and your server

2. **Always Use HTTPS:**
   - Go to: SSL/TLS → Edge Certificates
   - Enable: **"Always Use HTTPS"**
   - This redirects all HTTP traffic to HTTPS

3. **Automatic HTTPS Rewrites:**
   - Enable: **"Automatic HTTPS Rewrites"**
   - This fixes mixed content issues

### Troubleshooting DNS Issues

**If domain doesn't resolve:**
1. Check DNS records are correct in Cloudflare
2. Wait longer (can take up to 48 hours, but usually 5-30 minutes)
3. Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

**If SSL certificate fails in Coolify:**
1. Verify DNS is pointing to `37.27.181.201`
2. Check that port 80 and 443 are open on your Hetzner server
3. Ensure domain is added correctly in Coolify
4. Try disabling Cloudflare proxy temporarily to test direct connection

**If site loads but shows "Not Secure":**
1. Check SSL/TLS mode in Cloudflare is set to "Full" or "Full (strict)"
2. Verify Coolify has generated SSL certificate
3. Check browser console for mixed content warnings

**If you get "503 Service Unavailable" or "No available server":**

This means DNS is working (Cloudflare is routing correctly), but Coolify isn't routing to your service. Follow these steps:

1. **Verify Service is Running in Coolify:**
   - Go to your Coolify dashboard
   - Check your application/service status
   - Ensure the service shows as "Running" (green status)
   - If not running, check logs for errors and restart the service

2. **Verify Domain is Added to the Correct Service:**
   - In Coolify, go to your application
   - Click on your service (the one running on port 3000)
   - Go to **"Domains"** or **"FQDNs"** section
   - Verify `www.voltventures961.com` is listed
   - If missing, click **"Add Domain"** and add:
     - Domain: `www.voltventures961.com`
     - Port: `3000` (or the port your Next.js app uses)
     - Enable SSL/TLS: ✅ Yes
   - Also add root domain: `voltventures961.com` (same settings)

3. **Check Port Configuration:**
   - Verify your Dockerfile exposes port `3000`
   - In Coolify service settings, ensure port mapping is correct:
     - Container Port: `3000`
     - Public Port: `3000` (or auto-assigned)

4. **Verify SSL Certificate Generation:**
   - In Coolify, check the domain's SSL status
   - It should show "Valid" or "Active"
   - If it shows "Failed" or "Pending":
     - Wait 2-3 minutes for Let's Encrypt to generate certificate
     - Check that DNS is properly pointing to your server
     - Try temporarily disabling Cloudflare proxy to test direct connection

5. **Test Direct Connection (Bypass Cloudflare):**
   - Temporarily disable Cloudflare proxy (gray cloud the DNS record)
   - Wait 2-3 minutes for DNS to update
   - Try accessing: `http://www.voltventures961.com` (HTTP, not HTTPS)
   - If this works, the issue is with Cloudflare SSL/TLS settings
   - Re-enable proxy and check Cloudflare SSL/TLS mode

6. **Check Cloudflare SSL/TLS Mode:**
   - In Cloudflare: SSL/TLS → Overview
   - Set to: **"Full"** (not "Flexible")
   - "Flexible" mode can cause 503 errors with Coolify
   - Wait 1-2 minutes after changing

7. **Check Coolify Logs:**
   - In Coolify dashboard, go to your service
   - Click on **"Logs"** tab
   - Look for errors related to:
     - Domain routing
     - SSL certificate
     - Port binding
     - Service startup

8. **Verify Service Health:**
   - In Coolify, check if health checks are passing
   - Test the service directly via IP:
     - `http://37.27.181.201:PORT` (replace PORT with your service port)
     - If this doesn't work, the service itself has issues

9. **Common Fixes:**
   - **Restart the service** in Coolify
   - **Remove and re-add the domain** in Coolify
   - **Regenerate SSL certificate** in Coolify
   - **Check firewall** on Hetzner server (ports 80, 443 should be open)
   - **Verify service is listening on correct port** (check logs)

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

