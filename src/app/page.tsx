import { Hero, ServicesGrid, TeamGrid, CTA } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <div className="-mt-20">
        <Hero />
      </div>
      <ServicesGrid />
      <TeamGrid />
      <CTA />
    </>
  );
}
