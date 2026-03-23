import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const faqs = [
  {
    q: "Does it work offline?",
    a: "Yes. Everything saves to your device so you can track games without relying on spotty venue Wi‑Fi or cell service.",
  },
  {
    q: "What happens if I fix a mistake in the log?",
    a: "Edits replay through the same system as live events, so stats stay consistent after you correct the log.",
  },
  {
    q: "Can I use one roster for a whole tournament?",
    a: "Yes. Roster your team once and reuse players across games and tournaments.",
  },
  {
    q: "What stats appear at halftime vs post-game?",
    a: "Halftime shows minutes, plus/minus, and line efficiency. Post-game adds summary leaders and share-ready text.",
  },
  {
    q: "How does account / sync work?",
    a: "You can use Stratos without an account. Sign in if you want to sync data across devices or back up to the cloud.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      className="relative z-10 bg-stratos-bg py-28 md:py-36"
      aria-labelledby="faq-heading"
    >
      <SectionCanvas narrow>
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-stratos-text sm:text-3xl"
          >
            Questions
          </h2>
          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[var(--stratos-control-border)] bg-[var(--stratos-control-bg)] px-5 py-4 transition hover:border-[var(--stratos-control-hover-border)] hover:bg-[var(--stratos-control-hover-bg)] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-stratos-text outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-stratos-accent/80">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span
                      className="mt-0.5 inline-block h-2.5 w-2.5 shrink-0 rotate-45 border border-stratos-secondary border-b-0 border-l-0 transition motion-reduce:transition-none group-open:-rotate-[135deg]"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-stratos-secondary">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
