"use client";

import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type HowItWorksStep = {
  index: string;
  title: string;
  body: string;
  src: string;
  alt: string;
};

type Props = {
  steps: readonly HowItWorksStep[];
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function HowItWorksCarousel({ steps }: Props) {
  const reduced = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [copyOpacity, setCopyOpacity] = useState(1);
  const prevActiveIndexRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const last = steps.length - 1;
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < last;

  useEffect(() => {
    if (prevActiveIndexRef.current === null) {
      prevActiveIndexRef.current = activeIndex;
      return;
    }
    if (prevActiveIndexRef.current === activeIndex) {
      return;
    }
    prevActiveIndexRef.current = activeIndex;

    if (reduced) {
      setDisplayIndex(activeIndex);
      return;
    }
    setCopyOpacity(0);
    const id = window.setTimeout(() => {
      setDisplayIndex(activeIndex);
      setCopyOpacity(1);
    }, 150);
    return () => window.clearTimeout(id);
  }, [activeIndex, reduced]);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;

    const update = () => {
      const gapStr = getComputedStyle(el).gap;
      const gap = parseFloat(gapStr) || 20;
      const w = first.offsetWidth;
      setTranslateX(activeIndex * (w + gap));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    ro.observe(first);
    return () => ro.disconnect();
  }, [activeIndex]);

  const step = steps[displayIndex];

  const goPrev = () => {
    if (canPrev) setActiveIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canNext) setActiveIndex((i) => i + 1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div className="mt-12 md:mt-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-stratos-muted">
            Flow
          </p>
          <h2
            id="how-heading"
            className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-stratos-text sm:mt-6 sm:text-3xl"
          >
            How it works
          </h2>
        </div>
        <div className="flex shrink-0 items-center justify-end gap-2 md:pb-1">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-disabled={!canPrev}
            aria-label="Previous step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--stratos-control-border)] bg-[var(--stratos-control-bg)] text-stratos-secondary transition hover:border-[var(--stratos-control-hover-border)] hover:bg-[var(--stratos-control-hover-bg)] hover:text-stratos-text disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-disabled={!canNext}
            aria-label="Next step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--stratos-control-border)] bg-[var(--stratos-control-bg)] text-stratos-secondary transition hover:border-[var(--stratos-control-hover-border)] hover:bg-[var(--stratos-control-hover-bg)] hover:text-stratos-text disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        className="mt-10 md:mt-14"
        role="region"
        aria-roledescription="carousel"
        aria-labelledby="how-carousel-heading"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          className={[
            "max-w-[min(100%,22rem)] sm:max-w-[26rem] md:max-w-[28rem] md:pr-6",
            "transition-opacity duration-150 ease-out",
            reduced ? "motion-reduce:transition-none" : "",
          ].join(" ")}
          style={{ opacity: copyOpacity }}
          aria-live="polite"
          aria-atomic="true"
        >
          <div>
            <p className="font-mono text-[9px] tabular-nums tracking-[0.12em] text-stratos-muted">
              {step.index}
            </p>
            <h3
              id="how-carousel-heading"
              className="mt-1 text-xl font-semibold leading-snug tracking-[-0.02em] text-stratos-text sm:text-2xl"
            >
              {step.title}
            </h3>
          </div>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-stratos-secondary">
            {step.body}
          </p>
        </div>

        <div className="relative -mx-6 mt-8 overflow-x-hidden px-6 md:-mx-10 md:mt-10 md:px-10 lg:-mx-16 lg:px-16">
          <div
            ref={trackRef}
            className={[
              "flex w-max gap-5 pb-2 pt-1 motion-reduce:transition-none md:gap-6",
              reduced
                ? ""
                : "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            ].join(" ")}
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
          {steps.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={s.index}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show step ${s.index}: ${s.title}`}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "min-w-[min(78vw,280px)] shrink-0 rounded-2xl text-left transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
                  "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stratos-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-stratos-bg",
                  isActive ? "scale-100 opacity-100" : "scale-[0.98] opacity-[0.38] hover:opacity-55",
                ].join(" ")}
              >
                <div
                  className="relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-stratos-border-subtle/60"
                  style={{ aspectRatio: "9 / 19.5" }}
                >
                  <Image
                    src={s.src}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 78vw, 280px"
                    priority={i === 0}
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.05),transparent_45%,rgba(0,0,0,0.4))]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-1/2 top-2 h-3 w-[28%] -translate-x-1/2 rounded-full bg-black/50"
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
