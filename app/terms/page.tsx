import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata = {
    title: 'Terms of Service | The Bruce Group',
    description: 'Terms and conditions for using The Bruce Group website and services.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-secondary-cream">
            <SiteHeader />

            {/* Hero */}
            <section className="bg-primary-deep text-white pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to home</span>
                    </Link>
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-heading">
                        Terms of <span className="font-accent italic">Service</span>
                    </h1>
                    <p className="text-white/60 mt-4">Last updated: January 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white p-8 md:p-12 border border-secondary-dune prose prose-lg max-w-none">
                        <h2 className="font-heading text-2xl text-primary-deep mb-4">1. Acceptance of Terms</h2>
                        <p className="text-secondary-shell mb-6">
                            By accessing and using the {config.company.name} website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">2. About Us</h2>
                        <p className="text-secondary-shell mb-6">
                            {config.company.legalName} (ABN: {config.company.abn}) provides property management and intelligence services in Australia. Our registered address is {config.company.address.street}, {config.company.address.city} {config.company.address.state} {config.company.address.postcode}.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">3. Services</h2>
                        <p className="text-secondary-shell mb-4">
                            We provide the following services:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>Short-term accommodation management (Holiday & Executive Stays)</li>
                            <li>Premium residential rental management</li>
                            <li>Property intelligence and compliance analysis reports</li>
                        </ul>
                        <p className="text-secondary-shell mb-6">
                            Specific terms relating to these services will be set out in separate service agreements provided when you engage our services.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">4. Website Use</h2>
                        <p className="text-secondary-shell mb-4">
                            You agree to use our website only for lawful purposes and in a way that does not:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>Infringe the rights of others</li>
                            <li>Restrict or inhibit anyone else's use of the website</li>
                            <li>Breach any applicable laws or regulations</li>
                            <li>Transmit any material that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
                        </ul>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">5. Intellectual Property</h2>
                        <p className="text-secondary-shell mb-6">
                            All content on this website, including text, graphics, logos, images, and software, is the property of {config.company.name} or its content suppliers and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">6. Enquiries and Waitlist</h2>
                        <p className="text-secondary-shell mb-6">
                            When you submit an enquiry or join our waitlist, you provide your personal information voluntarily. We will use this information to contact you regarding your enquiry and our services. Submission of an enquiry does not guarantee acceptance onto our management portfolio or access to our services.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">7. Disclaimer</h2>
                        <p className="text-secondary-shell mb-6">
                            The information on this website is provided for general information purposes only. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                        </p>
                        <p className="text-secondary-shell mb-6">
                            Any reliance you place on such information is strictly at your own risk. Property intelligence reports are advisory only and should not be relied upon as legal advice. We recommend seeking independent legal and financial advice before making property decisions.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">8. Limitation of Liability</h2>
                        <p className="text-secondary-shell mb-6">
                            To the maximum extent permitted by law, {config.company.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our website or services.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">9. Australian Consumer Law</h2>
                        <p className="text-secondary-shell mb-6">
                            Nothing in these terms excludes, restricts, or modifies any consumer guarantee, right or remedy conferred on you by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any similar legislation in other Australian states and territories that cannot be excluded, restricted, or modified by agreement.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">10. Privacy</h2>
                        <p className="text-secondary-shell mb-6">
                            Your use of our website is also governed by our <Link href="/privacy" className="text-primary-deep underline hover:text-accent-gold">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">11. Governing Law</h2>
                        <p className="text-secondary-shell mb-6">
                            These terms are governed by and construed in accordance with the laws of Queensland, Australia. Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Queensland.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">12. Changes to Terms</h2>
                        <p className="text-secondary-shell mb-6">
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes acceptance of the new terms.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">13. Contact Us</h2>
                        <p className="text-secondary-shell mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <ul className="text-secondary-shell mb-6 space-y-1">
                            <li>Email: <a href={`mailto:${config.company.email.enquiries}`} className="text-primary-deep underline hover:text-accent-gold">{config.company.email.enquiries}</a></li>
                            <li>Address: {config.company.address.street}, {config.company.address.city} {config.company.address.state} {config.company.address.postcode}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
