'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Key, Shield, MapPin, Building } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

// Intersection Observer hook for scroll animations
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

        const elements = document.querySelectorAll('.reveal, .reveal-stagger');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

export default function LandingPage() {
    useReveal();

    return (
        <div className="min-h-screen bg-secondary-cream overflow-x-hidden">
            <SiteHeader />

            {/* ================================================================
          HERO - Full viewport, statement typography
          ================================================================ */}
            <section className="relative min-h-screen flex items-end pb-24 md:pb-32 bg-primary-deep overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-deep via-primary-deep to-primary" />

                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary-light/20 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-accent-gold/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 w-full pt-24">
                    <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                        <div className="max-w-[1800px] mx-auto">
                            {/* Eyebrow */}
                            <p className="text-xs uppercase tracking-widest text-white/50 mb-8 reveal">
                                Property Intelligence & Management
                            </p>

                            {/* Main headline - massive, spanning */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-12 reveal">
                                Curating<br />
                                <span className="font-accent italic font-light">exceptional</span> properties
                            </h1>

                            {/* Subtext and CTA in a row */}
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 reveal">
                                <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
                                    {config.company.description}
                                </p>

                                <Link href="/enquire" className="inline-flex items-center gap-2 bg-accent-gold text-primary-deep font-medium px-8 py-4 hover:bg-white transition-colors">
                                    <span>Join Waitlist</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* ================================================================
          SERVICES - Dual offerings
          ================================================================ */}
            <section className="py-24 md:py-32">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="text-center mb-16 reveal">
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Our Services</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                Two paths to exceptional <span className="font-accent italic">returns</span>
                            </h2>
                            <p className="text-lg text-secondary-shell max-w-2xl mx-auto">
                                Whether you're seeking maximum yield through holiday letting or stable income
                                through premium tenants, we deliver white-glove management.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 reveal">
                            {/* STA Card */}
                            <div className="bg-white p-10 md:p-12 border border-secondary-dune group hover:border-primary-deep transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary-deep flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl text-primary-deep">{config.services.sta.shortName}</h3>
                                        <p className="text-sm text-secondary-shell">{config.services.sta.name}</p>
                                    </div>
                                </div>
                                <p className="text-secondary-shell mb-8 leading-relaxed">
                                    {config.services.sta.description} We handle everything from guest screening
                                    to regulatory compliance, maximising your occupancy and nightly rates.
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-secondary-dune">
                                    <div>
                                        <p className="text-sm text-secondary-shell">Target nightly rate</p>
                                        <p className="font-heading text-2xl text-primary-deep">${config.targetRates.averageStaNightlyRate}+</p>
                                    </div>
                                    <Link href="/services/stays" className="inline-flex items-center gap-2 text-primary-deep font-medium hover:text-accent-gold transition-colors">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Rental Card */}
                            <div className="bg-white p-10 md:p-12 border border-secondary-dune group hover:border-accent-gold transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-accent-gold flex items-center justify-center">
                                        <Key className="w-6 h-6 text-primary-deep" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-2xl text-primary-deep">{config.services.rental.shortName}</h3>
                                        <p className="text-sm text-secondary-shell">{config.services.rental.name}</p>
                                    </div>
                                </div>
                                <p className="text-secondary-shell mb-8 leading-relaxed">
                                    {config.services.rental.description} Curated tenant matching ensures your
                                    premium property is occupied by quality tenants who treat it as home.
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-secondary-dune">
                                    <div>
                                        <p className="text-sm text-secondary-shell">Target weekly rent</p>
                                        <p className="font-heading text-2xl text-primary-deep">${config.targetRates.averageRentalWeeklyRate}+</p>
                                    </div>
                                    <Link href="/services/rentals" className="inline-flex items-center gap-2 text-primary-deep font-medium hover:text-accent-gold transition-colors">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Intelligence Card - Full width */}
                        <div className="mt-8 bg-primary-deep p-10 md:p-12 reveal">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-white flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-primary-deep" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-2xl text-white">{config.services.intelligence.shortName}</h3>
                                            <p className="text-sm text-white/50">{config.services.intelligence.name}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/70 mb-8 leading-relaxed">
                                        {config.services.intelligence.description} Our AI-powered analysis
                                        delivers regulatory clarity in hours, not weeks.
                                    </p>
                                    <Link href="/services/intelligence" className="inline-flex items-center gap-2 text-accent-gold font-medium hover:text-white transition-colors">
                                        <span>Explore intelligence services</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white/10 p-6">
                                        <p className="text-white/50 text-sm mb-1">Councils Covered</p>
                                        <p className="font-heading text-3xl text-white">180+</p>
                                    </div>
                                    <div className="bg-white/10 p-6">
                                        <p className="text-white/50 text-sm mb-1">Analysis Time</p>
                                        <p className="font-heading text-3xl text-white">Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          WAITLIST CTA - Encourage registrations
          ================================================================ */}
            <section className="bg-secondary-sand py-24 md:py-32">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="text-center reveal">
                            <p className="text-xs uppercase tracking-widest text-accent-gold mb-4">Limited Availability</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                A curated <span className="font-accent italic">portfolio</span>
                            </h2>
                            <p className="text-lg text-secondary-shell max-w-2xl mx-auto mb-8">
                                We maintain a deliberately small portfolio to ensure every property receives
                                exceptional attention. Register your interest to learn more about our
                                boutique approach to property management.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {config.markets.primary.map((market) => (
                                    <span key={market} className="bg-white text-primary-deep px-4 py-2 text-sm font-medium">
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          MARKETS - Where we operate
          ================================================================ */}
            <section className="py-24 md:py-32">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="reveal">
                                <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Our Markets</p>
                                <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                    Focused on Australia's <span className="font-accent italic">premium</span> destinations
                                </h2>
                                <p className="text-lg text-secondary-shell mb-8">
                                    We concentrate on select coastal and lifestyle markets where luxury properties
                                    command premium rates and discerning guests expect exceptional standards.
                                </p>
                                <Link href="/markets" className="inline-flex items-center gap-2 text-primary-deep font-medium hover:text-accent-gold transition-colors">
                                    <span>View all markets</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="space-y-8 reveal">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-accent-gold mb-4">Primary Markets</p>
                                    <div className="flex flex-wrap gap-3">
                                        {config.markets.primary.map((market) => (
                                            <span key={market} className="bg-accent-gold/10 text-primary-deep px-4 py-2 text-sm font-medium">
                                                {market}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Secondary Markets</p>
                                    <div className="flex flex-wrap gap-3">
                                        {config.markets.secondary.map((market) => (
                                            <span key={market} className="bg-secondary-sand text-primary-deep px-4 py-2 text-sm">
                                                {market}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          VISION STATEMENT - Full bleed, visual break
          ================================================================ */}
            <section className="bg-primary-deep py-32 md:py-48 relative overflow-hidden">
                {/* Decorative shape */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/50 rounded-l-[200px]" />

                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto relative z-10 reveal">
                        <div className="border-l-4 border-accent-gold pl-8 md:pl-12">
                            <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-8">
                                Luxury properties deserve more than cookie-cutter management.
                                They deserve bespoke care, intelligent insights, and white-glove
                                service that maximises both returns and peace of mind.
                            </p>
                            <p className="text-white/50">Our founding philosophy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          WHY US - Value proposition
          ================================================================ */}
            <section className="py-24 md:py-32 bg-secondary-sand">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="text-center mb-16 reveal">
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Why The Bruce Group</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep">
                                The boutique <span className="font-accent italic">difference</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 reveal">
                            {[
                                {
                                    number: '01',
                                    title: 'Curated Portfolio',
                                    desc: 'We maintain a deliberately small portfolio, ensuring each property receives the attention it deserves.'
                                },
                                {
                                    number: '02',
                                    title: 'Local Expertise',
                                    desc: 'Deep knowledge of local regulations, markets, and networks across our focused coastal regions.'
                                },
                                {
                                    number: '03',
                                    title: 'Intelligence-Led',
                                    desc: 'Proprietary technology provides regulatory clarity and market insights that inform every decision.'
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 md:p-10">
                                    <span className="text-xs uppercase tracking-widest text-accent-gold">{item.number}</span>
                                    <h3 className="font-heading text-2xl text-primary-deep mt-4 mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary-shell leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          CTA - Application flow
          ================================================================ */}
            <section className="py-24 md:py-32">
                <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                    <div className="max-w-[1800px] mx-auto text-center reveal">
                        <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                            Ready to elevate your property?
                        </h2>
                        <p className="text-lg text-secondary-shell mb-8 max-w-xl mx-auto">
                            We're accepting enquiries from property owners with luxury homes in our primary markets.
                            Register your interest to learn more about our boutique management approach.
                        </p>
                        <Link href="/enquire" className="inline-flex items-center gap-2 bg-primary-deep text-white font-medium px-8 py-4 hover:bg-primary transition-colors">
                            <span>Join Our Waitlist</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
