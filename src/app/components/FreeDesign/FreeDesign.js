'use client';

import styles from './FreeDesign.module.css';

const WhatsAppIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="wa-grad-fd" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#55f27a" />
        <stop offset="100%" stopColor="#05c329" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#wa-grad-fd)" />
    <path d="M16 8.5c-4.14 0-7.5 3.36-7.5 7.5 0 1.48.43 2.85 1.17 4.02l-.77 2.82 2.89-.76A7.44 7.44 0 0016 23.5c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm0 1.25c3.45 0 6.25 2.8 6.25 6.25S19.45 22.25 16 22.25c-1.25 0-2.4-.37-3.37-1.01l-.24-.16-1.74.46.47-1.7-.18-.28A6.2 6.2 0 019.75 16c0-3.45 2.8-6.25 6.25-6.25zm3.17 7.7c-.17-.08-1.02-.5-1.18-.56-.16-.06-.27-.08-.38.08-.11.16-.44.56-.54.67-.1.11-.2.13-.37.05-.17-.08-.73-.27-1.39-.86-.51-.46-.86-1.02-.96-1.19-.1-.17-.01-.26.07-.34.08-.07.17-.2.25-.3.08-.1.11-.17.17-.28.06-.11.03-.21-.01-.3-.04-.08-.38-.92-.52-1.26-.14-.33-.28-.28-.38-.29-.1-.01-.21-.01-.32-.01-.11 0-.29.04-.44.2-.15.16-.58.57-.58 1.39 0 .82.6 1.62.68 1.73.08.11 1.18 1.8 2.86 2.53.4.17.71.28.96.36.4.13.77.11 1.06.07.32-.05 1-.41 1.14-.81.14-.4.14-.74.1-.81-.04-.07-.15-.11-.32-.2z" fill="#ffffff" />
  </svg>
);

const stepsList = [
  {
    number: '01',
    title: 'Tell me about your business',
    desc: 'Share your goals, industry, brand references, and any specific pages or features you need for your new website over WhatsApp.',
  },
  {
    number: '02',
    title: 'I design your homepage for FREE',
    desc: 'I create a stunning, custom homepage design using advanced AI design tools, completely customized for your brand.',
  },
  {
    number: '03',
    title: 'You review it',
    desc: 'Look over the initial homepage mockup layout. Check the spacing, colors, structure, and general vibe of the design.',
  },
  {
    number: '04',
    title: 'Unlimited discussion',
    desc: 'We discuss changes over WhatsApp, Email, or Google Meet. I tweak the design until it matches your vision perfectly.',
  },
  {
    number: '05',
    title: 'I develop the full website',
    desc: 'If you love the custom homepage design and choose to hire me, I build the complete multi-page, SEO-optimized site.',
  },
  {
    number: '06',
    title: 'Launch your business online',
    desc: 'We launch your new website with custom hosting, canonical setups, domain connections, and submit sitemaps to Google.',
  },
];

export default function FreeDesign() {
  return (
    <section className={styles.freeDesign} id="free-design" aria-labelledby="free-design-title">
      <div className={styles.freeDesign__bg_overlay} aria-hidden="true" />

      <div className={styles.freeDesign__container}>
        {/* Header */}
        <header className={styles.freeDesign__header}>
          <div className={styles.freeDesign__label}>
            <span>My Workflow</span>
          </div>
          <h2 className={styles.freeDesign__title} id="free-design-title">
            The Easy 6-Step{' '}
            <span className={styles.freeDesign__title_highlight}>Process</span>
          </h2>
          <p className={styles.freeDesign__subtitle}>
            From your initial idea to a live business website — transparent, fast, and completely risk-free.
          </p>
        </header>

        {/* Process Steps */}
        <div className={styles.process__grid} role="list" aria-label="Development steps">
          {stepsList.map((step, index) => (
            <article 
              key={step.number} 
              className={styles.process__card}
              role="listitem"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s forwards`
              }}
            >
              <span className={styles.process__number}>{step.number}</span>
              <h3 className={styles.process__card_title}>{step.title}</h3>
              <p className={styles.process__card_desc}>{step.desc}</p>
            </article>
          ))}
        </div>

        {/* Free Design Offer Callout Box */}
        <div className={styles.offer__block}>
          <div className={styles.offer__content}>
            <span className={styles.offer__badge}>EXCLUSIVE OFFER</span>
            <h3 className={styles.offer__title}>Get a FREE Website Design Before You Hire Me</h3>
            <p className={styles.offer__text}>
              Tell me about your business. Within a short time, I&apos;ll create a professional homepage design completely free. No payment. No commitment.
            </p>
            <div className={styles.offer__list}>
              <div className={styles.offer__item}>
                <span className={styles.offer__item_check}>✓</span>
                <span>No Payment Required Upfront</span>
              </div>
              <div className={styles.offer__item}>
                <span className={styles.offer__item_check}>✓</span>
                <span>Zero Commitment & Risk</span>
              </div>
              <div className={styles.offer__item}>
                <span className={styles.offer__item_check}>✓</span>
                <span>Unlimited Discussion & Support</span>
              </div>
            </div>
          </div>

          {/* Large WhatsApp CTA Button Card replacing form */}
          <div className={styles.offer__whatsapp_card}>
            <h4 className={styles.offer__whatsapp_title}>Claim Your Design Now</h4>
            <p className={styles.offer__whatsapp_text}>
              Tap the button below to message me on WhatsApp. We can discuss your business and start your free design immediately!
            </p>
            
            <a 
              href="https://wa.me/923479429415" 
              className={styles.offer__whatsapp_button}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request free website design on WhatsApp"
            >
              <span className={styles.offer__whatsapp_icon}>
                <WhatsAppIcon size={36} />
              </span>
              <span>Claim Free Design on WhatsApp</span>
            </a>
            
            <span className={styles.offer__whatsapp_footer}>
              Avg response time: under 15 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
