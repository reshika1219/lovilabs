'use client';
import { useState, useEffect, useRef } from 'react';

export default function useScrollProgress(elementRef = null) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef?.current) {
        const el = elementRef.current;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const p = Math.max(0, Math.min(1,
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setProgress(p);
      } else {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return progress;
}
