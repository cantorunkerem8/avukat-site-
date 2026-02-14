import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout';
import { Badge, Card, CardContent, Button, CopyButton } from '@/components/ui';
import { CTA } from '@/components/sections';
import { siteContent } from '@/content/site';
import { ArrowRight, GraduationCap, Languages, Award, Phone } from 'lucide-react';

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteContent.team.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = siteContent.team.find((m) => m.slug === slug);

  if (!member) {
    return { title: 'Ekip Üyesi Bulunamadı' };
  }

  return {
    title: `${member.name} | Bozoğlan Avukatlık Bürosu`,
    description: member.shortBio,
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = siteContent.team.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Ekibimiz', href: '/ekibimiz' },
              { label: member.name },
            ]}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6 mb-8">
                <div
                  className={`w-24 h-24 rounded-full ${member.imagePlaceholder.bgColor} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-serif font-bold text-3xl">
                    {member.imagePlaceholder.initials}
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-2">
                    {member.name}
                  </h1>
                  <p className="text-accent text-lg mb-3">{member.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="accent">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {member.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/iletisim" size="lg">
                  Randevu Al
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education */}
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <h3 className="font-serif font-medium text-foreground">
                      Eğitim
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {member.education.map((edu, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="w-5 h-5 text-accent" />
                    <h3 className="font-serif font-medium text-foreground">
                      Diller
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bar Info */}
              {member.barInfo && (
                <Card>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-accent" />
                      <h3 className="font-serif font-medium text-foreground">
                        Baro Bilgisi
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {member.barInfo}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Contact Info */}
              {member.phone && (
                <Card>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="w-5 h-5 text-accent" />
                      <h3 className="font-serif font-medium text-foreground">
                        İletişim
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {member.phone}
                      </a>
                      <CopyButton textToCopy={member.phone} />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
