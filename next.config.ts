// next.config.ts
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Usa la convención por defecto: src/i18n/request.{ts,tsx}
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);