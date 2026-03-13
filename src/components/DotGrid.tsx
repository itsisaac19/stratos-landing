"use client";

import styles from "@/styles/dotGrid.module.css";
import { useGridAnimation } from "@/hooks/useGridAnimation";

export default function DotGrid() {
  const { ref, style } = useGridAnimation();

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div ref={ref} className={styles.grid} style={style} />
      <div className={styles.vignette} />
    </div>
  );
}
