// src/data/types.ts

export type Locale = 'es' | 'en';

export type LocalizedString = {
  es: string;
  en: string;
};

export type Service = {
  key: string; // slug/id estable
  name: LocalizedString;
  durationMinutes?: number;
  durationLabel?: LocalizedString;
  priceFromUSD?: number;
  deeplink?: string;
};

export type Barber = {
  slug: string;
  name: string;
  country?: string;
  role?: LocalizedString;
  bio?: LocalizedString;
  languages?: Locale[];
  specialties?: string[];
  avatarUrl?: string;
  instagram?: string;
  tiktok?: string;
  squareUrl?: string;
  isNico?: boolean;
  services?: Service[];
};
