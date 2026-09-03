'use client';
import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import './services.css';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'We build fast, responsive, and SEO-optimized websites using modern frameworks and technologies. From corporate sites to complex platforms, every project is built for performance and scalability.',
    deliverables: ['Custom websites', 'Landing pages', 'E-commerce stores', 'CMS integration', 'Performance optimization'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 8l3 3-3 3" /><path d="M13 14h4" /></svg>
    ),
  },
  {
    title: 'Web Applications',
    description: 'Custom-built web applications designed to solve complex business problems. We develop scalable, secure applications using modern architectures that grow with your business.',
    deliverables: ['SaaS platforms', 'Dashboards & portals', 'Internal tools', 'API development', 'Database design'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that balances aesthetics with functionality. We create intuitive interfaces backed by research and testing to maximize user satisfaction and conversion.',
    deliverables: ['User research', 'Wireframing', 'Prototyping', 'Design systems', 'Usability testing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness, engage your audience, and drive measurable results across all major platforms.',
    deliverables: ['Content strategy', 'Campaign management', 'Community building', 'Analytics & reporting', 'Brand guidelines'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /><path d="M2 8c0-2.2.7-4.3 2-6" /><path d="M22 8c0-2.2-.7-4.3-2-6" /></svg>
    ),
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent AI-powered solutions that automate workflows, enhance decision-making, and unlock new possibilities for your business through machine learning and automation.',
    deliverables: ['AI chatbots', 'Process automation', 'Data analysis', 'ML model integration', 'Custom AI tools'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 014 4v1a1 1 0 001 1h1a4 4 0 010 8h-1a1 1 0 00-1 1v1a4 4 0 01-8 0v-1a1 1 0 00-1-1H6a4 4 0 010-8h1a1 1 0 001-1V6a4 4 0 014-4z" /><circle cx="12" cy="12" r="2" /></svg>
    ),
  },
  {
    title: 'Digital Strategy',
    description: 'Data-driven digital strategies that align technology with business objectives. We help you navigate the digital landscape and build a roadmap for sustainable growth.',
    deliverables: ['Digital audits', 'Market research', 'Growth roadmaps', 'Technology consulting', 'KPI frameworks'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
  },
  {
    title: 'POS Systems',
    description: 'Modern point-of-sale solutions tailored for retail and hospitality businesses. Streamline transactions, inventory management, and reporting with our custom POS systems.',
    deliverables: ['POS software', 'Inventory management', 'Sales reporting', 'Payment integration', 'Staff management'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h2" /><path d="M10 15h4" /></svg>
    ),
  },
];

export default function ServicesPage() {

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="services-hero section">
        <div className="services-hero__bg">
          <div className="services-hero__circle" />
        </div>
        <div className="container services-hero__content">
          <ScrollReveal>
            <span className="overline">Our Services</span>
          </ScrollReveal>
          <AnimatedText
            text="What We Build"
            tag="h1"
            type="words"
            stagger={0.08}
            delay={0.2}
            className="services-hero__title"
          />
          <ScrollReveal delay={0.4}>
            <p className="services-hero__subtitle">
              Comprehensive digital solutions designed to help your business thrive in the modern world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                deliverables={service.deliverables}
                index={i}
              />
            ))}
            {/* Empty filler square to maintain grid */}
            <div className="service-card" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 11px)' }}></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--gray">
        <div className="container">
          <ScrollReveal>
            <span className="overline">Our Process</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section__title">How We Work</h2>
          </ScrollReveal>

          <div className="process-steps">
            {[
              { step: '01', title: 'Discover', desc: 'We listen, research, and understand your goals, audience, and challenges.' },
              { step: '02', title: 'Design', desc: 'We create wireframes and prototypes, iterating with your feedback.' },
              { step: '03', title: 'Develop', desc: 'We build with clean code, modern tools, and a focus on performance.' },
              { step: '04', title: 'Deliver', desc: 'We test, launch, and provide ongoing support to ensure success.' },
            ].map((item, i) => (
              <div className="process-step" key={item.step}>
                <div className="process-step__number">{item.step}</div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{item.title}</h3>
                  <p className="process-step__desc">{item.desc}</p>
                </div>
                {i < 3 && <div className="process-step__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--color-white)', marginBottom: 'var(--space-md)' }}>
              Need a custom solution?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-mid-gray)', marginBottom: 'var(--space-2xl)', maxWidth: '500px' }}>
              Tell us about your project and we&apos;ll craft the perfect digital strategy for you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button href="/contact" variant="white" size="large">
              Get a Free Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
