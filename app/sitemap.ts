import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.benefitsresourcegroupllc.com';

  // Static pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/resources',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const services = [
    '/services/business-benefits',
    '/services/medicare-enrollment',
    '/services/retirement-planning',
    '/services/estate-planning',
    '/services/business-insurance',
    '/services/health-wellness',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tool pages
  const tools = [
    '/tools/benefits-calculator',
    '/tools/medicare-checker',
    '/tools/retirement-calculator',
    '/tools/hsa-fsa-comparison',
    '/tools/group-health-estimator',
    '/tools/benefits-roi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog posts
  const blogPosts = [
    '/blog/complete-guide-medicare-enrollment',
    '/blog/401k-vs-profit-sharing',
    '/blog/hsa-vs-fsa-guide',
    '/blog/small-business-benefits-guide',
    '/blog/medicare-supplement-plans-comparison',
    '/blog/medicare-part-d-prescription-coverage',
    '/blog/catch-up-contributions-50-plus',
    '/blog/roth-vs-traditional-401k',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...tools, ...blogPosts];
}
