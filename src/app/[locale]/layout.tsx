// src/app/[locale]/layout.tsx
import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Geist, Geist_Mono} from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

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
              <Link href={`/${locale}/servicios`} className="hover:text-white">Servicios</Link>
              <Link href={`/${locale}/equipo`} className="hover:text-white">Equipo</Link>
              <Link href={`/${locale}/social-club`} className="hover:text-white">Social Club</Link>
              <Link href={`/${locale}/galeria`} className="hover:text-white">Galería</Link>
              <Link href={`/${locale}/prensa`} className="hover:text-white">Prensa</Link>
              <Link href={`/${locale}/ubicacion`} className="hover:text-white">Ubicación</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/${locale}/reservar`} className="inline-flex items-center rounded-lg border border-white/10 bg-white text-neutral-900 px-3 py-1.5 text-sm hover:opacity-90">Reservar</Link>
              <Link href={locale === 'es' ? '/en' : '/es'} className="rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300 hover:bg-neutral-900" aria-label="Cambiar idioma">
                {locale === 'es' ? 'EN' : 'ES'}
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-[70vh] bg-neutral-950">{children}</main>

        <footer className="border-t border-neutral-800 bg-neutral-950">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
            <div>
              <div className="font-semibold text-neutral-100">Barbería de las Estrellas</div>
              <p className="mt-2 text-sm text-neutral-400">Wynwood · Free Parking</p>
            </div>
            <div className="text-sm text-neutral-300">
              <div className="font-medium text-neutral-200">Secciones</div>
              <ul className="mt-2 space-y-1">
                <li><Link href={`/${locale}/servicios`} className="hover:underline">Servicios</Link></li>
                <li><Link href={`/${locale}/equipo`} className="hover:underline">Equipo</Link></li>
                <li><Link href={`/${locale}/reservar`} className="hover:underline">Reservar</Link></li>
              </ul>
            </div>
            <div className="text-sm text-neutral-300">
              <div className="font-medium text-neutral-200">Contacto</div>
              <ul className="mt-2 space-y-1">
                <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
                <li><Link href={`/${locale}/ubicacion`} className="hover:underline">Ubicación &amp; Parking</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Barbería de las Estrellas</div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}