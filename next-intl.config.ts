// next-intl.config.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = (locale as string) || 'es';
  return {
    locale: safeLocale,
    messages: (await import(`./src/messages/${safeLocale}.json`)).default
  };
});