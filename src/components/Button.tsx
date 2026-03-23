import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "solid" | "ghost";
  size?: "sm" | "md";
};

export default function Button({
  variant = "ghost",
  size = "md",
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stratos-accent/45";
  const sizes = size === "sm" ? "h-9 px-4 text-sm" : "h-10 px-5 text-sm";
  const variants =
    variant === "solid"
      ? "bg-stratos-text text-stratos-bg hover:opacity-90"
      : "bg-[var(--stratos-control-bg)] text-stratos-text ring-1 ring-[var(--stratos-control-border)] hover:bg-[var(--stratos-control-hover-bg)]";

  return (
    <Link className={[base, sizes, variants, className].filter(Boolean).join(" ")} {...props} />
  );
}
