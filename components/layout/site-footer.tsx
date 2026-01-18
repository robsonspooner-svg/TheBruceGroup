import Link from 'next/link';
import { config } from '@/lib/config';
import { Logo } from '@/components/ui/logo';

const footerNavigation = {
    services: [
        { name: 'Holiday & Executive Stays', href: '/services/stays' },
        { name: 'Premium Residential', href: '/services/rentals' },
        { name: 'Property Intelligence', href: '/services/intelligence' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Our Markets', href: '/markets' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ],
};

export function SiteFooter() {
    return (
        <footer className="bg-primary-deep text-white">
            {/* Main Footer */}
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-24">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <Logo size="lg" />
                                <p className="font-heading text-lg leading-none mt-3">{config.company.name}</p>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {config.company.description}
                            </p>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="font-heading text-sm uppercase tracking-wider mb-6">Services</h3>
                            <ul className="space-y-3">
                                {footerNavigation.services.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-heading text-sm uppercase tracking-wider mb-6">Company</h3>
                            <ul className="space-y-3">
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get Started */}
                        <div>
                            <h3 className="font-heading text-sm uppercase tracking-wider mb-6">Get Started</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                Interested in our services? Join our waitlist to be notified when we launch.
                            </p>
                            <Link href="/enquire" className="inline-flex items-center gap-2 text-accent-gold hover:text-white transition-colors text-sm font-medium">
                                Join Waitlist →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6">
                    <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} {config.company.legalName}. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {footerNavigation.legal.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/40 hover:text-white/60 transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
