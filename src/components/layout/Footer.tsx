import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram } from 'lucide-react';
import { siteContent } from '@/content/site';
import { PhoneLink } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-40 h-40">
                                <Image
                                    src="/images/logo.png"
                                    alt={siteContent.office.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-background/70 text-sm">
                            {siteContent.office.slogan}
                        </p>
                        <div className="flex gap-3">
                            {siteContent.socialLinks.map((link) => {
                                const Icon = iconMap[link.icon];
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
                                        aria-label={link.name}
                                    >
                                        {Icon && <Icon className="w-5 h-5" />}
                                    </a>
                                );
                            })}
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-medium text-lg mb-4">Hızlı Erişim</h3>
                        <ul className="space-y-2">
                            {siteContent.navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-background/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif font-medium text-lg mb-4">Hizmetler</h3>
                        <ul className="space-y-2">
                            {siteContent.services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/hizmetler/${service.slug}`}
                                        className="text-background/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-medium text-lg mb-4">İletişim</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-background/70">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>{siteContent.office.address}</span>
                            </li>
                            {siteContent.office.phone && (
                                <li className="flex items-center gap-3 text-sm text-background/70">
                                    <PhoneLink phone={siteContent.office.phone} iconClassName="w-5 h-5 text-accent" className="hover:text-accent transition-colors">
                                        {siteContent.office.phone}
                                    </PhoneLink>
                                </li>
                            )}
                            <li className="flex items-center gap-3 text-sm text-background/70">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href={`mailto:${siteContent.office.email}`} className="hover:text-accent transition-colors">
                                    {siteContent.office.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-background/70">
                                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div>
                                    <p>Hafta içi: {siteContent.office.workingHours.weekdays}</p>
                                    <p>Cumartesi: {siteContent.office.workingHours.saturday}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-background/50 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>© {currentYear} {siteContent.office.name}. Tüm hakları saklıdır.</span>
                        <Link href="/gizlilik" className="hover:text-accent transition-colors">
                            Gizlilik Politikası
                        </Link>
                        <Link href="/kvkk" className="hover:text-accent transition-colors">
                            KVKK
                        </Link>
                    </p>
                    <a 
                        href="https://aytacc.online/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 translate-x-1 translate-y-[2px] transition-opacity hover:opacity-80"
                    >
                        <Image
                            src="/images/beyaz logo.png"
                            alt="Aytacc"
                            width={62}
                            height={21}
                            className="object-contain"
                        />
                        <span className="text-xs text-background/50">
                            Bu site Aytacc<span style={{ color: '#ef4444' }}>™</span> tarafından yapılmıştır
                        </span>
                    </a>
                </div>
            </div >
        </footer >
    );
}
