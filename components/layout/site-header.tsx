'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { config } from '@/lib/config';
import { Logo } from '@/components/ui/logo';

const navigation = {
    services: [
        {
            name: 'Holiday & Executive Stays',
            href: '/services/stays',
            description: 'Short-term accommodation management'
        },
        {
            name: 'Premium Residential',
            href: '/services/rentals',
            description: 'Luxury long-term rental management'
        },
        {
            name: 'Property Intelligence',
            href: '/services/intelligence',
            description: 'Compliance analysis and advisory'
        },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Our Markets', href: '/markets' },
    ],
};

export function SiteHeader() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-dune/50">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                <div className="max-w-[1800px] mx-auto">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Logo size="md" showText={true} />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {/* Services Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                                    className="flex items-center gap-1 text-sm text-primary-deep hover:text-primary transition-colors"
                                >
                                    Services
                                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {servicesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-2 border border-secondary-dune">
                                        {navigation.services.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block p-4 hover:bg-secondary-sand transition-colors"
                                            >
                                                <p className="font-medium text-primary-deep">{item.name}</p>
                                                <p className="text-sm text-secondary-shell">{item.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {navigation.company.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm text-primary-deep hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                href="/enquire"
                                className="bg-primary-deep text-white text-sm py-3 px-6 hover:bg-primary-deep/90 transition-colors"
                            >
                                Join Waitlist
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-primary-deep"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </nav>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden py-6 border-t border-secondary-dune">
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider text-secondary-shell px-4 py-2">Services</p>
                                {navigation.services.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-primary-deep hover:bg-secondary-sand"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="h-px bg-secondary-dune my-4" />

                                {navigation.company.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-primary-deep hover:bg-secondary-sand"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="px-4 pt-4">
                                    <Link
                                        href="/enquire"
                                        className="block w-full text-center bg-primary-deep text-white py-3 px-6 hover:bg-primary-deep/90 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Join Waitlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
