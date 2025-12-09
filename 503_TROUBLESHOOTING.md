# Quick Fix for 503 Service Unavailable Error

## Your Current Status
- ✅ DNS is working (Cloudflare IPs showing: 188.114.96.0, 188.114.97.0)
- ✅ Cloudflare proxy is enabled (orange cloud)
- ❌ Getting 503 error - Coolify not routing to your service

## Immediate Steps to Fix

### Step 1: Verify Service is Running in Coolify
1. Open your Coolify dashboard
2. Navigate to your **voltventures** application/service
3. Check status - should be **"Running"** (green)
4. If not running, check logs and restart

### Step 2: Add Domain to Service in Coolify
**This is likely the issue!** The domain must be added to the specific service:

1. In Coolify, go to your **voltventures** application
2. Click on the **service** (the container running your app)
3. Look for **"Domains"** or **"FQDNs"** tab/section
4. Click **"Add Domain"** or **"Add FQDN"**
5. Add:
   - **Domain:** `www.voltventures961.com`
   - **Port:** `3000` (or whatever port your Next.js app uses)
   - **SSL/TLS:** Enable ✅
   - **Force HTTPS:** Enable ✅
6. Also add: `voltventures961.com` (root domain, same settings)
7. Wait 1-2 minutes for SSL certificate generation

### Step 3: Check Cloudflare SSL/TLS Mode
**Critical:** Cloudflare SSL mode must be "Full" not "Flexible"

1. Go to Cloudflare Dashboard
2. Select domain: `voltventures961.com`
3. Go to: **SSL/TLS** → **Overview**
4. Set to: **"Full"** or **"Full (strict)"**
5. **NOT "Flexible"** - this causes 503 errors with Coolify
6. Wait 1-2 minutes after changing

### Step 4: Verify Port Configuration
In Coolify service settings:
- **Container Port:** Should be `3000`
- **Public Port:** Can be auto or `3000`
- Check that port mapping is correct

### Step 5: Test Direct Connection (Optional)
To isolate if it's a Cloudflare issue:

1. In Cloudflare DNS, temporarily **disable proxy** (gray cloud the A record)
2. Wait 2-3 minutes
3. Try: `http://www.voltventures961.com` (HTTP, not HTTPS)
4. If this works → Issue is Cloudflare SSL/TLS settings
5. Re-enable proxy and set SSL mode to "Full"

### Step 6: Check Service Logs
In Coolify:
1. Go to your service
2. Click **"Logs"** tab
3. Look for errors about:
   - Domain not found
   - Port binding issues
   - SSL certificate errors

### Step 7: Restart Service
Sometimes a simple restart fixes it:
1. In Coolify, stop the service
2. Wait 10 seconds
3. Start the service again
4. Wait for it to fully start (green status)

## Most Common Causes

1. **Domain added incorrectly in Coolify** (Your current issue!)
   - **Symptom:** Traefik shows `Host(``) && PathPrefix(`domain.com`)`
   - **Solution:** Remove domain and re-add it correctly (just the domain name, no paths)
   - See `TRAEFIK_FIX.md` for detailed steps

2. **Domain not added to service**
   - Solution: Add domain in Coolify service → Domains section

3. **Cloudflare SSL mode is "Flexible"**
   - Solution: Change to "Full" in Cloudflare

4. **Service not running**
   - Solution: Check status and restart in Coolify

5. **Wrong port configured**
   - Solution: Verify port 3000 is correct in Coolify (this is correct for your Dockerfile)

## Quick Verification Checklist

- [ ] Service is running (green status in Coolify)
- [ ] Domain `www.voltventures961.com` is added in Coolify service → Domains
- [ ] Domain `voltventures961.com` is added in Coolify service → Domains
- [ ] SSL/TLS is enabled for both domains in Coolify
- [ ] Cloudflare SSL/TLS mode is set to "Full" (not "Flexible")
- [ ] Port 3000 is correctly configured in Coolify
- [ ] Service logs show no errors
- [ ] Firewall allows ports 80 and 443 on Hetzner server

## Still Not Working?

If after following all steps you still get 503:

1. **Check if service responds directly:**
   ```bash
   curl http://37.27.181.201:3000
   ```
   (Replace 3000 with your actual port)

2. **Check Coolify Traefik logs:**
   - Coolify uses Traefik as reverse proxy
   - Check Traefik logs in Coolify for routing errors

3. **Try accessing via sslip.io:**
   - In Coolify, check if there's an sslip.io URL
   - Test that URL directly
   - If sslip.io works but your domain doesn't → DNS/domain config issue

4. **Contact Support:**
   - Check Coolify documentation
   - Check Coolify GitHub issues
   - Verify your Coolify version is up to date

