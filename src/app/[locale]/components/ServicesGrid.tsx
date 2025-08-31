// src/app/[locale]/components/ServicesGrid.tsx

import Link from "next/link";

type Locale = "es" | "en";

type AmenityKey = "parking" | "espresso" | "pool" | "globe";
type HighlightKey = "cuts" | "beard" | "color" | "designs" | "eyebrows" | "kids";

type Highlight = {
  key: HighlightKey;
  title_es: string;
  title_en: string;
  desc_es: string;
  desc_en: string;
  include_es?: string;
  include_en?: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    key: "cuts",
    title_es: "Cortes & Fades",
    title_en: "Cuts & Fades",
    desc_es: "Clásicos y modernos con acabado de precisión.",
    desc_en: "Classic and modern with a precise finish.",
    include_es: "Incluye: línea de precisión",
    include_en: "Includes: precision line-up",
  },
  {
    key: "beard",
    title_es: "Barba & Afeitado",
    title_en: "Beard & Shave",
    desc_es: "Perfilado con navaja, toalla caliente y aftercare.",
    desc_en: "Straight-razor shaping, hot towel and aftercare.",
    include_es: "Incluye: toalla caliente",
    include_en: "Includes: hot towel",
  },
  {
    key: "color",
    title_es: "Color & Highlights",
    title_en: "Color & Highlights",
    desc_es: "Global, mechas y retoques con consulta personalizada.",
    desc_en: "Global color, highlights and touch‑ups with a consult.",
    include_es: "Incluye: consulta personalizada",
    include_en: "Includes: personalized consult",
  },
  {
    key: "designs",
    title_es: "Designs",
    title_en: "Designs",
    desc_es: "Líneas artísticas y gráficos a medida.",
    desc_en: "Artistic lines and custom graphics.",
    include_es: "Incluye: diseño previo breve",
    include_en: "Includes: quick pre-design",
  },
  {
    key: "eyebrows",
    title_es: "Cejas",
    title_en: "Eyebrows",
    desc_es: "Limpieza y definición de cejas.",
    desc_en: "Eyebrow clean‑up and definition.",
    include_es: "Incluye: cera o navaja (a elección)",
    include_en: "Includes: wax or straight razor (per preference)",
  },
  {
    key: "kids",
    title_es: "Kids",
    title_en: "Kids",
    desc_es: "Cortes para niños con foco en comodidad.",
    desc_en: "Kid‑friendly cuts with extra care.",
    include_es: "Incluye: comodidad extra",
    include_en: "Includes: extra comfort",
  },
];

// Minimal monochrome icons
function Icon({ name }: { name: "parking" | "espresso" | "pool" | "globe" }) {
  const common = "h-4 w-4 stroke-current text-neutral-300";
  switch (name) {
    case "parking":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <rect x="2" y="2" width="12" height="12" rx="2" strokeWidth="1.75" />
          <path d="M6 11V5h3a2 2 0 1 1 0 4H6z" strokeWidth="1.75" />
        </svg>
      );
    case "espresso":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M3 5h7v5a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2V5Z" strokeWidth="1.75" />
          <path d="M10 6h2a2 2 0 1 1 0 4h-2" strokeWidth="1.75" />
        </svg>
      );
    case "pool":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <circle cx="8" cy="9" r="4" strokeWidth="1.75" />
          <circle cx="8" cy="9" r="1.5" strokeWidth="1.75" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <circle cx="8" cy="8" r="6" strokeWidth="1.75" />
          <path d="M2 8h12M8 2c2.2 2 2.2 10 0 12M8 2c-2.2 2-2.2 10 0 12" strokeWidth="1.6" />
        </svg>
      );
  }
}

