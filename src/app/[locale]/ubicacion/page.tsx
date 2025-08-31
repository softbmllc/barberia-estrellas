// src/app/[locale]/ubicacion/page.tsx
export const metadata = {title: 'Ubicación & Parking — Barbería de las Estrellas'};

export default function UbicacionPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Ubicación & Parking</h1>
      <p className="mt-2 text-gray-600">Cómo llegar a nuestra barbería en Wynwood. Free Parking.</p>
      <div className="mt-8 rounded-lg border p-4 text-sm text-gray-500">
        Próximamente: mapa incrustado y guía de parking.
      </div>
    </section>
  );
}
