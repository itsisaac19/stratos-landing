import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        stratos: {
          bg: "var(--stratos-bg)",
          surface: "var(--stratos-surface)",
          "surface-light": "var(--stratos-surface-light)",
          text: "var(--stratos-text)",
          secondary: "var(--stratos-text-secondary)",
          muted: "var(--stratos-text-muted)",
          accent: "var(--stratos-accent)",
          border: "var(--stratos-border)",
          "border-subtle": "var(--stratos-border-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-necosmic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
