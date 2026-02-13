'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Accordion } from '@/components/ui';
import { FAQBackground } from '@/components/ui/FAQBackground';
import { siteContent } from '@/content/site';
import { cn } from '@/lib/utils';

export function FAQPage() {
    const [activeCategory, setActiveCategory] = useState<string>('Tümü');
    const [searchQuery, setSearchQuery] = useState('');

    // Extract Categories
    const categories = useMemo(() => {
        const cats = ['Tümü', ...Array.from(new Set(siteContent.faqs.map((f) => f.category)))];
        return cats;
    }, []);

    // Filter Logic
    const filteredFAQs = useMemo(() => {
        let filtered = siteContent.faqs;

        // 1. Filter by Category
        if (activeCategory !== 'Tümü') {
            filtered = filtered.filter((f) => f.category === activeCategory);
        }

        // 2. Filter by Search
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (f) =>
                    f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    // Convert to Accordion Items
    const accordionItems = filteredFAQs.map((faq) => ({
        id: faq.id,
        title: faq.question,
        content: faq.answer,
    }));

    return (
        <div className="relative min-h-screen">
            <FAQBackground />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <HelpCircle className="w-4 h-4" />
                            Merak Ettikleriniz
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif font-medium text-foreground mb-6">
                            Sıkça Sorulan Sorular
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Hukuki süreçlerinizle ilgili aklınıza takılan tüm soruların cevaplarını burada bulabilirsiniz.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-11 pr-4 py-4 bg-background border border-input rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                                placeholder="Soru veya anahtar kelime arayın..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">

                    {/* Categories Scrollable Bar */}
                    <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar justify-start sm:justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                                    activeCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Results */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + searchQuery}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {accordionItems.length > 0 ? (
                                <div className="grid gap-6">
                                    {/* If "Tümü" is selected, we might want to group them, but the user asked for filtering. 
                                Let's just list them nicely with badges if "Tümü" is active */}

                                    {/* Custom Grid or List Layout */}
                                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-sm">
                                        <Accordion items={accordionItems} />
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                                    <h3 className="text-lg font-medium text-foreground">Sonuç Bulunamadı</h3>
                                    <p className="text-muted-foreground">Aradığınız kriterlere uygun soru bulunamadı.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>
            </section>
        </div>
    );
}
