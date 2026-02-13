import type { Metadata } from 'next';
import { FAQPage } from './FAQPage';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
    title: siteContent.seo.pages['/sss']?.title,
    description: siteContent.seo.pages['/sss']?.description,
};

export default function SSSPage() {
    return <FAQPage />;
}
