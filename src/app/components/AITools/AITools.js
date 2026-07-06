'use client';

import { useEffect, useRef } from 'react';
import styles from './AITools.module.css';

/* ——— Tool Logo SVGs (inline for zero external deps) ——— */

const LovableLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 28C16 28 4 20 4 12C4 7.6 7.6 4 12 4C13.8 4 15.4 4.8 16 6C16.6 4.8 18.2 4 20 4C24.4 4 28 7.6 28 12C28 20 16 28 16 28Z" fill="#FF5216" opacity="0.9"/>
    <path d="M16 24C16 24 8 18 8 13C8 10.2 10.2 8 13 8C14.2 8 15.3 8.6 16 9.5C16.7 8.6 17.8 8 19 8C21.8 8 24 10.2 24 13C24 18 16 24 16 24Z" fill="#FF7339"/>
  </svg>
);

const GeminiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="gemini-grad" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#4285F4"/>
        <stop offset="25%" stopColor="#9B72CB"/>
        <stop offset="50%" stopColor="#D96570"/>
        <stop offset="75%" stopColor="#D96570"/>
        <stop offset="100%" stopColor="#9B72CB"/>
      </linearGradient>
    </defs>
    <path d="M16 2C16 2 20 8 26 10C20 12 16 18 16 18C16 18 12 12 6 10C12 8 16 2 16 2Z" fill="url(#gemini-grad)"/>
    <path d="M16 14C16 14 20 20 26 22C20 24 16 30 16 30C16 30 12 24 6 22C12 20 16 14 16 14Z" fill="url(#gemini-grad)" opacity="0.7"/>
  </svg>
);

const AIStudioLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="6" fill="#4285F4" opacity="0.15"/>
    <path d="M16 8L10 20H14L16 16L18 20H22L16 8Z" fill="#4285F4"/>
    <circle cx="16" cy="22" r="2" fill="#EA4335"/>
  </svg>
);

const ClaudeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" fill="#CC9966" opacity="0.15"/>
    <path d="M12 10L16 22L20 10" stroke="#CC9966" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="9" r="1.5" fill="#CC9966"/>
  </svg>
);

const CodexLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="6" fill="#10A37F" opacity="0.15"/>
    <path d="M12 12L8 16L12 20" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12L24 16L20 20" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 10L15 22" stroke="#10A37F" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StitchLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="stitch-grad" x1="4" y1="4" x2="28" y2="28">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#06B6D4"/>
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="8" height="8" rx="2" fill="url(#stitch-grad)" opacity="0.8"/>
    <rect x="18" y="6" width="8" height="8" rx="2" fill="url(#stitch-grad)" opacity="0.6"/>
    <rect x="6" y="18" width="8" height="8" rx="2" fill="url(#stitch-grad)" opacity="0.6"/>
    <rect x="18" y="18" width="8" height="8" rx="2" fill="url(#stitch-grad)" opacity="0.8"/>
    <line x1="14" y1="10" x2="18" y2="10" stroke="url(#stitch-grad)" strokeWidth="1.5"/>
    <line x1="14" y1="22" x2="18" y2="22" stroke="url(#stitch-grad)" strokeWidth="1.5"/>
    <line x1="10" y1="14" x2="10" y2="18" stroke="url(#stitch-grad)" strokeWidth="1.5"/>
    <line x1="22" y1="14" x2="22" y2="18" stroke="url(#stitch-grad)" strokeWidth="1.5"/>
  </svg>
);

const SparklesSmall = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
  </svg>
);

