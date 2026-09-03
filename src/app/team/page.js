'use client';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import Button from '@/components/Button';
import './team.css';

const PLACEHOLDER_TEAM = [
  { name: 'Team Member', role: 'Role Title', initials: 'TM' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM' },
  { name: 'Team Member', role: 'Role Title', initials: 'TM' },
];

export default function TeamPage() {
  return (
    <div className="page-content">
      {/* Hero */}
      <section className="team-hero section">
        <div className="container team-hero__content">
          <ScrollReveal>
            <span className="overline">Our Team</span>
          </ScrollReveal>
          <AnimatedText
            text="Meet the People Behind Lovi Labs"
            tag="h1"
            type="words"
            stagger={0.06}
            delay={0.2}
            className="team-hero__title"
          />
          <ScrollReveal delay={0.4}>
            <p className="team-hero__subtitle">
              A passionate team of developers, designers, and strategists dedicated to crafting exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div className="container">
          <div className="team-grid">
            {PLACEHOLDER_TEAM.map((member, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
                <div className="team-card">
                  <div className="team-card__photo">
                    <span className="team-card__initials">{member.initials}</span>
                  </div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <div className="team-card__socials">
                    <a href="#" className="team-card__social" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="team-cta">
              <div className="team-cta__card">
                <h3 className="team-cta__title">We&apos;re Growing</h3>
                <p className="team-cta__text">
                  Interested in joining our team? We&apos;re always looking for talented individuals who are passionate about technology and creativity.
                </p>
                <Button href="/contact" variant="primary" size="default">
                  Get in Touch
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
