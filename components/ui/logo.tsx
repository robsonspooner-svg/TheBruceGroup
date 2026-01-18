'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
    variant?: 'default' | 'white' | 'icon';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    showText?: boolean;
}

const sizeMap = {
    xs: { width: 24, height: 24 },
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 56, height: 56 },
    xl: { width: 80, height: 80 },
};

export function Logo({
    variant = 'default',
    size = 'md',
    className,
    showText = false
}: LogoProps) {
    const { width, height } = sizeMap[size];

    // Use the PNG logo for all variants
    const src = '/images/icons/tBG-logo.png';

    return (
        <div className={cn('flex items-center gap-3', className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt="The Bruce Group"
                width={width}
                height={height}
                className="object-contain"
            />
            {showText && (
                <div className="hidden sm:block">
                    <p className="font-heading text-lg text-primary-deep leading-none">
                        The Bruce Group
                    </p>
                    <p className="text-xs text-secondary-shell tracking-wider uppercase">
                        Property Intelligence
                    </p>
                </div>
            )}
        </div>
    );
}

// Animated loading variant
export function LogoLoader({ size = 'md', text = 'Loading...' }: { size?: LogoProps['size']; text?: string }) {
    const { width, height } = sizeMap[size];

    return (
        <div className="flex items-center gap-3">
            <div className="animate-pulse">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/icons/tBG-logo.png"
                    alt="Loading"
                    width={width}
                    height={height}
                    className="object-contain opacity-70"
                />
            </div>
            <span className="font-accent italic text-secondary-shell">
                {text}
            </span>
        </div>
    );
}

// Spinning loader variant (more active)
export function LogoSpinner({ size = 'sm' }: { size?: LogoProps['size'] }) {
    const { width, height } = sizeMap[size];

    return (
        <div className="animate-spin-slow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/icons/tBG-logo.png"
                alt="Loading"
                width={width}
                height={height}
                className="object-contain"
            />
        </div>
    );
}
