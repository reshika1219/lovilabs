'use client';
import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';
import Image from 'next/image';
import './about.css';

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
    title: 'Innovation',
    desc: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    ),
    title: 'Transparency',
    desc: 'Clear communication and honest collaboration are at the core of every client relationship we build.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Quality',
    desc: 'We never cut corners. Every line of code and every pixel is crafted with precision and purpose.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
    ),
    title: 'Partnership',
    desc: 'Your success is our success. We work as an extension of your team to achieve your goals.',
  },
];

export default function AboutPage() {

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="about-hero section">
        <div className="about-hero__bg">
          <div className="about-hero__circle" />
        </div>
        <div className="container about-hero__content">
          <ScrollReveal>
            <span className="overline">About Us</span>
          </ScrollReveal>
          <AnimatedText
            text="We Transform Ideas Into Digital Experiences"
            tag="h1"
            type="words"
            stagger={0.06}
            delay={0.2}
            className="about-hero__title"
          />
          <ScrollReveal delay={0.4}>
            <p className="about-hero__subtitle">
              Lovi Labs is a digital solutions company focused on transforming ideas into impactful digital experiences. We help businesses build and strengthen their digital presence through modern websites, web applications, UI/UX design, social media marketing, and AI-powered solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <ScrollReveal direction="left">
              <div className="about-mission__label">
                <span className="overline">Our Mission</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <div className="about-mission__text">
                <h2>
                  To help businesses <span className="gradient-text">grow, innovate, and stand out</span> in an increasingly digital world.
                </h2>
                <p>
                  By combining technology, creativity, and strategy, we create solutions that are functional, engaging, and tailored to each client&apos;s needs. From designing intuitive user experiences to building scalable web solutions, Lovi Labs brings technology and creativity together under one roof.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--gray">
        <div className="container">
          <ScrollReveal>
            <span className="overline">Our Values</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section__title">What Drives Us</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section__subtitle">
              These principles guide every decision we make and every solution we create.
            </p>
          </ScrollReveal>

          <div className="values-grid">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={0.1 + i * 0.1} direction="up">
                <div className="value-card">
                  <div className="value-card__icon">{value.icon}</div>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__desc">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            
            {/* Image Boxes for Brutalist Layout */}
            <ScrollReveal delay={0.5} direction="up">
              <div className="value-card value-card--image">
                <Image src="/assets/about-grid-1.jpg" alt="Minimalist Art" fill style={{ objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6} direction="up">
              <div className="value-card value-card--image">
                <Image src="/assets/about-grid-2.jpg" alt="Abstract Office" fill style={{ objectFit: 'cover' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container about-philosophy">
          <ScrollReveal>
            <span className="overline">Our Philosophy</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="about-philosophy__title">
              We don&apos;t just build products.<br />
              We craft <span className="gradient-text">experiences</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="about-philosophy__grid">
              <div className="about-philosophy__item">
                <h4>Design With Purpose</h4>
                <p>Every design decision is driven by user research, business goals, and data — never guesswork.</p>
              </div>
              <div className="about-philosophy__item">
                <h4>Build to Scale</h4>
                <p>Our technical architecture ensures your product grows with you, not against you.</p>
              </div>
              <div className="about-philosophy__item">
                <h4>Deliver Impact</h4>
                <p>We measure success not in deliverables, but in the real impact our work creates for your business.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div style={{ marginTop: 'var(--space-2xl)' }}>
              <Button href="/contact" variant="primary" size="large">
                Work With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
