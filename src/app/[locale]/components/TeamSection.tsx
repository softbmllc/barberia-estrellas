// src/app/[locale]/components/TeamSection.tsx
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

type Props = {
  locale: "es" | "en";
  ids?: string[]; // optional: show a subset of barbers
};

// Lazy import in case TeamGrid is a client component
const TeamGrid = dynamic(() => import("./TeamGrid"), { ssr: true, loading: () => null });

export default function TeamSection({ locale, ids }: Props) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);
  const teamUrl = `/${locale}/equipo?utm_source=site&utm_medium=landing&utm_campaign=about&utm_content=cta-team`;
  const bookingUrl = `https://book.squareup.com/appointments/b2flo8v91kroen/location/L9A40NYC216EP/services?buttonTextColor=ffffff&color=000000&locale=${locale}&referrer=so&utm_source=site&utm_medium=team&utm_campaign=booking&utm_content=team-cta`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100" aria-labelledby="team-title">
      <div>
        <h2 id="team-title" className="text-2xl md:text-[26px] font-semibold tracking-tight leading-none">
          {t("Equipo", "Team")}
        </h2>
        <p className="mt-2 text-neutral-300 md:text-[15px] leading-8 max-w-[54ch]">
          {t("Fades, barbas y estilo editorial. Conocé al equipo.", "Fades, beards, editorial style. Meet the team.")}
        </p>

        {/* Descriptive bullets (no duplicación con hero/footer) */}
        <ul className="mt-4 grid gap-y-2.5 md:gap-x-8 text-neutral-300 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{t("Fade y diseño de barba de precisión", "Precision fades and beard design")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{t("Hot towel & cuidado de piel", "Hot towel & skin care")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{t("Look editorial para cámara y eventos", "Editorial look for camera and events")}</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{t("Atención personalizada y seguimiento", "Personalized attention and follow‑up")}</span>
          </li>
        </ul>

        {/* CTAs juntos, sin separación excesiva */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-black shadow-sm hover:bg-white/90 hover:shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 min-w-[12ch]"
            aria-label={t("Reservar turno", "Book an appointment")}
            aria-describedby="team-book-note"
          >
            {t("Reservar", "Book now")}
          </a>
          <Link
            href={teamUrl}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-[15px] font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 min-w-[12ch]"
            aria-label={t("Ver equipo completo", "See full team")}
          >
            {t("Ver equipo completo", "See full team")}
          </Link>
        </div>
        <span id="team-book-note" className="sr-only">
          {t("Se abre en una pestaña nueva (Square).", "Opens in a new tab (Square).")}
        </span>
        <p className="mt-2 text-sm text-neutral-400">
          {t("Equipo elegido por jugadores del Inter Miami y la Selección Uruguay.", "Chosen by Inter Miami players and Uruguay National Team.")}{" "}
          <Link href={`/${locale}/prensa`} className="underline underline-offset-6 hover:decoration-white">
            {t("Ver prensa →", "See press →")}
          </Link>
        </p>

        {/* Editorial image banner */}
        <figure className="mt-10 mx-auto max-w-5xl relative overflow-hidden rounded-2xl border border-white/10 shadow-sm">
          <div className="relative aspect-[21/9] max-h-[520px]">
            <img
              src="/images/team-editorial.jpg"
              alt={t("Equipo en la barbería", "Team at the barbershop")}
              className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-2 text-sm text-neutral-300">
            {t("Nuestro equipo en Wynwood", "Our team in Wynwood")}
          </figcaption>
        </figure>
      </div>
      {/* Optional preview grid if ids provided */}
      {ids && ids.length > 0 ? (
        <div className="mt-8">
          <TeamGrid ids={ids} />
        </div>
      ) : null}
      <div className="mt-8 h-px w-full bg-white/5" />
    </section>
  );
}