'use client';

import styles from './Footer.module.css';

const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="wa-grad-footer" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#55f27a" />
        <stop offset="100%" stopColor="#05c329" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#wa-grad-footer)" />
    <path d="M16 8.5c-4.14 0-7.5 3.36-7.5 7.5 0 1.48.43 2.85 1.17 4.02l-.77 2.82 2.89-.76A7.44 7.44 0 0016 23.5c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm0 1.25c3.45 0 6.25 2.8 6.25 6.25S19.45 22.25 16 22.25c-1.25 0-2.4-.37-3.37-1.01l-.24-.16-1.74.46.47-1.7-.18-.28A6.2 6.2 0 019.75 16c0-3.45 2.8-6.25 6.25-6.25zm3.17 7.7c-.17-.08-1.02-.5-1.18-.56-.16-.06-.27-.08-.38.08-.11.16-.44.56-.54.67-.1.11-.2.13-.37.05-.17-.08-.73-.27-1.39-.86-.51-.46-.86-1.02-.96-1.19-.1-.17-.01-.26.07-.34.08-.07.17-.2.25-.3.08-.1.11-.17.17-.28.06-.11.03-.21-.01-.3-.04-.08-.38-.92-.52-1.26-.14-.33-.28-.28-.38-.29-.1-.01-.21-.01-.32-.01-.11 0-.29.04-.44.2-.15.16-.58.57-.58 1.39 0 .82.6 1.62.68 1.73.08.11 1.18 1.8 2.86 2.53.4.17.71.28.96.36.4.13.77.11 1.06.07.32-.05 1-.41 1.14-.81.14-.4.14-.74.1-.81-.04-.07-.15-.11-.32-.2z" fill="#ffffff" />
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const bottomLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Process', href: '/#process' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Other Services', href: '#' },
    { label: 'WordPress Services', href: '/services/wordpress' },
  ];

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.footer__bg_overlay} aria-hidden="true" />

      <div className={styles.footer__container}>
        {/* Large Final CTA Block */}
        <div className={styles.cta_block}>
          <h2 className={styles.cta_title}>Let&apos;s Build Your Dream Website.</h2>
          <p className={styles.cta_text}>
            Get in touch to secure your FREE custom homepage mockup. No credit card required. No commitment. Just direct, premium design concepts.
          </p>
          
          <div className={styles.cta_buttons}>
            <a 
              href="#free-design" 
              className={`${styles.cta_btn} ${styles.cta_btn_primary}`}
            >
              Get Free Website Design
            </a>
            <a 
              href="https://wa.me/923479429415" 
              className={`${styles.cta_btn} ${styles.cta_btn_whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <WhatsAppIcon size={26} />
              </span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className={styles.cta_contacts}>
            <div className={styles.contact_item}>
              <span className={styles.contact_icon} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <MailIcon size={18} />
              </span>
              <span>Email: <a href="mailto:contact@aiwebsiteservice.com" className={styles.contact_link}>contact@aiwebsiteservice.com</a></span>
            </div>
            <div className={styles.contact_item}>
              <span className={styles.contact_icon} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <WhatsAppIcon size={18} />
              </span>
              <span>WhatsApp: <a href="https://wa.me/923479429415" className={styles.contact_link}>+92 347 9429415</a></span>
            </div>
          </div>
        </div>

        {/* Middle Brand & Links Row */}
        <div className={styles.middle_bar}>
          <div className={styles.info_col}>
            <span className={styles.brand}>aiwebsiteservice.com</span>
            <p className={styles.desc}>
              Designing and coding stunning, lightning-fast, and search-engine-optimized websites using state-of-the-art AI systems checked and reviewed by human experts.
            </p>
          </div>

          <div className={styles.nav_col}>
            <nav className={styles.nav_links} aria-label="Footer Navigation">
              {bottomLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={styles.nav_link}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className={styles.bottom_bar}>
          <span>&copy; {currentYear} aiwebsiteservice.com. All rights reserved.</span>
          <span>Designed & Built Globally — High-Trust Web Services</span>
        </div>
      </div>
    </footer>
  );
}
