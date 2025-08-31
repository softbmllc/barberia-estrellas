// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = (locale as string) || 'es';
  const messages = (await import(`../messages/${safeLocale}.json`)).default;
  return {locale: safeLocale, messages};
});