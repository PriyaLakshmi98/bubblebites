import { useEffect, useRef, useState } from "react";

/** Returns [ref, seen]. `seen` flips to true once the element scrolls into view (and stays true). */
export default function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}
