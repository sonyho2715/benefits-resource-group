// Structured data (JSON-LD) helpers for SEO

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  areaServed: string[];
}

export interface LocalBusinessSchema extends OrganizationSchema {
  '@type': 'InsuranceAgency' | 'FinancialService';
  priceRange: string;
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string[];
  description: string;
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: string;
}

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Benefits Resource Group LLC',
  url: 'https://www.benefitsresourcegroupllc.com',
  logo: 'https://www.benefitsresourcegroupllc.com/images/Logo-240w.webp',
  description:
    'Expert benefits consulting for businesses and individuals. Serving Hawaii, California, Nevada, Utah, and Washington with comprehensive employee benefits, Medicare enrollment, retirement planning, and estate planning services since 2017.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Honolulu',
    addressRegion: 'HI',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-808-XXX-XXXX',
    contactType: 'customer service',
    availableLanguage: ['en'],
  },
  sameAs: [
    // Add social media URLs when available
    // 'https://www.facebook.com/benefitsresourcegroup',
    // 'https://www.linkedin.com/company/benefits-resource-group',
  ],
  areaServed: ['Hawaii', 'California', 'Nevada', 'Utah', 'Washington'],
};

export const localBusinessSchema: LocalBusinessSchema = {
  ...organizationSchema,
  '@type': 'InsuranceAgency',
  priceRange: '$$',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.3099,
    longitude: -157.8581,
  },
};

export function createServiceSchema(
  serviceType: string,
  description: string
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Benefits Resource Group LLC',
    },
    areaServed: ['Hawaii', 'California', 'Nevada', 'Utah', 'Washington'],
    description,
  };
}

export function createArticleSchema(
  headline: string,
  description: string,
  datePublished: string,
  dateModified: string,
  url: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Organization',
      name: 'Benefits Resource Group LLC',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Benefits Resource Group LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.benefitsresourcegroupllc.com/images/Logo-240w.webp',
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: url,
  };
}

export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
