// src/app/[locale]/servicios/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Params = { params: { locale: "es" | "en" } };

export async function generateMetadata({ params: { locale } }: Params): Promise<Metadata> {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.barberiadelasestrellas.com";
  const title = locale === "es" ? "Servicios — Barbería de las Estrellas" : "Services — Barbería de las Estrellas";
  const description =
    locale === "es"
      ? "Servicios de barbería en Wynwood: cortes, barba, color, diseños y más. Reservá online."
      : "Barbershop services in Wynwood: cuts, beard, color, designs and more. Book online.";

  return {
    metadataBase: new URL(site),
    title,
    description,
    alternates: {
      canonical: `/${locale}/servicios`,
      languages: {
        es: "/es/servicios",
        en: "/en/servicios",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/servicios`,
      siteName: "Barbería de las Estrellas",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/hero-barberia.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ServiciosPage({ params: { locale } }: Params) {
  const t = (es: string, en: string) => (locale === "es" ? es : en);
  const baseSquare = `https://book.squareup.com/appointments/b2flo8v91kroen/location/L9A40NYC216EP/services?buttonTextColor=ffffff&color=000000&locale=${locale === 'es' ? 'es' : 'en'}&referrer=so&utm_source=site&utm_medium=services&utm_campaign=booking`;
  const squareUrl = (content: string) => `${baseSquare}&utm_content=${content}`;

  // Minimal monochrome step icons
  function StepIcon({ name }: { name: "consult" | "ritual" | "result" }) {
    const cls = "h-4 w-4 stroke-current text-neutral-300";
    switch (name) {
      case "consult":
        return (
          <svg viewBox="0 0 16 16" fill="none" className={cls}>
            <path d="M3 3h10v8H6l-3 2V3z" strokeWidth="1.6" />
          </svg>
        );
      case "ritual":
        return (
          <svg viewBox="0 0 16 16" fill="none" className={cls}>
            <path d="M3 9h7l3-3" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M3 11h5" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        );
      case "result":
        return (
          <svg viewBox="0 0 16 16" fill="none" className={cls}>
            <path d="M3 9l3 3 7-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  }

  const visual = [
    {
      key: "cuts",
      title_es: "Cortes y Fades",
      title_en: "Cuts & Fades",
      blurb_es: "Ritual clásico, línea de precisión.",
      blurb_en: "Classic ritual, precise line-up.",
      image: "/images/services/cuts.jpg",
    },
    {
      key: "beard",
      title_es: "Barba y Afeitado",
      title_en: "Beard & Shave",
      blurb_es: "Perfilado con navaja y aftercare.",
      blurb_en: "Straight-razor shaping and aftercare.",
      image: "/images/services/beard.jpg",
    },
    {
      key: "color",
      title_es: "Color y Highlights",
      title_en: "Color & Highlights",
      blurb_es: "Consulta personalizada para el mejor resultado.",
      blurb_en: "Personalized consult for best results.",
      image: "/images/services/color.jpg",
    },
    {
      key: "designs",
      title_es: "Designs",
      title_en: "Designs",
      blurb_es: "Líneas artísticas y gráficos a medida.",
      blurb_en: "Artistic lines and custom graphics.",
      image: "/images/services/designs.jpg",
    },
    {
      key: "eyebrows",
      title_es: "Cejas",
      title_en: "Eyebrows",
      blurb_es: "Limpieza y definición.",
      blurb_en: "Clean-up and definition.",
      image: "/images/services/eyebrows.jpg",
    },
    {
      key: "kids",
      title_es: "Kids",
      title_en: "Kids",
      blurb_es: "Cortes con comodidad extra.",
      blurb_en: "Kid-friendly cuts with extra care.",
      image: "/images/services/kids.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 pb-12 text-neutral-100">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">
          {t("Servicios", "Services")}
        </h1>
        <p className="mt-2 text-neutral-300">
          {t(
            "Elegí tu servicio y reservá con tu barbero preferido.",
            "Choose your service and book with your preferred barber."
          )}
        </p>
      </header>

      {/* Visual grid by category */}
      <section aria-labelledby="visual" className="mx-auto mt-12 max-w-6xl">
        <h2 id="visual" className="text-xl font-semibold">
          {t("Explorá por categoría", "Explore by category")}
        </h2>
        <p className="mt-2 text-neutral-300">
          {t("Un vistazo visual a lo que hacemos.", "A visual look at what we do.")}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visual.map((c) => {
            const isCore = ["cuts", "beard", "color"].includes(c.key);
            return (
              <Link
                key={c.key}
                href={squareUrl(`tile-${c.key}`)}
                aria-label={t(`Reservar: ${c.title_es}`, `Book: ${c.title_en}`)}
                className={`group relative block overflow-hidden rounded-2xl border border-white/10 hover:ring-1 ${isCore ? 'hover:ring-white/20' : 'hover:ring-white/10'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-semibold">{t(c.title_es, c.title_en)}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{t(c.blurb_es, c.blurb_en)}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {t("Reservar", "Book")} <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>


      {/* Cómo trabajamos */}
      <section aria-labelledby="process" className="mx-auto mt-12 mb-2 max-w-5xl">
        <h2 id="process" className="text-xl font-semibold">
          {t("Cómo trabajamos", "How we work")}
        </h2>
        <ol className="mt-3 grid gap-3 sm:grid-cols-3">
          <li className="min-h-[120px] rounded-xl border border-white/10 bg-neutral-900/60 p-4 transition hover:bg-white/5 hover:ring-1 hover:ring-white/10 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <StepIcon name="consult" />
              <p className="text-sm font-semibold text-neutral-200">{t("1) Consulta breve", "1) Short consult")}</p>
            </div>
            <p className="mt-1 text-neutral-300 text-sm">{t("Definimos estilo, expectativas y recomendaciones.", "We align on style, expectations and recommendations.")}</p>
          </li>
          <li className="min-h-[120px] rounded-xl border border-white/10 bg-neutral-900/60 p-4 transition hover:bg-white/5 hover:ring-1 hover:ring-white/10 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <StepIcon name="ritual" />
              <p className="text-sm font-semibold text-neutral-200">{t("2) Preparación & ejecución", "2) Preparation & execution")}</p>
            </div>
            <p className="mt-1 text-neutral-300 text-sm">{t("Higiene y set‑up de herramientas; corte, perfilado o color según el servicio.", "Hygiene and tool set‑up; cut, shaping or color as the service requires.")}</p>
          </li>
          <li className="min-h-[120px] rounded-xl border border-white/10 bg-neutral-900/60 p-4 transition hover:bg-white/5 hover:ring-1 hover:ring-white/10 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <StepIcon name="result" />
              <p className="text-sm font-semibold text-neutral-200">{t("3) Final y cuidado posterior", "3) Final & aftercare")}</p>
            </div>
            <p className="mt-1 text-neutral-300 text-sm">{t("Styling final, línea de precisión (si corresponde) y recomendaciones para mantener el look.", "Final styling, precise line‑up (when applicable) and maintenance tips.")}</p>
          </li>
        </ol>
        <p className="mt-2 text-xs text-neutral-400">
          {t(
            "*Los pasos pueden variar según el servicio (por ejemplo, toalla caliente en afeitado/skincare).",
            "*Steps may vary by service (e.g., hot towel for shave/skincare)."
          )}
        </p>
      </section>

      {/* FAQ mínima */}
      <section aria-labelledby="faq" className="mx-auto mt-14 max-w-5xl">
        <h2 id="faq" className="text-xl font-semibold">{t("Preguntas frecuentes", "FAQ")}</h2>
        <div className="mt-3 divide-y divide-white/10 rounded-xl border border-white/10 bg-neutral-900/60">
          {/* RESERVAS */}
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("¿Cómo reservo?", "How do I book?")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Desde nuestra agenda online. Hacé clic en ‘Reservar’ y elegí servicio y horario.",
                "Use our online schedule. Click ‘Book’ and choose your service and time."
              )}
              {" "}
              <Link href={squareUrl('faq-reserva')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                {t("Ir a la agenda", "Go to booking")}
              </Link>
              .
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("¿Puedo elegir barbero?", "Can I choose a barber?")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sí, podés seleccionar tu barbero preferido al reservar. Si no elegís, te asignaremos el mejor match disponible.",
                "Yes. You can pick your preferred barber when booking. If you don’t select one, we’ll assign the best available match."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("¿Atienden sin cita (walk-ins)?", "Do you accept walk-ins?")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sujeto a disponibilidad en el momento. Recomendamos reservar para asegurar tu horario.",
                "Subject to in‑moment availability. We recommend booking to secure your slot."
              )}
            </p>
          </details>

          {/* PAGOS */}
          <details className="group p-4">
          <p className="mt-2 text-sm text-neutral-300">
  <strong>{t("Sí.", "Yes.")}</strong>{" "}
  {t(
    "Aceptamos tarjetas y pagos digitales; contactless (por ejemplo Apple Pay) según disponibilidad del terminal.",
    "We accept cards and digital payments; contactless (e.g., Apple Pay) depending on terminal availability."
  )}
</p>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sí. Aceptamos tarjetas y pagos digitales; contactless (por ejemplo Apple Pay) según disponibilidad del terminal.",
                "Yes. We accept cards and digital payments; contactless (e.g., Apple Pay) depending on terminal availability."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("¿Cómo funcionan las propinas?", "How do tips work?")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Son opcionales. Podés darlas en efectivo o de forma digital cuando corresponda.",
                "Tips are optional. You can leave them in cash or digitally when applicable."
              )}
            </p>
          </details>

          {/* EXPERIENCIA */}
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
            <p className="mt-2 text-sm text-neutral-300">
  <strong>{t("Sí.", "Yes.")}</strong>{" "}
  {t("Atendemos en Español & English.", "We serve clients in Spanish & English.")}
</p>
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sí. Atendemos en Español e Inglés.",
                "Yes. We serve clients in Spanish & English."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
            <p className="mt-2 text-sm text-neutral-300">
  <strong>{t("Sí.", "Yes.")}</strong>{" "}
  {t("Recomendamos llegar 5 minutos antes para que se sientan cómodos.", "We recommend arriving 5 minutes early so they feel comfortable.")}
</p>
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sí. Recomendamos llegar 5 minutos antes para que se sientan cómodos.",
                "Yes. We recommend arriving 5 minutes early so they feel comfortable."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("Higiene y esterilización", "Hygiene & sterilization")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Herramientas desinfectadas y navajas descartables. Estaciones limpias antes y después de cada servicio.",
                "Tools are disinfected and straight‑razor blades are single‑use. Stations are cleaned before and after each service."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
            <p className="mt-2 text-sm text-neutral-300">
  <strong>{t("Sí.", "Yes.")}</strong>{" "}
  {t("Color y Highlights incluye una consulta breve para definir el mejor resultado.", "Color & Highlights includes a short consult to define the best result.")}
</p>
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Sí. Color y Highlights incluye una consulta breve para definir el mejor resultado.",
                "Yes. Color & Highlights includes a short consult to define the best result."
              )}
            </p>
          </details>

          {/* POLÍTICAS */}
          <details className="group p-4 transition group-open:bg-white/4 group-open:ring-1 group-open:ring-white/10">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("Puntualidad", "Punctuality")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Agradecemos llegar a tiempo. Si llegás tarde intentaremos acomodarte; de no ser posible, reprogramaremos.",
                "Please arrive on time. If you’re late we’ll try to accommodate; if not possible, we’ll reschedule."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("Cancelaciones", "Cancellations")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Si necesitás cancelar o cambiar tu turno, avisanos con la mayor antelación posible para reprogramar.",
                "If you need to cancel or change your appointment, please let us know as early as possible so we can reschedule."
              )}
            </p>
          </details>
          <details className="group p-4">
            <summary className="flex items-center justify-between cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
              {t("No‑show", "No‑show")}
              <span className="ml-2 text-neutral-400 transition group-open:hidden">+</span>
              <span className="ml-2 hidden text-neutral-400 transition group-open:inline">–</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-300">
              {t(
                "Si no podés asistir, te ayudamos a reprogramar según disponibilidad.",
                "If you can’t make it, we’ll help you reschedule depending on availability."
              )}
            </p>
          </details>
        </div>
      </section>

      {/* CTAs finales */}
      <div className="mt-10 hidden md:flex md:flex-row gap-3">
        <Link
          href={squareUrl('bottom-cta')}
          className="inline-flex items-center justify-center rounded-full bg-neutral-100 px-5 py-2.5 text-neutral-900 font-medium hover:bg-white hover:shadow-lg transition w-full sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Reservar ahora", "Book now")}
        </Link>
        <Link
          href={`/${locale}/equipo`}
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 transition w-full sm:w-auto"
        >
          {t("Conocer al equipo", "Meet the team")}
        </Link>
      </div>

      {/* Migas para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: t("Inicio", "Home"), item: `/${locale}` },
              { "@type": "ListItem", position: 2, name: t("Servicios", "Services") },
            ],
          }),
        }}
      />
    </main>
  );
}