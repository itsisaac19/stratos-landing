import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative z-10 overflow-hidden bg-[#060708] pb-28 pt-20 md:pb-32 md:pt-24"
      aria-labelledby="problem-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Faded screenshot — right side decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-64 md:block lg:w-80"
        aria-hidden="true"
      >
        <div className="relative h-full w-full">
          <Image
            src="/screenshots/insights.PNG"
            alt=""
            fill
            className="object-cover object-top"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060708] via-[#060708]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060708] via-transparent to-[#060708]" />
        </div>
      </div>

      <SectionCanvas narrow>
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
            Built for the sideline
          </p>
          <h2
            id="problem-heading"
            className="mt-5 max-w-[22ch] text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Decisions at halftime, not spreadsheets after midnight.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-stratos-secondary sm:text-base">
            Stratos keeps the clock, event log, and scoreboard in sync so you
            can check O-line hold rate, D-line break rate, and workload when it
            matters. Works offline at the field, syncs across devices when you
            have internet.
          </p>
          <div
            className="mt-12 h-px w-full max-w-sm bg-gradient-to-r from-white/[0.14] via-white/[0.06] to-transparent"
            aria-hidden="true"
          />
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
