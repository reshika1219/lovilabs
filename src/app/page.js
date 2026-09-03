'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import useMousePosition from '@/hooks/useMousePosition';
import './home.css';

const SERVICES_PREVIEW = [
  {
    title: 'Web Development',
    desc: 'Scalable, performant websites built with modern technologies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
    ),
  },
  {
    title: 'Web Applications',
    desc: 'Custom web apps that solve real business problems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces that delight users and drive engagement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    desc: 'Strategic campaigns to build your digital brand presence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
    ),
  },
  {
    title: 'AI Solutions',
    desc: 'Intelligent systems that automate and enhance workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" /></svg>
    ),
  },
  {
    title: 'Digital Strategy',
    desc: 'Data-driven plans to accelerate your digital growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
  },
  {
    title: 'POS Systems',
    desc: 'Streamlined point-of-sale solutions for modern businesses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
    ),
  },
];

const PILLARS = [
  { number: '01', title: 'Technology First', desc: 'Cutting-edge tech stack tailored to each project for maximum performance and scalability.' },
  { number: '02', title: 'Design Driven', desc: 'Every pixel matters. We craft experiences that feel intuitive, look stunning, and convert.' },
  { number: '03', title: 'Results Focused', desc: 'Measurable outcomes and data-driven decisions that translate to real business growth.' },
];

export default function HomePage() {
  const { normalized } = useMousePosition();
  const heroRef = useRef(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-content">
      {/* ============ HERO ============ */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg-elements">
          <div
            className="hero__circle hero__circle--1"
            style={{
              transform: `translate(${normalized.x * 20}px, ${normalized.y * 20}px)`,
            }}
          />
          <div
            className="hero__circle hero__circle--2"
            style={{
              transform: `translate(${normalized.x * -15}px, ${normalized.y * -15}px)`,
            }}
          />
          <div
            className="hero__circle hero__circle--3"
            style={{
              transform: `translate(${normalized.x * 10}px, ${normalized.y * 10}px)`,
            }}
          />
        </div>

        <div className="hero__content container">
          <div className={`hero__logo-mark ${heroLoaded ? 'hero__logo-mark--visible' : ''}`}>
            <img
              src="/assets/ICON - FULL COLOR.png"
              alt=""
              className="hero__logo-icon"
              style={{
                transform: `translate(${normalized.x * 8}px, ${normalized.y * 8}px) rotate(${normalized.x * 5}deg)`,
              }}
            />
          </div>

          <AnimatedText
            text="LOVI LABS"
            tag="h1"
            type="chars"
            stagger={0.05}
            delay={0.4}
            className="hero__title"
          />

          <div className={`hero__tagline ${heroLoaded ? 'hero__tagline--visible' : ''}`}>
            <p>Building digital experiences through</p>
            <p className="hero__tagline-highlight">Web, Marketing, Design & AI</p>
          </div>

          <div className={`hero__cta ${heroLoaded ? 'hero__cta--visible' : ''}`}>
            <MagneticButton href="/contact" variant="primary" size="large">
              Start Your Project
            </MagneticButton>
            <MagneticButton href="/services" variant="outline" size="large">
              Our Services
            </MagneticButton>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="section section--gray" id="services-preview">
        <div className="container">
          <ScrollReveal>
            <span className="overline">What We Do</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section__title">Crafting Digital Excellence</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section__subtitle">
              From concept to launch, we deliver comprehensive digital solutions that transform businesses.
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {SERVICES_PREVIEW.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.1 + i * 0.08} direction="up">
                <Link href="/services" className="service-preview-card" data-cursor-hover>
                  <div className="service-preview-card__icon">{service.icon}</div>
                  <h3 className="service-preview-card__title">{service.title}</h3>
                  <p className="service-preview-card__desc">{service.desc}</p>
                  <span className="service-preview-card__arrow">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="why-us">
            <div className="why-us__header">
              <ScrollReveal>
                <span className="overline">Why Lovi Labs</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="section__title">Built Different.</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="section__subtitle">
                  We combine technology, creativity, and strategy to create solutions that are functional, engaging, and tailored to your needs.
                </p>
              </ScrollReveal>
            </div>

            <div className="why-us__pillars">
              {PILLARS.map((pillar, i) => (
                <ScrollReveal key={pillar.number} delay={0.15 + i * 0.15} direction="left">
                  <div className="pillar" data-cursor-hover>
                    <span className="pillar__number">{pillar.number}</span>
                    <div className="pillar__content">
                      <h3 className="pillar__title">{pillar.title}</h3>
                      <p className="pillar__desc">{pillar.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="cta-banner section--dark">
        <div className="cta-banner__bg">
          <div
            className="cta-banner__circle"
            style={{
              transform: `translate(${normalized.x * 25}px, ${normalized.y * 25}px)`,
            }}
          />
        </div>
        <div className="container cta-banner__content">
          <ScrollReveal>
            <h2 className="cta-banner__title">
              Ready to build something<br />
              <span className="gradient-text">extraordinary?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="cta-banner__text">
              Let&apos;s transform your vision into a digital experience that stands out.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="cta-banner__buttons">
              <MagneticButton href="/contact" variant="white" size="large">
                Get a Free Consultation
              </MagneticButton>
              <MagneticButton href="https://wa.me/94717995000" variant="ghost" size="large" className="cta-banner__wa" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
