'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqList = [
  {
    q: 'How long does it take to create a website using AI?',
    a: 'Using our advanced AI-assisted coding tools, we can deliver a premium custom homepage design within 24 to 48 hours. The complete website setup usually takes between 3 to 7 days, depending on the number of pages and integrations.',
  },
  {
    q: 'Can I really get a custom homepage design for FREE?',
    a: 'Yes, absolutely! Tell me about your business goals and design requirements, and I will build a fully custom homepage mockup layout at zero cost. If you love it, we can proceed to build the rest of the site; if not, there is no commitment and no charge.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. We specialize in website redesigns. We can import content from WordPress, Wix, or custom setups, redesign the layout using premium UI elements, and build it on Next.js to achieve ultra-fast loading speeds.',
  },
  {
    q: 'Can you improve my Google search rankings (SEO)?',
    a: 'Yes! SEO is our top priority. Every website we build includes semantic HTML, structured Schema.org JSON-LD data, breadcrumb schemas, proper heading hierarchies, descriptive meta tags, and alt images. This is optimized to rank in Google, Claude, Gemini, ChatGPT, and Perplexity.',
  },
  {
    q: 'How do we migrate a site from WordPress to Next.js?',
    a: 'We export your WordPress database (posts, pages, media), clean out old bloated plugins and scripts, design a new premium layout, and map all old URLs to new ones with clean redirect schemas to ensure you do not lose any SEO authority.',
  },
  {
    q: 'Can you build a fully custom E-commerce website using AI?',
    a: 'Yes. We build responsive e-commerce web applications featuring secure checkout gateways, shopping carts, item management panels, and clean payment APIs like Stripe and PayPal.',
  },
  {
    q: 'What AI tools do you use in your workflow?',
    a: 'We utilize advanced design and coding systems including Lovable, Anthropic Claude, OpenAI Codex, Google Gemini, Google AI Studio, and Google Stitch to accelerate code generation, ensuring every line is manually reviewed and customized.',
  },
  {
    q: 'Will my website look generic if it is built with AI?',
    a: 'Not at all. The AI tools accelerate code layout generation and base architectures, while every visual color palette, typography line, spacing block, and asset is manually customized and tailored to match your specific brand identity.',
  },
  {
    q: 'Do you charge a monthly fee?',
    a: 'We charge a one-time project fee for development. Hosting, domain names, and third-party API subscriptions are paid directly to those providers, giving you full ownership. We also offer optional maintenance plans.',
  },
  {
    q: 'Can you connect my custom domain name?',
    a: 'Yes, we handle all technical domain configuration, setup DNS records, map custom subdomains, configure MX mail records, and hook up free SSL certificates to ensure secure HTTPs connections.',
  },
  {
    q: 'What is a Next.js website developer?',
    a: 'Next.js is a premium React framework that supports server-side rendering (SSR), static site generation (SSG), and layout optimizations, providing the fastest and most search-engine-friendly React experience available.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Yes, 100%. We design with responsive grid systems, ensuring layout elements scale perfectly from mobile views up to large desktop screens.',
  },
  {
    q: 'Do you write the website copy?',
    a: 'We can utilize advanced LLMs to generate optimized draft copy for your pages, which we then inspect, refine, and optimize for target business keywords.',
  },
  {
    q: 'Can you integrate custom analytics engines?',
    a: 'Yes, we set up privacy-friendly analytics, Google Search Console, Google Tag Manager, and pixel trackers to monitor your site traffic.',
  },
  {
    q: 'Do you offer ongoing website support?',
    a: 'Yes, we provide monthly website maintenance packages covering core system updates, backups, security firewalls, and priority page changes.',
  },
  {
    q: 'Are your websites accessible (WCAG compliant)?',
    a: 'Yes, we build using semantic HTML elements, add descriptive ARIA attributes, ensure high contrast colors, and verify full keyboard navigation compatibility.',
  },
  {
    q: 'What is a Core Web Vital optimization?',
    a: 'Core Web Vitals are speed metrics Google uses to rank sites. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to achieve perfect scores.',
  },
  {
    q: 'Can we build custom web app portals?',
    a: 'Yes, using React and Next.js, we can develop interactive web portals, API connections, dashboard setups, and registration flows.',
  },
  {
    q: 'Can I update the website content myself?',
    a: 'Yes. We can integrate a headless Content Management System (CMS) like Sanity or Contentful, allowing you to edit text, posts, and media.',
  },
  {
    q: 'Where do you host Next.js websites?',
    a: 'We recommend deployment on Vercel, Netlify, or AWS Amplify. These platforms provide global CDN routing, fast loading, and SSL security.',
  },
  {
    q: 'Can you create an AI chatbot assistant for my site?',
    a: 'Yes, we hook up custom LLM widgets (like OpenAI Assistants or Gemini API models) trained directly on your business documents.',
  },
  {
    q: 'Is there a contract or commitment required?',
    a: 'No contracts are required for the free homepage design offer. If you choose to hire us for the full build, we provide a clean, simple proposal detailing terms.',
  },
  {
    q: 'What if I do not like the free design?',
    a: 'If the design is not to your liking, you can walk away. No payments are requested, and you keep no files.',
  },
  {
    q: 'Do you support multi-language websites?',
    a: 'Yes, we set up localized routing, translations, and custom language flags to target search results in multiple countries.',
  },
  {
    q: 'Can you integrate my CRM like HubSpot or Salesforce?',
    a: 'Yes, we connect contact forms, lead funnels, newsletters, and scheduling links directly to your CRM platform.',
  },
  {
    q: 'What is the cost of building a full website?',
    a: 'Prices vary based on project scale. After reviewing the free homepage concept, we provide a transparent, fixed price quote.',
  },
  {
    q: 'Do you help with branding and logo design?',
    a: 'We focus on website design and layout. However, we can generate custom assets and logos to help kickstart your branding.',
  },
  {
    q: 'Can I host the website on my own servers?',
    a: 'Yes, we can export static HTML builds or Node.js server configurations for hosting on your own servers.',
  },
  {
    q: 'How do you test the website speed?',
    a: 'We run tests using Google Lighthouse, GTmetrix, and WebPageTest to confirm perfect loading optimization across all devices.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply fill out the form above, drop me an email at contact@aiwebsiteservice.com, or send a message on WhatsApp!',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Structured FAQ Schema Page JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <div className={styles.faq__bg_overlay} aria-hidden="true" />
      
      {/* Inject Structured FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.faq__container}>
        {/* Header */}
        <header className={styles.faq__header}>
          <div className={styles.faq__label}>
            <span>FAQ Page</span>
          </div>
          <h2 className={styles.faq__title} id="faq-title">
            Frequently Asked{' '}
            <span className={styles.faq__title_highlight}>Questions</span>
          </h2>
          <p className={styles.faq__subtitle}>
            Have questions about my AI development workflow, speed optimizations, design costs, or SEO implementations? Find answers here.
          </p>
        </header>

        {/* Accordions */}
        <div className={styles.accordion__list}>
          {faqList.map((item, idx) => (
            <article 
              key={idx} 
              className={`${styles.item} ${openIdx === idx ? styles.item_active : ''}`}
            >
              <button 
                className={styles.trigger}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">+</span>
              </button>
              
              <div 
                id={`faq-content-${idx}`}
                className={styles.panel}
                role="region"
              >
                <div className={styles.panel_content}>
                  <p>{item.a}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
