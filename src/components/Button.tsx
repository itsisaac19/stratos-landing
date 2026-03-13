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
    "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";
  const sizes = size === "sm" ? "h-9 px-4 text-sm" : "h-10 px-5 text-sm";
  const variants =
    variant === "solid"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-white/[0.04] text-white hover:bg-white/[0.07] ring-1 ring-white/10";

  return (
    <Link className={[base, sizes, variants, className].filter(Boolean).join(" ")} {...props} />
  );
}
