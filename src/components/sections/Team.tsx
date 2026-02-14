'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '@/content/site';
import type { TeamMember } from '@/types';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface TeamGridProps {
    team?: TeamMember[];
    showAll?: boolean;
}

// Kart boyutları ve Grid ayarları
const CARD_WIDTH = 260; // 4 tane sığsın diye biraz kıstım
const CARD_HEIGHT = 380;
const GAP = 20;

function getGridPos(index: number, cols: number) {
    const col = index % cols;
    const row = Math.floor(index / cols);
    return {
        left: col * (CARD_WIDTH + GAP),
        top: row * (CARD_HEIGHT + GAP),
    };
}

// ... (keep imports)

// ... (keep helper functions like getGridPos, but update slightly if needed, or just use as is)

export function TeamGrid({ team, showAll = false }: TeamGridProps) {
    const pathname = usePathname();
    const displayTeam = team || siteContent.team;
    // Duplicate for infinite scroll
    const visibleTeam = [...displayTeam, ...displayTeam, ...displayTeam];
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const COLS = visibleTeam.length;
    // Calculate total layout width based on extended team
    const totalWidth = COLS * CARD_WIDTH + (COLS - 1) * GAP;

    // Center calculation still mostly works for initial layout, but "spread" positions are absolute
    const CENTER_X = ((Math.min(COLS, 4) - 1) * (CARD_WIDTH + GAP)) / 2;
    const CENTER_Y = 0;

    const [isMobile, setIsMobile] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-scroll and Scaling Effect Loop
    useEffect(() => {
        if (isMobile) return;

        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;
        const speed = 0.5; // Pixels per frame
        // Width of one original set of items
        const singleSetWidth = (displayTeam.length * (CARD_WIDTH + GAP));

        const loop = () => {
            if (!isPaused) {
                // simple scroll right
                container.scrollLeft += speed;
            }

            // Infinite Scroll Reset
            // If we have scrolled past the first set, seamlessly jump back
            if (container.scrollLeft >= singleSetWidth) {
                container.scrollLeft -= singleSetWidth;
            } else if (container.scrollLeft <= 0) {
                // Should ideally not happen with += speed, but for robustness
                // container.scrollLeft += singleSetWidth; 
                // (Only needed if scrolling left)
            }

            // Scaling Effect - REMOVED for hover effect
            // We just let CSS handle hover scaling

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isMobile, isPaused, displayTeam.length]); // Add deps

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -(CARD_WIDTH + GAP), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: (CARD_WIDTH + GAP), behavior: 'smooth' });
        }
    };

    // ... [JSX Structure] ...
    // Update JSX to:
    // 1. Pass onMouseEnter/Leave to set isPaused
    // 2. Add 'team-card-inner' class to a new wrapper inside Link or around Link content

    // Returning modified JSX logic here in the tool call is tricky if replacing entire file content.
    // I will replace the main functional component.

    return (
        <section className="py-20 relative overflow-hidden">
            {/* ... (Backgrounds same) ... */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/arka plan.png')" }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
                    {/* ... (Headings same) ... */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4"
                    >
                        Profesyonel Ekibimiz
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 max-w-2xl mx-auto"
                    >
                        Alanında uzman avukatlarımız ile tanışın.
                    </motion.p>
                </div>

                {isMobile ? (
                    pathname === '/ekibimiz' ? (
                        // Vertical Stack for /ekibimiz page (No Carousel)
                        <div className="flex flex-col gap-6 w-full max-w-md">
                            {displayTeam.map((member) => (
                                <Link key={member.id} href={`/ekibimiz/${member.slug}`} className="block w-full">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-lg flex flex-col items-center">
                                        <div className={`w-20 h-20 rounded-full ${member.imagePlaceholder.bgColor} flex items-center justify-center mb-4 ring-2 ring-white/20`}>
                                            <span className="text-white font-serif font-bold text-xl">{member.imagePlaceholder.initials}</span>
                                        </div>
                                        <h3 className="text-lg font-serif font-medium text-white mb-1">{member.name}</h3>
                                        <p className="text-accent text-sm mb-3">{member.title}</p>
                                        <p className="text-white/60 text-sm mb-4 line-clamp-3">{member.shortBio}</p>
                                        <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                                            {member.specialties.slice(0, 2).map((specialty) => (
                                                <span key={specialty} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/70 bg-white/5">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <>
                            {/* Mobile View - Horizontal Swipeable Carousel */}
                            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-8 scrollbar-hide px-4 -mx-4">
                                {displayTeam.map((member) => (
                                    <div key={member.id} className="snap-center shrink-0 w-[85vw] max-w-sm">
                                        <Link href={`/ekibimiz/${member.slug}`} className="block w-full h-full">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-lg flex flex-col items-center h-full">
                                                <div
                                                    className={`w-20 h-20 rounded-full ${member.imagePlaceholder.bgColor} flex items-center justify-center mb-4 ring-2 ring-white/20`}
                                                >
                                                    <span className="text-white font-serif font-bold text-xl">{member.imagePlaceholder.initials}</span>
                                                </div>
                                                <h3 className="text-lg font-serif font-medium text-white mb-1">{member.name}</h3>
                                                <p className="text-accent text-sm mb-3">{member.title}</p>
                                                <p className="text-white/60 text-sm mb-4 line-clamp-3">{member.shortBio}</p>
                                                <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                                                    {member.specialties.slice(0, 2).map((specialty) => (
                                                        <span key={specialty} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/70 bg-white/5">
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile 'See All' Button */}
                            <div className="mt-6 flex justify-center">
                                <Button href="/ekibimiz" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    Tüm Ekibi Gör
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </>
                    )
                ) : (
                    <div
                        className="relative w-full flex items-center justify-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Buttons (keep them but they control scroll offset) */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hidden lg:flex absolute left-8 z-30 rounded-full h-12 w-12 p-0 border border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 hover:text-accent transition-all"
                            onClick={scrollLeft}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-hidden py-20 px-4 -mx-4 scrollbar-hide" // overflow-x-hidden to hide scrollbar, manual scroll via ref
                            style={{
                                width: '100%',
                                display: 'flex',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <motion.div
                                className="relative flex-shrink-0"
                                style={{ width: totalWidth, height: CARD_HEIGHT }}
                                initial="stacked"
                                whileInView="spread"
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                {visibleTeam.map((member, index) => {
                                    const pos = getGridPos(index, visibleTeam.length);
                                    // Make center calculation relative to the row
                                    // Actually, just spreading them in a line is simpler for infinite scroll
                                    // Let's rely on pos.left

                                    const toCenter_X = CENTER_X - pos.left;
                                    const toCenter_Y = CENTER_Y - pos.top;
                                    // Slightly random rotate for stack effect
                                    const stackRotate = (index % 5 - 2.5) * 5;

                                    return (
                                        <motion.div
                                            key={`${member.id}-${index}`}
                                            className="absolute top-0 left-0 group hover:z-50"
                                            style={{
                                                width: CARD_WIDTH,
                                                height: CARD_HEIGHT,
                                                zIndex: 10, // Base z-index
                                            }}
                                            variants={{
                                                stacked: {
                                                    x: pos.left + toCenter_X,
                                                    y: pos.top + toCenter_Y,
                                                    rotate: stackRotate,
                                                    opacity: 0,
                                                    scale: 0.5
                                                },
                                                spread: {
                                                    x: pos.left,
                                                    y: pos.top,
                                                    rotate: 0,
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: (index % displayTeam.length) * 0.1, // Stagger based on original index to avoid long wait
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <div className="team-card-inner w-full h-full transition-transform duration-300 ease-out origin-center group-hover:scale-110">
                                                <Link href={`/ekibimiz/${member.slug}`} className="block h-full">
                                                    <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center group cursor-pointer hover:bg-white/15 hover:border-white/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
                                                        {/* Avatar */}
                                                        <div
                                                            className={`w-20 h-20 rounded-full ${member.imagePlaceholder.bgColor} flex items-center justify-center mb-4 ring-2 ring-white/20 group-hover:ring-accent/50 group-hover:shadow-glow transition-all`}
                                                        >
                                                            <span className="text-white font-serif font-bold text-xl">
                                                                {member.imagePlaceholder.initials}
                                                            </span>
                                                        </div>

                                                        <h3 className="text-lg font-serif font-medium text-white mb-1 group-hover:text-accent transition-colors">
                                                            {member.name}
                                                        </h3>
                                                        <p className="text-accent text-sm mb-3">{member.title}</p>
                                                        <p className="text-white/60 text-sm mb-4 line-clamp-3 whitespace-normal">
                                                            {member.shortBio}
                                                        </p>

                                                        <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                                                            {member.specialties.slice(0, 2).map((specialty) => (
                                                                <span key={specialty} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/70 bg-white/5">
                                                                    {specialty}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hidden lg:flex absolute right-8 z-30 rounded-full h-12 w-12 p-0 border border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-white/10 hover:text-accent transition-all"
                            onClick={scrollRight}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
