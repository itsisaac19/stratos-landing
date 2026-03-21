import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";

const pillars = [
  {
    title: "Live game flow",
    body:
      "Track score, time, possession, and everything between points. Set lines and log passes with quick taps. Edit mistakes on the fly so your stats stay accurate.",
    src: "/screenshots/live-board.PNG",
    alt: "Live board screen",
  },
  {
    title: "Coach view",
    body:
      "Points and minutes per player, plus/minus, O-line hold % and D-line break %. Make adjustments based on what actually happened on the field.",
    src: "/screenshots/insights.PNG",
    alt: "Halftime insights screen",
  },
  {
    title: "Finish strong",
    body:
      "Get a post-game summary with top performers. Copy and share to your team chat in one tap. Your data stays on your device, syncs when you want it to.",
    src: "/screenshots/game-summary.PNG",
    alt: "Game summary screen",
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
              Track, understand, share. Three things that stay in sync when the
              game speeds up.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
            {pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-px shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
              >
                <div className="relative h-full rounded-[15px] bg-[#0a0b0d]/95 transition duration-300 group-hover:bg-[#0c0d10]/95">
                  {/* Screenshot thumbnail */}
                  <div
                    className="relative w-full overflow-hidden rounded-t-[15px]"
                    style={{ aspectRatio: "9 / 10" }}
                  >
                    <Image
                      src={pillar.src}
                      alt={pillar.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.05),transparent_45%,rgba(0,0,0,0.5))]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0b0d] to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="px-6 py-6">
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
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
