import { useEffect, useState } from "react";

/** Counts from 0 to `end` once `start` is true. Respects reduced motion. */
export default function useCountUp(end, start, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return undefined;
    }
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const k = Math.min((now - t0) / duration, 1);
      setValue(Math.round(end * (1 - (1 - k) ** 3))); // ease-out
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration]);

  return value;
}
