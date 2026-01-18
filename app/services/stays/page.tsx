'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Check, Star, Clock, Users, Shield } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function StaysServicePage() {
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

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-accent-gold flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-primary-deep" />
                        </div>
                        <p className="text-xs uppercase tracking-widest text-white/50">{config.services.sta.name}</p>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">
                        {config.services.sta.shortName}
                    </h1>

                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        {config.services.sta.description} Transform your luxury property into a
                        high-performing holiday rental with complete peace of mind.
                    </p>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="bg-white py-16 border-b border-secondary-dune">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">${config.targetRates.averageStaNightlyRate}+</p>
                            <p className="text-sm text-secondary-shell">Target Nightly Rate</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">24/7</p>
                            <p className="text-sm text-secondary-shell">Guest Support</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">180+</p>
                            <p className="text-sm text-secondary-shell">Councils Covered</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">4</p>
                            <p className="text-sm text-secondary-shell">Primary Markets</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">What We Do</p>
                            <h2 className="text-4xl font-heading text-primary-deep mb-6">
                                End-to-end <span className="font-accent italic">luxury</span> management
                            </h2>
                            <p className="text-lg text-secondary-shell leading-relaxed mb-8">
                                From professional photography to five-star guest experiences, we handle
                                every aspect of your short-term rental. You receive the income; we handle
                                everything else.
                            </p>
                            <Link href="/enquire" className="inline-flex items-center gap-2 bg-primary-deep text-white font-medium px-6 py-3 hover:bg-primary transition-colors">
                                <span>Join Waitlist</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Star, title: 'Premium Listings', desc: 'Professional photography, compelling copy, and optimised listings across Airbnb, Booking.com, and direct channels.' },
                                { icon: Users, title: 'Guest Vetting', desc: 'Rigorous screening ensures only respectful guests stay at your property, protecting your investment.' },
                                { icon: Clock, title: '24/7 Concierge', desc: 'Round-the-clock guest support and local concierge services for a seamless experience.' },
                                { icon: Shield, title: 'Compliance Managed', desc: 'We handle council registrations, fire safety, insurance requirements, and day limits.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border border-secondary-dune">
                                    <item.icon className="w-6 h-6 text-accent-gold flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading text-lg text-primary-deep mb-1">{item.title}</h3>
                                        <p className="text-secondary-shell text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-secondary-sand">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Investment</p>
                        <h2 className="text-4xl font-heading text-primary-deep mb-4">
                            Transparent <span className="font-accent italic">pricing</span>
                        </h2>
                        <p className="text-secondary-shell max-w-xl mx-auto">
                            Choose the service tier that matches your involvement preference.
                            Onboarding fee: ${config.pricing.sta.onboarding.toLocaleString()}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                tier: 'Essential',
                                monthly: config.pricing.sta.tiers.essential.monthly,
                                commission: config.pricing.sta.tiers.essential.commission,
                                features: ['Listing management', 'Guest communications', 'Booking optimisation', 'Basic reporting'],
                            },
                            {
                                tier: 'Premium',
                                monthly: config.pricing.sta.tiers.premium.monthly,
                                commission: config.pricing.sta.tiers.premium.commission,
                                features: ['Everything in Essential', 'Professional cleaning coordination', 'Linen service', 'Maintenance management', 'Monthly owner reviews'],
                                featured: true,
                            },
                            {
                                tier: 'Concierge',
                                monthly: config.pricing.sta.tiers.concierge.monthly,
                                commission: config.pricing.sta.tiers.concierge.commission,
                                features: ['Everything in Premium', 'Dedicated property manager', 'Guest concierge services', 'Premium styling', 'Quarterly strategy sessions'],
                            },
                        ].map((plan, i) => (
                            <div key={i} className={`bg-white p-8 ${plan.featured ? 'ring-2 ring-accent-gold' : 'border border-secondary-dune'}`}>
                                <p className="text-xs uppercase tracking-widest text-accent-gold mb-2">{plan.tier}</p>
                                <div className="mb-4">
                                    <span className="font-heading text-4xl text-primary-deep">${plan.monthly}</span>
                                    <span className="text-secondary-shell">/month</span>
                                </div>
                                <p className="text-secondary-shell text-sm mb-6">+ {plan.commission}% of booking revenue</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-secondary-shell">
                                            <Check className="w-4 h-4 text-accent-gold mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/enquire"
                                    className={`block text-center py-3 font-medium transition-colors ${plan.featured
                                            ? 'bg-primary-deep text-white hover:bg-primary'
                                            : 'border border-primary-deep text-primary-deep hover:bg-primary-deep hover:text-white'
                                        }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-heading text-primary-deep mb-6">
                        Ready to maximise your property's potential?
                    </h2>
                    <p className="text-lg text-secondary-shell mb-8">
                        We're accepting applications for properties valued at ${(config.services.sta.minPropertyValue / 1000000).toFixed(1)}M+
                        that can achieve ${config.services.sta.minNightlyRate}+ per night.
                    </p>
                    <Link href="/enquire" className="inline-flex items-center gap-2 bg-accent-gold text-primary-deep font-medium px-8 py-4 hover:bg-white hover:ring-2 hover:ring-accent-gold transition-all">
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
