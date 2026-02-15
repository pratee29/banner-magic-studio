import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import { useEffect, useRef } from "react";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

interface CurvedAvatarRowProps {
  direction?: "left" | "right";
  speed?: number;
  curveIntensity?: number;
  rowIndex?: number;
}

const CurvedAvatarRow = ({ direction = "left", speed = 30, curveIntensity = 40, rowIndex = 0 }: CurvedAvatarRowProps) => {
  const repeated = [...avatars, ...avatars, ...avatars, ...avatars, ...avatars, ...avatars];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = direction === "left" ? 0 : -container.scrollWidth / 2;
    const pixelsPerFrame = (direction === "left" ? -1 : 1) * (60 / speed);

    const animate = () => {
      position += pixelsPerFrame;
      
      if (direction === "left" && position <= -container.scrollWidth / 2) {
        position = 0;
      } else if (direction === "right" && position >= 0) {
        position = -container.scrollWidth / 2;
      }

      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, speed]);

  // Create arc curve using individual card transforms
  const totalCards = repeated.length;
  const getCardTransform = (index: number) => {
    // Normalize index to create curve across visible portion
    const visibleCards = 8;
    const localIndex = index % visibleCards;
    const normalized = (localIndex / (visibleCards - 1)) * 2 - 1; // -1 to 1
    const y = normalized * normalized * curveIntensity; // parabolic curve
    const rotate = normalized * 3; // slight rotation for 3D feel
    const scale = 1 - Math.abs(normalized) * 0.08; // slightly smaller at edges
    
    return {
      transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: 1 - Math.abs(normalized) * 0.15,
    };
  };

  return (
    <div className="overflow-hidden w-full" style={{ padding: `${curveIntensity + 10}px 0` }}>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {repeated.map((src, i) => {
          const cardStyle = getCardTransform(i);
          return (
            <div
              key={i}
              className="avatar-card flex-shrink-0"
              style={{
                width: "170px",
                height: "195px",
                ...cardStyle,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={src}
                alt={`Student ${(i % avatars.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurvedAvatarRow;
