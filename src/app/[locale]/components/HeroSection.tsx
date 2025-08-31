// src/app/[locale]/components/HeroSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] || "es") as "es" | "en";
  const isES = locale === "es";

  const badge = "Wynwood · Miami";
  const title = "Barbería de las Estrellas"; // marca: se mantiene igual en EN
  const subtitle = isES
    ? "Cortes de alto nivel en Wynwood. Ritual clásico, precisión moderna."
    : "High-end barbering in Wynwood. Classic ritual, modern precision.";
  const perkItems = isES
    ? ["Wynwood", "Estacionamiento gratuito", "5.0★ Reviews", "Español & English"]
    : ["Wynwood", "Free parking", "5.0★ Reviews", "Spanish & English"];

  return (
    <section className="relative isolate">
      {/* Contenedor fijo para evitar CLS */}
      <div className="relative h-[68vh] min-h-[520px] w-full overflow-hidden rounded-b-2xl">
        {/* Imagen de fondo */}
        <Image
          src="/images/hero-barberia.jpg" /* poné tu imagen en public/images */
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover object-[62%_50%] md:object-[70%_50%]"
        />
        {/* Overlay para legibilidad (un poco más liviano) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/0" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 60% at 80% 50%, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Texto + CTAs */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[720px]">
            <p className="text-xs font-medium tracking-widest text-neutral-300">{badge}</p>
            <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight drop-shadow">
              {title}
            </h1>
            <p className="mt-5 max-w-[52ch] text-neutral-200 leading-7">{subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/reservar`}
                aria-label={isES ? "Reservar turno" : "Book an appointment"}
                className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-5 py-2.5 text-neutral-900 font-medium hover:bg-white hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 w-full sm:w-auto"
              >
                {isES ? "Reservar" : "Book Now"}
              </Link>
              <Link
                href={`/${locale}#servicios`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 hover:border-white/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 w-full sm:w-auto"
              >
                {isES ? "Ver servicios" : "See services"}
              </Link>
            </div>

          </div>
        </div>
      </div>
      {/* Perks bar under hero */}
      <div className="relative z-10 -mt-6 w-full">
        <div className="w-full bg-white text-neutral-900 shadow-lg ring-1 ring-black/5">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-sm">
              {perkItems.map((label, idx) => (
                <span key={idx} className="inline-flex items-center font-medium">
                  {label}
                  {idx < perkItems.length - 1 && (
                    <span className="mx-6 hidden h-4 w-px bg-neutral-300 align-middle sm:inline-block" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}