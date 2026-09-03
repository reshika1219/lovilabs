'use client';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import MagneticButton from '@/components/MagneticButton';
import useMousePosition from '@/hooks/useMousePosition';
import './portfolio.css';

export default function PortfolioPage() {
  const { normalized } = useMousePosition();

  return (
    <div className="page-content">
      <section className="portfolio-hero">
        <div className="portfolio-hero__bg">
          <div
            className="portfolio-hero__icon"
            style={{
              transform: `translate(${normalized.x * 20}px, ${normalized.y * 20}px) rotate(${normalized.x * 8}deg)`,
            }}
          >
            <img src="/assets/ICON - FULL COLOR.png" alt="" />
          </div>
          <div className="portfolio-hero__circle portfolio-hero__circle--1"
            style={{ transform: `translate(${normalized.x * -15}px, ${normalized.y * -15}px)` }}
          />
          <div className="portfolio-hero__circle portfolio-hero__circle--2"
            style={{ transform: `translate(${normalized.x * 12}px, ${normalized.y * 12}px)` }}
          />
        </div>

        <div className="container portfolio-hero__content">
          <ScrollReveal>
            <span className="overline">Portfolio</span>
          </ScrollReveal>
          <AnimatedText
            text="Our Work"
            tag="h1"
            type="chars"
            stagger={0.06}
            delay={0.2}
            className="portfolio-hero__title"
          />
          <ScrollReveal delay={0.5}>
            <div className="portfolio-coming-soon">
              <div className="portfolio-coming-soon__badge">Coming Soon</div>
              <p className="portfolio-coming-soon__text">
                We&apos;re carefully preparing our showcase. Our portfolio of projects spanning web development, design, marketing, and AI solutions is being curated for launch.
              </p>
              <div className="portfolio-coming-soon__loader">
                <span className="portfolio-coming-soon__dot" />
                <span className="portfolio-coming-soon__dot" />
                <span className="portfolio-coming-soon__dot" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.7}>
            <div className="portfolio-coming-soon__cta">
              <p style={{ color: 'var(--color-mid-gray)', marginBottom: 'var(--space-md)' }}>
                Want to be the first to see our work?
              </p>
              <MagneticButton href="/contact" variant="primary" size="default">
                Get in Touch
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
