import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Wider readable column */
  narrow?: boolean;
};

export default function SectionCanvas({ children, className, narrow }: Props) {
  return (
    <div
      className={[
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        narrow ? "max-w-[720px]" : "max-w-5xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
