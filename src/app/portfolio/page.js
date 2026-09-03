'use client';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import Button from '@/components/Button';
import './portfolio.css';

export default function PortfolioPage() {

  return (
    <div className="page-content">
      <section className="portfolio-hero">
        <div className="portfolio-hero__bg">
          <div className="portfolio-hero__icon">
            <img src="/assets/ICON - FULL COLOR.png" alt="" />
          </div>
          <div className="portfolio-hero__circle portfolio-hero__circle--1" />
          <div className="portfolio-hero__circle portfolio-hero__circle--2" />
        </div>

        <div className="container portfolio-hero__content">
          <ScrollReveal>
            <span className="overline">Portfolio</span>
          </ScrollReveal>
          <AnimatedText
            text="Our Work"
            tag="h1"
            type="words"
            stagger={0.03}
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
              <Button href="/contact" variant="primary" size="default">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
