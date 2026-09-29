"use client";

import { useEffect, useState } from "react";

type Star = {
  left: number;
  delay: number;
  duration: number;
  size: number;
};

export default function FallingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 35 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 5,
      size: 1 + Math.random() * 2,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute -top-10 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `falling-star ${star.duration}s linear ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}