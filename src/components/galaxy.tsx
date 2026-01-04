"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  alpha: number;
  flickerSpeed: number;
  flickerOffset: number;
};

/**
 * Galaxy renders a layered starfield with slow parallax drift.
 * Optimized for performance using pre-calculated values and efficient rendering.
 */
export function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const dynamicStars: Star[] = [];
    const staticStars: Star[] = [];
    // Reduced count slightly for better performance on lower-end devices
    // while maintaining the visual density
    const dynCount = 100;
    const staticCount = 180;

    const initStar = (parallax: number, isStatic: boolean): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: parallax,
      speed: (0.05 + Math.random() * 0.25) * parallax,
      size: (Math.random() * 1.0 + 0.5) * (isStatic ? 1 : parallax),
      alpha: 0.2 + Math.random() * 0.4,
      flickerSpeed: 0.02 + Math.random() * 0.04,
      flickerOffset: Math.random() * Math.PI * 2,
    });

    // Initialize stars
    for (let i = 0; i < dynCount; i++) {
      dynamicStars.push(initStar(Math.random() * 1.2 + 0.3, false));
    }
    for (let i = 0; i < staticCount; i++) {
      staticStars.push(initStar(0.2, true));
    }

    let time = 0;

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Draw Static Stars (optimized as rectangles)
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      for (let i = 0; i < staticCount; i++) {
        const star = staticStars[i];
        // Simple sine wave for twinkling instead of random
        const flicker = Math.sin(time * star.flickerSpeed + star.flickerOffset);
        // Map sine -1..1 to 0.2..0.5 range
        ctx.globalAlpha = (flicker + 1) * 0.15 + 0.1;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }

      // Draw Dynamic Stars
      ctx.fillStyle = "rgb(124,244,255)"; // Cyan tint
      for (let i = 0; i < dynCount; i++) {
        const star = dynamicStars[i];
        ctx.globalAlpha = star.alpha * star.z;
        
        // Update position
        star.y += star.speed;
        // Subtle drift
        star.x += Math.sin(star.y * 0.002 + star.flickerOffset) * 0.2;

        // Wrap around
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }

        // Draw as circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

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
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60 mix-blend-screen"
      style={{ willChange: "transform" }}
    />
  );
}
