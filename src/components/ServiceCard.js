'use client';
import { useRef, useState, useEffect } from 'react';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, deliverables = [], index = 0 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setTransform({ rotateX: 0, rotateY: 0 });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="service-card"
      style={{
        transform: `perspective(800px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        animationDelay: `${index * 0.1}s`,
      }}
      data-cursor-hover
    >
      <div className="service-card__glow" />
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {deliverables.length > 0 && (
        <ul className="service-card__deliverables">
          {deliverables.map((item, i) => (
            <li key={i} className="service-card__deliverable">
              <span className="service-card__deliverable-dot" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="service-card__border" />
    </div>
  );
}
