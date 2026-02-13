'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    rotation: number;
    parallaxFactor: number;
    type: 'scale' | 'gavel' | 'column' | 'paragraph' | 'shield' | 'book';
}

function ScaleIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <line x1="32" y1="8" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="52" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="12" y1="16" x2="8" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="16" x2="16" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 32 Q12 38 19 32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="52" y1="16" x2="48" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="52" y1="16" x2="56" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M45 28 Q52 34 59 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="24" y1="56" x2="40" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function GavelIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <rect x="16" y="10" width="20" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" transform="rotate(-45 26 15)" fill="none" />
            <line x1="30" y1="28" x2="48" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="14" y="48" width="36" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    );
}

function ColumnIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <rect x="10" y="6" width="44" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="10" y="52" width="44" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="18" y1="12" x2="18" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="12" x2="28" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="12" x2="38" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="12" x2="46" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function ParagraphIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <text x="32" y="48" textAnchor="middle" fontSize="44" fontFamily="serif" fill="none" stroke="currentColor" strokeWidth="1.5">§</text>
        </svg>
    );
}

function ShieldIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <path d="M32 6 L52 16 V36 Q52 52 32 58 Q12 52 12 36 V16 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M24 30 L30 36 L40 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function BookIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
            <path d="M12 8 H48 Q52 8 52 12 V52 Q52 56 48 56 H12 V8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="18" y1="8" x2="18" y2="56" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="26" x2="44" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="32" x2="36" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
    );
}

const ICON_MAP: Record<string, React.ComponentType<{ size: number }>> = {
    scale: ScaleIcon,
    gavel: GavelIcon,
    column: ColumnIcon,
    paragraph: ParagraphIcon,
    shield: ShieldIcon,
    book: BookIcon,
};

function generateElements(): FloatingElement[] {
    const types: FloatingElement['type'][] = ['scale', 'gavel', 'column', 'paragraph', 'shield', 'book'];
    const elements: FloatingElement[] = [];

    // Sol ve sağ tarafa eşit dağılmış pozisyonlar
    const positions = [
        // Sol taraf (12 ikon)
        { x: 3, y: 10 }, { x: 8, y: 35 }, { x: 5, y: 60 },
        { x: 12, y: 80 }, { x: 18, y: 15 }, { x: 15, y: 50 },
        { x: 10, y: 92 }, { x: 22, y: 70 },
        { x: 2, y: 25 }, { x: 20, y: 40 }, { x: 5, y: 85 }, { x: 15, y: 5 },
        // Sağ taraf (12 ikon)
        { x: 72, y: 8 }, { x: 88, y: 22 }, { x: 78, y: 50 },
        { x: 92, y: 65 }, { x: 82, y: 40 }, { x: 68, y: 75 },
        { x: 95, y: 12 }, { x: 85, y: 85 },
        { x: 90, y: 30 }, { x: 75, y: 15 }, { x: 95, y: 55 }, { x: 80, y: 90 },
    ];

    for (let i = 0; i < 24; i++) {
        elements.push({
            id: i,
            x: positions[i].x,
            y: positions[i].y,
            size: 44 + (i % 3) * 16,
            opacity: 0.22 + (i % 4) * 0.05,
            rotation: (i * 30) % 360 - 15,
            parallaxFactor: 0.3 + (i % 5) * 0.15,
            type: types[i % types.length],
        });
    }

    return elements;
}

function FloatingIcon({
    el,
    mouseX,
    mouseY,
}: {
    el: FloatingElement;
    mouseX: ReturnType<typeof useSpring>;
    mouseY: ReturnType<typeof useSpring>;
}) {
    const offsetX = useTransform(mouseX, (v) => v * el.parallaxFactor * 50);
    const offsetY = useTransform(mouseY, (v) => v * el.parallaxFactor * 50);

    const IconComponent = ICON_MAP[el.type];

    return (
        <motion.div
            className={`absolute text-accent ${el.id % 2 !== 0 ? 'hidden md:block' : ''}`}
            style={{
                left: `${el.x}%`,
                top: `${el.y}%`,
                x: offsetX,
                y: offsetY,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: el.opacity, scale: 1 }}
            transition={{ duration: 1.5, delay: el.id * 0.12, ease: 'easeOut' }}
        >
            <motion.div
                animate={{
                    rotate: [el.rotation, el.rotation + (el.id % 2 === 0 ? 8 : -8), el.rotation],
                    y: [0, -8 * el.parallaxFactor, 0],
                }}
                transition={{
                    duration: 6 + el.parallaxFactor * 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <IconComponent size={el.size} />
            </motion.div>
        </motion.div>
    );
}

export function LegalBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [elements] = useState<FloatingElement[]>(() => generateElements());

    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);

    const mouseX = useSpring(rawMouseX, { stiffness: 40, damping: 25 });
    const mouseY = useSpring(rawMouseY, { stiffness: 40, damping: 25 });

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            rawMouseX.set(x);
            rawMouseY.set(y);
        },
        [rawMouseX, rawMouseY]
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            {elements.map((el) => (
                <FloatingIcon key={el.id} el={el} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </div>
    );
}
