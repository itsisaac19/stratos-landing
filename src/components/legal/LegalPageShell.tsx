import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LegalPageShell({ children }: Props) {
  return (
    <main className="min-h-dvh bg-stratos-bg">
      <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
        <nav className="mb-10">
          <Link
            href="/"
            className="text-sm text-stratos-secondary transition-colors hover:text-stratos-text"
          >
            ← Stratos
          </Link>
        </nav>
        {children}
      </div>
    </main>
  );
}
