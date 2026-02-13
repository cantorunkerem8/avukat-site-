'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface Diamond {
    id: number;
    row: number;
    col: number;
    size: number;
    opacity: number;
    delay: number;
}

function generateDiamonds(): Diamond[] {
    const diamonds: Diamond[] = [];
    const cols = 14;
    const rows = 7;
    let id = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Kenarlardan merkeze doğru hafif azalan opaklık
            const distFromCenter = Math.abs((col / cols) - 0.5) * 2; // 0=merkez, 1=kenar
            const baseOpacity = 0.6 + distFromCenter * 0.4;

            diamonds.push({
                id: id++,
                row,
                col,
                size: 80 + Math.floor((row * col) % 3) * 10,
                opacity: baseOpacity * 0.4,
                delay: (row + col) * 0.04,
            });
        }
    }

    return diamonds;
}

function DiamondShape({
    diamond,
    mouseX,
    mouseY,
}: {
    diamond: Diamond;
    mouseX: ReturnType<typeof useSpring>;
    mouseY: ReturnType<typeof useSpring>;
}) {
    const { row, col, size, opacity, delay } = diamond;

    // Stagger/offset for honeycomb-like layout
    const offsetX = row % 2 === 0 ? 0 : size * 0.55;
    const x = col * size * 1.1 + offsetX - size * 3;
    const y = row * size * 0.85 - size;

    // Parallax: elements closer to center move less
    const parallax = 0.3 + (col * 0.08);
    const moveX = useTransform(mouseX, (v) => v * parallax * 15);
    const moveY = useTransform(mouseY, (v) => v * parallax * 15);

    return (
        <motion.div
            className="absolute"
            style={{
                left: x,
                top: y,
                x: moveX,
                y: moveY,
                width: size,
                height: size,
            }}
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            animate={{ opacity, scale: 1, rotate: 45 }}
            transition={{
                duration: 0.8,
                delay,
                ease: 'easeOut',
            }}
        >
            <div
                className="w-full h-full rounded-lg"
                style={{
                    background: `linear-gradient(135deg, 
                        hsl(var(--accent) / ${opacity * 2}) 0%, 
                        hsl(var(--muted) / ${opacity * 3}) 50%, 
                        hsl(var(--background) / ${opacity * 1.5}) 100%
                    )`,
                    boxShadow: `
                        4px 4px 12px hsl(var(--foreground) / 0.04),
                        -2px -2px 8px hsl(var(--background) / 0.8),
                        inset 1px 1px 2px hsl(var(--background) / 0.5)
                    `,
                    border: `1px solid hsl(var(--border) / ${opacity * 4})`,
                }}
            />
        </motion.div>
    );
}

export function DiamondPattern() {
    const containerRef = useRef<HTMLDivElement>(null);
    const diamonds = generateDiamonds();

    const rawMouseX = useMotionValue(0);
    const rawMouseY = useMotionValue(0);

    const mouseX = useSpring(rawMouseX, { stiffness: 30, damping: 20 });
    const mouseY = useSpring(rawMouseY, { stiffness: 30, damping: 20 });

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
            {/* Kenarlar belirgin, orta kısım hafif soluk */}
            <div
                className="absolute inset-0"
                style={{
                    maskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 65%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 65%, black 100%)',
                }}
            >
                {diamonds.map((d) => (
                    <DiamondShape key={d.id} diamond={d} mouseX={mouseX} mouseY={mouseY} />
                ))}
            </div>
        </div>
    );
}
