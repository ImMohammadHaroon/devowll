import { useEffect } from 'react';

const siteOrigin = import.meta.env.VITE_SITE_URL || 'https://devowll.com';
const defaultKeywords = 'Devowll, remote internship, remote internship program, tech internship, online internship';

function ensureMeta(selector, attributeName, attributeValue, content) {
  const existing = document.head.querySelector(selector) || document.createElement('meta');
  existing.setAttribute(attributeName, attributeValue);
  existing.setAttribute('content', content);

  if (!existing.isConnected) {
    document.head.appendChild(existing);
  }
}

function ensureCanonical(href) {
  const existing = document.head.querySelector('link[rel="canonical"]') || document.createElement('link');
  existing.setAttribute('rel', 'canonical');
  existing.setAttribute('href', href);

  if (!existing.isConnected) {
    document.head.appendChild(existing);
  }
}

export default function Seo({ title, description, path = '/', keywords = defaultKeywords }) {
  useEffect(() => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const pageTitle = title ? `${title} | Devowll` : 'Devowll';
    const ogImage = `${siteOrigin}/logo.png`;
    const canonicalUrl = new URL(normalizedPath, siteOrigin).toString();

    document.title = pageTitle;
    ensureMeta('meta[name="description"]', 'name', 'description', description);
    ensureMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', description);
    ensureMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    ensureMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    ensureMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    ensureCanonical(canonicalUrl);
  }, [description, keywords, path, title]);

  return null;
}