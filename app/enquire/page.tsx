'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Calendar, Key, Shield } from 'lucide-react';
import { config } from '@/lib/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

type Step = 1 | 2 | 3 | 4;

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredContact: 'EMAIL' | 'PHONE' | 'EITHER';
    propertyAddress: string;
    propertySuburb: string;
    propertyState: string;
    propertyPostcode: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    ownershipStatus: string;
    estimatedValue: string;
    interestedInSta: boolean;
    interestedInRental: boolean;
    interestedInReport: boolean;
    howHeard: string;
    message: string;
}

const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'EITHER',
    propertyAddress: '',
    propertySuburb: '',
    propertyState: 'QLD',
    propertyPostcode: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    ownershipStatus: 'OWN_OUTRIGHT',
    estimatedValue: '',
    interestedInSta: false,
    interestedInRental: false,
    interestedInReport: false,
    howHeard: '',
    message: '',
};

export default function EnquirePage() {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateForm = (updates: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        setError(null);

        try {
            // Build services string
            const services = [
                formData.interestedInSta && 'Holiday & Executive Stays',
                formData.interestedInRental && 'Premium Residential',
                formData.interestedInReport && 'Property Intelligence Report',
            ].filter(Boolean).join(', ');

            // Submit to Formspree
            const response = await fetch(config.formspree.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    // Contact details
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    preferredContact: formData.preferredContact,
                    // Property details
                    propertyAddress: formData.propertyAddress,
                    propertySuburb: formData.propertySuburb,
                    propertyState: formData.propertyState,
                    propertyPostcode: formData.propertyPostcode,
                    propertyType: formData.propertyType,
                    bedrooms: formData.bedrooms,
                    bathrooms: formData.bathrooms,
                    // Additional details
                    ownershipStatus: formData.ownershipStatus,
                    estimatedValue: formData.estimatedValue,
                    servicesInterested: services,
                    howHeard: formData.howHeard,
                    message: formData.message,
                    // Metadata
                    submittedAt: new Date().toISOString(),
                    source: 'The Bruce Group Marketing Website',
                }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Submission failed:', err);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <>
                <SiteHeader />
                <main className="min-h-screen bg-primary-deep text-white pt-20">
                    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
                        <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="w-8 h-8 text-primary-deep" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading mb-4">
                            Thank you for your <span className="font-accent italic">interest</span>
                        </h1>
                        <p className="text-white/70 text-lg mb-4 max-w-xl mx-auto">
                            We've received your enquiry and will be in touch within 2-3 business days to discuss how The Bruce Group can help you.
                        </p>
                        <p className="text-white/50 text-sm mb-8">
                            In the meantime, feel free to explore our services and learn more about what we offer.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link href="/" className="text-white hover:text-accent-gold transition-colors underline underline-offset-4">
                                Return to homepage
                            </Link>
                            <Link href="/services/stays" className="text-accent-gold hover:text-white transition-colors underline underline-offset-4">
                                Explore our services
                            </Link>
                        </div>
                    </div>
                </main>
                <SiteFooter />
            </>
        );
    }

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-secondary-cream pt-20">
                {/* Header */}
                <section className="bg-primary-deep text-white py-16">
                    <div className="max-w-2xl mx-auto px-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to home</span>
                        </Link>
                        <p className="text-xs uppercase tracking-wider text-white/50 mb-4">Join Our Waitlist</p>
                        <h1 className="text-4xl md:text-5xl font-heading">
                            Tell us about your <span className="font-accent italic">property</span>
                        </h1>
                    </div>
                </section>

                {/* Progress */}
                <section className="bg-white border-b border-secondary-dune py-4">
                    <div className="max-w-2xl mx-auto px-6">
                        <div className="flex items-center gap-4">
                            <ProgressStep number={1} label="Contact" active={step >= 1} current={step === 1} />
                            <ProgressLine />
                            <ProgressStep number={2} label="Property" active={step >= 2} current={step === 2} />
                            <ProgressLine />
                            <ProgressStep number={3} label="Details" active={step >= 3} current={step === 3} />
                            <ProgressLine />
                            <ProgressStep number={4} label="Review" active={step >= 4} current={step === 4} />
                        </div>
                    </div>
                </section>

                {/* Form */}
                <section className="py-16">
                    <div className="max-w-2xl mx-auto px-6">
                        <div className="bg-white p-8 md:p-12 border border-secondary-dune">
                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                                    {error}
                                </div>
                            )}
                            {step === 1 && (
                                <StepContact
                                    formData={formData}
                                    updateForm={updateForm}
                                    onNext={() => setStep(2)}
                                />
                            )}
                            {step === 2 && (
                                <StepProperty
                                    formData={formData}
                                    updateForm={updateForm}
                                    onNext={() => setStep(3)}
                                    onBack={() => setStep(1)}
                                />
                            )}
                            {step === 3 && (
                                <StepDetails
                                    formData={formData}
                                    updateForm={updateForm}
                                    onNext={() => setStep(4)}
                                    onBack={() => setStep(2)}
                                />
                            )}
                            {step === 4 && (
                                <StepReview
                                    formData={formData}
                                    onSubmit={handleSubmit}
                                    onBack={() => setStep(3)}
                                    submitting={submitting}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}

function ProgressStep({ number, label, active, current }: {
    number: number;
    label: string;
    active: boolean;
    current: boolean;
}) {
    return (
        <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${current ? 'bg-accent-gold text-primary-deep' :
                active ? 'bg-primary-deep text-white' :
                    'bg-secondary-sand text-secondary-shell'
                }`}>
                {number}
            </div>
            <span className={`hidden sm:block text-sm ${current ? 'text-primary-deep font-medium' : 'text-secondary-shell'
                }`}>
                {label}
            </span>
        </div>
    );
}

function ProgressLine() {
    return <div className="flex-1 h-px bg-secondary-dune" />;
}

function StepContact({ formData, updateForm, onNext }: {
    formData: FormData;
    updateForm: (u: Partial<FormData>) => void;
    onNext: () => void;
}) {
    const canProceed = formData.firstName && formData.lastName && formData.email && formData.phone;

    return (
        <div>
            <h2 className="font-heading text-2xl text-primary-deep mb-2">Your details</h2>
            <p className="text-secondary-shell mb-8">We'll use these details to contact you about your enquiry.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">First name *</label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateForm({ firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Last name *</label>
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateForm({ lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                        placeholder="Smith"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Email address *</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Phone number *</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateForm({ phone: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                        placeholder="0400 000 000"
                    />
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-sm font-medium text-primary-deep mb-3">Preferred contact method</label>
                <div className="flex flex-wrap gap-4">
                    {[
                        { value: 'EMAIL', label: 'Email' },
                        { value: 'PHONE', label: 'Phone' },
                        { value: 'EITHER', label: 'Either' },
                    ].map((option) => (
                        <label
                            key={option.value}
                            className={`px-4 py-2 cursor-pointer border transition-colors ${formData.preferredContact === option.value
                                ? 'border-primary-deep bg-secondary-sand'
                                : 'border-secondary-dune hover:border-secondary-shell'
                                }`}
                        >
                            <input
                                type="radio"
                                name="preferredContact"
                                value={option.value}
                                checked={formData.preferredContact === option.value}
                                onChange={(e) => updateForm({ preferredContact: e.target.value as 'EMAIL' | 'PHONE' | 'EITHER' })}
                                className="sr-only"
                            />
                            <span className="text-sm text-primary-deep">{option.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    disabled={!canProceed}
                    className="flex items-center gap-2 bg-primary-deep text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-deep/90 transition-colors"
                >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function StepProperty({ formData, updateForm, onNext, onBack }: {
    formData: FormData;
    updateForm: (u: Partial<FormData>) => void;
    onNext: () => void;
    onBack: () => void;
}) {
    const canProceed = formData.propertyAddress && formData.propertySuburb &&
        formData.propertyState && formData.propertyPostcode;

    return (
        <div>
            <h2 className="font-heading text-2xl text-primary-deep mb-2">Property location</h2>
            <p className="text-secondary-shell mb-8">Enter the address of the property you'd like us to manage or analyse.</p>

            <div className="space-y-6 mb-8">
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Street address *</label>
                    <input
                        type="text"
                        value={formData.propertyAddress}
                        onChange={(e) => updateForm({ propertyAddress: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                        placeholder="123 Beach Road"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">Suburb *</label>
                        <input
                            type="text"
                            value={formData.propertySuburb}
                            onChange={(e) => updateForm({ propertySuburb: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                            placeholder="Byron Bay"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">State *</label>
                        <select
                            value={formData.propertyState}
                            onChange={(e) => updateForm({ propertyState: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                        >
                            <option value="QLD">Queensland</option>
                            <option value="NSW">New South Wales</option>
                            <option value="VIC">Victoria</option>
                            <option value="WA">Western Australia</option>
                            <option value="SA">South Australia</option>
                            <option value="TAS">Tasmania</option>
                            <option value="NT">Northern Territory</option>
                            <option value="ACT">ACT</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">Postcode *</label>
                        <input
                            type="text"
                            value={formData.propertyPostcode}
                            onChange={(e) => updateForm({ propertyPostcode: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors"
                            placeholder="2481"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">Property type</label>
                        <select
                            value={formData.propertyType}
                            onChange={(e) => updateForm({ propertyType: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                        >
                            <option value="">Select type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="villa">Villa</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="acreage">Acreage/Rural</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">Bedrooms</label>
                        <select
                            value={formData.bedrooms}
                            onChange={(e) => updateForm({ bedrooms: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                        >
                            <option value="">Select</option>
                            {[1, 2, 3, 4, 5, 6, '7+'].map((n) => (
                                <option key={n} value={n}>{n} {n === 1 ? 'bedroom' : 'bedrooms'}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-deep mb-2">Bathrooms</label>
                        <select
                            value={formData.bathrooms}
                            onChange={(e) => updateForm({ bathrooms: e.target.value })}
                            className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                        >
                            <option value="">Select</option>
                            {[1, 2, 3, 4, 5, '6+'].map((n) => (
                                <option key={n} value={n}>{n} {n === 1 ? 'bathroom' : 'bathrooms'}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-secondary-sand mb-8">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary-shell mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="font-medium text-primary-deep text-sm">Currently serving select markets</p>
                        <p className="text-secondary-shell text-sm">
                            We prioritise applications from {config.markets.primary.join(', ')}.
                            Other markets are considered on a case-by-case basis.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-primary-deep hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                </button>
                <button
                    onClick={onNext}
                    disabled={!canProceed}
                    className="flex items-center gap-2 bg-primary-deep text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-deep/90 transition-colors"
                >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function StepDetails({ formData, updateForm, onNext, onBack }: {
    formData: FormData;
    updateForm: (u: Partial<FormData>) => void;
    onNext: () => void;
    onBack: () => void;
}) {
    const hasServiceSelected = formData.interestedInSta || formData.interestedInRental || formData.interestedInReport;

    return (
        <div>
            <h2 className="font-heading text-2xl text-primary-deep mb-2">Service requirements</h2>
            <p className="text-secondary-shell mb-8">Tell us what you're looking for and your property's current situation.</p>

            <div className="space-y-8 mb-8">
                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-4">What services are you interested in? *</label>
                    <div className="space-y-3">
                        <label
                            className={`block p-5 cursor-pointer border transition-all ${formData.interestedInSta
                                ? 'border-primary-deep bg-secondary-sand shadow-sm'
                                : 'border-secondary-dune hover:border-secondary-shell hover:shadow-sm'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interestedInSta}
                                onChange={(e) => updateForm({ interestedInSta: e.target.checked })}
                                className="sr-only"
                            />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary-deep/10 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-5 h-5 text-primary-deep" />
                                </div>
                                <div>
                                    <span className="font-heading text-lg text-primary-deep block mb-1">Holiday & Executive Stays</span>
                                    <p className="text-sm text-secondary-shell">
                                        Short-term accommodation via Airbnb, Stayz, direct bookings
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label
                            className={`block p-5 cursor-pointer border transition-all ${formData.interestedInRental
                                ? 'border-primary-deep bg-secondary-sand shadow-sm'
                                : 'border-secondary-dune hover:border-secondary-shell hover:shadow-sm'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interestedInRental}
                                onChange={(e) => updateForm({ interestedInRental: e.target.checked })}
                                className="sr-only"
                            />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                                    <Key className="w-5 h-5 text-accent-gold" />
                                </div>
                                <div>
                                    <span className="font-heading text-lg text-primary-deep block mb-1">Premium Residential</span>
                                    <p className="text-sm text-secondary-shell">
                                        Long-term luxury rentals with curated tenant matching
                                    </p>
                                </div>
                            </div>
                        </label>

                        <label
                            className={`block p-5 cursor-pointer border transition-all ${formData.interestedInReport
                                ? 'border-primary-deep bg-secondary-sand shadow-sm'
                                : 'border-secondary-dune hover:border-secondary-shell hover:shadow-sm'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interestedInReport}
                                onChange={(e) => updateForm({ interestedInReport: e.target.checked })}
                                className="sr-only"
                            />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-5 h-5 text-accent-gold" />
                                </div>
                                <div>
                                    <span className="font-heading text-lg text-primary-deep block mb-1">Property Intelligence</span>
                                    <p className="text-sm text-secondary-shell">
                                        AI-powered compliance and market analysis reports
                                    </p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-4">Property ownership status</label>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { value: 'OWN_OUTRIGHT', label: 'Own outright' },
                            { value: 'MORTGAGED', label: 'Mortgaged' },
                            { value: 'PURCHASING', label: 'Currently purchasing' },
                            { value: 'SETTLING_SOON', label: 'Settling soon' },
                            { value: 'CONSIDERING', label: 'Considering purchase' },
                        ].map((option) => (
                            <label
                                key={option.value}
                                className={`px-4 py-2 cursor-pointer border transition-colors ${formData.ownershipStatus === option.value
                                    ? 'border-primary-deep bg-secondary-sand'
                                    : 'border-secondary-dune hover:border-secondary-shell'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="ownershipStatus"
                                    value={option.value}
                                    checked={formData.ownershipStatus === option.value}
                                    onChange={(e) => updateForm({ ownershipStatus: e.target.value })}
                                    className="sr-only"
                                />
                                <span className="text-sm text-primary-deep">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Estimated property value</label>
                    <select
                        value={formData.estimatedValue}
                        onChange={(e) => updateForm({ estimatedValue: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select range</option>
                        <option value="1-1.5m">$1M - $1.5M</option>
                        <option value="1.5-2m">$1.5M - $2M</option>
                        <option value="2-3m">$2M - $3M</option>
                        <option value="3-5m">$3M - $5M</option>
                        <option value="5-10m">$5M - $10M</option>
                        <option value="10m+">$10M+</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">How did you hear about us?</label>
                    <select
                        value={formData.howHeard}
                        onChange={(e) => updateForm({ howHeard: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select</option>
                        <option value="referral">Referral from friend/colleague</option>
                        <option value="agent">Real estate agent</option>
                        <option value="lawyer">Lawyer/conveyancer</option>
                        <option value="accountant">Accountant</option>
                        <option value="search">Google search</option>
                        <option value="social">Social media</option>
                        <option value="press">Press/media</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-primary-deep mb-2">Additional information (optional)</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => updateForm({ message: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-dune focus:border-primary-deep focus:outline-none transition-colors min-h-[120px]"
                        placeholder="Tell us anything else that might be relevant about your property or requirements..."
                    />
                </div>
            </div>

            <div className="flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-primary-deep hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                </button>
                <button
                    onClick={onNext}
                    disabled={!hasServiceSelected}
                    className="flex items-center gap-2 bg-primary-deep text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-deep/90 transition-colors"
                >
                    <span>Review application</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

function StepReview({ formData, onSubmit, onBack, submitting }: {
    formData: FormData;
    onSubmit: () => void;
    onBack: () => void;
    submitting: boolean;
}) {
    const services = [
        formData.interestedInSta && 'Holiday & Executive Stays',
        formData.interestedInRental && 'Premium Residential',
        formData.interestedInReport && 'Property Intelligence Report',
    ].filter(Boolean);

    return (
        <div>
            <h2 className="font-heading text-2xl text-primary-deep mb-2">Review your enquiry</h2>
            <p className="text-secondary-shell mb-8">Please confirm your details before submitting.</p>

            <div className="space-y-6 mb-8">
                <div className="bg-secondary-sand p-6">
                    <h3 className="text-xs uppercase tracking-wider text-secondary-shell mb-4">Contact Details</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-secondary-shell">Name</p>
                            <p className="text-primary-deep font-medium">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                            <p className="text-secondary-shell">Email</p>
                            <p className="text-primary-deep font-medium">{formData.email}</p>
                        </div>
                        <div>
                            <p className="text-secondary-shell">Phone</p>
                            <p className="text-primary-deep font-medium">{formData.phone}</p>
                        </div>
                        <div>
                            <p className="text-secondary-shell">Preferred contact</p>
                            <p className="text-primary-deep font-medium capitalize">{formData.preferredContact.toLowerCase()}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary-sand p-6">
                    <h3 className="text-xs uppercase tracking-wider text-secondary-shell mb-4">Property</h3>
                    <p className="text-primary-deep font-medium">{formData.propertyAddress}</p>
                    <p className="text-secondary-shell">
                        {formData.propertySuburb}, {formData.propertyState} {formData.propertyPostcode}
                    </p>
                    {(formData.propertyType || formData.bedrooms) && (
                        <p className="text-secondary-shell mt-2">
                            {formData.propertyType && <span className="capitalize">{formData.propertyType}</span>}
                            {formData.propertyType && formData.bedrooms && ' · '}
                            {formData.bedrooms && `${formData.bedrooms} bed`}
                            {formData.bathrooms && ` · ${formData.bathrooms} bath`}
                        </p>
                    )}
                </div>

                <div className="bg-secondary-sand p-6">
                    <h3 className="text-xs uppercase tracking-wider text-secondary-shell mb-4">Services Requested</h3>
                    <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                            <span
                                key={service as string}
                                className="px-3 py-1 bg-white text-primary-deep text-sm font-medium"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    {formData.estimatedValue && (
                        <p className="text-secondary-shell text-sm mt-4">
                            Estimated value: {formData.estimatedValue.toUpperCase().replace('-', ' - $')}
                        </p>
                    )}
                </div>
            </div>

            <div className="p-4 border border-secondary-dune mb-8">
                <p className="text-sm text-secondary-shell">
                    By submitting this enquiry, you consent to {config.company.name} contacting you regarding
                    your enquiry. We respect your privacy and will never share your information with third parties.
                    View our <Link href="/privacy" className="underline hover:text-primary-deep">Privacy Policy</Link>.
                </p>
            </div>

            <div className="flex justify-between">
                <button onClick={onBack} className="flex items-center gap-2 text-primary-deep hover:text-primary transition-colors" disabled={submitting}>
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                </button>
                <button
                    onClick={onSubmit}
                    disabled={submitting}
                    className="flex items-center gap-2 bg-primary-deep text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-deep/90 transition-colors"
                >
                    {submitting ? (
                        <span>Submitting...</span>
                    ) : (
                        <>
                            <span>Submit Enquiry</span>
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
