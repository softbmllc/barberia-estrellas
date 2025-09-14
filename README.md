# Barbería de las Estrellas — README

Sitio **Next.js 15 + TypeScript** con **i18n (ES/EN)**, estética premium, SEO listo, base para integrar **Square** (embed) y **Google Reviews**.  
Principios: branding primero; luego UX/Accesibilidad, rendimiento, SEO y al final micro‑animaciones.

---

## Estado actual (Hecho)

**Infra & base**
- Repo creado y deploy en Vercel (prod y preview).
- README completo, instrucciones del proyecto y flujo de trabajo documentados.
- i18n con `next-intl` (ES/EN) y middleware con `localePrefix: 'always'`.

**Navbar / UX**
- Navbar bilingüe.
- Mobile: píldora de idioma + menú desplegable a la derecha; se removió “Reservar” del navbar (vive en menú y hero).
- Cambio de idioma preserva la ruta con `LangLink` (client) + `Suspense` en `layout`.

**Hero**
- CTA 1: **Reservar** → Square con `locale` + UTM.
- CTA 2: **Ver servicios** → `/[locale]/servicios` + UTM.

**Landing**
- `AmenitiesStrip` con 6 tiles: `espresso`, `pool`, `studio de contenido`, `premium`, `parking`, `idiomas`; imágenes editoriales y UTM por tile.
- **Fundador**: bio profesional (origen + sacrificio + clientes + expansión 3×) con foco en equipo; IG `@nicojaffe`, video `nocookie`, JSON‑LD `Person`, línea “Clientes destacados” → `/prensa`.
- **Staff (landing)**: CTA a `/[locale]/equipo`.

**Servicios**
- Página `/[locale]/servicios`: grid visual por categoría, **Proceso** (3 pasos), **FAQ** accesible (+/– con focus visible), CTAs con UTM.
- Sin duplicar precios (los maneja Square).

**Equipo**
- `TeamGrid` acepta `ids?: string[]` para filtrar.
- `/[locale]/equipo` renderiza solo la card de **Magic** (listo para ampliar).

**Footer / SEO**
- Mapa embebido + botón **Cómo llegar**; bloque de Reseñas con micro‑trust **★★★★★ 5.0 · Google** y link a Maps.
- `sitemap` y `robots` generados usando `NEXT_PUBLIC_SITE_URL`.

**Calidad**
- Tipado estricto; se removieron `any` en `ServicesGrid` y `TeamGrid`.
- `npm run build` y `npm run lint` en verde.

---

## Stack y convenciones

- **Stack**: Next.js 15 (App Router) + TypeScript estricto + Tailwind + `next-intl` + Vercel.
- **Sin `any`**; preferir uniones (`AmenityKey`, `HighlightKey`, etc.).
- **Server/Client**: usar `"use client"` solo donde haya estado/DOM.
- **Suspense**: envolver cualquier uso directo o indirecto de `useSearchParams` (ej.: `LangLink` en navbar).
- **Imágenes**: `next/image` + `sizes` + contenedor con `aspect-*` para evitar CLS.
- **Fuentes**: `next/font` con subsetting automático.

### Rutas e i18n
- Locales: `es` y `en`, **siempre** prefijados: `/es/...`, `/en/...`.
- Middleware `next-intl` con `localePrefix: 'always'`.
- Cambio de idioma con `LangLink` que preserva ruta y query; pill visible en desktop; en mobile dentro del menú.

### Navbar / Mobile
- Desktop: links bilingües; pill ES/EN a la derecha; Instagram/WhatsApp.
- Mobile: pill ES/EN + menú hamburguesa a la derecha del idioma.
- **No** mostrar “Reservar” en la barra; solo en menú y en el hero.

### Hero
- CTA 1: **Reservar** → Square (con `locale` + UTM).
- CTA 2: **Ver servicios** → `/[locale]/servicios` (+ UTM).
- Accesibilidad: `aria-label`, `focus-visible`, targets ≥44px.

### Landing
- **AmenitiesStrip**: 6 cards con fotos editoriales.  
  Assets en `public/images/amenities/*.jpg` (≤220 KB; preferir WebP/AVIF).  
  UTM por card: `utm_content=tile-<key>`.
