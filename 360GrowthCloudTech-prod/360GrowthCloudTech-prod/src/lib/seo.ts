import { useEffect } from "react";

export const SITE_URL = "https://360cloudtech.com";
export const SITE_NAME = "360CloudTech";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Sets per-route title, meta tags and JSON-LD. Runs client-side only — see SEO notes on CSR limitations. */
export function useSeo({ title, description, path, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMetaTag("name", "description", description);
    setCanonical(url);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:image", DEFAULT_OG_IMAGE);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", SITE_NAME);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", DEFAULT_OG_IMAGE);

    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const scripts = schemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      script.setAttribute("data-seo-jsonld", path);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, jsonLd]);
}
