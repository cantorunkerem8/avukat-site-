import Link from 'next/link';
import { Button } from '@/components/ui';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center px-4">
                <div className="text-8xl font-serif font-bold text-accent/20 mb-4">404</div>
                <h1 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-4">
                    Sayfa Bulunamadı
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button href="/">
                        <Home className="w-4 h-4 mr-2" />
                        Ana Sayfa
                    </Button>
                    <Button href="/iletisim" variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        İletişim
                    </Button>
                </div>
            </div>
        </div>
    );
}
