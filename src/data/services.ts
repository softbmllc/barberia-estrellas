// src/data/services.ts
export type ServiceItem = {
    key: string;
    name_es: string;
    name_en: string;
    priceUSD: number;
    duration?: string; // opcional (si más tarde definís tiempos)
  };
  
  export const services: ServiceItem[] = [
    { key: "haircut",           name_es: "Haircut o Fade",                     name_en: "Haircut or Fade",                     priceUSD: 45 },
    { key: "haircut_beard",     name_es: "Haircut + Beard",                    name_en: "Haircut + Beard",                     priceUSD: 60 },
    { key: "kids",              name_es: "Kids Haircut",                        name_en: "Kids Haircut",                        priceUSD: 35 },
    { key: "beard",             name_es: "Beard Maintenance",                   name_en: "Beard Maintenance",                   priceUSD: 25 },
    { key: "eyebrows",          name_es: "Eyebrows",                            name_en: "Eyebrows",                            priceUSD: 15 },
    { key: "fullcolor_global",  name_es: "Full Color Global + Haircut",         name_en: "Full Color Global + Haircut",         priceUSD: 250 },
    { key: "fullcolor_sin",     name_es: "Full Color sin Haircut",              name_en: "Full Color (without Haircut)",        priceUSD: 200 },
    { key: "highlights",        name_es: "Highlights + Haircut",                name_en: "Highlights + Haircut",                priceUSD: 150 },
    { key: "bano_color",        name_es: "Baño Color (repaso)",                 name_en: "Color Bath (retouch)",                priceUSD: 75 },
    { key: "full_service_vip",  name_es: "Full Service VIP (Haircut + Beard + Eyebrows + Hairstyle)", name_en: "Full Service VIP (Haircut + Beard + Eyebrows + Hairstyle)", priceUSD: 85 },
    { key: "star_vip",          name_es: "Star VIP (Full Service + Video Reel)", name_en: "Star VIP (Full Service + Video Reel)", priceUSD: 180 },
  ];