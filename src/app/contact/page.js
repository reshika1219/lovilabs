'use client';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedText from '@/components/AnimatedText';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

import './contact.css';

const CONTACT_METHODS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
    ),
    label: 'Email Us',
    value: 'lovilabsco@gmail.com',
    href: 'mailto:lovilabsco@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
    ),
    label: 'WhatsApp',
    value: '+94 71 799 5000',
    href: 'https://wa.me/94717995000',
    external: true,
  },
];

const SOCIAL_LINKS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@lovi_labs',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.3z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61594162310188',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/lovi-labs',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="contact-hero section">
        <div className="container contact-hero__content">
          <ScrollReveal>
            <span className="overline">Contact</span>
          </ScrollReveal>
          <AnimatedText
            text="Let's Build Something Together"
            tag="h1"
            type="words"
            stagger={0.06}
            delay={0.2}
            className="contact-hero__title"
          />
          <ScrollReveal delay={0.4}>
            <p className="contact-hero__subtitle">
              Ready to start your project? Get in touch and we&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Form Side */}
            <ScrollReveal direction="left" className="contact-form-side">
              <h2 className="contact-form-heading">Send Us a Message</h2>
              <p className="contact-form-subheading">
                Fill out the form and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </ScrollReveal>

            {/* Info Side */}
            <ScrollReveal direction="right" delay={0.2} className="contact-info-side">
              <div className="contact-info">
                <h3 className="contact-info__title">Contact Information</h3>
                <p className="contact-info__desc">
                  Reach out through any of these channels. We&apos;re always happy to chat.
                </p>

                <div className="contact-methods">
                  {CONTACT_METHODS.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className="contact-method"
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}

                    >
                      <div className="contact-method__icon">{method.icon}</div>
                      <div>
                        <span className="contact-method__label">{method.label}</span>
                        <span className="contact-method__value">{method.value}</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="contact-socials">
                  <h4 className="contact-socials__title">Follow Us</h4>
                  <div className="contact-socials__links">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                        aria-label={social.label}

                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="contact-image-container" style={{ position: 'relative', width: '100%', aspectRatio: '1/1', marginTop: 'var(--space-2xl)', border: '1px solid var(--color-black)' }}>
                <Image src="/assets/contact-bg.jpg" alt="Contact Lovi Labs" fill style={{ objectFit: 'cover', filter: 'grayscale(100%)' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
