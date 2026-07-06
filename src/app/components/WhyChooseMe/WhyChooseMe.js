'use client';

import styles from './WhyChooseMe.module.css';

/* ——— Luxury Outline SVG Icon Components ——— */
const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BoltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SwatchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34458 19.49 5.34458 20.25 4.85857 20.74C4.37256 21.23 3.58744 21.23 3.10143 20.74C1.19128 18.81 0 16.07 0 13C0 6.37 5.37 1 12 1C18.63 1 24 6.37 24 13C24 19.63 18.63 25 12 25C10.9 25 10 24.1 10 23C10 22.4 10.2 21.9 10.6 21.5C11.1 21.1 11.4 20.6 11.4 20C11.4 18.9 10.5 18 9.4 18H8" />
  </svg>
);

const GaugeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const TrendingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const reasonsList = [
  {
    title: 'Professional AI Web Developer',
    desc: 'Expert level AI-assisted development resulting in incredibly fast delivery and pixel-perfect results.',
    IconComponent: CodeIcon,
  },
  {
    title: 'SEO Focused',
    desc: 'I structure every page and tag to perform flawlessly on search engine indexes, aiming for page-one rankings.',
    IconComponent: SearchIcon,
  },
  {
    title: 'Fast Delivery',
    desc: 'Advanced tools let me complete custom websites in days instead of weeks, keeping your business moving.',
    IconComponent: BoltIcon,
  },
  {
    title: 'Modern UI & Premium UX',
    desc: 'Curated custom palettes, typography, interactive animations, and responsive structures built to wow visitors.',
    IconComponent: SwatchIcon,
  },
  {
    title: 'Lightning Fast Load Times',
    desc: 'Next.js server-side rendering, layout optimization, and clean script execution for near-instant loads.',
    IconComponent: GaugeIcon,
  },
  {
    title: 'Mobile Optimized',
    desc: 'Perfect fluid layouts designed to look gorgeous on iPhones, Androids, tablets, and massive monitors.',
    IconComponent: PhoneIcon,
  },
  {
    title: 'Worldwide Clients',
    desc: 'Serving businesses across the USA, UK, Canada, Australia, Europe, and beyond. Global standards guaranteed.',
    IconComponent: GlobeIcon,
  },
  {
    title: 'Affordable Rates',
    desc: 'Top-tier freelancer coding value without high corporate agency markups, giving you the best ROI.',
    IconComponent: TagIcon,
  },
  {
    title: 'Clean Code',
    desc: 'Standards-based, modern React components designed for scalability and easy future updates.',
    IconComponent: LayersIcon,
  },
  {
    title: 'Scalable Architecture',
    desc: 'A robust digital framework that grows alongside your business, from simple pages to massive portals.',
    IconComponent: TrendingIcon,
  },
];

export default function WhyChooseMe() {
  return (
    <section className={styles.whyChooseMe} id="why-choose-me" aria-labelledby="why-choose-title">
      <div className={styles.whyChooseMe__bg_overlay} aria-hidden="true" />

      <div className={styles.whyChooseMe__container}>
        {/* Header */}
        <header className={styles.whyChooseMe__header}>
          <div className={styles.whyChooseMe__label}>
            <span>Why Me</span>
          </div>
          <h2 className={styles.whyChooseMe__title} id="why-choose-title">
            Why Choose My{' '}
            <span className={styles.whyChooseMe__title_highlight}>Services</span>
          </h2>
          <p className={styles.whyChooseMe__subtitle}>
            Combining the world&apos;s most advanced coding capabilities with manual inspection to deliver premium, conversion-ready sites.
          </p>
        </header>

        {/* Reasons Grid */}
        <div className={styles.whyChooseMe__grid} role="list" aria-label="Professional values">
          {reasonsList.map((reason, index) => (
            <article 
              key={reason.title} 
              className={styles.whyChooseMe__card}
              role="listitem"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`
              }}
            >
              <div className={styles.whyChooseMe__card_icon} aria-hidden="true">
                <reason.IconComponent />
              </div>
              <div className={styles.whyChooseMe__card_content}>
                <h3 className={styles.whyChooseMe__card_title}>{reason.title}</h3>
                <p className={styles.whyChooseMe__card_desc}>{reason.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
