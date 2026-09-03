'use client';
import { useRef, useEffect, useState } from 'react';
import './AnimatedText.css';

export default function AnimatedText({
  text,
  tag: Tag = 'h2',
  type = 'words',
  stagger = 0.04,
  delay = 0,
  className = '',
  threshold = 0.2,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const renderContent = () => {
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className={`anim-text__char ${isVisible ? 'anim-text__char--visible' : ''}`}
          style={{ transitionDelay: `${delay + i * stagger}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }

    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span key={i} className="anim-text__word-wrap">
          <span
            className={`anim-text__word ${isVisible ? 'anim-text__word--visible' : ''}`}
            style={{ transitionDelay: `${delay + i * stagger}s` }}
          >
            {word}
          </span>
          {i < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ));
    }

    if (type === 'lines') {
      return (
        <span
          className={`anim-text__line ${isVisible ? 'anim-text__line--visible' : ''}`}
          style={{ transitionDelay: `${delay}s` }}
        >
          {text}
        </span>
      );
    }
  };

  return (
    <Tag ref={ref} className={`anim-text anim-text--${type} ${className}`} {...props}>
      {renderContent()}
    </Tag>
  );
}
