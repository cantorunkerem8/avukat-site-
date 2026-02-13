'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site';
import type { TeamMember } from '@/types';

interface TeamGridProps {
    team?: TeamMember[];
    showAll?: boolean;
}

// Kart boyutları ve Grid ayarları
// Kart boyutları ve Grid ayarları
const CARD_WIDTH = 260; // 4 tane sığsın diye biraz kıstım
const CARD_HEIGHT = 380;
const GAP = 20;
const COLS = 4; // Yan yana tek sıra

function getGridPos(index: number) {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    return {
        left: col * (CARD_WIDTH + GAP),
        top: row * (CARD_HEIGHT + GAP),
    };
}

// 4x1 Grid merkez noktası
const CENTER_X = ((COLS - 1) * (CARD_WIDTH + GAP)) / 2;
const CENTER_Y = 0; // Tek satır olduğu için Y merkezi 0 (veya kart yüksekliğinin yarısı ama burada zaten top:0 başlıyoruz)

export function TeamGrid({ team, showAll = false }: TeamGridProps) {
    const displayTeam = team || siteContent.team;
    const visibleTeam = showAll ? displayTeam : displayTeam.slice(0, 4);

    const totalWidth = COLS * CARD_WIDTH + (COLS - 1) * GAP;
    const ROWS = Math.ceil(visibleTeam.length / COLS);
    const totalHeight = ROWS * CARD_HEIGHT + (ROWS - 1) * GAP;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Arka plan görseli */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/arka plan.png')" }}
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
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

                {/* Kartlar Alanı */}
                {isMobile ? (
                    <div className="flex flex-col gap-6 w-full max-w-md">
                        {visibleTeam.map((member) => (
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
                    <motion.div
                        className="relative"
                        style={{ width: totalWidth, height: totalHeight }}
                        initial="stacked"
                        whileInView="spread"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {visibleTeam.map((member, index) => {
                            const pos = getGridPos(index);
                            const total = visibleTeam.length;

                            // Merkeze çekme offseti
                            const toCenter_X = CENTER_X - pos.left;
                            const toCenter_Y = CENTER_Y - pos.top;

                            // Yığılmışken hafif dağınık dursun (deste gibi)
                            const stackRotate = (index - total / 2 + 0.5) * 5;

                            return (
                                <motion.div
                                    key={member.id}
                                    className="absolute top-0 left-0"
                                    style={{
                                        width: CARD_WIDTH,
                                        height: CARD_HEIGHT,
                                        zIndex: total - index, // Üsttekiler en son (ya da tam tersi) - Yığın sırası
                                    }}
                                    variants={{
                                        stacked: {
                                            x: pos.left + toCenter_X, // Mutlak pozisyondan merkeze
                                            y: pos.top + toCenter_Y,
                                            rotate: stackRotate,
                                            scale: 0.85 + index * 0.02,
                                            opacity: 0.8,
                                        },
                                        spread: {
                                            x: pos.left,
                                            y: pos.top,
                                            rotate: 0,
                                            scale: 1,
                                            opacity: 1,
                                        },
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
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
                                            <p className="text-white/60 text-sm mb-4 line-clamp-3">
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
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {!showAll && displayTeam.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/ekibimiz"
                            className="inline-flex items-center text-white font-medium hover:underline"
                        >
                            Tüm Ekibi Gör
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
