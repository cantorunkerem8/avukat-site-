'use client';

import { useState, useEffect } from 'react';
import { Phone, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface PhoneLinkProps {
    phone: string;
    className?: string;
    isButton?: boolean;
    buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    buttonSize?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
    iconClassName?: string;
    hideIcon?: boolean;
}

export function PhoneLink({
    phone,
    className = '',
    isButton = false,
    buttonVariant = 'outline',
    buttonSize = 'lg',
    children,
    iconClassName = 'w-5 h-5',
    hideIcon = false
}: PhoneLinkProps) {
    const [isMobile, setIsMobile] = useState(true); // Default strictly to mobile to allow SSR rendering logic
    const [isCopied, setIsCopied] = useState(false);
    const cleanPhone = phone.replace(/\s+/g, '');

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
            const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
            // Consider desktop as screen width > 1024px and not a mobile user agent
            setIsMobile(mobile || window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClick = async (e: React.MouseEvent) => {
        if (!isMobile) {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(phone);
                setIsCopied(true);

                // Show floating toast notification overlay
                const toast = document.createElement('div');
                toast.className = 'fixed top-6 right-6 bg-foreground text-background px-5 py-4 rounded-xl shadow-soft-lg z-[9999] flex items-center gap-3 font-medium text-sm transition-all duration-300 transform translate-y-0';
                // Initially hide for fade in effect
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-20px)';

                toast.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <svg class="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    Panoya kopyalandı
                `;
                document.body.appendChild(toast);

                // Trigger reflow for animation
                void toast.offsetWidth;
                toast.style.opacity = '1';
                toast.style.transform = 'translateY(0)';

                setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(-20px)';
                    setTimeout(() => document.body.removeChild(toast), 300);
                    setIsCopied(false);
                }, 3000);

            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }
    };

    if (isButton) {
        if (!isMobile) {
            return (
                <Button
                    onClick={handleClick as any}
                    size={buttonSize}
                    variant={buttonVariant}
                    className={className}
                >
                    {!hideIcon && (isCopied ? <Check className={cn("mr-2 shrink-0 text-emerald-500", iconClassName)} /> : <Phone className={cn("mr-2 shrink-0", iconClassName)} />)}
                    {isCopied ? "Kopyalandı" : children}
                </Button>
            );
        }

        return (
            <Button
                href={`tel:${cleanPhone}`}
                size={buttonSize}
                variant={buttonVariant}
                className={className}
            >
                {!hideIcon && <Phone className={cn("mr-2 shrink-0", iconClassName)} />}
                {children}
            </Button>
        );
    }

    return (
        <a
            href={`tel:${cleanPhone}`}
            onClick={handleClick}
            className={cn("flex items-center gap-3 hover:text-accent transition-colors cursor-pointer", className)}
        >
            {!hideIcon && !isCopied && <Phone className={cn("shrink-0", iconClassName)} />}
            {isCopied && <Check className={cn("shrink-0 text-emerald-500", iconClassName)} />}
            <span>{isCopied ? "Kopyalandı" : children}</span>
        </a>
    );
}
