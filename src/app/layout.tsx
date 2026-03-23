import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRoot from "@/components/theme/ThemeRoot";
import { themeInitScript } from "@/components/theme/themeScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stratos",
  description:
    "Ultimate stat tracking for captains and coaches—live games, halftime insights, and share-ready summaries in one disciplined workflow.",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-dvh font-sans">
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeRoot>{children}</ThemeRoot>
      </body>
    </html>
  );
}
