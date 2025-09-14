// src/app/[locale]/components/AmenitiesStrip.tsx
import Image from "next/image";
import Link from "next/link";

export default function AmenitiesStrip({ locale }: { locale: "es" | "en" }) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);
  const items = [
    {
      key: "espresso",
      title_es: "Espresso Bar",
      title_en: "Espresso Bar",
      image: "/images/amenities/espresso.jpg",
    },
    {
      key: "pool",
      title_es: "Mesa de Pool",
      title_en: "Pool Table",
      image: "/images/amenities/pool.jpg",
    },
    {
      key: "studio",
      title_es: "Estudio de Contenido",
      title_en: "Content Studio",
      image: "/images/amenities/studio.jpg",
    },
    {
      key: "premium",
      title_es: "Servicio Premium",
      title_en: "Premium Service",
      image: "/images/amenities/premium.jpg",
    },
    {
      key: "parking",
      title_es: "Estacionamiento Gratuito",
      title_en: "Free Parking",
      image: "/images/amenities/parking.jpg",
    },
    {
      key: "lang",
      title_es: "Español e Inglés",
      title_en: "English & Spanish",
      image: "/images/amenities/lang.jpg",
    },
  ];

  const objectPos: Record<string, string> = {
    espresso: "object-left",
    pool: "object-bottom",
    studio: "object-center",
    premium: "object-top",
    parking: "object-[50%_50%]",
    lang: "object-center",
  };

  const servicesUrl = `/${locale}/servicios?utm_source=site&utm_medium=amenities&utm_campaign=services&utm_content=cta`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t("En la barbería", "In the shop")}</h2>
      <p className="mt-2 text-neutral-300">
        {t(
          "Espresso bar, mesa de pool, estudio de contenido y servicio premium.",
          "Espresso bar, pool table, content studio and premium service."
        )}
      </p>

      <div className="mt-4 hidden md:flex justify-end">
        <Link
          href={servicesUrl}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
        >
          {t("Ver todos los servicios", "See all services")} <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-5 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <Link
            key={it.key}
            href={`/${locale}/servicios?utm_source=site&utm_medium=amenities&utm_campaign=services&utm_content=tile-${it.key}`}
            aria-label={t(`Ver servicios — ${it.title_es}`, `See services — ${it.title_en}`)}
            className={`group relative block overflow-hidden rounded-[18px] border border-white/10 hover:ring-1 hover:ring-white/20 hover:-translate-y-[1px] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 outline-offset-2`}
          >
            <span id={`amenity-${it.key}-desc`} className="sr-only">
              {t(`Ir a servicios: ${it.title_es}`, `Go to services: ${it.title_en}`)}
            </span>
            <div className="relative h-28 sm:h-32 md:h-36">
              {/* If the image doesn't exist yet, the gradient keeps it elegant */}
              <Image
                src={it.image}
                alt=""
                aria-hidden
                fill
                sizes="(min-width:1536px) 28vw, (min-width:1280px) 30vw, (min-width:1024px) 32vw, (min-width:640px) 48vw, 100vw"
                className={`object-cover ${objectPos[it.key] ?? "object-center"}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${it.key === "premium" ? "from-black/80 via-black/50 to-transparent" : "from-black/60 via-black/30 to-transparent"}`} />
              {/* drop-shadowed title container with more padding and hover button */}
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between px-6 py-5 md:px-6 md:py-6">
                <h3 className="text-[17px] md:text-[18px] font-semibold leading-tight drop-shadow-md">
                  {t(it.title_es, it.title_en)}
                </h3>
                <span className="mt-2 hidden text-sm font-medium opacity-0 translate-x-0 transition group-hover:opacity-90 group-hover:translate-x-[1px] group-focus-visible:opacity-100">
                  {t("Ver servicios →", "See services →")}
                </span>
              </div>
              {/* subtle vignette */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(60%_60%_at_15%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-end md:hidden">
        <Link
          href={servicesUrl}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
        >
          {t("Ver todos los servicios", "See all services")} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}