import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '2.5rem',
                '2xl': '3rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        extend: {
            colors: {
                // Primary
                'primary-deep': 'rgb(var(--color-primary-deep) / <alpha-value>)',
                'primary-main': 'rgb(var(--color-primary-main) / <alpha-value>)',
                'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
                'primary-pale': 'rgb(var(--color-primary-pale) / <alpha-value>)',
                // Secondary
                'secondary-cream': 'rgb(var(--color-secondary-cream) / <alpha-value>)',
                'secondary-sand': 'rgb(var(--color-secondary-sand) / <alpha-value>)',
                'secondary-dune': 'rgb(var(--color-secondary-dune) / <alpha-value>)',
                'secondary-shell': 'rgb(var(--color-secondary-shell) / <alpha-value>)',
                // Accent
                'accent-gold': 'rgb(var(--color-accent-gold) / <alpha-value>)',
                'accent-copper': 'rgb(var(--color-accent-copper) / <alpha-value>)',
                'accent-terracotta': 'rgb(var(--color-accent-terracotta) / <alpha-value>)',
                // Status
                'status-viable': 'rgb(var(--color-viable) / <alpha-value>)',
                'status-restricted': 'rgb(var(--color-restricted) / <alpha-value>)',
                'status-high-risk': 'rgb(var(--color-high-risk) / <alpha-value>)',
                'status-prohibited': 'rgb(var(--color-prohibited) / <alpha-value>)',
                // shadcn compatibility
                border: 'rgb(var(--border) / <alpha-value>)',
                input: 'rgb(var(--input) / <alpha-value>)',
                ring: 'rgb(var(--ring) / <alpha-value>)',
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
                    foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
                    foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
                    foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
                    foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'rgb(var(--card) / <alpha-value>)',
                    foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'Georgia', 'serif'],
                heading: ['var(--font-heading)', 'Georgia', 'serif'],
                body: ['var(--font-body)', 'system-ui', 'sans-serif'],
                accent: ['var(--font-accent)', 'Georgia', 'serif'],
                sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['clamp(3rem, 10vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
                'display-lg': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
                'display-md': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
            },
            boxShadow: {
                'subtle': 'var(--shadow-subtle)',
                'soft': 'var(--shadow-soft)',
                'medium': 'var(--shadow-medium)',
                'dramatic': '0 16px 48px rgba(26, 46, 76, 0.16)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                'organic': '60% 40% 50% 50% / 50% 50% 40% 60%',
            },
            transitionTimingFunction: {
                'elegant': 'var(--ease-elegant)',
                'bounce-soft': 'var(--ease-bounce)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s var(--ease-elegant) forwards',
                'fade-in-up': 'fadeInUp 0.6s var(--ease-elegant) forwards',
                'scale-in': 'scaleIn 0.4s var(--ease-bounce) forwards',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};

export default config;
