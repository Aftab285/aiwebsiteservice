'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import DetailedButterflyBackground from './DetailedButterflyBackground';

/* ——— SVG Icon Components ——— */
const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="wa-grad" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#55f27a" />
        <stop offset="100%" stopColor="#05c329" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#wa-grad)" />
    <path d="M16 8.5c-4.14 0-7.5 3.36-7.5 7.5 0 1.48.43 2.85 1.17 4.02l-.77 2.82 2.89-.76A7.44 7.44 0 0016 23.5c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm0 1.25c3.45 0 6.25 2.8 6.25 6.25S19.45 22.25 16 22.25c-1.25 0-2.4-.37-3.37-1.01l-.24-.16-1.74.46.47-1.7-.18-.28A6.2 6.2 0 019.75 16c0-3.45 2.8-6.25 6.25-6.25zm3.17 7.7c-.17-.08-1.02-.5-1.18-.56-.16-.06-.27-.08-.38.08-.11.16-.44.56-.54.67-.1.11-.2.13-.37.05-.17-.08-.73-.27-1.39-.86-.51-.46-.86-1.02-.96-1.19-.1-.17-.01-.26.07-.34.08-.07.17-.2.25-.3.08-.1.11-.17.17-.28.06-.11.03-.21-.01-.3-.04-.08-.38-.92-.52-1.26-.14-.33-.28-.28-.38-.29-.1-.01-.21-.01-.32-.01-.11 0-.29.04-.44.2-.15.16-.58.57-.58 1.39 0 .82.6 1.62.68 1.73.08.11 1.18 1.8 2.86 2.53.4.17.71.28.96.36.4.13.77.11 1.06.07.32-.05 1-.41 1.14-.81.14-.4.14-.74.1-.81-.04-.07-.15-.11-.32-.2z" fill="#ffffff" />
  </svg>
);

const RocketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    /* Parallax effect for background orbs on mouse move */
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const orbs = heroRef.current.querySelectorAll('[data-orb]');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FreelancerLogo = ({ size = 16 }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
      <polygon points="18.5 7.2 28.5 7.2 19.3 10.2" />
      <polygon points="15.1 7.2 18 7.2 16.5 9.5" />
      <polygon points="8.2 7 13.5 9.5 8.7 9.5" />
      <polygon points="4 9.5 14.5 10.2 11 18.2" />
      <polygon points="14.8 10.9 19.5 11.2 18.5 18.5 15.5 24.2 11.8 19" />
      <polygon points="11 19.6 14.2 22.8 9.6 28.2" />
    </svg>
  );

  return (
    <section className={styles.hero} ref={heroRef} id="hero" aria-label="AI Website Development Services">
      {/* Detailed Butterfly Animation */}
      <DetailedButterflyBackground />
      
      {/* Animated Background Orbs (Kept for depth) */}
      <div className={styles.hero__bg_orbs} aria-hidden="true">
        <div className={`${styles.hero__orb} ${styles.hero__orb_1}`} data-orb />
        <div className={`${styles.hero__orb} ${styles.hero__orb_2}`} data-orb />
        <div className={`${styles.hero__orb} ${styles.hero__orb_3}`} data-orb />
        <div className={`${styles.hero__orb} ${styles.hero__orb_4}`} data-orb />
      </div>
      <div className={styles.hero__grid_overlay} aria-hidden="true" />
      <div className={styles.hero__radial_overlay} aria-hidden="true" />

      <div className={styles.hero__container}>
        {/* Centered Content */}
        <div className={styles.hero__content}>
          {/* Top Label */}
          <div className={styles.hero__label}>
            <span className={styles.hero__online_dot}>
              <span className={styles.hero__online_dot_pulse} />
            </span>
            <span>Available Now on WhatsApp Live Chat.</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.hero__headline}>
            I will create a{' '}
            <span className={styles.hero__headline_highlight}>professional website</span>
            {' '}for you using{' '}
            <span className={styles.hero__headline_highlight}>AI</span>.
          </h1>

          {/* Subheadline */}
          <p className={styles.hero__subheadline}>
            I design and build stunning, lightning-fast, SEO-optimized websites using the world&apos;s most advanced AI coding tools. Get a <strong>FREE custom homepage design</strong>{' '}before you decide to hire me. If you love it, I&apos;ll build the complete website.
          </p>

          {/* CTAs */}
          <div className={styles.hero__cta_group}>
            <a
              href="https://wa.me/923479429415"
              className={`${styles.hero__cta} ${styles.hero__cta_primary}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free video call on WhatsApp"
            >
              Let&apos;s Discuss Your Website – Book a Free Video Call
            </a>
            <a
              href="https://wa.me/923479429415"
              className={`${styles.hero__cta} ${styles.hero__cta_whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <span className={styles.hero__cta_icon}><WhatsAppIcon size={28} /></span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Freelancer.com Profile Trust Badge */}
          <div className={styles.hero__freelancer_wrapper}>
            <a
              href="https://www.freelancer.com/u/Aftab285"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hero__freelancer_badge}
              aria-label="Hire me directly on Freelancer.com"
            >
              <span className={styles.hero__freelancer_text}>
                <span className={styles.hero__freelancer_stars}>★★★★★</span>{' '}
                Top Rated Website Developer on{' '}
                <span className={styles.hero__freelancer_logo_inline}>
                  <FreelancerLogo size={18} />
                </span>{' '}
                Freelancer — <strong>Hire Me Directly</strong>
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className={styles.hero__stats} aria-label="Key features">
            <div className={styles.hero__stat}>
              <span className={styles.hero__stat_number}>Free</span>
              <span className={styles.hero__stat_label}>Homepage design before hiring</span>
            </div>
            <div className={styles.hero__stat}>
              <span className={styles.hero__stat_number}>SEO</span>
              <span className={styles.hero__stat_label}>Structured pages and metadata</span>
            </div>
            <div className={styles.hero__stat}>
              <span className={styles.hero__stat_number}>Fast</span>
              <span className={styles.hero__stat_label}>Frontend-first performance</span>
            </div>
            <div className={styles.hero__stat}>
              <span className={styles.hero__stat_number}>100%</span>
              <span className={styles.hero__stat_label}>Responsive website layout</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