const tools = [
  {
    name: 'Lovable',
    desc: 'AI-powered full-stack web app builder that generates production-ready React applications with beautiful UI components in minutes.',
    tag: 'Full-Stack AI Builder',
    Logo: LovableLogo,
    iconClass: 'aiTools__card_icon_lovable',
  },
  {
    name: 'Google Gemini',
    desc: 'Google\'s most capable multimodal AI model for understanding requirements, generating code, and solving complex design challenges.',
    tag: 'Multimodal AI',
    Logo: GeminiLogo,
    iconClass: 'aiTools__card_icon_gemini',
  },
  {
    name: 'Google AI Studio',
    desc: 'Rapid prototyping and iteration environment powered by Google\'s AI models for creating and refining web experiences.',
    tag: 'Rapid Prototyping',
    Logo: AIStudioLogo,
    iconClass: 'aiTools__card_icon_aistudio',
  },
  {
    name: 'Claude',
    desc: 'Anthropic\'s advanced AI assistant for meticulous code review, architecture planning, and creating clean, maintainable codebases.',
    tag: 'Code Architecture',
    Logo: ClaudeLogo,
    iconClass: 'aiTools__card_icon_claude',
  },
  {
    name: 'OpenAI Codex',
    desc: 'OpenAI\'s powerful code generation model that translates natural language to production code across multiple programming languages.',
    tag: 'Code Generation',
    Logo: CodexLogo,
    iconClass: 'aiTools__card_icon_codex',
  },
  {
    name: 'Google Stitch',
    desc: 'Google\'s design-to-code tool that transforms visual designs into pixel-perfect, responsive web components automatically.',
    tag: 'Design to Code',
    Logo: StitchLogo,
    iconClass: 'aiTools__card_icon_stitch',
  },
];

export default function AITools() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    /* Intersection Observer for scroll animations */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  /* Mouse-follow shine effect on cards */
  const handleCardMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className={styles.aiTools} ref={sectionRef} id="ai-tools" aria-labelledby="ai-tools-title">
      {/* Background Decorations */}
      <div className={styles.aiTools__bg} aria-hidden="true">
        <div className={`${styles.aiTools__bg_glow} ${styles.aiTools__bg_glow1}`} />
        <div className={`${styles.aiTools__bg_glow} ${styles.aiTools__bg_glow2}`} />
        <div className={`${styles.aiTools__bg_glow} ${styles.aiTools__bg_glow3}`} />
        <div className={`${styles.aiTools__orbit_ring} ${styles.aiTools__orbit_ring1}`} />
        <div className={`${styles.aiTools__orbit_ring} ${styles.aiTools__orbit_ring2}`} />
      </div>

      <div className={styles.aiTools__container}>
        {/* Section Header */}
        <header className={styles.aiTools__header}>
          <div className={styles.aiTools__label}>
            <SparklesSmall />
            <span>AI-Powered Development</span>
          </div>
          <h2 className={styles.aiTools__title} id="ai-tools-title">
            Powered by the World&apos;s{' '}
            <span className={styles.aiTools__title_highlight}>Best AI Coding Tools</span>
          </h2>
          <p className={styles.aiTools__subtitle}>
            I leverage cutting-edge AI technology to build websites faster, smarter, and more efficiently — while ensuring every project is professionally customized, optimized, and meticulously reviewed.
          </p>
        </header>

        {/* Tools Grid */}
        <div className={styles.aiTools__grid} role="list" aria-label="AI development tools">
          {tools.map((tool, index) => (
            <article
              key={tool.name}
              className={styles.aiTools__card}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleCardMouseMove(e, index)}
              role="listitem"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
              }}
            >
              <div className={`${styles.aiTools__card_icon} ${styles[tool.iconClass]}`}>
                <tool.Logo />
              </div>
              <h3 className={styles.aiTools__card_name}>{tool.name}</h3>
              <p className={styles.aiTools__card_desc}>{tool.desc}</p>
              <span className={styles.aiTools__card_tag}>
                <SparklesSmall />
                {tool.tag}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={styles.aiTools__note}>
          <span className={styles.aiTools__note_icon}>🚀</span>
          <div className={styles.aiTools__note_content}>
            <h3 className={styles.aiTools__note_title}>AI-Accelerated, Human-Perfected</h3>
            <p className={styles.aiTools__note_text}>
              These tools accelerate development while every website is professionally customized, performance-optimized, and carefully reviewed by a human expert. The result? Premium websites delivered faster — without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
