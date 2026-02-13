import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
}

export function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

export function generateMetadata({
    title,
    description,
    keywords,
    ogImage,
    path,
}: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    path?: string;
}) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bozoglanavukatlik.com';

    return {
        title,
        description,
        keywords: keywords?.join(', '),
        openGraph: {
            title,
            description,
            url: path ? `${siteUrl}${path}` : siteUrl,
            siteName: 'Bozoğlan Avukatlık Bürosu',
            locale: 'tr_TR',
            type: 'website',
            images: ogImage ? [{ url: ogImage }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        alternates: {
            canonical: path ? `${siteUrl}${path}` : siteUrl,
        },
    };
}
