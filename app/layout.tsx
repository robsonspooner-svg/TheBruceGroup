import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The Bruce Group | Premium Property Management & Intelligence',
    description: 'Australia\'s premier property intelligence and management firm for luxury short-term accommodation and premium residential rentals.',
    icons: {
        icon: [
            { url: '/images/icons/tBG-favicon.ico' },
            { url: '/images/icons/tBG-logo.png', type: 'image/png' },
        ],
        apple: '/images/icons/tBG-apple-touch-icon.png',
    },
    openGraph: {
        title: 'The Bruce Group',
        description: 'Property Intelligence & Premium Management',
        images: ['/images/icons/tBG-logo.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
