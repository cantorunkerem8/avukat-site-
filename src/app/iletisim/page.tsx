import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { siteContent } from '@/content/site';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
    title: siteContent.seo.pages['/iletisim']?.title,
    description: siteContent.seo.pages['/iletisim']?.description,
};

export default function ContactPage() {
    return (
        <>
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'İletişim' }]} />
                    <div className="mt-8 max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-6">
                            İletişim
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Sorularınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-serif font-medium text-foreground mb-6">
                                        Mesaj Gönder
                                    </h2>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <Card>
                                <CardContent>
                                    <h3 className="text-lg font-serif font-medium text-foreground mb-4">
                                        İletişim Bilgileri
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-foreground">Adres</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {siteContent.office.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-foreground">Telefon</p>
                                                <a
                                                    href={`tel:${siteContent.office.phone}`}
                                                    className="text-sm text-muted-foreground hover:text-accent"
                                                >
                                                    {siteContent.office.phone}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-foreground">E-posta</p>
                                                <a
                                                    href={`mailto:${siteContent.office.email}`}
                                                    className="text-sm text-muted-foreground hover:text-accent"
                                                >
                                                    {siteContent.office.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                                                Çalışma Saatleri
                                            </h3>
                                            <div className="space-y-1 text-sm text-muted-foreground">
                                                <p>
                                                    <span className="font-medium">Hafta içi:</span>{' '}
                                                    {siteContent.office.workingHours.weekdays}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Cumartesi:</span>{' '}
                                                    {siteContent.office.workingHours.saturday}
                                                </p>
                                                <p>
                                                    <span className="font-medium">Pazar:</span>{' '}
                                                    {siteContent.office.workingHours.sunday}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-serif font-medium text-foreground mb-6">
                        Konum
                    </h2>
                    <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
                        {siteContent.office.mapEmbedUrl ? (
                            <iframe
                                src={siteContent.office.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ofis Konumu"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                <p className="text-muted-foreground">Harita yüklenemedi</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
