// src/app/[locale]/equipo/[slug]/page.tsx

import type {Metadata} from 'next';

export const metadata: Metadata = {title: 'Perfil del barbero — Barbería de las Estrellas'};

export default function BarberProfilePage({params}: {params: {slug: string}}) {
  const {slug} = params;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-4xl font-semibold">Perfil: {slug}</h1>
      <p className="mt-2 text-gray-600">Bio, especialidades, galería y agenda.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          {/* TODO: Bio + especialidades */}
          Contenido del perfil
        </div>
        <div className="rounded-lg border p-4">
          {/* TODO: Agenda Square / deeplink */}
          Agenda
        </div>
      </div>
    </section>
  );
}