import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const items = [
  "Offline-friendly: SQLite locally; no hard network dependency while tracking.",
  "Restore after background or force-quit: timer and state reconstructed from stored game data.",
  "Single source of truth: mutations replay through projections—stats stay consistent after edits.",
  "Optional cloud sync when signed in—never required on the sideline.",
] as const;

export default function TrustStrip() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#050607] py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1.6px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />
      <SectionCanvas>
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
            Reliability
          </p>
          <h2
            id="trust-heading"
            className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
          >
            Built for bad signal and long days.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stratos-secondary">
            Built for college Ultimate captains and coaches who need clarity when
            the field is loud and the clock is real.
          </p>
          <ul className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {items.map((text) => (
              <li key={text} className="relative pl-5">
                <span
                  className="absolute left-0 top-[0.35rem] h-1 w-1 rounded-full bg-stratos-accent/80"
                  aria-hidden="true"
                />
                <p className="text-sm leading-snug text-stratos-secondary">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
