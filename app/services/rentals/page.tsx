'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Key, Check, Home, FileText, Wrench, DollarSign } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function RentalsServicePage() {
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
                            <Key className="w-6 h-6 text-primary-deep" />
                        </div>
                        <p className="text-xs uppercase tracking-widest text-white/50">{config.services.rental.name}</p>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">
                        {config.services.rental.shortName}
                    </h1>

                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        {config.services.rental.description} We match your prestigious property
                        with discerning tenants who appreciate quality.
                    </p>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="bg-white py-16 border-b border-secondary-dune">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">${config.targetRates.averageRentalWeeklyRate}+</p>
                            <p className="text-sm text-secondary-shell">Target Weekly Rent</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">4</p>
                            <p className="text-sm text-secondary-shell">Primary Markets</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">Premium</p>
                            <p className="text-sm text-secondary-shell">Tenant Matching</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">Full</p>
                            <p className="text-sm text-secondary-shell">Service Management</p>
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
                                Premium tenancy <span className="font-accent italic">management</span>
                            </h2>
                            <p className="text-lg text-secondary-shell leading-relaxed mb-8">
                                Your luxury property deserves tenants who will treat it as their home.
                                We curate applications, conduct thorough vetting, and maintain open
                                communication throughout the tenancy.
                            </p>
                            <Link href="/enquire" className="inline-flex items-center gap-2 bg-primary-deep text-white font-medium px-6 py-3 hover:bg-primary transition-colors">
                                <span>Join Waitlist</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Home, title: 'Curated Tenant Matching', desc: 'Rigorous vetting including employment verification, reference checks, and lifestyle compatibility assessment.' },
                                { icon: FileText, title: 'Comprehensive Leasing', desc: 'Premium marketing, professional photography, and strategic pricing to attract quality tenants quickly.' },
                                { icon: Wrench, title: 'Proactive Maintenance', desc: 'Regular inspections, preventive maintenance scheduling, and rapid response to any issues.' },
                                { icon: DollarSign, title: 'Financial Transparency', desc: 'Detailed monthly statements, rental collection, and clear expense tracking.' },
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
                            Onboarding fee: ${config.pricing.rental.onboarding.toLocaleString()}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                tier: 'Essential',
                                percent: config.pricing.rental.tiers.essential.monthlyPercent,
                                letFee: config.pricing.rental.tiers.essential.letFeeWeeks,
                                features: ['Tenant finding & screening', 'Lease preparation', 'Bond lodgement', 'Rent collection', 'Basic reporting'],
                            },
                            {
                                tier: 'Premium',
                                percent: config.pricing.rental.tiers.premium.monthlyPercent,
                                letFee: config.pricing.rental.tiers.premium.letFeeWeeks,
                                features: ['Everything in Essential', 'Quarterly inspections', 'Maintenance coordination', 'Monthly owner reports', 'Lease renewal management'],
                                featured: true,
                            },
                            {
                                tier: 'Concierge',
                                percent: config.pricing.rental.tiers.concierge.monthlyPercent,
                                letFee: config.pricing.rental.tiers.concierge.letFeeWeeks,
                                features: ['Everything in Premium', 'Dedicated property manager', 'Annual strategic reviews', 'Renovation coordination', 'Priority maintenance response'],
                            },
                        ].map((plan, i) => (
                            <div key={i} className={`bg-white p-8 ${plan.featured ? 'ring-2 ring-accent-gold' : 'border border-secondary-dune'}`}>
                                <p className="text-xs uppercase tracking-widest text-accent-gold mb-2">{plan.tier}</p>
                                <div className="mb-4">
                                    <span className="font-heading text-4xl text-primary-deep">{plan.percent}%</span>
                                    <span className="text-secondary-shell">/month</span>
                                </div>
                                <p className="text-secondary-shell text-sm mb-6">+ {plan.letFee} weeks rent letting fee</p>
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
                        Ready for hassle-free rental income?
                    </h2>
                    <p className="text-lg text-secondary-shell mb-8">
                        We're accepting applications for properties valued at ${(config.services.rental.minPropertyValue / 1000000).toFixed(1)}M+
                        that can achieve ${config.services.rental.minWeeklyRent}+ per week.
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
