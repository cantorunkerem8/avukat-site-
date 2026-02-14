'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import { MapPin, Lock, AlertCircle } from 'lucide-react';

interface LocationMapProps {
    mapEmbedUrl?: string;
}

export function LocationMap({ mapEmbedUrl }: LocationMapProps) {
    const [permission, setPermission] = useState<'prompt' | 'granted' | 'denied'>('prompt');
    const [loading, setLoading] = useState(false);

    const requestPermission = () => {
        setLoading(true);
        if (!('geolocation' in navigator)) {
            setPermission('denied');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            () => {
                setPermission('granted');
                setLoading(false);
            },
            (error) => {
                console.error('Location error:', error);
                setPermission('denied');
                setLoading(false);
            }
        );
    };

    if (!mapEmbedUrl) {
        return (
            <div className="w-full h-[400px] bg-muted flex items-center justify-center rounded-2xl border border-border">
                <p className="text-muted-foreground">Harita bilgisi bulunamadı.</p>
            </div>
        );
    }

    // Permission Granted: Show Map
    if (permission === 'granted') {
        return (
            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border relative">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ofis Konumu"
                />
            </div>
        );
    }

    // Permission Denied: Show Warning
    if (permission === 'denied') {
        return (
            <div className="w-full h-[400px] bg-muted/30 flex flex-col items-center justify-center rounded-2xl border border-destructive/20 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                    Konum İzni Reddedildi
                </h3>
                <p className="text-muted-foreground max-w-sm mb-6">
                    Konum ve harita bilgilerini görüntülemek için tarayıcınızdan konum iznini açmanız gerekmektedir.
                </p>
                <Button onClick={requestPermission} variant="outline" size="sm">
                    Tekrar Dene
                </Button>
            </div>
        );
    }

    // Default: Prompt for Permission
    return (
        <div className="w-full h-[400px] bg-muted/50 flex flex-col items-center justify-center rounded-2xl border border-border p-6 text-center relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                    Konumu Görüntüle
                </h3>

                <p className="text-muted-foreground max-w-md mb-8">
                    Ofisimizin konumunu haritada görmek için lütfen konum izni veriniz.
                </p>

                <Button onClick={requestPermission} loading={loading} size="lg" className="min-w-[200px]">
                    <Lock className="w-4 h-4 mr-2" />
                    Konum İznini Aç
                </Button>
            </div>
        </div>
    );
}
