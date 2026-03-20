"use client";

import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onEmailChange: (value: string) => void;
  status: SubmissionStatus;
  statusMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

export default function EarlyAccessModal({
  isOpen,
  onClose,
  email,
  onEmailChange,
  status,
  statusMessage,
  onSubmit,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#05060a] p-6 shadow-xl outline-none">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Join the early access
            </h2>
            <p className="mt-1 text-xs text-white/60">
              Drop your email and we&apos;ll let you know when Stratos is ready
              for your team.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-white/50 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="sr-only">Close</span>
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
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
              onChange={(e) => onEmailChange(e.target.value)}
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
              No spam, ever. Just an occasional update when new features land
              or we&apos;re opening more teams.
            </p>
            {status === "error" && statusMessage && (
              <p className="text-[11px] text-rose-400">{statusMessage}</p>
            )}
            {status === "success" && statusMessage && (
              <p className="text-[11px] text-emerald-400">{statusMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
