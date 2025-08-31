// src/app/[locale]/page.tsx

'use client';

import {usePathname} from 'next/navigation';
import HeroSection from "./components/HeroSection";
import Link from 'next/link';
import AmenitiesStrip from "./components/AmenitiesStrip";

export default function HomePage() {
  const pathname = usePathname();
  const locale = (pathname?.split('/')[1] || 'es') as 'es' | 'en';
  const isES = locale === 'es';

  return (
    <main>
      <HeroSection />

      {/* Amenities & Social block */}
      <AmenitiesStrip locale={locale} />

      {/* Founder block with YouTube embed */}
      <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100">
        <h2 className="text-xl font-semibold tracking-tight scroll-mt-20">{isES ? 'Fundador' : 'Founder'}</h2>
        <p className="mt-1 text-neutral-300 leading-7 max-w-[70ch] md:text-[15px]">
          {isES
            ? 'Nico Jaffe — fundador de Barbería de las Estrellas. Comenzó en Uruguay atendiendo en su hogar; en Miami trabajó en barberías y llegó a dormir en el local. A fuerza de trabajo se convirtió en barbero de streamers e influencers y de figuras como Lionel Messi, Luis Suárez y la Selección de Uruguay. Abrió su primer local en Wynwood y hoy lidera una barbería tres veces más grande, con pool, studio de contenido y servicio premium.'
            : 'Nico Jaffe — founder of Barbería de las Estrellas. He started in Uruguay cutting at home; in Miami he worked in barbershops and even slept at the shop. Through hard work he became the barber for streamers and influencers and for stars such as Lionel Messi, Luis Suárez and the Uruguay National Team. He opened his first shop in Wynwood and now runs a barbershop three times bigger, with a pool, content studio and premium service.'}
        </p>
        <p className="mt-2 text-neutral-300 leading-7 max-w-[70ch] md:text-[15px]">
          {isES
            ? 'Junto a él, un equipo de barberos de primer nivel que brilla por su trabajo y su nombre, con enfoque en atención personalizada y desarrollo profesional.'
            : 'Alongside him, a first‑class team of barbers who shine for their craft and their own name, focused on personalized attention and professional growth.'}
        </p>
        <p className="mt-2 text-sm">
          {isES ? (
            <>
              <span className="font-medium text-neutral-300">Clientes destacados: </span>
              <span className="text-neutral-400">Inter Miami (plantel completo), Selección de Uruguay, Lionel Messi, Luis Suárez, Sergio Busquets, Jordi Alba, Bizarrap, Tiago PZK, Coscu, Kun Agüero, Trueno, entre otros. </span>
              <Link href={`/${locale}/prensa`} className="underline hover:no-underline">{isES ? 'Clientes destacados' : 'Featured clients'}</Link>.
            </>
          ) : (
            <>
              <span className="font-medium text-neutral-300">Notable clients: </span>
              <span className="text-neutral-400">Inter Miami (full squad), Uruguay National Team, Lionel Messi, Luis Suárez, Sergio Busquets, Jordi Alba, Bizarrap, Tiago PZK, Coscu, Kun Agüero, Trueno, and more. </span>
              <Link href={`/${locale}/prensa`} className="underline hover:no-underline">{isES ? 'Clientes destacados' : 'Featured clients'}</Link>.
            </>
          )}
        </p>
        <div className="mt-3 flex flex-wrap gap-3 gap-y-2">
          <a
            href="https://instagram.com/nicojaffe?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=instagram"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10 gap-2"
            aria-label={isES ? 'Seguir a Nico Jaffe en Instagram' : 'Follow Nico Jaffe on Instagram'}
          >
            Instagram · @nicojaffe <span aria-hidden>↗</span>
            <span className="sr-only">{isES ? 'Se abre en una pestaña nueva' : 'Opens in a new tab'}</span>
          </a>
          <Link
            href={`/${locale}/equipo?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=cta-staff`}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
          >
            {isES ? 'Ver equipo' : 'See staff'}
          </Link>
        </div>
        <div className="mt-7 relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
          <div className="relative aspect-[16/9]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/4fUMLJkI1cI?rel=0&modestbranding=1&playsinline=1`}
              title={isES ? 'Mudanza a la nueva barbería' : 'Moving to the new barbershop'}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        {/* Person Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nico Jaffe',
              jobTitle: isES ? 'Fundador' : 'Founder',
              affiliation: { '@type': 'Organization', name: 'Barbería de las Estrellas' },
              brand: { '@type': 'Brand', name: 'Barbería de las Estrellas' },
              url: '/',
              knowsAbout: ['barbering', 'content studio', 'premium service'],
              sameAs: [
                'https://www.instagram.com/nicojaffe',
                'https://www.youtube.com/watch?v=4fUMLJkI1cI'
              ]
            })
          }}
        />
      </section>

      {/* Staff preview block */}
      <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100">
        <h2 className="text-xl font-semibold">{isES ? 'Equipo' : 'Staff'}</h2>
        <p className="mt-2 text-neutral-400">
          {isES
            ? 'Atención personalizada, contenido de social media y calidad premium.'
            : 'Personalized attention, social media content and premium quality.'}
        </p>
        <div className="mt-4">
          <Link
            href={`/${locale}/equipo`}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10"
          >
            {isES ? 'Ver equipo' : 'See staff'}
          </Link>
        </div>
      </section>
    </main>
  );
}
