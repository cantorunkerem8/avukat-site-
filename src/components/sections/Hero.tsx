'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Clock, Lock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { siteContent } from '@/content/site';
import { LegalBackground } from './LegalBackground';

const trustItems = [
    { icon: Clock, label: 'Hızlı Geri Dönüş' },
    { icon: Shield, label: 'Şeffaf Süreç' },
    { icon: Lock, label: 'Gizlilik' },
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Video section animations (0% - 40% scroll)
    const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
    const videoY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    // Content section animations - Shifted earlier for better mobile visibility
    const contentOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.05, 0.25], [80, 0]);

    // Badge flies in - CHANGED to Y to avoid mobile clipping
    const badgeY = useTransform(scrollYProgress, [0.05, 0.25], [30, 0]);
    // H1 flies in
    const h1Y = useTransform(scrollYProgress, [0.06, 0.26], [60, 0]);
    // Paragraph
    const pY = useTransform(scrollYProgress, [0.08, 0.28], [60, 0]);
    const pOpacity = useTransform(scrollYProgress, [0.08, 0.28], [0, 1]);
    // Buttons
    const btnY = useTransform(scrollYProgress, [0.10, 0.30], [60, 0]);
    const btnOpacity = useTransform(scrollYProgress, [0.10, 0.30], [0, 1]);
    // Trust bar
    const trustY = useTransform(scrollYProgress, [0.12, 0.32], [40, 0]);
    const trustOpacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[350vh] lg:h-[200vh]">
            {/* Sticky container — sayfayı kaydırırken viewport'ta kalır */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* ===== VIDEO SECTION ===== */}
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/images/244512_medium.mp4" type="video/mp4" />
                    </video>
                    {/* Hafif koyu overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Üst gradient — navbar yazıları okunabilsin */}
                    <div className="absolute inset-x-0 top-0 h-32" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)' }} />

                    {/* Aşağı kaydır göstergesi */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/90"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {/* Removed text as requested */}
                        <svg
                            viewBox="0 0 48 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current w-12 h-3 sm:w-16 sm:h-4"
                            style={{ display: 'block' }}
                        >
                            <path
                                d="M2 1L24 11L46 1"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>
                </motion.div>

                {/* ===== CONTENT SECTION (beyaz arka plan) ===== */}
                <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-br from-background via-muted/30 to-background flex items-start sm:items-center pt-32 sm:pt-0 overflow-hidden"
                    style={{ opacity: contentOpacity }}
                >
                    <LegalBackground />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                        <div className="max-w-3xl">
                            {/* Badge */}
                            <motion.div style={{ y: badgeY, opacity: contentOpacity }}>
                                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
                                    25+ Yıllık Deneyim
                                </span>
                            </motion.div>

                            {/* Başlık */}
                            <motion.h1
                                style={{ y: h1Y, opacity: contentOpacity }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-4 sm:mb-6"
                            >
                                Hukuki Sorunlarınıza{' '}
                                <span className="gradient-text">Güvenilir Çözümler</span>
                            </motion.h1>

                            {/* Alt yazı */}
                            <motion.p
                                style={{ y: pY, opacity: pOpacity }}
                                className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl"
                            >
                                {siteContent.office.description}
                            </motion.p>

                            {/* Butonlar */}
                            <motion.div
                                style={{ y: btnY, opacity: btnOpacity }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <Button href="/iletisim" size="lg" className="max-sm:px-5 max-sm:py-3 max-sm:text-sm max-sm:h-auto">
                                    Ücretsiz Ön Görüşme
                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                                <Button href="/hizmetler" variant="outline" size="lg" className="max-sm:px-5 max-sm:py-3 max-sm:text-sm max-sm:h-auto">
                                    Hizmetlerimiz
                                </Button>
                            </motion.div>

                            {/* Trust Bar */}
                            <motion.div
                                style={{ y: trustY, opacity: trustOpacity }}
                                className="flex flex-nowrap sm:flex-wrap gap-3 sm:gap-6 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                            >
                                {trustItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-muted-foreground flex-shrink-0"
                                    >
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-muted flex items-center justify-center">
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
