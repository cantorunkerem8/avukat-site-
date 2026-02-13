import type { Metadata } from 'next';
import { PrivacyContent } from './PrivacyContent';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Bozoğlan Avukatlık Bürosu',
    description: 'Bozoğlan Avukatlık Bürosu gizlilik politikası ve kişisel verilerin korunması.',
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
