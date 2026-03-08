import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const COLORS = [
  "rgba(255, 182, 230, ",   // pink
  "rgba(255, 220, 100, ",   // yellow
  "rgba(255, 140, 80, ",    // orange
  "rgba(180, 255, 220, ",   // teal
  "rgba(200, 150, 255, ",   // lavender
  "rgba(255, 100, 180, ",   // magenta
];

export function FloatingParticles({ count = 60 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

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

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.4 + 0.1),
      opacity: Math.random() * 0.6 + 0.2,
      opacityDir: (Math.random() - 0.5) * 0.008,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.pulse += p.pulseSpeed;
        const glow = Math.sin(p.pulse) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * glow, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${(p.opacity * glow).toFixed(2)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir;

        if (p.opacity > 0.9) p.opacityDir = -Math.abs(p.opacityDir);
        if (p.opacity < 0.1) p.opacityDir = Math.abs(p.opacityDir);

        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
