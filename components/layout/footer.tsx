import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const services = [
  { name: 'Business Benefits', href: '/services/business-benefits' },
  { name: 'Medicare Enrollment', href: '/services/medicare-enrollment' },
  { name: 'Retirement Planning', href: '/services/retirement-planning' },
  { name: 'Estate Planning', href: '/services/estate-planning' },
  { name: 'Business Insurance', href: '/services/business-insurance' },
  { name: 'Health & Wellness', href: '/services/health-wellness' },
];

const tools = [
  { name: 'Benefits Calculator', href: '/tools/benefits-calculator' },
  { name: 'Medicare Checker', href: '/tools/medicare-checker' },
  { name: 'Retirement Calculator', href: '/tools/retirement-calculator' },
  { name: 'HSA vs FSA', href: '/tools/hsa-fsa-comparison' },
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Case Studies', href: '/resources/case-studies' },
  { name: 'Guides', href: '/resources/guides' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              Benefits Resource Group LLC
            </h3>
            <p className="text-sm mb-4">
              Serving businesses and individuals across Hawaii, California, Nevada, Utah,
              and Washington since 2017 with expert benefits consulting and planning
              services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Honolulu, Hawaii</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+18085551234"
                  className="hover:text-white transition-colors"
                >
                  (808) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@benefitsresourcegroupllc.com"
                  className="hover:text-white transition-colors"
                >
                  info@benefitsresourcegroupllc.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm mb-6">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="hover:text-white transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>
            © {currentYear} Benefits Resource Group LLC. All rights reserved. Licensed in
            HI, CA, NV, UT, WA.
          </p>
        </div>
      </div>
    </footer>
  );
}
