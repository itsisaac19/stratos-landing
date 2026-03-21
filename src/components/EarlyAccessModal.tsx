"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  email: string;
  teamName: string;
  category: string;
  division: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  status: SubmissionStatus;
  statusMessage: string;
  onSubmit: (data: FormData) => void | Promise<void>;
};

const DIVISIONS = {
  College: [
    "Men's Division I",
    "Men's Division III",
    "Women's Division I",
    "Women's Division III",
  ],
  Club: ["Open", "Women's", "Mixed"],
  "League / Intramural": [
    "Open",
    "Women's",
    "Mixed",
    "Beginner",
    "Intermediate",
    "Advanced",
  ],
  "Youth / High School": ["Boys", "Girls", "Mixed"],
  Masters: [
    "Masters Men's",
    "Masters Women's",
    "Masters Mixed",
    "Grand Masters",
    "Great Grand Masters",
  ],
} as const;

type Category = keyof typeof DIVISIONS;

export default function EarlyAccessModal({
  isOpen,
  onClose,
  status,
  statusMessage,
  onSubmit,
}: Props) {
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [division, setDivision] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  if (!isOpen) return null;

  const availableDivisions = category ? DIVISIONS[category] : [];

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return undefined;
  };

  const validateTeamName = (value: string): string | undefined => {
    if (!value.trim()) return "Team name is required";
    if (value.trim().length < 2) return "Team name must be at least 2 characters";
    return undefined;
  };

  const validateCategory = (value: string): string | undefined => {
    if (!value) return "Please select a category";
    return undefined;
  };

  const validateDivision = (value: string): string | undefined => {
    if (!value) return "Please select a division";
    return undefined;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    
    let error: string | undefined;
    switch (field) {
      case "email":
        error = validateEmail(email);
        break;
      case "teamName":
        error = validateTeamName(teamName);
        break;
      case "category":
        error = validateCategory(category);
        break;
      case "division":
        error = validateDivision(division);
        break;
    }
    
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newErrors: Partial<Record<keyof FormData, string>> = {
      email: validateEmail(email),
      teamName: validateTeamName(teamName),
      category: validateCategory(category),
      division: validateDivision(division),
    };

    setErrors(newErrors);
    setTouched({
      email: true,
      teamName: true,
      category: true,
      division: true,
    });

    const hasErrors = Object.values(newErrors).some((error) => error !== undefined);
    if (hasErrors) return;

    onSubmit({ email, teamName, category, division });
  };

  const handleClose = () => {
    setEmail("");
    setTeamName("");
    setCategory("");
    setDivision("");
    setErrors({});
    setTouched({});
    onClose();
  };

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
            onClick={handleClose}
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
              Email
            </label>
            <input
              id="early-access-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (touched.email) {
                  setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
                }
              }}
              onBlur={() => handleBlur("email")}
              placeholder="you@clubname.org"
              className={`h-10 w-full rounded-full border ${
                touched.email && errors.email
                  ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30"
                  : "border-white/15 focus:border-white/40 focus:ring-white/30"
              } bg-white/[0.04] px-4 text-base text-white placeholder:text-white/30 outline-none ring-0 transition focus:ring-2`}
              aria-invalid={touched.email && errors.email ? "true" : "false"}
              aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-xs text-rose-400">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="team-name"
              className="block text-xs font-medium text-white/70"
            >
              Team name
            </label>
            <input
              id="team-name"
              type="text"
              value={teamName}
              onChange={(e) => {
                setTeamName(e.target.value);
                if (touched.teamName) {
                  setErrors((prev) => ({ ...prev, teamName: validateTeamName(e.target.value) }));
                }
              }}
              onBlur={() => handleBlur("teamName")}
              placeholder="Your team name"
              className={`h-10 w-full rounded-full border ${
                touched.teamName && errors.teamName
                  ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30"
                  : "border-white/15 focus:border-white/40 focus:ring-white/30"
              } bg-white/[0.04] px-4 text-base text-white placeholder:text-white/30 outline-none ring-0 transition focus:ring-2`}
              aria-invalid={touched.teamName && errors.teamName ? "true" : "false"}
              aria-describedby={touched.teamName && errors.teamName ? "team-name-error" : undefined}
            />
            {touched.teamName && errors.teamName && (
              <p id="team-name-error" className="text-xs text-rose-400">
                {errors.teamName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="category"
              className="block text-xs font-medium text-white/70"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                const newCategory = e.target.value as Category;
                setCategory(newCategory);
                setDivision("");
                if (touched.category) {
                  setErrors((prev) => ({ ...prev, category: validateCategory(newCategory) }));
                }
              }}
              onBlur={() => handleBlur("category")}
              className={`h-10 w-full rounded-full border ${
                touched.category && errors.category
                  ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30"
                  : "border-white/15 focus:border-white/40 focus:ring-white/30"
              } bg-white/[0.04] pl-4 pr-10 text-base text-white outline-none ring-0 transition focus:ring-2 appearance-none [&>option]:bg-[#1a1b1f] [&>option]:text-white`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                colorScheme: 'dark',
              }}
              aria-invalid={touched.category && errors.category ? "true" : "false"}
              aria-describedby={touched.category && errors.category ? "category-error" : undefined}
            >
              <option value="" disabled>
                Select a category
              </option>
              {Object.keys(DIVISIONS).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {touched.category && errors.category && (
              <p id="category-error" className="text-xs text-rose-400">
                {errors.category}
              </p>
            )}
          </div>

          {category && (
            <div className="space-y-2">
              <label
                htmlFor="division"
                className="block text-xs font-medium text-white/70"
              >
                Division
              </label>
              <select
                id="division"
                value={division}
                onChange={(e) => {
                  setDivision(e.target.value);
                  if (touched.division) {
                    setErrors((prev) => ({ ...prev, division: validateDivision(e.target.value) }));
                  }
                }}
                onBlur={() => handleBlur("division")}
                className={`h-10 w-full rounded-full border ${
                  touched.division && errors.division
                    ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/30"
                    : "border-white/15 focus:border-white/40 focus:ring-white/30"
                } bg-white/[0.04] pl-4 pr-10 text-base text-white outline-none ring-0 transition focus:ring-2 appearance-none [&>option]:bg-[#1a1b1f] [&>option]:text-white`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.5)' d='M6 8L2 4h8z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  colorScheme: 'dark',
                }}
                aria-invalid={touched.division && errors.division ? "true" : "false"}
                aria-describedby={touched.division && errors.division ? "division-error" : undefined}
              >
                <option value="" disabled>
                  Select a division
                </option>
                {availableDivisions.map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
              {touched.division && errors.division && (
                <p id="division-error" className="text-xs text-rose-400">
                  {errors.division}
                </p>
              )}
            </div>
          )}

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
