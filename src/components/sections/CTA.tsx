'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui';
import { siteContent } from '@/content/site';

export function CTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-foreground to-foreground/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-serif font-medium text-background mb-4">
                        Hukuki Haklarınız İçin Geç Kalmayın
                    </h2>
                    <p className="text-background/70 max-w-2xl mx-auto mb-8">
                        Hukuki süreçler zaman ve strateji gerektirir. Hak kaybına uğramamak ve en doğru yol haritasını belirlemek için uzman kadromuzla iletişime geçin. İlk adımı bugün atın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/iletisim" size="lg" variant="primary">
                            Randevu Al
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            href={`tel:${siteContent.office.phone}`}
                            size="lg"
                            variant="outline"
                            className="border-background/30 text-background hover:bg-background hover:text-foreground"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Hemen Arayın
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
