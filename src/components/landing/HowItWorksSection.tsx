import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";
import styles from "./howItWorksTimeline.module.css";

const steps = [
  {
    index: "01",
    title: "Roster once",
    body: "Team and players reused across games and tournaments.",
    src: "/screenshots/roster.PNG",
    alt: "Roster screen",
  },
  {
    index: "02",
    title: "Start the game",
    body:
      "Set opponent, tournament info, and game type, then jump straight into live tracking.",
    src: "/screenshots/game-settings.PNG",
    alt: "Game settings screen",
  },
  {
    index: "03",
    title: "Log every point",
    body:
      "Track events with undo and log edits. Timer and score stay in sync automatically.",
    src: "/screenshots/game-log.PNG",
    alt: "Game log screen",
  },
  {
    index: "04",
    title: "Review & share",
    body:
      "Check insights at halftime. Get a summary and share text when the game ends.",
    src: "/screenshots/game-summary.PNG",
    alt: "Game summary screen",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      className="relative z-10 bg-[#060708] py-28 md:py-36"
      aria-labelledby="how-heading"
    >
      <SectionCanvas>
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
                Flow
              </p>
              <h2
                id="how-heading"
                className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
              >
                How it works
              </h2>
            </div>
            <p className="max-w-md text-sm text-stratos-secondary md:text-right">
              Simple steps, no surprises when the clock is running.
            </p>
          </div>

          <div className="relative mt-16 md:mt-20">
            {/* Continuous spine: static only (no scroll-driven stroke; respects reduced motion by staying non-animated) */}
            <div
              className="pointer-events-none absolute bottom-8 left-[13px] top-8 w-px bg-gradient-to-b from-white/[0.22] via-white/[0.08] to-white/[0.04] md:hidden"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-white/[0.2] via-white/[0.09] to-white/[0.04] md:block"
              aria-hidden="true"
            />

            <ol className="relative list-none space-y-0 p-0">
              {steps.map((step, i) => (
                <li
                  key={step.index}
                  className={`group ${styles.row} ${i % 2 === 0 ? styles.rowOdd : styles.rowEven} pb-16 last:pb-0 md:pb-[4.5rem]`}
                >
                  <div
                    className={`${styles.contentCell} min-w-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}
                  >
                    <p className="font-mono text-[11px] tabular-nums tracking-wide text-stratos-accent">
                      {step.index}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-white md:mt-3">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-md text-sm leading-relaxed text-stratos-secondary md:mt-4 ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                    >
                      {step.body}
                    </p>
                    {/* Screenshot thumbnail */}
                    <div
                      className={`mt-5 inline-block overflow-hidden rounded-2xl shadow-[0_16px_48px_-16px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)_inset] ${i % 2 === 0 ? "md:float-right md:clear-right" : ""}`}
                      style={{ width: 120, aspectRatio: "9 / 19.5", position: "relative" }}
                    >
                      <Image
                        src={step.src}
                        alt={step.alt}
                        fill
                        className="object-cover object-top"
                        sizes="120px"
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
                  </div>

                  <div
                    className={`${styles.nodeCell} flex w-7 shrink-0 justify-center md:w-14`}
                  >
                    <span
                      className="relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-stratos-accent/90 bg-[#060708] shadow-[0_0_24px_rgba(59,130,246,0.22)] motion-safe:transition motion-safe:duration-300 group-hover:border-stratos-accent group-hover:shadow-[0_0_32px_rgba(59,130,246,0.35)]"
                      aria-hidden="true"
                    >
                      <span className="h-1 w-1 rounded-full bg-stratos-accent/90" />
                    </span>
                  </div>

                  <div className={styles.gapCell} aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
