"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const frames = [
  { caption: "Live board", label: "Live tracking screen", src: "/screenshots/live-board.PNG" },
  { caption: "Halftime insights", label: "Halftime insights screen", src: "/screenshots/insights.PNG" },
  { caption: "Share-ready summary", label: "Share-ready summary screen", src: "/screenshots/game-summary.PNG" },
] as const;

export default function ProductGlimpse() {
  return (
    <section
      className="relative z-10 bg-[#070809] py-24 md:py-32"
      aria-labelledby="product-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
        aria-hidden="true"
      />
      <SectionCanvas>
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
                Product
              </p>
              <h2
                id="product-heading"
                className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
              >
                See Stratos in motion
              </h2>
            </div>
            <p className="max-w-md text-sm text-stratos-secondary md:text-right">
              Real screens from the app.
            </p>
          </div>
        </ScrollReveal>
      </SectionCanvas>

      <ScrollReveal delayMs={90} className="mt-14 block">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#070809] to-transparent md:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#070809] to-transparent md:w-24"
            aria-hidden="true"
          />

          <div
            className="overflow-x-auto overflow-y-visible pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Product screenshots, scroll horizontally"
          >
            <div className="mx-auto w-full max-w-5xl px-6 md:px-10 lg:px-16">
              <div className="flex w-max snap-x snap-mandatory gap-5 pb-2 pt-1 md:gap-8 lg:gap-10">
                {frames.map((frame) => (
                <figure
                  key={frame.caption}
                  className="w-[min(78vw,300px)] shrink-0 snap-center snap-always"
                >
                  <div
                    className="relative overflow-hidden rounded-[1.75rem] bg-[#0c0d10] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
                    style={{ aspectRatio: "9 / 19.5" }}
                  >
                    <Image
                      src={frame.src}
                      alt={frame.label}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 78vw, 300px"
                    />
                    <div
                      className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.06),transparent_45%,rgba(0,0,0,0.4))]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-1/2 top-3 h-5 w-[28%] -translate-x-1/2 rounded-full bg-black/50"
                      aria-hidden="true"
                    />
                  </div>
                  <figcaption className="mt-5 font-mono text-[11px] tracking-wide text-stratos-muted">
                    {frame.caption}
                  </figcaption>
                </figure>
              ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
