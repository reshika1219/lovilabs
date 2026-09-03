'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import './Navbar.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--open' : ''}`}>
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <img
              src="/assets/ICON - FULL COLOR.png"
              alt="Lovi Labs"
              className="navbar__logo-icon"
            />
            <span className="navbar__logo-text">
              LOVI <span className="navbar__logo-text--accent">LABS</span>
            </span>
          </Link>

          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                 
                >
                  {link.label}
                  <span className="navbar__link-indicator" />
                </Link>
              </li>
            ))}
          </ul>

          <Button href="/contact" variant="primary" size="small" className="navbar__cta">
            Start Your Project
          </Button>

          <button
            className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
           
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__bg" onClick={() => setIsMobileOpen(false)} />
        <div className="mobile-menu__content">
          <ul className="mobile-menu__links">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="mobile-menu__item"
                style={{ transitionDelay: isMobileOpen ? `${0.1 + i * 0.06}s` : '0s' }}
              >
                <Link
                  href={link.href}
                  className={`mobile-menu__link ${pathname === link.href ? 'mobile-menu__link--active' : ''}`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span className="mobile-menu__link-number">0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <a href="mailto:lovilabsco@gmail.com" className="mobile-menu__email">
              lovilabsco@gmail.com
            </a>
            <div className="mobile-menu__socials">
              <a href="https://www.tiktok.com/@lovi_labs" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://web.facebook.com/profile.php?id=61594162310188" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/lovi-labs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
