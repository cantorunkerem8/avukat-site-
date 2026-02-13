'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteContent } from '@/content/site';
import { Button } from '@/components/ui';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Video bölümü ~40vh scroll'da kapanıyor (200vh container'ın %40'ı)
      setIsOverVideo(scrollY < window.innerHeight * 0.6);
    };
    handleScroll(); // İlk yüklemede kontrol et
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ana sayfa değilse video yok
    if (pathname !== '/') {
      setIsOverVideo(false);
    }
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isOverVideo && pathname === '/'
          ? 'bg-transparent'
          : isScrolled
            ? 'bg-background/70 backdrop-blur-md scroll-shadow scrolled'
            : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt={siteContent.office.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {siteContent.navigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-base font-medium rounded-lg transition-colors flex items-center gap-1',
                    pathname === item.href
                      ? 'text-accent'
                      : isOverVideo && pathname === '/'
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-foreground hover:text-accent hover:bg-muted'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card border border-border rounded-xl shadow-soft-lg p-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm rounded-lg transition-colors',
                              pathname === child.href
                                ? 'bg-muted text-accent'
                                : 'text-foreground hover:bg-muted'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className={cn(
              "hidden md:flex items-center gap-2 text-sm transition-colors duration-500",
              isOverVideo && pathname === '/' ? 'text-white/80' : 'text-muted-foreground'
            )}>
              <Phone className="w-4 h-4" />
              <span>{siteContent.office.phone}</span>
            </div>
            <Button href="/iletisim" size="sm" className="hidden sm:inline-flex">
              Randevu Al
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg",
                isOverVideo && pathname === '/' ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
              )}
              aria-label="Menü"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {siteContent.navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                      pathname === item.href
                        ? 'bg-muted text-accent'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2 text-sm rounded-lg transition-colors',
                            pathname === child.href
                              ? 'bg-muted text-accent'
                              : 'text-muted-foreground hover:bg-muted'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button href="/iletisim" className="w-full">
                  Randevu Al
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
