'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target, Heart, Zap, Users } from 'lucide-react';
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

export default function AboutPage() {
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
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-4">About Us</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8">
                        Curating <span className="font-accent italic">exceptional</span> experiences
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        {config.company.name} is Australia's premier property intelligence and management firm,
                        dedicated to maximising the potential of luxury properties across the nation's most
                        desirable coastal destinations.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="reveal">
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Our Story</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                Born from a vision for <span className="font-accent italic">excellence</span>
                            </h2>
                            <p className="text-lg text-secondary-shell leading-relaxed mb-6">
                                The Bruce Group was founded with a singular purpose: to transform how luxury
                                property owners experience management. We recognised that premium properties
                                deserve more than cookie-cutter solutions—they deserve bespoke care,
                                intelligent insights, and white-glove service.
                            </p>
                            <p className="text-lg text-secondary-shell leading-relaxed">
                                Today, we combine deep local expertise with cutting-edge technology to deliver
                                unparalleled results for property owners who expect nothing less than exceptional.
                            </p>
                        </div>
                        <div className="bg-primary-deep p-12 reveal">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="font-heading text-5xl text-white mb-2">4</p>
                                    <p className="text-white/60 text-sm">Primary Markets</p>
                                </div>
                                <div>
                                    <p className="font-heading text-5xl text-white mb-2">8</p>
                                    <p className="text-white/60 text-sm">Coastal Regions</p>
                                </div>
                                <div>
                                    <p className="font-heading text-5xl text-white mb-2">180+</p>
                                    <p className="text-white/60 text-sm">Councils Covered</p>
                                </div>
                                <div>
                                    <p className="font-heading text-5xl text-white mb-2">3</p>
                                    <p className="text-white/60 text-sm">Service Offerings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 md:py-32 bg-secondary-sand">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Our Values</p>
                        <h2 className="text-4xl md:text-5xl font-heading text-primary-deep">
                            What drives <span className="font-accent italic">us</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Target,
                                title: 'Excellence',
                                desc: 'We pursue excellence in every interaction, every property, and every outcome. Good enough simply isn\'t.'
                            },
                            {
                                icon: Heart,
                                title: 'Care',
                                desc: 'We treat every property as if it were our own, with genuine care and attention to the smallest details.'
                            },
                            {
                                icon: Zap,
                                title: 'Innovation',
                                desc: 'We leverage technology and intelligence to stay ahead, delivering insights that drive better decisions.'
                            },
                            {
                                icon: Users,
                                title: 'Partnership',
                                desc: 'We build lasting relationships with our clients, becoming trusted partners in their property journey.'
                            },
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 reveal">
                                <value.icon className="w-8 h-8 text-accent-gold mb-4" />
                                <h3 className="font-heading text-xl text-primary-deep mb-3">{value.title}</h3>
                                <p className="text-secondary-shell text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="reveal">
                            <p className="text-xs uppercase tracking-widest text-secondary-shell mb-4">Our Approach</p>
                            <h2 className="text-4xl md:text-5xl font-heading text-primary-deep mb-6">
                                The boutique <span className="font-accent italic">difference</span>
                            </h2>
                            <p className="text-lg text-secondary-shell leading-relaxed mb-8">
                                Unlike large-scale property management firms that treat properties as numbers,
                                we deliberately maintain a curated portfolio. This allows us to provide the
                                personalised attention that luxury properties deserve.
                            </p>
                        </div>
                        <div className="space-y-6 reveal">
                            {[
                                {
                                    number: '01',
                                    title: 'Selective Portfolio',
                                    desc: 'We carefully select properties that meet our standards, ensuring we can deliver exceptional service to each one.'
                                },
                                {
                                    number: '02',
                                    title: 'Local Expertise',
                                    desc: 'Our teams are embedded in the markets we serve, with deep knowledge of local regulations, networks, and opportunities.'
                                },
                                {
                                    number: '03',
                                    title: 'Intelligence-Led',
                                    desc: 'Our proprietary technology provides regulatory clarity and market insights that inform every recommendation.'
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border border-secondary-dune">
                                    <span className="text-xs uppercase tracking-widest text-accent-gold whitespace-nowrap">{item.number}</span>
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

            {/* CTA */}
            <section className="py-24 md:py-32 bg-primary-deep">
                <div className="max-w-3xl mx-auto px-6 text-center reveal">
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                        Ready to experience the difference?
                    </h2>
                    <p className="text-lg text-white/70 mb-8">
                        Join our waitlist and discover what boutique property management can do for you.
                    </p>
                    <Link href="/enquire" className="inline-flex items-center gap-2 bg-accent-gold text-primary-deep font-medium px-8 py-4 hover:bg-white transition-colors">
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
