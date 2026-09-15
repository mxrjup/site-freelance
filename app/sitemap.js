import { SITE_URL } from './lib/siteUrl';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = SITE_URL;
  const lastModified = new Date();
  const languages = { fr: baseUrl, en: `${baseUrl}/en/` };

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/en/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