- **Fundador**: bio real (Uruguay → Miami → reconocimiento → expansión 3×), IG `@nicojaffe`, video `nocookie`, JSON‑LD `Person`.
- Línea “Clientes destacados” → `/[locale]/prensa`.
- **Staff (landing)**: copy de valor + CTA **Ver equipo** (grid completo vive en `/equipo`).

### Página Servicios
- Grid visual por categoría (4:3) + Proceso (3 pasos) + FAQ (+/–, focus‑visible) + CTAs (UTM).
- **Sin** listar precios/duración (lo maneja Square).

### Página Equipo
- `TeamGrid` acepta `ids?: string[]` para filtrar (p.ej. solo Magic hoy).
- Data en `src/data/barbers.ts` + fotos en `public/images/barbers/`.

### Footer
- Mapa embebido + botón **Cómo llegar** (directions).
- Reseñas: por ahora link a Google (micro‑trust “★★★★★ 5.0 · Google”).
- Futuro: embed real con **Google Places API** (`place_id`).

### SEO técnico
- `NEXT_PUBLIC_SITE_URL` en Vercel.
- `src/app/sitemap.ts` y `src/app/robots.ts` generan URLs con ese host.
- Metadata/OG por sección (definir OG finales).

---

## Medición y UTM

Convención UTM:
- `utm_source=site`
- `utm_medium=hero|amenities|services|founder|footer|nav`
- `utm_campaign=booking|navigation|about|services`
- `utm_content=primary|see-services|tile-espresso|cta-staff|...`

**GA4**: agregar `G-XXXX` cuando se comparta.  
**Search Console**: configurar cuando exista dominio final.

---

## Square

- Estado actual: links externos con UTM.
- Objetivo: **embed real** (sin salir del sitio). Requerirá `Application ID`, `Location ID`, `Access Token` o invitación al proyecto Square.

---

## Definición de Hecho (DoD)

- Build y lint en verde, sin *warnings* evitables.
- Responsive `sm/md/lg`; sin solapes.
- Accesibilidad: `aria-label`, `focus-visible`, targets ≥44px.
- Rendimiento: imágenes optimizadas; evitar CLS; `priority` solo en hero.
- SEO: sitemap/robots/metadata; schema cuando aplique.
- Documentación actualizada (este README + notas de commits).

---

## Flujo de trabajo

1. Un cambio por vez (un archivo si es posible).
2. `npm run lint && npm run build` antes del commit.
3. Commit semántico corto.
4. `vercel` (preview) → `vercel --prod` (prod).
5. Si algo rompe: pausa táctica y rollback.

---

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL = https://<tu-app>.vercel.app` o dominio final.
- (Futuro) `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (Places) para reviews.
- (Futuro) credenciales Square para embed.

---

## Setup y deploy

- GitHub: repo `barberia-estrellas`.
- Vercel CLI: `vercel` (preview) / `vercel --prod` (prod).
- Variable pública: `NEXT_PUBLIC_SITE_URL` (usar URL de Vercel hasta tener dominio).

---

## Próximos pasos (orden sugerido)

1. `/prensa` (Featured clients): mosaico con fotos/clips/anécdotas + CTA reservar (link con UTM).
2. Perfiles de barberos `/[locale]/equipo/[slug]`: bio breve, galería, IG, botón de reserva (si aplica).
3. **OG por sección** (Hero, Servicios, Equipo, Prensa).
4. **GA4** (Measurement ID) + **Search Console** (cuando haya dominio).
5. **Embed Square** (API) para reservar sin salir del sitio.
6. **Google Reviews embebidas** (Places API + `place_id`).
7. Completar **fotos reales** del local/equipo y reemplazar imágenes de stock.

---

## Criterios de trabajo

- Un cambio por vez, archivo por archivo si es posible.
- `npm run lint && npm run build` antes de cada commit.
- Si algo rompe: pausa táctica y rollback.
- Accesibilidad: `aria-label`, `focus-visible`; targets ≥44px.
- Performance: imágenes WebP/AVIF ≤ 220 KB; `priority` solo en hero; evitar CLS.
- SEO: rutas con prefijo de locale, sitemap/robots, JSON‑LD cuando aplique.
