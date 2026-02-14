'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FAQBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background/50">
            {/* 
        3D MESH GRADIENT EFFECT
        Created by layering heavily blurred, moving blobs of color.
      */}

            {/* 1. Deep Blue/Primary Base Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [-50, 50, -50],
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 [will-change:transform,opacity]"
            />

            {/* 2. Accent/Gold Blob (Top Right) */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 90, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-amber-500/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 [will-change:transform,opacity]"
            />

            {/* 3. Secondary/Purple Blob (Bottom Left) */}
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [-20, 20, -20],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 [will-change:transform,opacity]"
            />

            {/* 4. Center Highlight Blob (Floating) */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[60px] opacity-20 [will-change:transform,opacity]"
            />

            {/* Overlay Mesh Grid Texture for "3D" feel */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle Noise for texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise" />
        </div>
    );
}
