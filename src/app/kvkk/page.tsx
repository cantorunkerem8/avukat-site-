import type { Metadata } from 'next';
import { KVKKContent } from './KVKKContent';

export const metadata: Metadata = {
  title: 'KVKK | Bozoğlan Avukatlık Bürosu',
  description: 'Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
};

export default function KVKKPage() {
  return <KVKKContent />;
}

