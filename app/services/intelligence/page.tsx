'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, Check, FileText, Search, BarChart, AlertTriangle } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function IntelligenceServicePage() {
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
                            <Shield className="w-6 h-6 text-primary-deep" />
                        </div>
                        <p className="text-xs uppercase tracking-widest text-white/50">{config.services.intelligence.name}</p>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">
                        {config.services.intelligence.shortName}
                    </h1>

                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        {config.services.intelligence.description} Make informed decisions with
                        AI-powered regulatory analysis and market intelligence.
                    </p>
                </div>
            </section>

            {/* Key Stats */}
            <section className="bg-white py-16 border-b border-secondary-dune">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">180+</p>
                            <p className="text-sm text-secondary-shell">Councils Analysed</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">Hours</p>
                            <p className="text-sm text-secondary-shell">Not Weeks</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">99%</p>
                            <p className="text-sm text-secondary-shell">Accuracy Rate</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-4xl text-primary-deep mb-1">$50k+</p>
                            <p className="text-sm text-secondary-shell">Avg. Savings</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Intelligence Reports</p>
                        <h2 className="text-4xl font-heading text-primary-deep mb-6">
                            Know before you <span className="font-accent italic">commit</span>
                        </h2>
                        <p className="text-lg text-secondary-shell max-w-2xl mx-auto">
                            Our AI-powered analysis delivers comprehensive regulatory intelligence
                            for any Australian property in hours, not weeks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: AlertTriangle,
                                title: 'STA Compliance Analysis',
                                price: `$${config.pricing.intelligence.staCompliance.from.toLocaleString()} - $${config.pricing.intelligence.staCompliance.to.toLocaleString()}`,
                                desc: 'Comprehensive short-term accommodation regulatory analysis including council rules, zoning, overlays, day limits, and approval pathways.',
                                features: ['Council compliance status', 'Approval pathway analysis', 'Day limit calculations', 'Risk assessment', 'Recommendations'],
                            },
                            {
                                icon: Search,
                                title: 'Acquisition Due Diligence',
                                price: `$${config.pricing.intelligence.acquisition.from.toLocaleString()} - $${config.pricing.intelligence.acquisition.to.toLocaleString()}`,
                                desc: 'Pre-purchase analysis for investors considering STA-potential properties. Know exactly what you\'re buying into.',
                                features: ['Everything in Compliance', '10-year revenue projections', 'Competitive analysis', 'Market positioning', 'Investment scenarios'],
                            },
                            {
                                icon: BarChart,
                                title: 'Rental Market Analysis',
                                price: `$${config.pricing.intelligence.rentalAnalysis.from.toLocaleString()} - $${config.pricing.intelligence.rentalAnalysis.to.toLocaleString()}`,
                                desc: 'Long-term rental market intelligence including comparable rents, tenant demand, and yield optimisation strategies.',
                                features: ['Comparable rental analysis', 'Tenant demand insights', 'Yield optimisation', 'Market trends', 'Rental strategy'],
                            },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 border border-secondary-dune">
                                <service.icon className="w-8 h-8 text-accent-gold mb-4" />
                                <h3 className="font-heading text-xl text-primary-deep mb-2">{service.title}</h3>
                                <p className="text-accent-gold font-medium mb-4">{service.price}</p>
                                <p className="text-secondary-shell text-sm mb-6">{service.desc}</p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-secondary-shell">
                                            <Check className="w-4 h-4 text-accent-gold mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/enquire"
                                    className="block text-center py-3 border border-primary-deep text-primary-deep font-medium hover:bg-primary-deep hover:text-white transition-colors"
                                >
                                    Request Report
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-secondary-sand">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">The Process</p>
                        <h2 className="text-4xl font-heading text-primary-deep">
                            Three steps to <span className="font-accent italic">clarity</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Submit Your Property', desc: 'Provide the property address and your specific questions or concerns. We\'ll identify the relevant council and regulations.' },
                            { step: '02', title: 'AI Analysis', desc: 'Our multi-agent system analyses planning schemes, local laws, overlays, historical decisions, and market data.' },
                            { step: '03', title: 'Receive Your Report', desc: 'Get a comprehensive, professionally formatted report with clear findings, risks, and actionable recommendations.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8">
                                <span className="text-xs uppercase tracking-widest text-accent-gold">{item.step}</span>
                                <h3 className="font-heading text-xl text-primary-deep mt-4 mb-4">{item.title}</h3>
                                <p className="text-secondary-shell">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-heading text-primary-deep mb-6">
                        Don't guess. Know.
                    </h2>
                    <p className="text-lg text-secondary-shell mb-8">
                        Whether you're buying, selling, or optimising, our intelligence reports
                        give you the clarity to make confident decisions.
                    </p>
                    <Link href="/enquire" className="inline-flex items-center gap-2 bg-accent-gold text-primary-deep font-medium px-8 py-4 hover:bg-white hover:ring-2 hover:ring-accent-gold transition-all">
                        <span>Request a Report</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
