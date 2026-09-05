/**
 * useSEO — Hook para gestionar dinámicamente los meta tags SEO
 * Importa la config central desde src/data/seo.ts
 */

import { useEffect } from 'react';
import { SEO } from '../data/seo';

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
}

export function useSEO(options: SEOOptions = {}) {
  const { title, description, path = '' } = options;

  useEffect(() => {
    const resolvedTitle = title
      ? `${title} | ${SEO.site.shortName}`
      : SEO.site.name;

    const resolvedDescription = description ?? SEO.site.description;
    const resolvedUrl = `${SEO.site.url}${path}`;

    // ── Título ────────────────────────────────────────────────
    document.title = resolvedTitle;

    // ── Meta básicos ──────────────────────────────────────────
    setMeta('name', 'description', resolvedDescription);
    setMeta('name', 'keywords', SEO.site.keywords.join(', '));
    setMeta('name', 'author', SEO.person.fullName);
    setMeta('name', 'robots', 'index, follow');
    setMeta(
      'name',
      'viewport',
      'width=device-width, initial-scale=1.0, viewport-fit=cover',
    );

    // ── Open Graph ────────────────────────────────────────────
    setMeta('property', 'og:type', SEO.openGraph.type);
    setMeta('property', 'og:title', resolvedTitle);
    setMeta('property', 'og:description', resolvedDescription);
    setMeta('property', 'og:url', resolvedUrl);
    setMeta('property', 'og:site_name', SEO.site.name);
    setMeta('property', 'og:image', SEO.openGraph.image);
    setMeta('property', 'og:image:alt', SEO.openGraph.imageAlt);
    setMeta('property', 'og:image:width', String(SEO.openGraph.imageWidth));
    setMeta('property', 'og:image:height', String(SEO.openGraph.imageHeight));
    setMeta('property', 'og:locale', SEO.site.locale);

    // ── Twitter Card ──────────────────────────────────────────
    setMeta('name', 'twitter:card', SEO.openGraph.twitterCard);
    setMeta('name', 'twitter:title', resolvedTitle);
    setMeta('name', 'twitter:description', resolvedDescription);
    setMeta('name', 'twitter:image', SEO.openGraph.image);
    setMeta('name', 'twitter:image:alt', SEO.openGraph.imageAlt);
    if (SEO.openGraph.twitterSite) {
      setMeta('name', 'twitter:site', SEO.openGraph.twitterSite);
    }

    // ── Canonical URL ─────────────────────────────────────────
    setLink('canonical', resolvedUrl);
  }, [title, description, path]);
}

// ── Utilidades internas ────────────────────────────────────────
function setMeta(
  attrKey: 'name' | 'property',
  attrValue: string,
  content: string,
) {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[${attrKey}="${attrValue}"]`,
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
