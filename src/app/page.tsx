"use client";

import DotGrid from "@/components/DotGrid";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import Button from "@/components/Button";
import ClosingCta from "@/components/landing/ClosingCta";
import FaqSection from "@/components/landing/FaqSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PillarsSection from "@/components/landing/PillarsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductGlimpse from "@/components/landing/ProductGlimpse";
import SiteFooter from "@/components/landing/SiteFooter";
import TrustStrip from "@/components/landing/TrustStrip";
import Image from "next/image";
import { useState, type MouseEvent } from "react";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  email: string;
  teamName: string;
  category: string;
  division: string;
};

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleJoinClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    setStatus("idle");
    setStatusMessage("");
  };

  const handleLearnMoreClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const problemSection = document.getElementById("problem");
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (data: FormData) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json().catch(() => ({}));
        const errorMessage =
          typeof responseData?.error === "string"
            ? responseData.error
            : "Something went wrong joining the list. Please try again in a minute.";

        setStatus("error");
        setStatusMessage(errorMessage);
        return;
      }

      setStatus("success");
      setStatusMessage("You're in. Check your inbox to confirm your email.");
    } catch {
      setStatus("error");
      setStatusMessage(
        "We couldn't reach the server. Double-check your connection and try again."
      );
    }
  };

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#060708]">
      <DotGrid />

      <header className="pointer-events-none absolute left-6 top-6 z-20 md:left-10 md:top-8">
        <div className="pointer-events-auto inline-flex items-center">
          <Image
            src="/logos/stratos-logo.svg"
            alt="Stratos"
            width={48}
            height={12}
            priority
          />
        </div>
      </header>

      <EarlyAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={status}
        statusMessage={statusMessage}
        onSubmit={handleSubmit}
      />

      <section className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-start justify-center px-6 pt-32 pb-16 md:flex-row md:items-center md:px-10 md:py-12 lg:px-16">
        <div className="flex-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-stratos-accent" />
            Early access
          </div>

          <h1 className="font-[var(--font-necosmic)] text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The game moves fast, your tools should too.
          </h1>

          <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
            Stay with the game as it happens. Track what matters in real time, manage lines without slowing down, and make decisions that hold up.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              href="#waitlist"
              variant="solid"
              onClick={handleJoinClick}
            >
              Join the early access
            </Button>
            <Button
              href="#problem"
              variant="ghost"
              onClick={handleLearnMoreClick}
            >
              Learn more
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/45">
            <div>
              <div className="font-medium text-white/70">Movement by design</div>
              <div>Gesture-first actions for fast, intuitive scorekeeping.</div>
            </div>
            <div>
              <div className="font-medium text-white/70">
                Built for granularity
              </div>
              <div>Detailed stats for every play, every point, every game.</div>
            </div>
          </div>
        </div>

        {/* Hero screenshot — visible on md+ */}
        <div className="pointer-events-none hidden md:block md:ml-12 lg:ml-16 shrink-0">
          <div
            className="relative overflow-hidden rounded-[15px] shadow-[0_32px_96px_-24px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.07)_inset]"
            style={{ width: 200, aspectRatio: "9 / 19.5" }}
          >
            <Image
              src="/screenshots/live-board.PNG"
              alt="Stratos live board screen"
              fill
              className="object-cover object-top"
              sizes="200px"
              priority
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.06),transparent_45%,rgba(0,0,0,0.35))]"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-3 h-4 w-[28%] -translate-x-1/2 rounded-full bg-black/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <div id="waitlist" className="relative z-10 scroll-mt-8">
        <ProblemSection />
        <PillarsSection />
        <HowItWorksSection />
        <TrustStrip />
        <ProductGlimpse />
        <FaqSection />
        <ClosingCta
          primary={
            <Button
              href="#waitlist"
              variant="solid"
              onClick={handleJoinClick}
            >
              Join the early access
            </Button>
          }
        />
        <SiteFooter />
      </div>
    </main>
  );
}
