'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.header_scrolled : ''} ${mobileOpen ? styles.header_active : ''}`}>
        <div className={styles.header__container}>
          {/* Logo */}
          <Link href="/" className={styles.header__logo} onClick={closeMobileMenu}>
            <span>aiwebsiteservice</span>
            <span className={styles.header__logo_dot} />
          </Link>

          {/* Navigation Links */}
          <nav className={styles.header__nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.header__link}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.header__actions}>
            <a
              href="/#free-design"
              className={styles.header__cta}
            >
              Get Free Design
            </a>

            {/* Mobile Toggle */}
            <button
              className={styles.header__mobile_toggle}
              onClick={toggleMobileMenu}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <span className={styles.header__bar} />
              <span className={styles.header__bar} />
              <span className={styles.header__bar} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobile_drawer} ${mobileOpen ? styles.mobile_drawer_open : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.mobile_drawer__link}
            onClick={closeMobileMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#free-design"
          className={styles.mobile_drawer__cta}
          onClick={closeMobileMenu}
        >
          Get Free Design
        </a>
      </div>
    </>
  );
}
