'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import './home.css';

const SERVICES_PREVIEW = [
  { title: 'Web Development', desc: 'Scalable, performant websites built with modern technologies.', code: '01' },
  { title: 'Web Applications', desc: 'Custom web apps that solve real business problems.', code: '02' },
  { title: 'UI/UX Design', desc: 'Intuitive interfaces that delight users and drive engagement.', code: '03' },
  { title: 'Social Media Marketing', desc: 'Strategic campaigns to build your digital brand presence.', code: '04' },
  { title: 'AI Solutions', desc: 'Intelligent systems that automate and enhance workflows.', code: '05' },
  { title: 'Digital Strategy', desc: 'Data-driven plans to accelerate your digital growth.', code: '06' },
  { title: 'POS Systems', desc: 'Streamlined point-of-sale solutions for modern businesses.', code: '07' },
];

const PILLARS = [
  { number: '01', title: 'Technology First', desc: 'Cutting-edge tech stack tailored to each project for maximum performance and scalability.' },
  { number: '02', title: 'Design Driven', desc: 'Every pixel matters. We craft experiences that feel intuitive, look stunning, and convert.' },
  { number: '03', title: 'Results Focused', desc: 'Measurable outcomes and data-driven decisions that translate to real business growth.' },
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`page-content page-editorial ${loaded ? 'is-loaded' : ''}`}>
      
      {/* ============ HERO ============ */}
      <section className="hero-brutalist">
        <div className="hero-brutalist__grid">
          <div className="hero-brutalist__col hero-brutalist__col--left">
            <h1 className="hero-brutalist__title">LOVI<br/>LABS.</h1>
          </div>
          <div className="hero-brutalist__col hero-brutalist__col--right">
            <div className="hero-brutalist__meta">
              <span className="hero-brutalist__meta-label">Est. 2026</span>
              <span className="hero-brutalist__meta-label">Global</span>
            </div>
            <p className="hero-brutalist__desc">
              Building digital experiences through<br/>
              <strong>Web, Marketing, Design & AI</strong>.
            </p>
            <div className="hero-brutalist__cta">
              <Button href="/contact" variant="primary" size="large">Start Project</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-grid">
        <div className="section-grid__header">
          <h2 className="section-grid__title">Capabilities</h2>
          <Link href="/services" className="section-grid__link">View All [↗]</Link>
        </div>
        
        <div className="grid-squares">
          {SERVICES_PREVIEW.map((service) => (
            <Link key={service.code} href="/services" className="square-card">
              <div className="square-card__top">
                <span className="square-card__code">[{service.code}]</span>
                <span className="square-card__arrow">↗</span>
              </div>
              <div className="square-card__bottom">
                <h3 className="square-card__title">{service.title}</h3>
                <p className="square-card__desc">{service.desc}</p>
              </div>
            </Link>
          ))}
          {/* Empty filler square to maintain grid */}
          <div className="square-card square-card--empty"></div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="section-grid section-grid--dark">
        <div className="section-grid__header">
          <h2 className="section-grid__title">Our Approach</h2>
        </div>
        
        <div className="grid-squares">
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className="square-card square-card--dark">
              <div className="square-card__top">
                <span className="square-card__code">[{pillar.number}]</span>
              </div>
              <div className="square-card__bottom">
                <h3 className="square-card__title">{pillar.title}</h3>
                <p className="square-card__desc">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="cta-brutalist">
        <h2 className="cta-brutalist__title">READY?</h2>
        <div className="cta-brutalist__buttons">
          <Button href="/contact" variant="primary" size="large">Contact Us</Button>
          <Button href="https://wa.me/94717995000" variant="outline" size="large" target="_blank" rel="noopener noreferrer">WhatsApp</Button>
        </div>
      </section>
    </div>
  );
}
