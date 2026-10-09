import { useEffect, useRef, useState } from "react";

/** Returns [ref, progress 0..1]: how far the element has been scrolled through (reaches 1 near the middle of the screen). */
export default function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const { top, height } = node.getBoundingClientRect();
      const value = (window.innerHeight * 0.6 - top) / height;
      setProgress(Math.min(Math.max(value, 0), 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return [ref, progress];
}
