const CONTACT_EMAIL = 'marius.poirier@proton.me';

export function buildProfessionalServiceSchema({ name, description, url, image, priceRange }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    url,
    image,
    email: CONTACT_EMAIL,
    areaServed: {
      '@type': 'City',
      name: 'Montpellier',
    },
    priceRange,
    sameAs: ['https://www.linkedin.com/in/marius-poirier-280361378/'],
  };
}

export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

export function schemaScriptProps(schema) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema).replace(/</g, '\\u003c') },
  };
}
