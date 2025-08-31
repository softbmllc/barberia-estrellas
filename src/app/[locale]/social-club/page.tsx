// src/app/[locale]/social-club/page.tsx

// src/app/[locale]/social-club/page.tsx
export const metadata = {title: 'Social Club — Barbería de las Estrellas'};

export default function SocialClubPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Social Club</h1>
      <p className="mt-2 text-gray-600">Pool, café, living y eventos privados.</p>
      <div className="mt-8 rounded-lg border p-4 text-sm text-gray-500">
        Próximamente: galería del espacio y formulario de eventos.
      </div>
    </section>
  );
}