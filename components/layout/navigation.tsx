'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  {
    name: 'Business Benefits',
    href: '/services/business-benefits',
    description: 'Comprehensive employee benefits packages',
  },
  {
    name: 'Medicare Enrollment',
    href: '/services/medicare-enrollment',
    description: 'Navigate Medicare with expert guidance',
  },
  {
    name: 'Retirement Planning',
    href: '/services/retirement-planning',
    description: '401(k) and retirement solutions',
  },
  {
    name: 'Estate Planning',
    href: '/services/estate-planning',
    description: 'Protect your legacy and assets',
  },
  {
    name: 'Business Insurance',
    href: '/services/business-insurance',
    description: 'Comprehensive business protection',
  },
  {
    name: 'Health & Wellness',
    href: '/services/health-wellness',
    description: 'Employee wellness programs',
  },
];

const tools = [
  { name: 'Benefits Calculator', href: '/tools/benefits-calculator' },
  { name: 'Medicare Eligibility Checker', href: '/tools/medicare-checker' },
  { name: 'Retirement Savings Calculator', href: '/tools/retirement-calculator' },
  { name: 'HSA vs FSA Comparison', href: '/tools/hsa-fsa-comparison' },
  { name: 'Group Health Cost Estimator', href: '/tools/group-health-estimator' },
  { name: 'Benefits ROI Calculator', href: '/tools/benefits-roi' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isToolsOpen, setIsToolsOpen] = React.useState(false);

  const servicesTimeoutRef = React.useRef<NodeJS.Timeout>();
  const toolsTimeoutRef = React.useRef<NodeJS.Timeout>();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleToolsMouseEnter = () => {
    if (toolsTimeoutRef.current) {
      clearTimeout(toolsTimeoutRef.current);
    }
    setIsToolsOpen(true);
  };

  const handleToolsMouseLeave = () => {
    toolsTimeoutRef.current = setTimeout(() => {
      setIsToolsOpen(false);
    }, 200);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/images/Logo-240w.webp"
              alt="Benefits Resource Group LLC"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600',
                  pathname.startsWith('/services') ? 'text-blue-600' : 'text-gray-700'
                )}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleToolsMouseEnter}
              onMouseLeave={handleToolsMouseLeave}
            >
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600',
                  pathname.startsWith('/tools') ? 'text-blue-600' : 'text-gray-700'
                )}
              >
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>

              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="block px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                pathname.startsWith('/resources') ? 'text-blue-600' : 'text-gray-700'
              )}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
              )}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-600',
                pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
              )}
            >
              Contact
            </Link>

            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      isServicesOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-gray-600 hover:text-blue-600"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                >
                  Tools
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      isToolsOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isToolsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="text-sm text-gray-600 hover:text-blue-600"
                        onClick={closeMobileMenu}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/resources"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>

              <Button asChild className="mt-4">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
