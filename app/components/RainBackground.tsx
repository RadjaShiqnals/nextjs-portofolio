"use client";
import { useCallback, useEffect, useRef, memo } from "react";

const RainBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, drops: any[]) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.strokeStyle = "#4a90e2";
    ctx.lineWidth = 1;

    drops.forEach((drop) => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + 20);
      ctx.stroke();
      
      drop.y += drop.speed;
      if (drop.y > window.innerHeight) {
        drop.y = -20;
        drop.x = Math.random() * window.innerWidth;
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create raindrops
    const drops = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 5 + Math.random() * 10
    }));

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      draw(ctx, drops);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
});

RainBackground.displayName = "RainBackground";

export default RainBackground;