'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

const marketDetails = {
    'Byron Bay': {
        description: 'Australia\'s iconic coastal destination, known for its stunning beaches, laid-back lifestyle, and premium property market.',
        avgNightly: '$950+',
        highlight: 'Premium holiday destination'
    },
    'Noosa': {
        description: 'Queensland\'s jewel, offering pristine beaches, national parks, and sophisticated dining. A year-round destination.',
        avgNightly: '$850+',
        highlight: 'Year-round appeal'
    },
    'Gold Coast': {
        description: 'Australia\'s playground, combining world-class beaches with vibrant entertainment and excellent infrastructure.',
        avgNightly: '$750+',
        highlight: 'High occupancy rates'
    },
    'Sunshine Coast': {
        description: 'Relaxed coastal living with beautiful beaches, hinterland escapes, and growing luxury market appeal.',
        avgNightly: '$700+',
        highlight: 'Growing luxury market'
    },
    'Sydney Eastern Suburbs': {
        description: 'Premium harbourside and beachfront living in Australia\'s most prestigious urban market.',
        avgWeekly: '$2,500+',
        highlight: 'Executive rental demand'
    },
    'Melbourne Bayside': {
        description: 'Sophisticated bayside living with excellent amenities and strong rental demand from professionals.',
        avgWeekly: '$2,200+',
        highlight: 'Professional tenant base'
    },
    'Port Douglas': {
        description: 'Tropical paradise gateway to the Great Barrier Reef, attracting luxury travellers year-round.',
        avgNightly: '$800+',
        highlight: 'International appeal'
    },
    'Hobart': {
        description: 'Tasmania\'s cultural capital, experiencing rapid growth in luxury property and experiential tourism.',
        avgNightly: '$650+',
        highlight: 'Emerging luxury market'
    },
};

export default function MarketsPage() {
    useReveal();

    return (
        <div className="min-h-screen bg-secondary-cream">
            <SiteHeader />

            {/* Hero */}
            <section className="bg-primary-deep text-white pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to home</span>
                    </Link>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Our Markets</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">
                        Australia's <span className="font-accent italic">premium</span> destinations
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        We focus on select coastal and lifestyle markets where luxury properties command
                        premium rates and discerning guests expect exceptional standards.
                    </p>
                </div>
            </section>

            {/* Market Overview */}
            <section className="bg-white py-16 border-b border-secondary-dune">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">4</p>
                            <p className="text-sm text-secondary-shell">Primary Markets</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">8</p>
                            <p className="text-sm text-secondary-shell">Coastal Regions</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">${config.targetRates.averageStaNightlyRate}+</p>
                            <p className="text-sm text-secondary-shell">Target Nightly Rate</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">Premium</p>
                            <p className="text-sm text-secondary-shell">Properties Only</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Primary Markets */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 reveal">
                        <p className="text-xs uppercase tracking-widest text-accent-gold mb-4">Primary Markets</p>
                        <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                            Our core <span className="font-accent italic">focus</span>
                        </h2>
                        <p className="text-lg text-secondary-shell max-w-2xl">
                            These are our flagship markets where we maintain the strongest presence and deepest expertise.
                            Applications from these areas receive priority consideration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {config.markets.primary.map((market) => {
                            const details = marketDetails[market as keyof typeof marketDetails];
                            return (
                                <div key={market} className="bg-white p-8 border border-secondary-dune hover:border-primary-deep transition-colors reveal">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-accent-gold" />
                                            <h3 className="font-heading text-2xl text-primary-deep">{market}</h3>
                                        </div>
                                        <span className="text-xs uppercase tracking-wider text-accent-gold bg-accent-gold/10 px-3 py-1">
                                            {details?.highlight}
                                        </span>
                                    </div>
                                    <p className="text-secondary-shell mb-4">{details?.description}</p>
                                    <div className="pt-4 border-t border-secondary-dune">
                                        <p className="text-sm text-secondary-shell">
                                            {details?.avgNightly ? (
                                                <>Average nightly rate: <span className="text-primary-deep font-medium">{details.avgNightly}</span></>
                                            ) : (
                                                <>Average weekly rent: <span className="text-primary-deep font-medium">{details?.avgWeekly}</span></>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Secondary Markets */}
            <section className="py-24 md:py-32 bg-secondary-sand">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 reveal">
                        <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Secondary Markets</p>
                        <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                            Expanding <span className="font-accent italic">presence</span>
                        </h2>
                        <p className="text-lg text-secondary-shell max-w-2xl">
                            We actively service these markets and welcome applications from property owners seeking premium management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {config.markets.secondary.map((market) => {
                            const details = marketDetails[market as keyof typeof marketDetails];
                            return (
                                <div key={market} className="bg-white p-6 border border-secondary-dune reveal">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin className="w-4 h-4 text-secondary-shell" />
                                        <h3 className="font-heading text-lg text-primary-deep">{market}</h3>
                                    </div>
                                    <p className="text-secondary-shell text-sm mb-3">{details?.description}</p>
                                    {details?.highlight && (
                                        <span className="text-xs text-accent-gold">{details.highlight}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tertiary Markets */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Emerging Markets</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                On the <span className="font-accent italic">horizon</span>
                            </h2>
                            <p className="text-lg text-secondary-shell leading-relaxed mb-8">
                                We're monitoring and selectively accepting properties from these emerging luxury markets.
                                If you have a property in one of these locations, we'd love to hear from you.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {config.markets.tertiary.map((market) => (
                                    <span key={market} className="bg-secondary-sand text-primary-deep px-4 py-2 text-sm">
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary-deep p-10 reveal">
                            <h3 className="font-heading text-2xl text-white mb-4">Not in our current markets?</h3>
                            <p className="text-white/70 mb-6">
                                We're always exploring new opportunities. If you have a premium property in a location
                                not listed, reach out—we may be able to help or recommend a trusted partner.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-accent-gold font-medium hover:text-white transition-colors">
                                <span>Get in touch</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 bg-secondary-sand">
                <div className="max-w-3xl mx-auto px-6 text-center reveal">
                    <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                        Have a property in our markets?
                    </h2>
                    <p className="text-lg text-secondary-shell mb-8">
                        Join our waitlist and let us show you what premium property management looks like.
                    </p>
                    <Link href="/enquire" className="inline-flex items-center gap-2 bg-primary-deep text-white font-medium px-8 py-4 hover:bg-primary transition-colors">
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
