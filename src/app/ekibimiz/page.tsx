import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout';
import { TeamGrid, CTA } from '@/components/sections';
import { siteContent } from '@/content/site';

export const metadata: Metadata = {
  title: siteContent.seo.pages['/ekibimiz']?.title,
  description: siteContent.seo.pages['/ekibimiz']?.description,
};

export default function TeamPage() {
  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Ekibimiz' }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-6">
              Ekibimiz
            </h1>
            <p className="text-lg text-muted-foreground">
              Alanında uzman avukat kadromuz ile tanışın. Her biri kendi uzmanlık alanında deneyimli ve profesyonel.
            </p>
          </div>
        </div>
      </section>
      <TeamGrid showAll />
      <CTA />
    </>
  );
}
