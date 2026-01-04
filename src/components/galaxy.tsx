"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
};

/**
 * Galaxy renders a layered starfield with slow parallax drift.
 * It lives behind all content to create a subtle space-grade backdrop.
 */
export function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dynamicStars: Star[] = [];
    const staticStars: Star[] = [];
    const dynCount = 140;
    const staticCount = 220;

    const initStar = (parallax: number): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: parallax,
      speed: 0.05 + Math.random() * 0.25 * parallax,
      size: Math.random() * 1.2 + parallax * 0.8,
    });

    for (let i = 0; i < dynCount; i += 1) dynamicStars.push(initStar(Math.random() * 1.2 + 0.3));
    for (let i = 0; i < staticCount; i += 1) staticStars.push(initStar(0.2));

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Static sparkle layer
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      staticStars.forEach((star) => {
        ctx.globalAlpha = 0.35 + Math.random() * 0.15;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // Dynamic drift layer
      dynamicStars.forEach((star) => {
        ctx.globalAlpha = 0.35 + star.z * 0.4;
        ctx.fillStyle = "rgba(124,244,255,0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed + star.z * 0.4;
        star.x += Math.sin(star.y * 0.002) * 0.25;
        if (star.y > canvas.height + 20) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70 mix-blend-screen"
    />
  );
}


