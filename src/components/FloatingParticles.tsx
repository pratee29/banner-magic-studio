import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingParticles = () => {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  );

  return (
    <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `radial-gradient(circle, hsla(36, 90%, 65%, ${p.opacity}) 0%, transparent 70%)`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 3}px hsla(36, 90%, 55%, ${p.opacity * 0.5})`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
