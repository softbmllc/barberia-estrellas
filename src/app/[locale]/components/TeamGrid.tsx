// src/app/[locale]/components/TeamGrid.tsx

import Image from "next/image";
import Link from "next/link";
import { barbers } from "@/data/barbers";
import type { Barber } from "@/data/barbers";

export default function TeamGrid({ locale = "es", ids }: { locale?: "es" | "en"; ids?: string[] }) {
  const base = barbers as Barber[];
  const list = ids && ids.length
    ? base.filter((b) => (b.id && ids.includes(b.id)) || (b.slug && ids.includes(b.slug)))
    : base;
  return (
    <section id="equipo" className="mx-auto max-w-6xl px-4 py-16 text-neutral-100">
      <h2 className="text-2xl md:text-3xl font-semibold">
        {locale === "es" ? "Nuestro equipo" : "Our Team"}
      </h2>
      <p className="mt-2 text-neutral-400">
        {locale === "es"
          ? "Equipo profesional. Servicio premium. Elegí tu barbero."
          : "Professional team. Premium service. Choose your barber."}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {list.map((b) => (
          <div
            key={b.id ?? b.slug ?? b.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transform-gpu transition-transform duration-200 hover:-translate-y-0.5 hover:ring-1 hover:ring-white/15"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={b.photo}
                alt={b.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 400px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg font-semibold tracking-tight">{b.name}</h3>
              
              <p
                className="mt-3 text-sm text-neutral-400"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {locale === "es" ? b.bio_es ?? "" : b.bio_en ?? ""}
              </p>
              <div className="mt-4 flex items-center gap-3">
                {b.instagram && (
                  <a
                    href={b.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                )}
                {b.tiktok && (
                  <Link href={b.tiktok} target="_blank" className="text-sm hover:underline">
                    TikTok
                  </Link>
                )}
                {(b.squareUrl || b.bookUrl) && (
                  <a
                    href={(b.squareUrl || b.bookUrl)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center rounded-full bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:opacity-90"
                  >
                    {locale === "es" ? "Reservar" : "Book Now"}
                  </a>
                )}
              </div>
              {b.nationality && (
                <p className="mt-2 text-xs text-neutral-500">
                  {locale === "es" ? "Nacionalidad" : "Nationality"}: {b.nationality}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}