function ServiceIcon({ name }: { name: HighlightKey }) {
  const common = "h-4 w-4 stroke-current text-neutral-300 translate-y-[1px]";
  switch (name) {
    case "cuts":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M3 4l4 4M3 12l4-4" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="10.5" cy="5.5" r="1.5" strokeWidth="1.6" />
          <circle cx="10.5" cy="10.5" r="1.5" strokeWidth="1.6" />
        </svg>
      );
    case "beard":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M3 7h7l3-3" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 9h5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "color":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M8 3.5c-2.5 0-4.5 2-4.5 4.5S5.5 12.5 8 12.5c1.9 0 2.5-.9 2.5-1.7 0-.6-.4-1-1-1H9a1.5 1.5 0 0 1 0-3c.7 0 1.3.3 1.8.8.4.4.7.9.7 1.5" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12.5 4.5c0 .8-.7 1.5-1.5 1.5S9.5 5.3 9.5 4.5 10.2 3 11 3s1.5.7 1.5 1.5Z" strokeWidth="1.6" />
        </svg>
      );
    case "designs":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M3 13l5-2 5-5-3-3-5 5-2 5z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10 3l3 3" strokeWidth="1.6" />
        </svg>
      );
    case "eyebrows":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M3 7c1.6-1 3.4-1.5 5-1.5S11.4 6 13 7" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "kids":
      return (
        <svg viewBox="0 0 16 16" fill="none" className={common}>
          <path d="M8 3l1.2 2.5L12 6l-2 1.5.7 2.5L8 8.8 5.3 10l.7-2.5L4 6l2.8-.5L8 3z" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ServicesGrid({
  locale = "es",
  withHeader = true,
}: { locale?: Locale; withHeader?: boolean }) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);

  const amenities: { key: AmenityKey; label: string }[] = [
    { key: "parking", label: t("Estacionamiento gratuito", "Free parking") },
    { key: "espresso", label: t("Espresso bar", "Espresso bar") },
    { key: "pool", label: t("Pool", "Pool table") },
    { key: "globe", label: t("Español & English", "Spanish & English") },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: HIGHLIGHTS.map((h, idx) => ({
      "@type": "Service",
      name: t(h.title_es, h.title_en),
      description: t(h.desc_es, h.desc_en),
      position: idx + 1,
      areaServed: "Miami, FL",
      provider: { "@type": "Organization", name: "Barbería de las Estrellas" },
    })),
  };

  return (
    <section id="servicios" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 text-neutral-100">
      {withHeader && (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("Servicios", "Services")}
          </h2>
          <p className="mt-2 text-neutral-300">
            {t(
              "Cortes, barba, color y más en Wynwood. Elegí un servicio y reservá con tu barbero.",
              "Cuts, beard, color and more in Wynwood. Choose a service and book with your barber."
            )}
          </p>
        </>
      )}

      {/* Highlights (preview de servicios) */}
      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
        {HIGHLIGHTS.map((h) => {
          const isSecondary = ['designs','eyebrows','kids'].includes(h.key);
          return (
            <Link
              key={h.key}
              href={`/${locale}/reservar`}
              aria-label={t(`Reservar: ${h.title_es}`, `Book: ${h.title_en}`)}
              aria-describedby={`desc-${h.key}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-2xl"
            >
              <article
                role="group"
                className={`relative min-h-[172px] rounded-2xl border ${isSecondary ? 'border-white/8 bg-neutral-900/50 hover:bg-white/4 hover:ring-white/10' : 'border-white/20 bg-neutral-900/60 hover:bg-white/10 hover:ring-white/20'} p-5 transition-all duration-200 hover:-translate-y-0.5 hover:ring-1 active:opacity-80 active:translate-y-0`}
              >
                {!isSecondary && (
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_40%)]" />
                )}
                <div className="relative z-[1] flex items-center gap-2">
                  <ServiceIcon name={h.key} />
                  <h3 className="text-[18px] font-semibold tracking-tight">{t(h.title_es, h.title_en)}</h3>
                </div>
                <p id={`desc-${h.key}`} className="relative z-[1] mt-1 text-sm text-neutral-300">{t(h.desc_es, h.desc_en)}</p>
                {h.include_es && (
                  <p className="relative z-[1] mt-2 text-sm text-neutral-300">{t(h.include_es, h.include_en!)}</p>
                )}
                <span className="pointer-events-none absolute right-4 bottom-4 text-neutral-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Experiencia en el local / Amenities */}
      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
          {t("En el local", "In the shop")}
        </h3>
        <div className="mt-3 -mx-4 flex gap-3 overflow-x-auto px-4 sm:hidden snap-x snap-mandatory">
          {amenities.map((a) => (
            <div
              key={a.key}
              className="snap-start min-w-[220px] flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-neutral-900/60 p-3 text-center text-sm"
            >
              <Icon name={a.key} />
              <span>{a.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 hidden sm:grid grid-cols-4 gap-3">
          {amenities.map((a) => (
            <div
              key={a.key}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-neutral-900/60 p-3 text-center text-sm"
            >
              <Icon name={a.key} />
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${locale}/reservar`}
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-5 py-2.5 text-neutral-900 font-medium hover:bg-white hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 w-full sm:w-auto"
        >
          {t("Ver agenda y reservar", "See schedule & book")}
        </Link>
        <Link
          href={`/${locale}/equipo`}
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 w-full sm:w-auto"
        >
          {t("Conocer al equipo", "Meet the team")}
        </Link>
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}