# Barbería de las Estrellas 🌟✂️

Sitio oficial de **Barbería de las Estrellas**, liderada por **Nico Jaffe** en Wynwood, Miami.  
Un espacio de barbería premium con perfil social: pool, café, living y ambiente de tendencias para clientes, artistas e influencers.

---

## 🚀 Stack Técnico

- **Framework**: [Next.js 15](https://nextjs.org) (App Router, TypeScript, Turbopack)
- **Estilos**: TailwindCSS + shadcn/ui
- **Internacionalización**: [`next-intl`](https://next-intl.dev) (ES/EN)
- **Fuentes**: [Geist Sans & Mono](https://vercel.com/font)
- **CMS**: Sanity / Payload (para equipo, servicios, galería, eventos)
- **Hosting**: Vercel
- **Optimización de imágenes**: ImageKit / Cloudinary
- **Reservas**: Integración con Square (deep-links + embed)

---

## 📂 Estructura de Páginas

- `/` – Landing con:
  - Hero con micro-reel y CTA dual (Reservar con Nico / Ver Equipo)
  - Servicios destacados
  - Equipo destacado (carrusel)
  - Social Club (pool, café, living)
  - Galería
  - Prensa & Colaboraciones
  - Ubicación + Free Parking
- `/equipo` – Grid de barberos (filtros por especialidad, idioma).
- `/equipo/[slug]` – Perfil individual (bio, especialidades, galería, agenda Square).
- `/precios` – Tabla de servicios con precios y políticas.
- `/social-club` – Espacio social + eventos privados.
- `/galeria` – Galería de cortes, color y diseños.
- `/prensa` – Colaboraciones y apariciones mediáticas.
- `/ubicacion` – Mapa + info de parking.
- `/reservar` – Selector y embed Square.

---

## 🎯 Objetivo del Proyecto

- **Embudo claro a reserva**: que cualquier visitante pueda agendar rápido con Nico o el equipo.
- **Potenciar la marca de Nico Jaffe**: barbero reconocido, cantante e influencer.
- **Dar protagonismo al equipo**: cada barbero con su perfil, agenda y estilo.
- **Posicionar la barbería como espacio social y cultural** en Miami.

---

## 🛠️ Desarrollo Local

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## 📊 Medición

- GA4 + Meta Pixel con eventos clave:
  - `hero_primary_cta`
  - `open_booking`
  - `whatsapp_click`
  - `booking_success`

---

## 📌 Roadmap

- [x] Base Next.js + Tailwind + next-intl
- [ ] Navbar + Footer
- [ ] Landing con Hero, InfoBar y CTA dual
- [ ] Sección Equipo + Perfil barbero
- [ ] Integración Square (deep-links / embed)
- [ ] Galería + Social Club
- [ ] Traducciones EN
- [ ] Optimización SEO + OG dinámicos
- [ ] Go Live en Vercel 🚀

---

## 👤 Autor

Proyecto desarrollado por [Rodrigo “Lolo”](https://www.devrodri.com) para **Barbería de las Estrellas**.
