import Image from "next/image";
import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

type Props = {
  primary: ReactNode;
  secondary?: ReactNode;
};

export default function ClosingCta({ primary, secondary }: Props) {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#060708] py-28 md:py-36"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]"
        aria-hidden="true"
      />
      {/* Blurred screenshot background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/screenshots/game-summary.PNG"
          alt=""
          fill
          className="object-cover object-top scale-110 blur-2xl opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#060708]/70" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
        aria-hidden="true"
      />
      <SectionCanvas narrow>
        <ScrollReveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
              Ready to get started?
            </p>
            <h2
              id="cta-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
            >
              Bring the numbers to the sideline.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-stratos-secondary">
              Get early access and start tracking smarter at your next tournament.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {primary}
              {secondary}
            </div>
            <p className="mt-12 text-[11px] text-stratos-muted">
              <a
                href="#"
                className="underline decoration-white/15 underline-offset-4 transition hover:text-stratos-secondary focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-stratos-accent/80"
              >
                Terms
              </a>
              <span className="mx-2 text-stratos-border" aria-hidden="true">
                ·
              </span>
              <a
                href="#"
                className="underline decoration-white/15 underline-offset-4 transition hover:text-stratos-secondary focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-stratos-accent/80"
              >
                Privacy
              </a>
            </p>
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
