import { useEffect } from 'react';

const siteOrigin = import.meta.env.VITE_SITE_URL || 'https://devowll.com';

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

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const pageTitle = title ? `${title} | Devowll` : 'Devowll';
    const ogImage = `${siteOrigin}/logo.png`;
    const canonicalUrl = new URL(normalizedPath, siteOrigin).toString();

    document.title = pageTitle;
    ensureMeta('meta[name="description"]', 'name', 'description', description);
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', description);
    ensureMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    ensureMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    ensureCanonical(canonicalUrl);
  }, [description, path, title]);

  return null;
}