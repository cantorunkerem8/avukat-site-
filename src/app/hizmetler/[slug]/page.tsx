import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout';
import { Button, Badge, Card, CardContent } from '@/components/ui';
import { CTA } from '@/components/sections';
import { siteContent } from '@/content/site';
import { ArrowRight, Scale, Heart, Briefcase, Users, Building, FileText } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scale: Scale,
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  building: Building,
  'file-text': FileText,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteContent.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteContent.services.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: 'Hizmet Bulunamadı' };
  }

  return {
    title: `${service.title} | Bozoğlan Avukatlık Bürosu`,
    description: service.shortDescription,
    keywords: service.keywords,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteContent.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = siteContent.services.filter((s) =>
    service.relatedServices.includes(s.id)
  );

  const relatedTeam = siteContent.team.filter((m) =>
    service.relatedTeamMembers.includes(m.id)
  );

  const Icon = iconMap[service.icon];

  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Hizmetler', href: '/hizmetler' },
              { label: service.title },
            ]}
          />
          <div className="mt-8 flex items-start gap-6">
            {Icon && (
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-accent" />
              </div>
            )}
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {service.keywords.map((keyword) => (
                  <Badge key={keyword} variant="outline">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {service.longDescription.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                    return (
                      <h2 key={index} className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(Boolean);
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12">
                <Button href="/iletisim" size="lg">
                  Randevu Al
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Related Team */}
              {relatedTeam.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-4">
                    İlgili Uzmanlar
                  </h3>
                  <div className="space-y-3">
                    {relatedTeam.map((member) => (
                      <Link key={member.id} href={`/ekibimiz/${member.slug}`}>
                        <Card hover>
                          <CardContent className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-full ${member.imagePlaceholder.bgColor} flex items-center justify-center`}
                            >
                              <span className="text-white font-serif font-bold">
                                {member.imagePlaceholder.initials}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {member.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {member.title}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-4">
                    İlgili Hizmetler
                  </h3>
                  <div className="space-y-2">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.id}
                        href={`/hizmetler/${related.slug}`}
                        className="block p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-foreground">
                          {related.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
