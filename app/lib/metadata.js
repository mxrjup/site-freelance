import { dict } from './i18n';
import { SITE_URL } from './siteUrl';

export const baseMetadata = {
  metadataBase: new URL(SITE_URL || 'https://example.com'),
  authors: [{ name: 'Marius' }],
  creator: 'Marius',
  robots: {
    index: true,
    follow: true,
  },
};

export function buildHomeMetadata(lang) {
  const t = dict[lang];
  const canonical = lang === 'fr' ? '/' : `/${lang}/`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical,
      languages: { fr: '/', en: '/en/', 'x-default': '/' },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      url: canonical,
      siteName: 'Marius Dev',
      locale: t.meta.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.twitterDescription,
    },
  };
}
