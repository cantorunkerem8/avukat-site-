'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AutoScroll() {
    const pathname = usePathname();

    useEffect(() => {
        // Disable auto-scroll for individual team member pages
        if (pathname?.startsWith('/ekibimiz/')) {
            return;
        }

        // Wait a bit for the page to render fully
        const timer = setTimeout(() => {
            // Scroll down 300px to skip the top navbar/header area heavily and center content
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }, 300); // 300ms delay to ensure smooth transition after navigation

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
