'use client';

import { useState } from 'react';
import styles from './Services.module.css';

/* ——— Luxury Outline SVG Icon Components ——— */
const BusinessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const CloudIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34458 19.49 5.34458 20.25 4.85857 20.74C4.37256 21.23 3.58744 21.23 3.10143 20.74C1.19128 18.81 0 16.07 0 13C0 6.37 5.37 1 12 1C18.63 1 24 6.37 24 13C24 19.63 18.63 25 12 25C10.9 25 10 24.1 10 23C10 22.4 10.2 21.9 10.6 21.5C11.1 21.1 11.4 20.6 11.4 20C11.4 18.9 10.5 18 9.4 18H8" />
    <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
    <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const ConstructionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M21 16H3M21 12H3M21 8H3" />
  </svg>
);

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z" />
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CpuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const RefreshIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const FastIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const SearchSEOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const servicesList = [
  {
    title: 'Business Websites',
    category: 'development',
    desc: 'Establish a powerful online presence with custom-made corporate and business websites optimized to convert visitors into clients.',
    IconComponent: BusinessIcon,
  },
  {
    title: 'Landing Pages',
    category: 'development',
    desc: 'High-converting single-page layouts designed to drive sales, capture leads, and launch promotions with maximum impact.',
    IconComponent: TargetIcon,
  },
  {
    title: 'Startup Websites',
    category: 'development',
    desc: 'Stunning web designs tailored for startups looking to raise funding, acquire customers, and tell their brand story.',
    IconComponent: RocketIcon,
  },
  {
    title: 'SaaS Websites',
    category: 'saas_ecommerce',
    desc: 'Premium landing pages and marketing platforms designed to drive product signups, demo requests, and monthly recurring revenue.',
    IconComponent: CloudIcon,
  },
  {
    title: 'Agency Websites',
    category: 'development',
    desc: 'Sleek, high-converting platforms built specifically for creative, digital, marketing, real estate, and consulting agencies.',
    IconComponent: LayersIcon,
  },
  {
    title: 'Portfolio Websites',
    category: 'custom',
    desc: 'Showcase your creative projects, photography, coding work, or freelance services with a breathtaking digital showcase.',
    IconComponent: PaletteIcon,
  },
  {
    title: 'Law Firm Websites',
    category: 'custom',
    desc: 'Professional, trustworthy websites designed for legal practices, defense attorneys, and corporate law firms.',
    IconComponent: ShieldIcon,
  },
  {
    title: 'Medical Websites',
    category: 'custom',
    desc: 'HIPAA-compliant, highly secure web portals for hospitals, local clinics, dentists, doctors, and healthcare professionals.',
    IconComponent: HeartIcon,
  },
  {
    title: 'Restaurant Websites',
    category: 'custom',
    desc: 'Bespoke web platforms featuring digital menus, online reservation links, and local delivery service integrations.',
    IconComponent: CupIcon,
  },
  {
    title: 'Construction Websites',
    category: 'custom',
    desc: 'Showcase completed builds, list available services, and capture quote requests for contractors and developers.',
    IconComponent: ConstructionIcon,
  },
  {
    title: 'Real Estate Websites',
    category: 'saas_ecommerce',
    desc: 'Websites featuring advanced listing filters, property maps, and lead generation capture for agents and agencies.',
    IconComponent: HomeIcon,
  },
  {
    title: 'School Websites',
    category: 'custom',
    desc: 'Educational platforms for academies, universities, high schools, e-learning startups, and course providers.',
    IconComponent: BookIcon,
  },
  {
    title: 'E-commerce Websites',
    category: 'saas_ecommerce',
    desc: 'Fully loaded online stores featuring secure payments, cart controls, custom checkouts, and inventory trackers.',
    IconComponent: CartIcon,
  },
  {
    title: 'Personal Websites',
    category: 'custom',
    desc: 'Personal brand websites, speaker landing pages, blog platforms, and CV resumes tailored to boost your authority.',
    IconComponent: UserIcon,
  },
  {
    title: 'AI Websites',
    category: 'custom',
    desc: 'Cutting-edge web apps embedded with generative AI APIs, chatbot assistants, automated workflows, and custom models.',
    IconComponent: CpuIcon,
  },
  {
    title: 'Website Redesign',
    category: 'optimization',
    desc: 'Transform your outdated, slow website into a modern, lightning-fast digital asset that ranks higher and converts better.',
    IconComponent: RefreshIcon,
  },
  {
    title: 'Website Speed Optimization',
    category: 'optimization',
    desc: 'Aim for perfect 100/100 Google Lighthouse and Core Web Vitals scores by cleaning scripts, optimising images, and caching.',
    IconComponent: FastIcon,
  },
  {
    title: 'SEO Optimization',
    category: 'optimization',
    desc: 'Advanced technical SEO, perfect schemas, metadata structure, and internal linking designed to dominate search engine index rankings.',
    IconComponent: SearchSEOIcon,
  },
  {
    title: 'Website Maintenance',
    category: 'optimization',
    desc: 'Ongoing backend updates, daily file backups, firewalls, and priority support to ensure your website runs smoothly 24/7.',
    IconComponent: WrenchIcon,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Web Development' },
    { id: 'saas_ecommerce', label: 'SaaS & E-commerce' },
    { id: 'optimization', label: 'SEO & Speed' },
    { id: 'custom', label: 'Specialized Sites' },
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <div className={styles.services__bg_overlay} aria-hidden="true" />
      
      <div className={styles.services__container}>
        {/* Header */}
        <header className={styles.services__header}>
          <div className={styles.services__label}>
            <span>My Core Capabilities</span>
          </div>
          <h2 className={styles.services__title} id="services-title">
            Professional Web Development{' '}
            <span className={styles.services__title_highlight}>Services</span>
          </h2>
          <p className={styles.services__subtitle}>
            Explore our comprehensive range of AI-accelerated web solutions, designed to outperform competition, rank higher, and look incredibly premium.
          </p>
        </header>

        {/* Tab Filters */}
        <div className={styles.services__tabs} role="tablist" aria-label="Filter services">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="services-grid"
              className={`${styles.services__tab} ${activeTab === tab.id ? styles.services__tab_active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div 
          className={styles.services__grid} 
          id="services-grid" 
          role="region" 
          aria-live="polite"
        >
          {filteredServices.map((service, index) => (
            <article 
              key={service.title} 
              className={styles.services__card}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`
              }}
            >
              <div className={styles.services__card_icon} aria-hidden="true">
                <service.IconComponent />
              </div>
              <h3 className={styles.services__card_title}>{service.title}</h3>
              <p className={styles.services__card_desc}>{service.desc}</p>
              <a href="https://wa.me/923479429415" className={styles.services__card_link} target="_blank" rel="noopener noreferrer">
                <span>Discuss on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
