import React, { useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';

const localeMap: Record<'pt' | 'en' | 'fr', string> = {
  pt: 'pt_BR',
  en: 'en_US',
  fr: 'fr_FR',
};

const BASE_URL = 'https://www.okapicodeforge.com.br';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function removeHeadElements(selectors: string[]) {
  selectors.forEach((selector) => {
    document.head.querySelectorAll(selector).forEach((el) => el.remove());
  });
}

const SeoHead: React.FC = () => {
  const { t, language } = useI18n();

  useEffect(() => {
    const title = t.seo.title;
    const description = t.seo.description;
    const ogLocale = localeMap[language];
    const pathname = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    document.title = title;
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });
    upsertMeta('meta[name="googlebot"]', {
      name: 'googlebot',
      content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Okapi Code Forge' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: ogLocale });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    removeHeadElements([
      'meta[property="og:image"]',
      'meta[property="og:image:alt"]',
      'meta[name="twitter:image"]',
    ]);
  }, [t, language]);

  return null;
};

export default SeoHead;
