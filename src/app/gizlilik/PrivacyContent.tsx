'use client';

import { motion } from 'framer-motion';
import { LegalPageLayout } from '@/components/layout/LegalPageLayout';
import { Database, Lock, Share2, Cookie, Mail, ShieldCheck, FileSearch } from 'lucide-react';

// Data for sections
const sections = [
    { id: 'giris', title: 'Giriş', icon: ShieldCheck },
    { id: 'toplanan-bilgiler', title: 'Toplanan Bilgiler', icon: Database },
    { id: 'kullanim', title: 'Kullanım Amacı', icon: FileSearch },
    { id: 'guvenlik', title: 'Bilgi Güvenliği', icon: Lock },
    { id: 'ucuncu-taraflar', title: 'Üçüncü Taraflar', icon: Share2 },
    { id: 'cerezler', title: 'Çerez Politikası', icon: Cookie },
    { id: 'iletisim', title: 'İletişim', icon: Mail },
];

export function PrivacyContent() {

    const cardVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        },
        hover: {
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.2 }
        }
    };

    return (
        <LegalPageLayout
            title="Gizlilik Politikası"
            lastUpdated="Ocak 2026"
            sections={sections}
        >
            {/* 1. Giriş */}
            <motion.section
                id="giris"
                variants={cardVariants}
                whileHover="hover"
                className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <ShieldCheck className="w-16 h-16 md:w-24 md:h-24" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-medium mb-4 flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><ShieldCheck className="w-5 h-5" /></span>
                        Giriş
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Bozoğlan Avukatlık Bürosu olarak, kişisel verilerinizin güvenliği ve gizliliği konusundaki hassasiyetinizin bilincindeyiz.
                        Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                        Güveniniz bizim için her şeyden önemlidir.
                    </p>
                </div>
            </motion.section>

            {/* 2. Toplanan Bilgiler */}
            <motion.section
                id="toplanan-bilgiler"
                variants={cardVariants}
                whileHover="hover"
                className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Database className="w-16 h-16 md:w-24 md:h-24" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-medium mb-6 flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><Database className="w-5 h-5" /></span>
                        Toplanan Bilgiler
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                            <h3 className="font-medium text-foreground mb-2">Doğrudan Verilen Bilgiler</h3>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• İsim ve İletişim Bilgileri</li>
                                <li>• E-posta adresi</li>
                                <li>• Telefon numarası</li>
                                <li>• Gönderilen mesaj içeriği</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                            <h3 className="font-medium text-foreground mb-2">Otomatik Toplanan Veriler</h3>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• IP Adresi</li>
                                <li>• Tarayıcı tipi ve sürümü</li>
                                <li>• Ziyaret edilen sayfalar</li>
                                <li>• Erişim süreleri</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 3. Kullanım Amacı ve 4. Güvenlik */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.section
                    id="kullanim"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <FileSearch className="w-5 h-5 text-primary" /> Bilgilerin Kullanımı
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Hukuki hizmet sunumu ve danışmanlık",
                            "İletişim taleplerinin yanıtlanması",
                            "Web sitesi performansının iyileştirilmesi",
                            "Yasal yükümlülüklerin yerine getirilmesi"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.section>

                <motion.section
                    id="guvenlik"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-primary" /> Bilgi Güvenliği
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Kişisel verilerinizin güvenliği için endüstri standardı şifreleme (SSL) ve güvenlik duvarları kullanıyoruz. Verileriniz, yetkisiz erişim, değiştirilme veya silinmeye karşı titizlikle korunmaktadır.
                    </p>
                </motion.section>
            </div>

            {/* 5. Üçüncü Taraflar ve 6. Çerezler */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.section
                    id="ucuncu-taraflar"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <Share2 className="w-5 h-5 text-primary" /> Üçüncü Taraflar
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. Web sitemizde bulunan harici bağlantıların gizlilik politikaları kendilerine aittir.
                    </p>
                </motion.section>

                <motion.section
                    id="cerezler"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <Cookie className="w-5 h-5 text-primary" /> Çerezler
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman yönetebilir veya engelleyebilirsiniz.
                    </p>
                </motion.section>
            </div>


            {/* 7. İletişim */}
            <motion.section
                id="iletisim"
                variants={cardVariants}
                whileHover="hover"
                className="bg-primary text-primary-foreground rounded-2xl p-10 text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-medium mb-4">Sorularınız mı Var?</h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        Gizlilik politikamız hakkında daha fazla bilgi almak için bizimle iletişime geçmekten çekinmeyin.
                    </p>
                    <a
                        href="mailto:info@bozoglanavukatlik.com"
                        className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
                    >
                        <Mail className="w-5 h-5" />
                        info@bozoglanavukatlik.com
                    </a>
                </div>
            </motion.section>

        </LegalPageLayout>
    );
}
