// src/data/barbers.ts
export type Barber = {
  id: string;
  name: string;
  // Opcionales usados por la UI
  slug?: string;             // para /equipo/[slug] (cuando lo implementemos)
  nationality?: string;      // alias legacy
  country?: string;          // mostrado en la tarjeta si existe
  age?: number;
  bio_es?: string;
  bio_en?: string;
  specialties?: string[];    // badges (p.ej. "Fades", "Beard", "Color")
  instagram?: string;
  tiktok?: string;
  avatarUrl?: string;        // si preferís avatar cuadrado aparte
  photo: string;             // ruta en /public/images/barbers/... (fallback)
  squareUrl?: string;        // link directo a su Booksy/Square si aplica
  bookUrl?: string;          // alias (por compatibilidad)
};

// ⚠️ Por pedido: **Nico no va** en este listado. Tendrá mención aparte.
// Cargá acá los 9 barberos. Dejé placeholders para completar con datos reales
// (nombre, IG, foto, y link de reserva si corresponde).
export const barbers: Barber[] = [
  {
    id: "magic",
    slug: "magic",
    name: "Magic",
    country: "Argentina",
    bio_es: "Argentino. Fades limpios y perfilado de barba. Co‑owner de @eyemagicscents. Agenda por Square.",
    bio_en: "Argentinian. Clean fades and beard shaping. Co‑owner of @eyemagicscents. Booking via Square.",
    specialties: ["Fades", "Beard Shaping", "Classic cuts"],
    instagram: "https://instagram.com/magic.thebarber",
    photo: "/images/barbers/magic.jpg",
    squareUrl: "https://book.squareup.com/appointments/b2flo8v91kroen/location/L9A40NYC216EP/services?fbclid=PAVERFWAMfIt1leHRuA2FlbQIxMAABpw-KhrkBJdN3fRItWIdFcEBcrKrDJSS7K77pqshQeNGkh2Gf8OUxU5yF6Zso_aem_1GKtZkLCibCXaNXNZz-giw"
  },
  {
    id: "gonzalo-palu",
    slug: "gonzalo-palu",
    name: "Gonzalo Palu Lacoste",
    country: "Argentina",
    age: 24,
    bio_es: "Soy Gonzalo Palu y estos son mis perfiles. Argentino, 24 años. Desde los 14 corto el pelo; la barbería no es solo un oficio: somos creadores de tu imagen y animadores de tu ánimo. Trabajamos cada día para dar un mejor servicio. Te invito a llevarte una gran experiencia. ~ Lo único permanente es el cambio ~",
    bio_en: "I’m Gonzalo Palu — Argentinian, 24. Cutting hair since I was 14. Barbering is more than a trade: we craft your image and lift your spirit. We work every day to deliver a better service. I invite you to a great experience. ~ The only constant is change ~",
    specialties: ["Fades", "Classic cuts", "Beard Shaping"],
    instagram: "https://instagram.com/gonzapalu",
    tiktok: "https://tiktok.com/@gonzapalu",
    photo: "/images/barbers/gonzalo-palu.jpg",
    squareUrl: ""
  },
  {
    id: "barber-02",
    slug: "barbero-02",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-02.jpg",
    squareUrl: ""
  },
  {
    id: "barber-03",
    slug: "barbero-03",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-03.jpg",
    squareUrl: ""
  },
  {
    id: "barber-04",
    slug: "barbero-04",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-04.jpg",
    squareUrl: ""
  },
  {
    id: "barber-05",
    slug: "barbero-05",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-05.jpg",
    squareUrl: ""
  },
  {
    id: "barber-06",
    slug: "barbero-06",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-06.jpg",
    squareUrl: ""
  },
  {
    id: "barber-07",
    slug: "barbero-07",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-07.jpg",
    squareUrl: ""
  },
  {
    id: "barber-08",
    slug: "barbero-08",
    name: "Por definir",
    country: "",
    bio_es: "",
    bio_en: "",
    specialties: [],
    instagram: "",
    photo: "/images/barbers/barbero-08.jpg",
    squareUrl: ""
  }
];

// alias de compatibilidad (si quedó algún import viejo)
export { barbers as BARBERS };