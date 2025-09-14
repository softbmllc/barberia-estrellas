// src/app/[locale]/page.tsx

import HeroSection from "./components/HeroSection";
import Link from 'next/link';
import AmenitiesStrip from "./components/AmenitiesStrip";
import FounderSection from "./components/FounderSection";
import TeamSection from "./components/TeamSection";

export default function HomePage({ params }: { params: { locale: 'es' | 'en' } }) {
  const locale = (params?.locale ?? 'es') as 'es' | 'en';
  const isES = locale === 'es';

  return (
    <main>
      <HeroSection />

      {/* Amenities & Social block */}
      <AmenitiesStrip locale={locale} />

      <FounderSection locale={locale} />

      <TeamSection locale={locale} />
    </main>
  );
}
