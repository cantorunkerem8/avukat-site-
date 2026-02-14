import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout';
import { CTA } from '@/components/sections';
import { siteContent } from '@/content/site';
import { Target, Eye, ShieldCheck, Briefcase, Search, Lightbulb, Lock } from 'lucide-react';
import { AboutBackground } from '@/components/ui';

// ... (metadata remains same)

export default function AboutPage() {
    const valueIcons: Record<string, { icon: any, color: string, animation: string }> = {
        'Güvenilirlik': { icon: ShieldCheck, color: 'text-emerald-500', animation: 'group-hover:animate-pulse' },
        'Profesyonellik': { icon: Briefcase, color: 'text-blue-500', animation: 'group-hover:-translate-y-1' },
        'Şeffaflık': { icon: Search, color: 'text-sky-500', animation: 'group-hover:rotate-12' },
        'Çözüm Odaklılık': { icon: Lightbulb, color: 'text-yellow-500', animation: 'group-hover:scale-110 group-hover:text-yellow-400' },
        'Gizlilik': { icon: Lock, color: 'text-rose-500', animation: 'group-hover:animate-wiggle' },
    };

    return (
        <>
            {/* ... (Hero section same) ... */}
            <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Hakkımızda' }]} />
                    <div className="mt-8 max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-6">
                            Hakkımızda
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {siteContent.office.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <Eye className="w-6 h-6 text-accent group-hover:animate-wink" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                                Vizyonumuz
                            </h2>
                            <p className="text-muted-foreground whitespace-pre-line">
                                {siteContent.vision}
                            </p>
                        </div>
                        <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <Target className="w-6 h-6 text-accent group-hover:spin-slow transition-transform duration-700" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                                Misyonumuz
                            </h2>
                            <p className="text-muted-foreground whitespace-pre-line">
                                {siteContent.mission}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 relative overflow-hidden">
                <AboutBackground />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-4">
                            Değerlerimiz
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {siteContent.values.map((value, index) => {
                            const IconData = valueIcons[value] || { icon: ShieldCheck, color: 'text-accent', animation: '' };
                            const Icon = IconData.icon;

                            return (
                                <div
                                    key={index}
                                    className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30"
                                >
                                    <div className={`w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors`}>
                                        <Icon className={`w-6 h-6 ${IconData.color} ${IconData.animation} transition-all duration-300`} />
                                    </div>
                                    <span className="font-medium text-foreground group-hover:text-accent transition-colors block">{value}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-6">
                            Tarihçemiz
                        </h2>
                        <div className="prose prose-lg mx-auto text-muted-foreground">
                            <p>
                                Bozoğlan Avukatlık Bürosu, 2023 yılında İstanbul'da kurulmuştur.
                                Kurulduğumuz günden bu yana müvekkillerimize en üst düzeyde
                                hukuki hizmet sunmayı ilke edinmiş, bu doğrultuda sürekli
                                gelişmeyi ve yenilenmeyi hedefliyoruz.
                            </p>
                            <p>
                                Bugün, alanında uzman avukatlardan oluşan kadromuzla ceza
                                hukuku, aile hukuku, ticaret hukuku, iş hukuku, gayrimenkul
                                hukuku, yabancılar hukuku ve icra iflas hukuku başta olmak üzere birçok alanda hizmet vermekteyiz.
                            </p>
                            <p>
                                Müvekkillerimizin haklarını korumak için titizlikle çalışıyor,
                                her dava ve danışmanlık sürecinde şeffaflık ve güvenilirlik
                                ilkelerinden ödün vermiyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
