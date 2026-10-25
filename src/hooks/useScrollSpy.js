import { useEffect, useState } from "react";

/**
 * Highlights the section id currently in view for anchored sub-navigation.
 * `ids` must be a stable (module-level) array.
 */
export default function useScrollSpy(ids, offset = 150) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const update = () => {
      let current = ids[0] ?? null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      setActiveId(nearBottom ? ids[ids.length - 1] : current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids, offset]);

  return activeId;
}