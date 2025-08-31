// src/app/[locale]/reservar/page.tsx

import Link from "next/link";

export const metadata = {title: 'Reservar — Barbería de las Estrellas'};

export default function ReservarPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Reservar</h1>
      <p className="mt-2 text-gray-600">Elegí reservar con tu barbero preferido.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={{ pathname: ".", query: { barbero: "nico" } }}
          className="inline-flex items-center rounded-lg border border-black bg-black px-4 py-2 text-white hover:opacity-90"
        >
          Reservar con Nico
        </Link>
        <Link
          href={{ pathname: ".", query: { barbero: "equipo" } }}
          className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-gray-50"
        >
          Elegir barbero
        </Link>
      </div>
      <div className="mt-8 rounded-lg border p-4 text-sm text-gray-500">
        Próximamente: embed o deep-links de Square.
      </div>
    </section>
  );
}