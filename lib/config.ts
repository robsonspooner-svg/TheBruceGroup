export const config = {
    company: {
        name: 'The Bruce Group',
        legalName: 'The Bruce Group Pty Ltd',
        tagline: 'Curating exceptional properties',
        description: 'Australia\'s premier property intelligence and management firm for luxury short-term accommodation and premium residential rentals.',
        url: 'https://thebrucegroup.com.au',
        email: {
            enquiries: 'enquiries@thebrucegroup.com.au',
            support: 'support@thebrucegroup.com.au',
            stays: 'stays@thebrucegroup.com.au',
            rentals: 'rentals@thebrucegroup.com.au',
        },
        abn: '00 000 000 000',
        address: {
            street: 'Level 12, 100 Market Street',
            city: 'Sydney',
            state: 'NSW',
            postcode: '2000',
            country: 'Australia',
        },
        social: {
            linkedin: 'https://linkedin.com/company/thebrucegroup',
            instagram: 'https://instagram.com/thebrucegroup',
        },
    },

    services: {
        sta: {
            name: 'Short-Term Accommodation',
            shortName: 'Holiday & Executive Stays',
            slug: 'stays',
            description: 'White-glove management for luxury holiday homes and executive accommodation.',
            icon: 'Calendar',
            minPropertyValue: 1500000,
            minNightlyRate: 400,
        },
        rental: {
            name: 'Luxury Rentals',
            shortName: 'Premium Residential',
            slug: 'rentals',
            description: 'Curated management for premium long-term residential tenancies.',
            icon: 'Key',
            minPropertyValue: 1500000,
            minWeeklyRent: 1500,
        },
        intelligence: {
            name: 'Property Intelligence',
            shortName: 'Analysis & Advisory',
            slug: 'intelligence',
            description: 'Comprehensive regulatory and market intelligence for informed decisions.',
            icon: 'Shield',
        },
    },

    markets: {
        primary: ['Byron Bay', 'Noosa', 'Gold Coast', 'Sunshine Coast'],
        secondary: ['Sydney Eastern Suburbs', 'Melbourne Bayside', 'Port Douglas', 'Hobart'],
        tertiary: ['Surf Coast', 'Blue Mountains', 'Margaret River', 'Mornington Peninsula'],
    },

    // Note: These are target/indicative figures for when the business launches
    targetRates: {
        averageStaNightlyRate: 850,
        averageRentalWeeklyRate: 2200,
    },

    waitlist: {
        enabled: true,
        message: 'Register your interest to be notified when we launch.',
    },

    // Pre-launch status
    isPreLaunch: true,

    pricing: {
        sta: {
            onboarding: 3500,
            tiers: {
                essential: { monthly: 1200, commission: 12 },
                premium: { monthly: 1800, commission: 10 },
                concierge: { monthly: 2500, commission: 8 },
            },
        },
        rental: {
            onboarding: 2500,
            tiers: {
                essential: { monthlyPercent: 6.5, letFeeWeeks: 1 },
                premium: { monthlyPercent: 8.5, letFeeWeeks: 1.5 },
                concierge: { monthlyPercent: 10, letFeeWeeks: 2 },
            },
        },
        intelligence: {
            staCompliance: { from: 1500, to: 3500 },
            acquisition: { from: 2500, to: 5000 },
            rentalAnalysis: { from: 1200, to: 2500 },
        },
    },

    // Formspree configuration
    formspree: {
        enquiryFormId: 'mgooandl',
        endpoint: 'https://formspree.io/f/mgooandl',
    },
} as const;

export type ServiceType = 'sta' | 'rental' | 'intelligence';
export type PropertyCategory = 'STA' | 'RENTAL' | 'BOTH' | 'UNSURE';
export type ManagementTier = 'ESSENTIAL' | 'PREMIUM' | 'CONCIERGE';
