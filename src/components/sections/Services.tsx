'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Heart, Briefcase, Users, Building, FileText, ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site';
import type { Service } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scale: Scale,
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  building: Building,
  'file-text': FileText,
};

interface ServicesGridProps {
  services?: Service[];
  showAll?: boolean;
}

// 3 sütun, 2 satır grid pozisyonları
const CARD_WIDTH = 320;
const CARD_HEIGHT = 160;
const GAP = 20;
const COLS = 2;

function getGridPos(index: number) {
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  return {
    left: col * (CARD_WIDTH + GAP),
    top: row * (CARD_HEIGHT + GAP),
  };
}

// Grid merkez noktası
const CENTER_X = ((COLS - 1) * (CARD_WIDTH + GAP)) / 2;

export function ServicesGrid({ services, showAll = false }: ServicesGridProps) {
  const displayServices = services || siteContent.services;
  const visibleServices = showAll ? displayServices : displayServices.slice(0, 6);
  const totalWidth = COLS * CARD_WIDTH + (COLS - 1) * GAP;
  const ROWS = Math.ceil(visibleServices.length / COLS);
  const totalHeight = ROWS * CARD_HEIGHT + (ROWS - 1) * GAP;
  const CENTER_Y = ((ROWS - 1) * (CARD_HEIGHT + GAP)) / 2;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="pt-8 pb-24 relative overflow-hidden">
      {/* Arka plan görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hizmetler arka plan .png')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white mb-4">
            Hizmet Alanlarımız
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Geniş uzmanlık alanlarımızla müvekkillerimize kapsamlı hukuki destek sunuyoruz.
          </p>
        </motion.div>

        <div className="flex items-center justify-center">
          {isMobile ? (
            <div className="flex flex-col gap-4 w-full">
              {visibleServices.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <Link key={service.id} href={`/hizmetler/${service.slug}`} className="block w-full">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-white/20">
                        {Icon && <Icon className="w-5 h-5 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-serif font-medium text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-xs line-clamp-3 leading-relaxed mb-2">
                          {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center text-accent text-xs font-medium">
                          Detaylı Bilgi
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <motion.div
              className="relative flex-shrink-0"
              style={{ width: totalWidth, height: totalHeight }}
              initial="stacked"
              whileInView="spread"
              viewport={{ once: true, margin: '-80px' }}
            >
              {visibleServices.map((service, index) => {
                const Icon = iconMap[service.icon];
                const pos = getGridPos(index);
                const total = visibleServices.length;
                const toCenter_X = CENTER_X - pos.left;
                const toCenter_Y = CENTER_Y - pos.top;
                const stackRotate = (index - total / 2 + 0.5) * 4;

                return (
                  <motion.div
                    key={service.id}
                    className="absolute"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                      zIndex: total - index,
                    }}
                    variants={{
                      stacked: {
                        x: toCenter_X,
                        y: toCenter_Y,
                        rotate: stackRotate,
                        scale: 0.75 + index * 0.03,
                        opacity: 0.8,
                      },
                      spread: {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link href={`/hizmetler/${service.slug}`} className="block h-full">
                      <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:bg-white/15 hover:border-white/30 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/50 transition-colors mt-1 ring-1 ring-white/20">
                          {Icon && <Icon className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col h-full justify-between">
                          <div>
                            <h3 className="text-base font-serif font-medium text-white mb-1 group-hover:text-accent transition-colors truncate">
                              {service.title}
                            </h3>
                            <p className="text-white/70 text-xs line-clamp-4 leading-relaxed group-hover:text-white/90 transition-colors">
                              {service.shortDescription}
                            </p>
                          </div>
                          <span className="inline-flex items-center text-accent text-xs font-medium mt-2">
                            Detaylı Bilgi
                            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

        </div>

        {/* Tüm Hizmetleri Gör */}
        {!showAll && displayServices.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/hizmetler"
              className="inline-flex items-center text-white font-medium hover:underline"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        )}
      </div>
    </section >
  );
}
