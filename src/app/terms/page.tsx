import LegalMarkdown from "@/components/legal/LegalMarkdown";
import LegalPageShell from "@/components/legal/LegalPageShell";
import { loadTermsMarkdown } from "@/lib/legalDocs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Stratos",
  description:
    "Terms of Service for the Stratos mobile application and related services.",
};

export default async function TermsPage() {
  const content = await loadTermsMarkdown();

  return (
    <LegalPageShell>
      <LegalMarkdown content={content} />
    </LegalPageShell>
  );
}
