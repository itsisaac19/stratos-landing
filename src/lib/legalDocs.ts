import fs from "fs/promises";
import path from "path";

const LEGAL_DIR = path.join(process.cwd(), "public/legal");

export async function loadTermsMarkdown(): Promise<string> {
  const filePath = path.join(LEGAL_DIR, "Stratos_Terms_of_Service.md");
  const raw = await fs.readFile(filePath, "utf-8");
  return raw.replace(/\]\(\.\/PRIVACY_POLICY\.md\)/g, "](/privacy)");
}

export async function loadPrivacyMarkdown(): Promise<string> {
  const filePath = path.join(LEGAL_DIR, "Stratos_Privacy_Policy.md");
  return fs.readFile(filePath, "utf-8");
}
