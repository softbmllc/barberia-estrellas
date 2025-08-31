// src/app/[locale]/prensa/page.tsx

// src/app/[locale]/prensa/page.tsx
export const metadata = {title: 'Prensa & Colaboraciones — Barbería de las Estrellas'};

export default function PrensaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Prensa & Colaboraciones</h1>
      <p className="mt-2 text-gray-600">Clips, menciones y partnerships.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4 text-sm text-gray-500">
          Próximamente: logos y enlaces
        </div>
        <div className="rounded-lg border p-4 text-sm text-gray-500">
          Próximamente: reels destacados
        </div>
      </div>
    </section>
  );
}