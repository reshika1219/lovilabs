'use client';
import { useRef, useEffect, useState } from 'react';
import './MagneticButton.css';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}) {
  const buttonRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDist = 120;

      if (distance < maxDist) {
        const strength = (1 - distance / maxDist) * 0.35;
        setTransform({
          x: distX * strength,
          y: distY * strength,
        });
      } else {
        setTransform({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { onClick };

  return (
    <Tag
      ref={buttonRef}
      className={`magnetic-btn magnetic-btn--${variant} magnetic-btn--${size} ${className}`}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }}
      data-cursor-hover
      {...tagProps}
      {...props}
    >
      <span className="magnetic-btn__text">{children}</span>
      <span className="magnetic-btn__bg" />
    </Tag>
  );
}
