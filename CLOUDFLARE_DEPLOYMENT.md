# Cloudflare Pages Deployment Guide

This guide explains how to deploy the Property Agent Landing Page to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account
- Repository pushed to GitHub: `https://github.com/cloud8877-source/property-agent-landing-page-template`

## Deployment Steps

### Method 1: Cloudflare Dashboard (Recommended)

1. **Connect GitHub Repository**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Select "Connect to Git" → "GitHub"
   - Authorize Cloudflare to access your GitHub account
   - Select the repository: `property-agent-landing-page-template`

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Node.js version**: `18` (or higher)

3. **Environment Variables** (Optional)
   - Add any environment variables your app needs
   - `NODE_VERSION=18`

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your site automatically

### Method 2: Wrangler CLI (Alternative)

If you prefer using the command line for manual deployments:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler auth login

# Build the project locally
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=property-agent-landing-page
```

## Build Configuration

The project is configured with the following settings:

### Package.json Scripts
```json
{
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite",
    "preview": "vite preview"
  }
}
```

### Vite Configuration
- **Output directory**: `dist`
- **Base path**: `./` (relative paths for static hosting)
- **Build optimization**: Enabled for production
- **SPA routing**: Client-side routing support configured

## Custom Domain (Optional)

To use a custom domain:

1. Go to your Cloudflare Pages project
2. Click "Custom domains" tab
3. Add your domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Build Failures
- Ensure Node.js version is 18 or higher
- Check that all dependencies are installed: `npm install`
- Verify build command works locally: `npm run build`

### Routing Issues
- The app uses client-side routing
- All routes are handled by `index.html` (SPA fallback)
- No additional server configuration needed

### Performance
- Assets are optimized and minified
- CSS and JS are code-split for better loading
- Static assets are cached by Cloudflare's CDN

## Environment Variables

Add these in Cloudflare Pages dashboard under "Environment variables":

- `NODE_VERSION`: `18` (required for build)

## Automatic Deployments

Once connected, Cloudflare Pages will:
- Deploy automatically on every push to `main` branch
- Create preview deployments for pull requests
- Provide staging URLs for testing

## URLs

After deployment, your site will be available at:
- Production: `https://[project-name].pages.dev`
- Custom domain: Your configured domain

## Support

For issues with Cloudflare Pages deployment:
- Check Cloudflare Pages documentation
- Review build logs in the dashboard
- Ensure all dependencies are properly listed in `package.json`