import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout';
import { ServicesGrid, CTA } from '@/components/sections';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: siteContent.seo.pages['/hizmetler']?.title,
  description: siteContent.seo.pages['/hizmetler']?.description,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Hizmetler' }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-lg text-muted-foreground">
              Geniş uzmanlık alanlarımızla müvekkillerimize kapsamlı hukuki destek sunuyoruz.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid showAll />
      <CTA />
    </>
  );
}
