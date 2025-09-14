// src/app/[locale]/components/FounderSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = { locale: "es" | "en" };

export default function FounderSection({ locale }: Props) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);

  const instagramUrl =
    "https://instagram.com/nicojaffe?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=instagram";
  const teamUrl = `/${locale}/equipo?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=cta-team`;

  // JSON-LD Person (non-blocking, minimal)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nico Jaffe",
    jobTitle: t("Fundador y Barbero", "Founder & Barber"),
    url: process.env.NEXT_PUBLIC_SITE_URL,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/founder.jpg`,
    sameAs: ["https://www.instagram.com/nicojaffe"],
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-6 text-neutral-100" aria-labelledby="founder-title">
      <div className="md:grid md:grid-cols-12 md:gap-8">
        {/* Text column */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/founder.jpg"
              alt={t("Foto de Nico Jaffe", "Nico Jaffe portrait")}
              width={80}
              height={80}
              className="h-20 w-20 rounded-full object-cover ring-1 ring-white/15"
              priority={false}
            />
            <h2 id="founder-title" className="text-3xl md:text-[34px] font-semibold tracking-tight leading-none">
              {t("Fundador", "Founder")}
            </h2>
          </div>
          <p className="max-w-[58ch] text-neutral-300 md:text-[15px] leading-7">
            {t(
              "Nico Jaffe — fundador de Barbería de las Estrellas. Comenzó en Uruguay atendiendo en su hogar; en Miami trabajó en barberías y llegó a dormir en el local. A fuerza de trabajo se convirtió en barbero de streamers, influencers y futbolistas de élite. Abrió su primer local en Wynwood y hoy lidera una barbería tres veces más grande, con pool, estudio de contenido y servicio premium.",
              "Nico Jaffe — founder of Barbería de las Estrellas. He started in Uruguay cutting hair at home. In Miami he worked at barbershops and even slept at the shop. Through hard work he became a barber for top creators and football players. He opened his first shop in Wynwood and today leads a shop three times bigger with a pool, content studio and premium service."
            )}
          </p>
          <p className="text-sm text-neutral-300">
            {t("+3× expansión · 5.0★ en Google", "+3× growth · 5.0★ on Google")}
          </p>
          <p className="max-w-[58ch] text-neutral-300 md:text-[15px] leading-7">
            {t(
              "Junto a él, un equipo de barberos de primer nivel que brilla por su trabajo y su nombre, con enfoque en atención personalizada y desarrollo profesional.",
              "Alongside him, a first-class team of barbers who shine for their craft and their own name, focused on personalized attention and professional growth."
            )}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={teamUrl}
              className="inline-flex items-center rounded-full bg-white/15 px-5 py-2.5 text-[15px] font-semibold hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 min-w-[12ch] justify-center"
              aria-label={t("Ver equipo", "See team")}
            >
              {t("Ver equipo", "See team")}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 px-5 py-2.5 text-[15px] font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 min-w-[12ch] justify-center"
              aria-label={t("Abrir Instagram de Nico Jaffe", "Open Nico Jaffe Instagram")}
            >
              Instagram · @nicojaffe
            </a>
          </div>
          <p className="pt-2 text-sm">
            {locale === "es" ? (
              <>
                <span className="font-medium text-neutral-300">Clientes destacados: </span>
                <span className="text-neutral-400">
                  Inter Miami (plantel completo), Selección de Uruguay, Lionel Messi, Luis Suárez, Sergio Busquets, Jordi Alba, Bizarrap, Tiago PZK, Coscu, Kun Agüero, Trueno, entre otros.{" "}
                </span>
                <span id="founder-clients-note" className="sr-only">
                  {t("Lista parcial; ver todos en Prensa.", "Partial list; see all in Press.")}
                </span>
                <Link
                  href={`/${locale}/prensa?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=featured-clients`}
                  className="block mt-1 underline underline-offset-6 decoration-white/50 hover:decoration-white"
                  aria-describedby="founder-clients-note"
                >
                  Ver clientes destacados →
                </Link>
              </>
            ) : (
              <>
                <span className="font-medium text-neutral-300">Notable clients: </span>
                <span className="text-neutral-400">
                  Inter Miami (full squad), Uruguay National Team, Lionel Messi, Luis Suárez, Sergio Busquets, Jordi Alba, Bizarrap, Tiago PZK, Coscu, Kun Agüero, Trueno, and more.{" "}
                </span>
                <span id="founder-clients-note" className="sr-only">
                  {t("Lista parcial; ver todos en Prensa.", "Partial list; see all in Press.")}
                </span>
                <Link
                  href={`/${locale}/prensa?utm_source=site&utm_medium=founder&utm_campaign=about&utm_content=featured-clients`}
                  className="block mt-1 underline underline-offset-6 decoration-white/50 hover:decoration-white"
                  aria-describedby="founder-clients-note"
                >
                  See featured clients →
                </Link>
              </>
            )}
          </p>
        </div>
        {/* Video column */}
        <div className="mt-6 md:mt-0 md:col-span-5">
          <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(255,255,255,.08)] shadow-sm transition-transform duration-200 hover:scale-[1.01]">
            <button
              id="founder-video-btn"
              type="button"
              className="group relative block w-full"
              aria-label={t("Reproducir video del fundador", "Play founder video")}
              aria-controls="founder-video"
              aria-expanded="false"
            >
              <div className="relative aspect-[16/9]" id="founder-video">
                <img
                  src="https://i.ytimg.com/vi/4fUMLJkI1cI/hqdefault.jpg"
                  alt={t("Miniatura del video de YouTube", "YouTube video thumbnail")}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity duration-200 group-hover:opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:scale-105">
                    ▶
                  </span>
                </div>
                <span className="sr-only">{t("Click para reproducir", "Click to play")}</span>
              </div>
            </button>
            <figcaption className="px-4 pb-3 pt-2 text-sm text-neutral-300">
              {t("Armando la nueva barbería · VLOG", "Building the new barbershop · VLOG")}
            </figcaption>
          </figure>
        </div>
      </div>

      <script
        id="founder-video-loader"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var btn = document.getElementById('founder-video-btn');
              if(!btn) return;
              btn.addEventListener('click', function(){
                var wrapper = btn.closest('figure');
                if(!wrapper) return;
                var div = document.createElement('div');
                div.className = 'relative aspect-[16/9]';
                div.id = 'founder-video';
                div.innerHTML = '<iframe class="absolute inset-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/4fUMLJkI1cI?rel=0&modestbranding=1&playsinline=1&autoplay=1" title="${locale === "es" ? "Mudanza a la nueva barbería" : "Moving to the new barbershop"}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
                wrapper.replaceChild(div, btn);
                btn.setAttribute('aria-expanded','true');
              }, { once: true });
            })();
          `,
        }}
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </section>
  );
}
