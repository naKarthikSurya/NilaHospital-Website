import type { ReactNode, TouchEvent } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type HeroGradientSectionProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroGradientSection({
  className,
  children,
}: HeroGradientSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const setGradientPoint = (clientX: number, clientY: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const bounds = section.getBoundingClientRect();
    const x = ((clientX - bounds.left) / bounds.width) * 100;
    const y = ((clientY - bounds.top) / bounds.height) * 100;

    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    section.style.setProperty("--gx", `${clampedX}%`);
    section.style.setProperty("--gy", `${clampedY}%`);
  };

  const resetGradientPoint = () => {
    const section = sectionRef.current;
    if (!section) return;

    section.style.setProperty("--gx", "50%");
    section.style.setProperty("--gy", "45%");
  };

  const handleTouch = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    setGradientPoint(touch.clientX, touch.clientY);
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "nila-gradient nila-gradient-motion nila-gradient-interactive",
        className
      )}
      onPointerMove={(event) => setGradientPoint(event.clientX, event.clientY)}
      onPointerDown={(event) => setGradientPoint(event.clientX, event.clientY)}
      onPointerLeave={resetGradientPoint}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={resetGradientPoint}
      onTouchCancel={resetGradientPoint}
    >
      {children}
    </section>
  );
}
