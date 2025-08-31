

// src/app/[locale]/components/LangLink.tsx
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function LangLink({
  locale,
  className,
  ariaLabel,
  children,
}: {
  locale: "es" | "en";
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/";
  const params = useSearchParams();
  const nextLocale = locale === "es" ? "en" : "es";

  // Replace the first segment with the next locale while preserving the rest and query string
  const segments = pathname.split("/"); // ["", "es", ...]
  if (segments[1] === "es" || segments[1] === "en") {
    segments[1] = nextLocale;
  } else {
    segments.splice(1, 0, nextLocale);
  }
  const newPath = segments.join("/") || `/${nextLocale}`;
  const query = params?.toString();
  const href = query ? `${newPath}?${query}` : newPath;

  return (
    <Link href={href} className={className} aria-label={ariaLabel} prefetch>
      {children}
    </Link>
  );
}