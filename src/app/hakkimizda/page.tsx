import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout';
import { CTA } from '@/components/sections';
import { siteContent } from '@/content/site';
import { Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: siteContent.seo.pages['/hakkimizda']?.title,
    description: siteContent.seo.pages['/hakkimizda']?.description,
};

export default function AboutPage() {
    return (
        <>
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
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                                Vizyonumuz
                            </h2>
                            <p className="text-muted-foreground whitespace-pre-line">
                                {siteContent.vision}
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-accent" />
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
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-4">
                            Değerlerimiz
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {siteContent.values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-2xl p-6 text-center"
                            >
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-5 h-5 text-accent" />
                                </div>
                                <span className="font-medium text-foreground">{value}</span>
                            </div>
                        ))}
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
