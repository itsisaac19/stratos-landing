import ScrollReveal from "./ScrollReveal";
import SectionCanvas from "./SectionCanvas";
import HowItWorksCarousel from "./HowItWorksCarousel";

const steps = [
  {
    index: "01",
    title: "Roster once",
    body: "Reuse the same team and players across games and tournaments.",
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
      className="relative z-10 overflow-x-hidden bg-stratos-bg py-28 md:py-36"
      aria-labelledby="how-heading"
    >
      <SectionCanvas>
        <ScrollReveal>
          <HowItWorksCarousel steps={steps} />
        </ScrollReveal>
      </SectionCanvas>
    </section>
  );
}
