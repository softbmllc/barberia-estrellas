// src/app/[locale]/components/AmenitiesStrip.tsx
import Image from "next/image";
import Link from "next/link";

export default function AmenitiesStrip({ locale }: { locale: "es" | "en" }) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);
  const items = [
    {
      key: "espresso",
      title_es: "Espresso bar",
      title_en: "Espresso bar",
      image: "/images/amenities/espresso.jpg",
    },
    {
      key: "pool",
      title_es: "Pool",
      title_en: "Pool table",
      image: "/images/amenities/pool.jpg",
    },
    {
      key: "studio",
      title_es: "Studio de contenido",
      title_en: "Content studio",
      image: "/images/amenities/studio.jpg",
    },
    {
      key: "premium",
      title_es: "Atención premium",
      title_en: "Premium service",
      image: "/images/amenities/premium.jpg",
    },
    {
      key: "parking",
      title_es: "Estacionamiento gratuito",
      title_en: "Free parking",
      image: "/images/amenities/parking.jpg",
    },
    {
      key: "lang",
      title_es: "Español e inglés",
      title_en: "English & Spanish",
      image: "/images/amenities/lang.jpg",
    },
  ];

  const servicesUrl = `/${locale}/servicios?utm_source=site&utm_medium=amenities&utm_campaign=services&utm_content=cta`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100">
      <h2 className="text-xl font-semibold">{t("En la barbería", "In the shop")}</h2>
      <p className="mt-2 text-neutral-300">
        {t(
          "Espresso bar, pool, contenido y atención premium.",
          "Espresso bar, pool table, content studio and premium service."
        )}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <Link
            key={it.key}
            href={`/${locale}/servicios?utm_source=site&utm_medium=amenities&utm_campaign=services&utm_content=tile-${it.key}`}
            aria-label={t(`Ver servicios — ${it.title_es}`, `See services — ${it.title_en}`)}
            className={`group relative block overflow-hidden rounded-2xl border border-white/10 hover:ring-1 ${idx < 3 ? 'hover:ring-white/20' : 'hover:ring-white/10'}`}
          >
            <div className="relative h-28 sm:h-32 md:h-36">
              {/* If the image doesn't exist yet, the gradient keeps it elegant */}
              <Image
                src={it.image}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${it.key === 'lang' ? 'from-black/80 via-black/40' : 'from-black/65 via-black/35'} to-transparent`} />
              {/* subtle vignette */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(60%_60%_at_15%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
              <div className="absolute inset-y-0 left-0 flex items-center p-4">
                <h3 className="text-base md:text-[17px] tracking-tight font-medium">{t(it.title_es, it.title_en)}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={servicesUrl}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-1 rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10"
        >
          {t("Ver servicios completos", "See full services")} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}