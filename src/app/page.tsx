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
import { useState, type FormEvent, type MouseEvent } from "react";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleJoinClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const errorMessage =
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong joining the list. Please try again in a minute.";

        setStatus("error");
        setStatusMessage(errorMessage);
        return;
      }

      setStatus("success");
      setStatusMessage("You’re in. Check your inbox to confirm your email.");
      setEmail("");
    } catch {
      setStatus("error");
      setStatusMessage(
        "We couldn’t reach the server. Double-check your connection and try again."
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
        email={email}
        onEmailChange={setEmail}
        status={status}
        statusMessage={statusMessage}
        onSubmit={handleSubmit}
      />

      <section className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-start justify-center px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Early access
        </div>

        <h1 className="font-[var(--font-necosmic)] text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Coach the game, not the spreadsheet.
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
          Stratos streamlines ultimate stat tracking for captains and coaches,
          unifying scorekeeping, line management, and post-game breakdowns into
          one clean interface so your team improves faster every tournament.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            href="#waitlist"
            variant="solid"
            onClick={handleJoinClick}
          >
            Join the early access
          </Button>
          <Button
            href="https://www.linkedin.com/company/getstratos"
            variant="ghost"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-xs text-white/45">
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
          secondary={
            <Button
              href="https://www.linkedin.com/company/getstratos"
              variant="ghost"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </Button>
          }
        />
        <SiteFooter />
      </div>
    </main>
  );
}
