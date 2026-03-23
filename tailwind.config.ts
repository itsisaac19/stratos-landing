import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        stratos: {
          bg: "var(--stratos-bg)",
          "bg-elevated": "var(--stratos-bg-elevated)",
          "bg-deep": "var(--stratos-bg-deep)",
          surface: "var(--stratos-surface)",
          "surface-light": "var(--stratos-surface-light)",
          card: "var(--stratos-card)",
          "card-hover": "var(--stratos-card-hover)",
          "device-frame": "var(--stratos-device-frame)",
          text: "var(--stratos-text)",
          secondary: "var(--stratos-text-secondary)",
          muted: "var(--stratos-text-muted)",
          accent: "var(--stratos-accent)",
          "accent-hover": "var(--stratos-accent-hover)",
          border: "var(--stratos-border)",
          "border-subtle": "var(--stratos-border-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-necosmic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "var(--stratos-shadow-soft)",
      },
    },
  },
  plugins: [],
} satisfies Config;
