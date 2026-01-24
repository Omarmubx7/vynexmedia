/**
 * Sitemap Generator for Vynex Media
 * Place the generated sitemap.xml content in public/sitemap.xml
 * 
 * Generated: 2026-01-24
 * Last Updated: 2026-01-24
 */

const generateSitemap = (): string => {
  const baseUrl = 'https://vynexmedia.com';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { url: '/about/', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/services/product-photography/', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/services/restaurant-photography/', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/services/reels-video-editing/', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/services/content-packages/', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { url: '/portfolio/', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { url: '/portfolio/product-shoots/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/portfolio/restaurant-shoots/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/portfolio/video-reels/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    { url: '/contact/', priority: '0.9', changefreq: 'monthly', lastmod: today },
    { url: '/faq/', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/testimonials/', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/privacy-policy/', priority: '0.5', changefreq: 'yearly', lastmod: today },
    { url: '/blog/', priority: '0.8', changefreq: 'weekly', lastmod: today },
    // Blog posts - Add as you create them
    { url: '/blog/prepare-restaurant-photoshoot/', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/blog/food-photography-secrets/', priority: '0.7', changefreq: 'monthly', lastmod: today },
    { url: '/blog/reels-boost-sales/', priority: '0.7', changefreq: 'monthly', lastmod: today },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export default generateSitemap;

/**
 * Usage:
 * 1. Copy the output of generateSitemap() 
 * 2. Save it as public/sitemap.xml
 * 3. Submit to Google Search Console
 * 
 * Or automate with a build script:
 * 
 * // scripts/generate-sitemap.js
 * const fs = require('fs');
 * const generateSitemap = require('./sitemap-generator');
 * 
 * const sitemap = generateSitemap();
 * fs.writeFileSync('public/sitemap.xml', sitemap);
 * console.log('Sitemap generated successfully');
 */
