import LegalMarkdown from "@/components/legal/LegalMarkdown";
import LegalPageShell from "@/components/legal/LegalPageShell";
import { loadPrivacyMarkdown } from "@/lib/legalDocs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Stratos",
  description:
    "Privacy Policy for the Stratos mobile application and related services.",
};

export default async function PrivacyPage() {
  const content = await loadPrivacyMarkdown();

  return (
    <LegalPageShell>
      <LegalMarkdown content={content} />
    </LegalPageShell>
  );
}
