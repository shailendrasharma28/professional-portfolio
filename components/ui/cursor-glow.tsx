"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let frame = 0;
    const moveGlow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
        glow.style.opacity = "1";
      });
    };
    const hideGlow = () => { glow.style.opacity = "0"; };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideGlow);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", moveGlow);
      document.documentElement.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
