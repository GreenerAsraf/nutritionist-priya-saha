"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/language-context";

const NAV_KEY_MAP: Record<string, string> = {
  "#gallery":      "nav.gallery",
  "#about":        "nav.about",
  "#services":     "nav.services",
  "#approach":     "nav.approach",
  "#testimonials": "nav.testimonials",
  "#contact":      "nav.contact",
};

function SocialIcon({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp" amount={0.1}>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/10">
                  <Image
                    src="/logo.jpeg"
                    alt={t("site.name")}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-primary-dark">
                    {siteConfig.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-muted">
                    {t("site.tagline")}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t("site.footer.desc")}
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label={t("site.tagline")}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link text-sm text-muted transition-colors hover:text-primary"
                >
                  {t(NAV_KEY_MAP[link.href] ?? link.href)}
                </a>
              ))}
            </nav>

            <div className="flex gap-3">
              <SocialIcon label="Instagram" href={siteConfig.social.instagram}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href={siteConfig.social.facebook}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href={siteConfig.social.linkedin}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
            <p>
              &copy; {year} {siteConfig.name}। {t("site.copyright")}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
