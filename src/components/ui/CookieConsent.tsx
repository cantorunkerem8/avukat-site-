'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = localStorage.getItem('cookie_consent_v2');
        if (!hasAccepted) {
            // Show immediately or with a slight delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_v2', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl"
                >
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <h3 className="text-sm font-medium text-foreground mb-1">
                                Çerez Kullanımı
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-2xl">
                                Web sitemizde size en iyi deneyimi sunmak için çerezler (cookies) kullanıyoruz.
                                Siteye devam ederek çerez kullanımını kabul etmiş olursunuz.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Button onClick={handleAccept} size="sm">
                                Kabul Et
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
