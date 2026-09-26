"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sparkles, Pause, Play, ChevronUp, ChevronDown } from "lucide-react";
import { servicesData, type ServiceData } from "@/lib/services-data";
import { useT, useLanguage } from "@/lib/language-context";
import Reveal from "@/components/ui/Reveal";
import ServiceModal from "@/components/ServiceModal";
import ServiceModalIcon from "@/components/ServiceModalIcon";

const toBengaliDigits = (num: number): string => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((d) => bnDigits[parseInt(d, 10)] ?? d)
    .join("");
};

export default function Services() {
  const t = useT();
  const { lang } = useLanguage();
  const [active, setActive] = useState<ServiceData | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  isPausedRef.current = isPaused;

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const pixelsPerSecond = 35; // smooth, comfortable reading speed

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPausedRef.current && !isHoveredRef.current && !isInteractingRef.current && container) {
        container.scrollTop += pixelsPerSecond * delta;

        // Reset scroll position seamlessly when reaching midpoint
        const half = container.scrollHeight / 2;
        if (container.scrollTop >= half) {
          container.scrollTop = container.scrollTop - half;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Handle user manual scroll / touch
  const handleUserScroll = () => {
    isInteractingRef.current = true;
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000); // resume 2s after manual scrolling stops
  };

  const handleManualScrollStep = (direction: "up" | "down") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: direction === "up" ? -220 : 220,
        behavior: "smooth",
      });
      handleUserScroll();
    }
  };

  return (
    <>
      <section id="services" className="py-20 md:py-28 overflow-hidden bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Section Heading */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Reveal variant="fadeUp">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles size={13} />
                {t("services.label")}
              </span>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.08}>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-primary-dark dark:text-primary-light md:text-4xl lg:text-5xl">
                {t("services.heading")}
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.14}>
              <p className="mt-4 text-base sm:text-lg text-muted">
                {t("services.desc")}
              </p>
            </Reveal>
          </div>

          {/* List Controls & Hint */}
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-muted">
                {lang === "bn"
                  ? "২৪টি সেবা • তালিকায় ক্লিক করে বিস্তারিত জানুন"
                  : "24 Services • Click any item to view full details"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Manual scroll buttons */}
              <button
                type="button"
                onClick={() => handleManualScrollStep("up")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
                aria-label="Scroll up"
                title="Scroll up"
              >
                <ChevronUp size={16} />
              </button>
              <button
                type="button"
                onClick={() => handleManualScrollStep("down")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
                aria-label="Scroll down"
                title="Scroll down"
              >
                <ChevronDown size={16} />
              </button>

              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-xs ${
                  isPaused
                    ? "border-amber-400 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
                    : "border-emerald-200 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                }`}
                aria-label={isPaused ? "Play auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? <Play size={12} className="fill-current" /> : <Pause size={12} className="fill-current" />}
                <span>
                  {lang === "bn"
                    ? (isPaused ? "অটোরান চালু করুন" : "অটোরান চলছে")
                    : (isPaused ? "Resume Auto-Scroll" : "Auto-Scrolling")}
                </span>
              </button>
            </div>
          </div>

          {/* Vertical Infinite Loop List View Container */}
          <div className="relative rounded-3xl border border-border/80 bg-surface-alt/40 p-3 sm:p-5 shadow-xs backdrop-blur-xs">
            {/* Edge gradient fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 sm:h-20 rounded-t-3xl bg-gradient-to-b from-background/90 via-background/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20 rounded-b-3xl bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

            {/* Scrollable Container */}
            <div
              ref={containerRef}
              onMouseEnter={() => { isHoveredRef.current = true; }}
              onMouseLeave={() => { isHoveredRef.current = false; }}
              onTouchStart={() => { isHoveredRef.current = true; }}
              onTouchEnd={() => { isHoveredRef.current = false; }}
              onScroll={handleUserScroll}
              className="h-[560px] sm:h-[600px] overflow-y-auto overscroll-contain select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* Seamless double list for never-ending loop */}
              <div className="flex flex-col gap-3 py-2">
                {[...servicesData, ...servicesData].map((svc, idx) => {
                  const serviceIndex = (idx % servicesData.length) + 1;
                  const formattedNum =
                    lang === "bn"
                      ? toBengaliDigits(serviceIndex)
                      : String(serviceIndex).padStart(2, "0");
                  const content = lang === "en" ? svc.en : svc.bn;

                  return (
                    <button
                      key={`${svc.id}-${idx}`}
                      type="button"
                      onClick={() => setActive(svc)}
                      className="group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface/95 p-4 sm:p-5 text-left shadow-xs transition-all duration-200 hover:border-primary/50 hover:bg-surface hover:shadow-md hover:shadow-primary/5 hover:translate-x-1 cursor-pointer"
                      aria-label={`${content.title} — ${lang === "bn" ? "বিস্তারিত দেখুন" : "View details"}`}
                    >
                      {/* Left: Number + Icon + Title & Short */}
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                        {/* Number Badge */}
                        <span className="hidden xs:flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs sm:text-sm font-bold text-primary">
                          {formattedNum}
                        </span>

                        {/* Service Icon */}
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100/60 text-emerald-700 ring-1 ring-emerald-200/80 shadow-xs transition-transform duration-300 group-hover:scale-108 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30">
                          <ServiceModalIcon name={svc.icon} />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary leading-snug truncate">
                            {content.title}
                          </h3>
                          <p className="mt-0.5 text-xs sm:text-sm text-muted leading-relaxed line-clamp-1">
                            {content.short}
                          </p>
                        </div>
                      </div>

                      {/* Right: Learn more CTA */}
                      <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        <span className="hidden sm:inline">{t("services.learn")}</span>
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <ServiceModal service={active} onClose={() => setActive(null)} />
    </>
  );
}
