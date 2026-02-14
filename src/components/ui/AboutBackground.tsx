'use client';

import { motion } from 'framer-motion';

export function AboutBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background" />

            {/* 1. Gold/Accent Blob (Top Left) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: [-20, 20, -20],
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full mix-blend-multiply blur-[100px] opacity-20"
            />

            {/* 2. Secondary/Warm Blob (Bottom Right) */}
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [20, -20, 20],
                    y: [10, -10, 10],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-amber-600/10 rounded-full mix-blend-multiply blur-[120px] opacity-15"
            />

            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
