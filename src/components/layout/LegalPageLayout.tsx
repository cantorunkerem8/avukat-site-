'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for merging classes

interface Section {
    id: string;
    title: string;
}

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    sections: Section[];
    children: React.ReactNode;
}

export function LegalPageLayout({
    title,
    lastUpdated,
    sections,
    children,
}: LegalPageLayoutProps) {
    const [activeSection, setActiveSection] = useState<string>('');
    const contentRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ['start start', 'end end'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Simplified ScrollSpy effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                // The "explode/assemble" feel comes from children flying in
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const sidebarVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.2, // Delay sidebar slightly
            },
        },
    };


    return (
        <div className="min-h-screen bg-muted/10 relative">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation - Sticky */}
                    <motion.aside
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-3 lg:sticky lg:top-24 h-fit hidden lg:block"
                    >
                        <nav className="space-y-1 border-l-2 border-muted pl-4">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(section.id)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    }}
                                    className={cn(
                                        'block py-2 text-sm transition-all duration-300 relative group',
                                        activeSection === section.id
                                            ? 'text-primary font-medium translate-x-1'
                                            : 'text-muted-foreground hover:text-foreground hover:translate-x-1'
                                    )}
                                >
                                    {activeSection === section.id && (
                                        <motion.div
                                            layoutId="activeSectionIndicator"
                                            className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-md"
                                        />
                                    )}
                                    {section.title}
                                </a>
                            ))}
                        </nav>

                        {/* Last Updated Badge in Sidebar */}
                        <div className="mt-8 pt-8 border-t border-muted/50">
                            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                                <ClockIcon className="w-3 h-3" />
                                Son Güncelleme
                            </div>
                            <div className="mt-1 text-sm font-semibold text-foreground">
                                {lastUpdated}
                            </div>
                        </div>
                    </motion.aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9" ref={contentRef}>

                        {/* Header Area */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 border-b border-muted/50 pb-8"
                        >
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <span className="p-2 bg-primary/10 rounded-lg">
                                    <FileText className="w-6 h-6" />
                                </span>
                                <span className="font-semibold tracking-wide uppercase text-sm">Yasal Bilgilendirme</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-4 leading-tight">
                                {title}
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                Lütfen bu metni dikkatlice okuyunuz. Son güncelleme: <span className="text-foreground font-medium">{lastUpdated}</span>
                            </p>
                        </motion.div>

                        {/* Mobile Navigation Dropdown (Optional but good for UX) */}
                        <div className="lg:hidden mb-8 p-4 bg-muted/30 rounded-lg border border-muted/50">
                            <span className="text-sm font-medium text-muted-foreground block mb-2">İçindekiler</span>
                            <select
                                className="w-full bg-background border border-input rounded-md p-2 text-sm"
                                onChange={(e) => {
                                    const id = e.target.value;
                                    if (id) {
                                        document.getElementById(id)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    }
                                }}
                                value={activeSection}
                            >
                                <option value="">Bölüme Git...</option>
                                {sections.map(s => (
                                    <option key={s.id} value={s.id}>{s.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* Content Sections with "Assemble" Animation */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-8"
                        >
                            {children}
                        </motion.div>

                    </main>
                </div>
            </div>
        </div>
    );
}

// Simple icons
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
