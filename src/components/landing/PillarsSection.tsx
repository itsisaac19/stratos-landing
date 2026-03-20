import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const pillars = [
  {
    title: "Live game flow",
    body:
      "Scoreboard, timer, possession, and between-points flow—pull/receive, hang time when you want it—plus lines and two-tap passes with confirm. Everything lands in an editable game log you can trust mid-tournament.",
  },
  {
    title: "Coach view",
    body:
      "Halftime-ready: points and minutes per player, plus/minus, O-line hold % and D-line break %—so adjustments are grounded in what already happened on the field.",
  },
  {
    title: "Finish strong",
    body:
      "Post-game summary with leaders; one-tap copy for Discord or WhatsApp. Data stays local-first; sync when it makes sense for your workflow.",
  },
] as const;

export default function PillarsSection() {
  return (
    <section
      className="relative z-10 bg-[#070809] py-28 md:py-36"
      aria-labelledby="pillars-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(255,255,255,0.06),transparent_55%)]"
        aria-hidden="true"
      />
      <SectionCanvas>
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stratos-muted">
                Capabilities
              </p>
              <h2
                id="pillars-heading"
                className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
              >
                Everything you need between the lines
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stratos-secondary md:text-right">
              Track, understand, share—three loops that stay in sync when the
              game speeds up.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
            {pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-px shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
              >
                <div className="relative h-full rounded-[15px] bg-[#0a0b0d]/95 px-6 py-7 transition duration-300 group-hover:bg-[#0c0d10]/95">
                  <div
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-stratos-accent/10 blur-2xl transition duration-500 group-hover:bg-stratos-accent/15"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stratos-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="relative mt-4 text-base font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-stratos-secondary">
                    {pillar.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
