 "use client";

import DotGrid from "@/components/DotGrid";
import Button from "@/components/Button";
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
    <main className="relative min-h-dvh overflow-hidden bg-[#060708]">
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

      <DotGrid />

      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#05060a] p-6 shadow-xl outline-none">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Join the early access
                </h2>
                <p className="mt-1 text-xs text-white/60">
                  Drop your email and we&apos;ll let you know when Stratos is ready for your team.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1 text-white/50 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className="sr-only">Close</span>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="early-access-email"
                  className="block text-xs font-medium text-white/70"
                >
                  Work email
                </label>
                <input
                  id="early-access-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@clubname.org"
                  className="h-10 w-full rounded-full border border-white/15 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-white text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {status === "loading" ? "Joining…" : "Join the list"}
              </button>

              <div className="space-y-1">
                <p className="text-[11px] leading-relaxed text-white/40">
                  No spam, ever. Just an occasional update when new features land or we&apos;re opening more teams.
                </p>
                {status === "error" && statusMessage && (
                  <p className="text-[11px] text-rose-400">{statusMessage}</p>
                )}
                {status === "success" && statusMessage && (
                  <p className="text-[11px] text-emerald-400">
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-start justify-center px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Early access
        </div>

        <h1 className="font-[var(--font-necosmic)] text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Coach the game, not the spreadsheet.
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
        Stratos streamlines ultimate stat tracking for captains and coaches, unifying scorekeeping, line management, and post-game breakdowns into one clean interface so your team improves faster every tournament.
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
            <div className="font-medium text-white/70">Built for granularity</div>
            <div>Detailed stats for every play, every point, every game.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

