'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalized, setNormalized] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        const { x, y } = mouseRef.current;
        setPosition({ x, y });
        setNormalized({
          x: (x / window.innerWidth) * 2 - 1,
          y: (y / window.innerHeight) * 2 - 1,
        });
        rafRef.current = null;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return { position, normalized };
}
