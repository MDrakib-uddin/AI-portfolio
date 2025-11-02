import { useEffect, useRef } from 'react';

const DotWaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; base: number; phase: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const state = {
      t: 0,
      speed: 0.02,
      ready: false,
      maxLines: 220,
      linkDistance: 95,
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = Math.floor((rect?.width || window.innerWidth));
      height = Math.floor((rect?.height || window.innerHeight));
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const area = width * height;
      const target = Math.max(80, Math.min(220, Math.floor(area / 12000)));
      const stars: typeof starsRef.current = [];
      for (let i = 0; i < target; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          base: 1.6 + Math.random() * 2.2,
          phase: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
      state.ready = true;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || canvas);

    const draw = () => {
      if (!state.ready) return;
      ctx.clearRect(0, 0, width, height);
      const time = state.t;

      ctx.shadowColor = 'rgba(255,255,255,0.75)';
      ctx.shadowBlur = 5;

      const stars = starsRef.current;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -2) s.x = width + 2; else if (s.x > width + 2) s.x = -2;
        if (s.y < -2) s.y = height + 2; else if (s.y > height + 2) s.y = -2;

        const tw = 0.55 + 0.45 * Math.sin(time * (1.5 + (s.base * 0.2)) + s.phase);
        const alpha = Math.min(0.98, 0.35 + tw * 0.65);
        const size = s.base * (0.9 + tw * 1.0);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.lineWidth = 1.2;
      let linesDrawn = 0;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          if (linesDrawn > state.maxLines) break;
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < state.linkDistance) {
            const o = 1 - dist / state.linkDistance;
            const alpha = 0.08 + o * 0.22;
            ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            linesDrawn++;
          }
        }
        if (linesDrawn > state.maxLines) break;
      }

      state.t += state.speed;
      rafRef.current = requestAnimationFrame(draw);
    };

    // Animate continuously
    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] block pointer-events-none"
    />
  );
};

export default DotWaveBackground;
