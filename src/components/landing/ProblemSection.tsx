import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

export default function ProblemSection() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#060708] pb-28 pt-20 md:pb-32 md:pt-24"
      aria-labelledby="problem-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />
      <SectionCanvas narrow>
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
            Built for the sideline
          </p>
          <h2
            id="problem-heading"
            className="mt-5 max-w-[22ch] text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Decisions at halftime—not spreadsheets after midnight.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-stratos-secondary sm:text-base">
            Stratos keeps the clock, event log, and scoreboard in lockstep so you
            can read O-line hold rate, D-line break rate, and workload when it
            matters. Track on the field with local-first storage—SQLite offline,
            optional sync when you&apos;re signed in and connectivity cooperates.
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
