// src/app/[locale]/equipo/page.tsx
import TeamGrid from "../components/TeamGrid";

type Params = { params: { locale: "es" | "en" } };

export const metadata = { title: "Equipo — Barbería de las Estrellas" };

export default function EquipoPage({ params: { locale } }: Params) {
  const isES = locale === "es";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-neutral-100">
      <h1 className="text-2xl md:text-4xl font-semibold">{isES ? "Equipo" : "Staff"}</h1>
      <p className="mt-2 max-w-2xl text-neutral-400">
        {isES
          ? "Atención personalizada, contenido y calidad premium. Hoy mostramos una selección inicial."
          : "Personalized attention, content and premium quality. This is an initial selection."}
      </p>

      {/* Solo Magic por ahora */}
      <div className="mt-8">
        <TeamGrid locale={locale} ids={["magic"]} />
      </div>
    </section>
  );
}