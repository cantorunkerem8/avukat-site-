'use client';

import { motion } from 'framer-motion';
import { LegalPageLayout } from '@/components/layout/LegalPageLayout';
import { Shield, Lock, Eye, FileCheck, Users, Server, Globe, HelpCircle, FileText } from 'lucide-react';

// Data for sections
const sections = [
    { id: 'veri-sorumlusu', title: 'Veri Sorumlusu', icon: Shield },
    { id: 'isleme-amaci', title: 'İşleme Amacı', icon: FileCheck },
    { id: 'islenen-veriler', title: 'İşlenen Veriler', icon: Eye },
    { id: 'aktarim', title: 'Veri Aktarımı', icon: Globe },
    { id: 'toplama-yontemi', title: 'Toplama Yöntemi', icon: Server },
    { id: 'haklar', title: 'Haklarınız', icon: Lock },
    { id: 'iletisim', title: 'İletişim', icon: HelpCircle },
];

export function KVKKContent() {

    // Card animation variant reused from layout parent staggering
    // But we can add specific hover effects here
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
            title="KVKK Aydınlatma Metni"
            lastUpdated="Ocak 2026"
            sections={sections}
        >
            {/* 1. Veri Sorumlusu */}
            <motion.section
                id="veri-sorumlusu"
                variants={cardVariants}
                whileHover="hover"
                className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Shield className="w-16 h-16 md:w-24 md:h-24" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-medium mb-4 flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><Shield className="w-5 h-5" /></span>
                        Veri Sorumlusu
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
                        kişisel verileriniz; veri sorumlusu olarak <strong className="text-foreground">Bozoğlan Avukatlık Bürosu</strong> tarafından
                        aşağıda açıklanan kapsamda işlenebilecektir. Hukuki süreçlerimizin şeffaflığı ve güvenilirliği bizim için esastır.
                    </p>
                </div>
            </motion.section>

            {/* 2. İşleme Amacı */}
            <motion.section
                id="isleme-amaci"
                variants={cardVariants}
                whileHover="hover"
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <FileCheck className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-medium mb-4 flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><FileCheck className="w-5 h-5" /></span>
                        Kişisel Verilerin İşlenme Amacı
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Kişisel verileriniz, aşağıdaki amaçlarla KVKK'nın 5. ve 6. maddelerinde belirtilen şartlar dahilinde işlenmektedir:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                        {[
                            "Hukuki danışmanlık ve dava takip hizmetlerinin sunulması",
                            "İletişim taleplerinizin karşılanması",
                            "Yasal yükümlülüklerin yerine getirilmesi",
                            "Hizmet kalitesinin artırılması ve raporlama",
                            "Randevu süreçlerinin yönetilmesi"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* 3. İşlenen Veriler - Grid Layout inside card */}
            <motion.section
                id="islenen-veriler"
                variants={cardVariants}
                whileHover="hover"
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Eye className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-medium mb-6 flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-lg text-primary"><Eye className="w-5 h-5" /></span>
                        İşlenen Kişisel Veriler
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Kimlik Bilgileri", desc: "Ad, soyad, T.C. kimlik numarası", icon: Users },
                            { title: "İletişim Bilgileri", desc: "Adres, telefon, e-posta adresi", icon: Globe },
                            { title: "Hukuki İşlem", desc: "Dava dosyası, yazışmalar, belgeler", icon: FileText },
                            { title: "İşlem Güvenliği", desc: "IP adresi, log kayıtları", icon: Lock },
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-muted/30 border border-muted hover:border-primary/30 transition-colors">
                                <item.icon className="w-5 h-5 text-primary mb-2" />
                                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 4. Aktarım ve 5. Toplama (Combined Row for variation) */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.section
                    id="aktarim"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" /> Veri Aktarımı
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Kişisel verileriniz, yasal zorunluluklar ve hizmetin gerektirdiği ölçüde yetkili kamu kurumlarına (mahkemeler, icra daireleri vb.) aktarılabilmektedir. Üçüncü taraflarla paylaşılan veriler, mevzuat çerçevesinde korunur.
                    </p>
                </motion.section>

                <motion.section
                    id="toplama-yontemi"
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm relative overflow-hidden group"
                >
                    <h2 className="text-xl font-serif font-medium mb-4 flex items-center gap-2">
                        <Server className="w-5 h-5 text-primary" /> Toplama Yöntemi
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Verileriniz; web sitemizdeki iletişim formu, e-posta yazışmaları, telefon görüşmeleri ve yüz yüze toplantılar aracılığıyla, otomatik veya kısmen otomatik yöntemlerle toplanmaktadır.
                    </p>
                </motion.section>
            </div>

            {/* 6. Haklar */}
            <motion.section
                id="haklar"
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-8 shadow-sm relative overflow-hidden"
            >
                <h2 className="text-2xl font-serif font-medium mb-6 flex items-center gap-3">
                    <span className="p-2 bg-primary/10 rounded-lg text-primary"><Lock className="w-5 h-5" /></span>
                    Kişisel Veri Sahibinin Hakları
                </h2>
                <p className="mb-6 text-muted-foreground">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <div className="grid gap-3">
                    {[
                        "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                        "İşlenmişse buna ilişkin bilgi talep etme",
                        "İşlenme amacını ve uygun kullanılıp kullanılmadığını öğrenme",
                        "Yurt içi veya yurt dışında aktarıldığı üçüncü kişileri bilme",
                        "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
                        "Kanuna aykırı işlenmesi sebebiyle zararın giderilmesini talep etme"
                    ].map((right, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                                {idx + 1}
                            </div>
                            <span className="text-sm text-foreground/80">{right}</span>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* 7. İletişim */}
            <motion.section
                id="iletisim"
                variants={cardVariants}
                whileHover="hover"
                className="bg-primary text-primary-foreground rounded-2xl p-10 text-center relative overflow-hidden"
            >
                {/* Abstract pattern background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-medium mb-4">Bizimle İletişime Geçin</h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                        KVKK kapsamındaki haklarınızı kullanmak veya aydınlatma metnimiz hakkında detaylı bilgi almak için bize ulaşabilirsiniz.
                    </p>
                    <a
                        href="mailto:kvkk@bozoglanavukatlik.com"
                        className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
                    >
                        <HelpCircle className="w-5 h-5" />
                        kvkk@bozoglanavukatlik.com
                    </a>
                </div>
            </motion.section>

        </LegalPageLayout>
    );
}
