import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const items = [
  {
    title: "Works offline",
    description: "Track games without internet. Everything saves to your device automatically."
  },
  {
    title: "Never lose progress",
    description: "Close the app mid-game? Your timer and stats pick up right where you left off."
  },
  {
    title: "Edit anytime",
    description: "Fix mistakes on the fly. Stats update instantly so the numbers stay accurate."
  },
  {
    title: "Sync when ready",
    description: "Cloud backup is optional. Use it when you want, not when you're forced to."
  },
] as const;

export default function TrustStrip() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-stratos-bg-deep py-24 md:py-32"
      aria-labelledby="trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--stratos-trust-dots) 1px, transparent 1.6px)",
          backgroundSize: "22px 22px",
          opacity: "var(--stratos-trust-dots-opacity)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--stratos-divider-soft)] to-transparent"
        aria-hidden="true"
      />
      <SectionCanvas>
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
            Reliability
          </p>
          <h2
            id="trust-heading"
            className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] text-stratos-text sm:text-3xl"
          >
            Built for bad signal and long days.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stratos-secondary">
            No matter what happens at the field, your tracking keeps working.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--stratos-control-border)] bg-[var(--stratos-control-bg)] p-5">
                <h3 className="text-sm font-semibold text-stratos-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stratos-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
