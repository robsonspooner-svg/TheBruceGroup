import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata = {
    title: 'Privacy Policy | The Bruce Group',
    description: 'Privacy policy for The Bruce Group - how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
                        Privacy <span className="font-accent italic">Policy</span>
                    </h1>
                    <p className="text-white/60 mt-4">Last updated: January 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white p-8 md:p-12 border border-secondary-dune prose prose-lg max-w-none">
                        <h2 className="font-heading text-2xl text-primary-deep mb-4">1. Introduction</h2>
                        <p className="text-secondary-shell mb-6">
                            {config.company.legalName} (ABN: {config.company.abn}) ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                        </p>
                        <p className="text-secondary-shell mb-6">
                            By using our website or services, you consent to the collection and use of your information as described in this policy.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">2. Information We Collect</h2>
                        <p className="text-secondary-shell mb-4">
                            We may collect the following types of personal information:
                        </p>
                        <h3 className="font-heading text-lg text-primary-deep mb-2">2.1 Information You Provide</h3>
                        <ul className="list-disc pl-6 text-secondary-shell mb-4 space-y-2">
                            <li>Contact details (name, email address, phone number, postal address)</li>
                            <li>Property details (address, type, bedrooms, bathrooms, estimated value)</li>
                            <li>Service preferences and requirements</li>
                            <li>Correspondence and communication records</li>
                            <li>Any other information you choose to provide in enquiry forms</li>
                        </ul>

                        <h3 className="font-heading text-lg text-primary-deep mb-2">2.2 Information Collected Automatically</h3>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>IP address and browser type</li>
                            <li>Pages visited and time spent on our website</li>
                            <li>Referring website or source</li>
                            <li>Device information (operating system, screen resolution)</li>
                        </ul>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">3. How We Use Your Information</h2>
                        <p className="text-secondary-shell mb-4">
                            We use your personal information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>To respond to your enquiries and provide requested services</li>
                            <li>To process applications for property management services</li>
                            <li>To generate property intelligence reports</li>
                            <li>To communicate with you about our services</li>
                            <li>To improve our website and services</li>
                            <li>To comply with legal obligations</li>
                            <li>To send marketing communications (with your consent)</li>
                        </ul>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">4. Legal Basis for Processing (Queensland)</h2>
                        <p className="text-secondary-shell mb-6">
                            As we operate primarily in Queensland, we process your personal information in accordance with the Privacy Act 1988 (Cth), the Information Privacy Act 2009 (Qld), and applicable Queensland regulations. We only collect personal information that is reasonably necessary for our functions and activities.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">5. Disclosure of Your Information</h2>
                        <p className="text-secondary-shell mb-4">
                            We may share your personal information with:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>Service providers who assist us in operating our business (e.g., IT providers, email services)</li>
                            <li>Professional advisers (lawyers, accountants) as required</li>
                            <li>Government authorities if required by law</li>
                            <li>Third parties with your explicit consent</li>
                        </ul>
                        <p className="text-secondary-shell mb-6">
                            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">6. Data Security</h2>
                        <p className="text-secondary-shell mb-6">
                            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and restricted access to personal information.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">7. Data Retention</h2>
                        <p className="text-secondary-shell mb-6">
                            We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When your information is no longer needed, we will securely destroy or de-identify it.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">8. Your Rights</h2>
                        <p className="text-secondary-shell mb-4">
                            Under the Privacy Act 1988 (Cth) and Australian Privacy Principles, you have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-shell mb-6 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or outdated information</li>
                            <li>Request deletion of your personal information (subject to legal requirements)</li>
                            <li>Withdraw consent for marketing communications</li>
                            <li>Lodge a complaint if you believe your privacy has been breached</li>
                        </ul>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">9. Cookies and Tracking</h2>
                        <p className="text-secondary-shell mb-6">
                            Our website uses cookies and similar technologies to enhance your browsing experience and analyse website traffic. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">10. Third-Party Links</h2>
                        <p className="text-secondary-shell mb-6">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">11. Cross-Border Disclosure</h2>
                        <p className="text-secondary-shell mb-6">
                            We primarily store and process your personal information in Australia. If we need to transfer your information overseas, we will take reasonable steps to ensure the overseas recipient handles your information in accordance with the Australian Privacy Principles.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">12. Changes to This Policy</h2>
                        <p className="text-secondary-shell mb-6">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">13. Complaints</h2>
                        <p className="text-secondary-shell mb-6">
                            If you believe we have breached your privacy rights, please contact us first to resolve the issue. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary-deep underline hover:text-accent-gold">www.oaic.gov.au</a>.
                        </p>

                        <h2 className="font-heading text-2xl text-primary-deep mb-4">14. Contact Us</h2>
                        <p className="text-secondary-shell mb-4">
                            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
