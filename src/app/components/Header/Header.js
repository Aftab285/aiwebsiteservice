'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Blog', href: '/blog' },
    { 
      label: 'Other Services', 
      dropdown: true,
      subLinks: [
        { label: 'WordPress Services', href: '/services/wordpress' }
      ]
    },
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
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div 
                    key={link.label} 
                    className={styles.header__dropdown_container}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <span className={`${styles.header__link} ${styles.header__dropdown_trigger}`}>
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={dropdownOpen ? styles.icon_rotate : ''}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                    <div className={`${styles.header__dropdown_menu} ${dropdownOpen ? styles.dropdown_open : ''}`}>
                      {link.subLinks.map(subLink => (
                        <Link 
                          key={subLink.label} 
                          href={subLink.href} 
                          className={styles.header__dropdown_link}
                          onClick={closeMobileMenu}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.header__link}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className={styles.header__actions}>
            <Link
              href="/#free-design"
              className={styles.header__cta}
            >
              Get Free Design
            </Link>

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
        {navLinks.map((link) => {
          if (link.dropdown) {
            return (
              <div key={link.label} className={styles.mobile_drawer__dropdown_container}>
                <button 
                  className={styles.mobile_drawer__dropdown_trigger}
                  onClick={toggleDropdown}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={dropdownOpen ? styles.icon_rotate : ''}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`${styles.mobile_drawer__dropdown_menu} ${dropdownOpen ? styles.mobile_dropdown_open : ''}`}>
                  {link.subLinks.map(subLink => (
                    <Link 
                      key={subLink.label} 
                      href={subLink.href} 
                      className={styles.mobile_drawer__dropdown_link}
                      onClick={closeMobileMenu}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobile_drawer__link}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/#free-design"
          className={styles.mobile_drawer__cta}
          onClick={closeMobileMenu}
        >
          Get Free Design
        </Link>
      </div>
    </>
  );
}
