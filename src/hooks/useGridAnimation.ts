"use client";

import { useEffect, useRef, useState } from "react";

type GridAnim = {
  ref: React.RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
};

export function useGridAnimation(): GridAnim {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();

    const tick = (t: number) => {
      const el = ref.current;
      if (!el) return;

      const s = (t - t0) / 1000;

      // Slow drift + breathing opacity (kept subtle)
      const x = Math.sin(s * 0.12) * 18 + Math.sin(s * 0.053) * 10;
      const y = Math.cos(s * 0.10) * 14 + Math.cos(s * 0.041) * 8;
      const o = 0.18 + (Math.sin(s * 0.7) * 0.5 + 0.5) * 0.22;

      setStyle({
        transform: `translate3d(${x}px, ${y}px, 0)`,
        opacity: o,
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return { ref, style };
}
