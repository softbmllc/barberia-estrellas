// src/app/[locale]/layout.tsx
import '../globals.css';
import React, { Suspense } from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Geist, Geist_Mono} from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LangLink from "./components/LangLink";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export function generateStaticParams() {
  return [{locale: 'es'}, {locale: 'en'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string} | Promise<{locale: string}>;
}) {
  const resolved = await Promise.resolve(params as {locale: string});
  const locale = resolved.locale;
  const isES = locale === 'es';

  let messages: Record<string, string> | undefined;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}>
        <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <Image src="/logo2.png" alt="Barbería de las Estrellas" width={160} height={60} />
            </Link>
            <div className="hidden gap-6 md:flex text-sm text-neutral-300">
              <Link href={`/${locale}/servicios`} className="hover:text-white">{isES ? 'Servicios' : 'Services'}</Link>
              <Link href={`/${locale}/equipo`} className="hover:text-white">{isES ? 'Equipo' : 'Staff'}</Link>
              <Link href={`/${locale}/social-club`} className="hover:text-white">Social Club</Link>
              <Link href={`/${locale}/galeria`} className="hover:text-white">{isES ? 'Galería' : 'Gallery'}</Link>
              <Link href={`/${locale}/prensa`} className="hover:text-white">{isES ? 'Prensa' : 'Press'}</Link>
              <Link href={`/${locale}/ubicacion`} className="hover:text-white">{isES ? 'Ubicación' : 'Location'}</Link>
            </div>
            <Suspense fallback={null}><div className="flex items-center gap-3">
              <a href="https://www.instagram.com/barberiaestrellas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-300 hover:text-white">
                <FaInstagram size={18} />
              </a>
              <a href="https://wa.me/17868517794" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-neutral-300 hover:text-white">
                <FaWhatsapp size={18} />
              </a>
              <LangLink
                locale={locale as 'es' | 'en'}
                className="order-1 rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-900"
                ariaLabel={isES ? 'Cambiar idioma' : 'Change language'}
              >
                {isES ? 'EN' : 'ES'}
              </LangLink>
              {/* Mobile menu (right of language) */}
              <details className="order-2 md:hidden relative">
                <summary aria-label={isES ? 'Abrir menú' : 'Open menu'} className="list-none cursor-pointer rounded-lg border border-white/10 p-2 text-neutral-200 hover:bg-neutral-900/70">
                  <span className="sr-only">{isES ? 'Abrir menú' : 'Open menu'}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </summary>
                <div className="absolute right-0 top-11 w-56 rounded-xl border border-white/10 bg-neutral-900/95 p-2 shadow-xl backdrop-blur">
                  <nav className="flex flex-col text-sm text-neutral-200">
                    <Link href={`/${locale}/servicios`} className="rounded-lg px-3 py-2 hover:bg-white/10">{isES ? 'Servicios' : 'Services'}</Link>
                    <Link href={`/${locale}/equipo`} className="rounded-lg px-3 py-2 hover:bg-white/10">{isES ? 'Equipo' : 'Staff'}</Link>
                    <Link href={`/${locale}/social-club`} className="rounded-lg px-3 py-2 hover:bg-white/10">Social Club</Link>
                    <Link href={`/${locale}/galeria`} className="rounded-lg px-3 py-2 hover:bg-white/10">{isES ? 'Galería' : 'Gallery'}</Link>
                    <Link href={`/${locale}/prensa`} className="rounded-lg px-3 py-2 hover:bg-white/10">{isES ? 'Prensa' : 'Press'}</Link>
                    <Link href={`/${locale}/ubicacion`} className="rounded-lg px-3 py-2 hover:bg-white/10">{isES ? 'Ubicación' : 'Location'}</Link>
                    <Link href={`/${locale}/reservar`} className="mt-2 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white px-3 py-1.5 text-neutral-900 hover:opacity-90">{isES ? 'Reservar' : 'Book'}</Link>
                    <LangLink
                      locale={locale as 'es' | 'en'}
                      className="mt-1 rounded-lg px-3 py-2 hover:bg-white/10"
                      ariaLabel={isES ? 'Cambiar idioma' : 'Change language'}
                    >
                      {isES ? 'Cambiar a English' : 'Switch to Español'}
                    </LangLink>
                  </nav>
                </div>
              </details>
            </div></Suspense>
          </nav>
        </header>

        <main className="min-h-[70vh] bg-neutral-950">{children}</main>

        <footer className="border-t border-neutral-800 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Google Map */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <div className="relative h-[260px] md:h-[320px]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=164+NW+20th+St+Suite+204,+Miami,+FL+33127&output=embed`}
                    title={isES ? "Mapa — Barbería de las Estrellas" : "Map — Barbería de las Estrellas"}
                  />
                </div>
                <div className="border-t border-white/10 p-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=164+NW+20th+St+Suite+204,+Miami,+FL+33127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    {isES ? "Cómo llegar" : "Get directions"}
                  </a>
                </div>
              </div>
              {/* Reviews teaser */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                <h3 className="text-sm font-semibold">
                  {isES ? "Reseñas de Google" : "Google Reviews"}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {isES
                    ? "Pronto verás las reseñas aquí embebidas. Por ahora, podés verlas en Google Maps."
                    : "Embedded reviews coming soon. For now, view them on Google Maps."}
                </p>
                <p className="text-sm text-neutral-300">★★★★★ 5.0 · Google</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Barber%C3%ADa+de+las+Estrellas+164+NW+20th+St+Suite+204+Miami+FL+33127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                >
                  {isES ? "Ver reseñas en Google" : "See reviews on Google"}
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
            <div>
              <div className="font-semibold text-neutral-100">Barbería de las Estrellas</div>
              <p className="mt-2 text-sm text-neutral-400">{isES ? '164 NW 20th St, Suite 204, Miami, FL 33127' : '164 NW 20th St, Suite 204, Miami, FL 33127'}</p>
              <p className="mt-1 text-sm text-neutral-400">{isES ? 'Wynwood · Estacionamiento gratuito' : 'Wynwood · Free parking'}</p>
              <p className="mt-1 text-[13.5px]"><a href="tel:+17868517794" className="text-neutral-300 hover:underline">(786) 851-7794</a></p>
            </div>
            <div className="text-sm text-neutral-300 text-[13.5px]">
              <div className="font-semibold tracking-tight text-neutral-200 text-sm">Secciones</div>
              <ul className="mt-2 space-y-1">
                <li><Link href={`/${locale}/servicios`} className="hover:underline">Servicios</Link></li>
                <li><Link href={`/${locale}/equipo`} className="hover:underline">Equipo</Link></li>
                <li><Link href={`/${locale}/reservar`} className="hover:underline">Reservar</Link></li>
              </ul>
            </div>
            <div className="text-sm text-neutral-300 text-[13.5px]">
              <div className="font-semibold tracking-tight text-neutral-200 text-sm">Contacto</div>
              <ul className="mt-2 space-y-1">
                <li><a href="https://www.instagram.com/barberiaestrellas/" target="_blank" rel="noopener noreferrer" className="hover:underline">{isES ? 'Instagram' : 'Instagram'}</a></li>
                <li><a href="https://wa.me/17868517794" target="_blank" rel="noopener noreferrer" className="hover:underline">{isES ? 'WhatsApp' : 'WhatsApp'}</a></li>
                <li><Link href={`/${locale}/ubicacion`} className="hover:underline">Ubicación &amp; Parking</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Barbería de las Estrellas · Made with 🖥️ by{' '}
            <a
              href="https://www.devrodri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-300 transition-colors hover:text-white"
            >
              Rodrigo Opalo
            </a>
          </div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}