"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger when multiple reveals mount together */
  delayMs?: number;
};

export default function ScrollReveal({
  children,
  className,
  delayMs = 0,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) setVisible(true);
  }, [reduced]);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const style: CSSProperties | undefined =
    !reduced && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        !reduced && !visible ? "translate-y-7 opacity-0" : "translate-y-0 opacity-100",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        !reduced
          ? "transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
