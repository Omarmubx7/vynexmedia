/**
 * SEO Utilities for Vynex Media
 * Manages metadata, schema markup, and SEO-related functions
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  locale?: string;
}

/**
 * Update document title and meta tags
 */
export const updatePageMeta = (config: SEOConfig) => {
  // Update title
  document.title = config.title;
  
  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', config.description);
  }
  
  // Update keywords
  if (config.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', config.keywords);
    }
  }
  
  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', config.description);
  }
  
  if (config.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', config.ogImage);
    }
  }
  
  // Update canonical
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }
};

/**
 * Add JSON-LD schema markup
 */
export const addSchemaMarkup = (schema: Record<string, unknown>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * LocalBusiness Schema for Vynex Media
 */
export const vynexLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vynex Media",
  "image": "https://vynexmedia.com/logo.png",
  "description": "وكالة إنتاج بصري متخصصة في تصوير المنتجات والمطاعم ومونتاج الفيديو",
  "url": "https://vynexmedia.com",
  "telephone": "+962790720994",
  "email": "info@vynexmedia.com",
  "areaServed": {
    "@type": "City",
    "name": "Amman",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JO"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Amman, Jordan",
    "addressLocality": "Amman",
    "addressCountry": "JO"
  },
  "sameAs": [
    "https://instagram.com/vynexmedia.jo",
    "https://facebook.com/vynexmedia",
    "https://wa.me/962790720994"
  ],
  "priceRange": "$$$",
  "founder": "Vynex Media Team",
  "foundingDate": "2024",
  "knowsAbout": [
    "Product Photography",
    "Food Photography",
    "Restaurant Photography",
    "Video Editing",
    "Social Media Content",
    "Reels Editing"
  ]
};

/**
 * Organization Schema
 */
export const vynexOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vynex Media",
  "url": "https://vynexmedia.com",
  "logo": "https://vynexmedia.com/logo.png",
  "description": "Visual Production Agency specializing in product photography, restaurant photography, and short-form video editing",
  "sameAs": [
    "https://instagram.com/vynexmedia.jo",
    "https://facebook.com/vynexmedia"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+962790720994",
    "email": "info@vynexmedia.com"
  }
};

/**
 * Service Schema Template
 */
export const createServiceSchema = (
  name: string,
  description: string,
  priceRange?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Vynex Media"
  },
  "areaServed": "Jordan",
  ...(priceRange && { "priceRange": priceRange })
});

/**
 * FAQ Schema Template
 */
export const createFAQSchema = (
  faqs: Array<{
    question: string;
    answer: string;
  }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

/**
 * BlogPosting Schema
 */
export const createBlogPostSchema = (
  title: string,
  description: string,
  imageUrl: string,
  datePublished: string,
  dateModified?: string,
  author: string = "Vynex Media"
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": imageUrl,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": {
    "@type": "Organization",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Vynex Media",
    "logo": {
      "@type": "ImageObject",
      "url": "https://vynexmedia.com/logo.png"
    }
  }
});

/**
 * Breadcrumb Schema
 */
export const createBreadcrumbSchema = (
  items: Array<{
    name: string;
    url: string;
  }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Image Optimization Helper
 */
export const optimizeImageAlt = (alt: string, keyword?: string): string => {
  // Ensure alt text is descriptive and includes relevant keywords
  if (keyword && !alt.toLowerCase().includes(keyword.toLowerCase())) {
    return `${alt} - ${keyword}`;
  }
  return alt;
};

/**
 * Generate XML Sitemap Entry
 */
export const generateSitemapEntry = (
  url: string,
  lastmod: string,
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly',
  priority: number = 0.5
): string => {
  return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};
