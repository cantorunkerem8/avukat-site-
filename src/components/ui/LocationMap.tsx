'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import { MapPin, Lock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocationMapProps {
    mapEmbedUrl?: string;
    className?: string;
    compact?: boolean;
}

export function LocationMap({ mapEmbedUrl, className, compact = false }: LocationMapProps) {
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
            <div className={cn("w-full h-[400px] bg-muted flex items-center justify-center rounded-2xl border border-border", className)}>
                <p className="text-muted-foreground">Harita bilgisi bulunamadı.</p>
            </div>
        );
    }

    // Permission Granted: Show Map
    if (permission === 'granted') {
        return (
            <div className={cn("w-full h-[400px] rounded-2xl overflow-hidden border border-border relative", className)}>
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
            <div className={cn("w-full h-[400px] bg-muted/30 flex flex-col items-center justify-center rounded-2xl border border-destructive/20 p-6 text-center", className)}>
                <div className={cn("rounded-full bg-destructive/10 flex items-center justify-center", compact ? "w-10 h-10 mb-2" : "w-16 h-16 mb-4")}>
                    <AlertCircle className={cn("text-destructive", compact ? "w-5 h-5" : "w-8 h-8")} />
                </div>
                <h3 className={cn("font-medium text-foreground", compact ? "text-sm mb-1" : "text-lg mb-2")}>
                    Konum İzni Reddedildi
                </h3>
                {!compact && (
                    <p className="text-muted-foreground max-w-sm mb-6">
                        Konum ve harita bilgilerini görüntülemek için tarayıcınızdan konum iznini açmanız gerekmektedir.
                    </p>
                )}
                <Button onClick={requestPermission} variant="outline" size="sm">
                    Tekrar Dene
                </Button>
            </div>
        );
    }

    // Default: Prompt for Permission
    return (
        <div className={cn("w-full h-[400px] bg-muted/50 flex flex-col items-center justify-center rounded-2xl border border-border text-center relative overflow-hidden group", compact ? "p-3" : "p-6", className)}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

            <div className="relative z-10 flex flex-col items-center">
                <div className={cn("rounded-full bg-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110", compact ? "w-10 h-10 mb-2" : "w-16 h-16 mb-6")}>
                    <MapPin className={cn("text-accent", compact ? "w-5 h-5" : "w-8 h-8")} />
                </div>

                <h3 className={cn("font-serif font-medium text-foreground", compact ? "text-sm mb-1" : "text-xl mb-3")}>
                    Konumu Görüntüle
                </h3>

                {!compact && (
                    <p className="text-muted-foreground max-w-md mb-8">
                        Ofisimizin konumunu haritada görmek için lütfen konum izni veriniz.
                    </p>
                )}

                <Button onClick={requestPermission} loading={loading} size={compact ? "sm" : "lg"} className={cn(compact ? "min-w-[120px] h-8 text-xs" : "min-w-[200px]")}>
                    <Lock className={cn("mr-2", compact ? "w-3 h-3" : "w-4 h-4")} />
                    Konum İznini Aç
                </Button>
            </div>
        </div>
    );
}
