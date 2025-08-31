// src/app/[locale]/galeria/page.tsx

// src/app/[locale]/galeria/page.tsx
export const metadata = {title: 'Galería — Barbería de las Estrellas'};

export default function GaleriaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Galería</h1>
      <p className="mt-2 text-gray-600">Trabajos de cortes, color y diseño.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* TODO: Masonry / grid de imágenes */}
        <div className="rounded-lg border p-4 text-sm text-gray-500">
          Próximamente: grid de imágenes
        </div>
      </div>
    </section>
  );
}