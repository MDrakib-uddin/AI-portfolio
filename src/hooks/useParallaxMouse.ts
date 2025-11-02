import { useCallback, useRef } from 'react';

export const useParallaxMouse = () => {
  const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const listeners = useRef<Set<(dx: number, dy: number) => void>>(new Set());

  const update = (dx: number, dy: number) => {
    listeners.current.forEach((fn) => fn(dx, dy));
  };

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    pos.current.x = (e.clientX - cx) / rect.width; // -0.5..0.5 approx
    pos.current.y = (e.clientY - cy) / rect.height;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => update(pos.current.x, pos.current.y));
  }, []);

  const onMouseLeave = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => update(0, 0));
  }, []);

  const bind = (depth = 10) => {
    let dx = 0;
    let dy = 0;
    const handler = (x: number, y: number) => {
      dx = x * depth * 10; // px
      dy = y * depth * 10;
      el?.style.setProperty('transform', `translate3d(${dx}px, ${dy}px, 0)`);
    };
    let el: HTMLElement | null = null;
    return {
      ref: (node: HTMLElement | null) => {
        if (el && listeners.current.has(handler)) listeners.current.delete(handler);
        el = node;
        if (el) listeners.current.add(handler);
      },
      style: { willChange: 'transform', transition: 'transform 200ms ease-out' } as React.CSSProperties,
    };
  };

  return { onMouseMove, onMouseLeave, bind } as const;
};
