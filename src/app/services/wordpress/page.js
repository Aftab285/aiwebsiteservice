import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Professional WordPress Website Design & Development Services',
  description: 'Hire an expert WordPress developer for custom design, development, modification, speed optimization, and bug fixing. Get a FREE homepage mockup today!',
  keywords: 'WordPress Website Design, WordPress Development, Custom WordPress Website, WordPress Freelancer, WordPress Expert, WordPress Designer, Hire WordPress Developer, Professional WordPress Developer, Affordable WordPress Developer, WordPress Website Redesign, WordPress Maintenance, Elementor Expert, WooCommerce Developer, Responsive WordPress Website, SEO-Friendly WordPress Website, Fast WordPress Website, WordPress Bug Fix, WordPress Modification, Landing Page Design, Website Development',
  alternates: {
    canonical: 'https://aiwebsiteservice.com/services/wordpress',
  },
  openGraph: {
    title: 'Professional WordPress Website Design & Development Services',
    description: 'Hire an expert WordPress developer for custom design, development, modification, speed optimization, and bug fixing. Get a FREE homepage mockup today!',
    url: 'https://aiwebsiteservice.com/services/wordpress',
    siteName: 'AI Website Service',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional WordPress Website Design & Development Services',
    description: 'Hire an expert WordPress developer for custom design, development, modification, and bug fixing. Get a FREE homepage mockup today!',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'AI Website Service - WordPress Expert',
      url: 'https://aiwebsiteservice.com/services/wordpress',
      description: 'Expert WordPress website design, development, and modification services.',
      areaServed: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IE', 'NZ'],
      priceRange: '$$',
      makesOffer: {
        '@type': 'Offer',
        name: 'Free WordPress Homepage Design',
        description: 'Get a custom homepage design mockup before you hire me. No obligation.',
        price: '0',
        priceCurrency: 'USD',
      }
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a WordPress website cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost depends on the complexity, features, and number of pages. I offer affordable pricing for professional, high-converting websites.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard custom WordPress website usually takes 1-3 weeks depending on your requirements and feedback speed.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can you redesign my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! I specialize in WordPress website redesigns to improve UX, speed, conversions, and SEO.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can you speed up my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. I optimize images, databases, caching, and code to ensure your WordPress site passes Core Web Vitals.'
          }
        }
      ]
    }
  ]
};

export default function WordPressLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Sticky Header CTA for Conversion Optimization */}
      <div className={styles.sticky_cta_bar}>
        <span>Ready for a high-converting WordPress website?</span>
        <a href="#free-design" className={styles.btn_sticky}>Get Free Mockup</a>
      </div>

      <Header />
      
      <main className={styles.main}>
        
        {/* Section 1: Hero */}
        <section className={styles.hero_fullscreen}>
          <div className={styles.hero_fullscreen__overlay}></div>
          <div className={styles.hero_fullscreen__container}>
            <div className={styles.hero_fullscreen__content}>
              <h1 className={styles.hero_fullscreen__title}>
                Professional WordPress Website Design & Development Services
              </h1>
              <p className={styles.hero_fullscreen__subtitle}>
                I build fast, modern, SEO-friendly WordPress websites that help businesses grow. From complete website development and redesigns to bug fixes, speed optimization, and website modifications—I provide everything you need in one place.
              </p>
              
              <div className={styles.hero_fullscreen__cta_group}>
                <a href="#free-design" className={styles.btn_primary_large}>Get My FREE Homepage Design</a>
                <a href="#contact" className={styles.btn_secondary_large}>Get a Free Quote</a>
              </div>

              <div className={styles.hero_fullscreen__trust_marks}>
                <span>✔ SEO Optimized</span>
                <span>✔ Mobile Responsive</span>
                <span>✔ Fast Loading</span>
                <span>✔ Secure & Reliable</span>
                <span>✔ Custom WordPress Development</span>
              </div>
            </div>
          </div>
          <div className={styles.scroll_indicator}>
            <span>Scroll Down</span>
            <div className={styles.scroll_arrow}>↓</div>
          </div>
        </section>

        {/* Section 2: Trusted By */}
        <section className={styles.trusted}>
          <div className={styles.container}>
            <p className={styles.trusted__text}>Trusted by ambitious brands and professionals worldwide</p>
            <div className={styles.trusted__logos}>
              <span>Businesses</span>
              <span>Startups</span>
              <span>Agencies</span>
              <span>Freelancers</span>
              <span>Small Businesses</span>
              <span>E-commerce</span>
              <span>Consultants</span>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Me */}
        <section className={styles.why_choose_me}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Why Partner With Me?</h2>
            <div className={styles.grid_3}>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>🎨</div>
                <h3>Professional Design</h3>
                <p>Clean, modern, and luxury aesthetics that build instant trust with your visitors.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>🔍</div>
                <h3>SEO Ready</h3>
                <p>Built-in technical SEO, clean semantic HTML, and fast loading times for higher Google rankings.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>⚡</div>
                <h3>Lightning Fast</h3>
                <p>Optimized Core Web Vitals to ensure your site loads instantly on all devices.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>📱</div>
                <h3>Mobile Friendly</h3>
                <p>100% responsive design that looks flawless on phones, tablets, and desktops.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>🔒</div>
                <h3>Security Best Practices</h3>
                <p>Hardened WordPress installations to protect your data and prevent malicious attacks.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>🖱️</div>
                <h3>Easy to Update</h3>
                <p>Intuitive backend setups so you can edit text and images without touching code.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>📈</div>
                <h3>Conversion Focused</h3>
                <p>Strategic layouts, strong CTAs, and UX principles designed to turn visitors into leads.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>💰</div>
                <h3>Affordable Pricing</h3>
                <p>Premium agency-quality WordPress development without the massive agency price tag.</p>
              </div>
              <div className={styles.card_premium}>
                <div className={styles.card_icon}>🤝</div>
                <h3>Unlimited Support</h3>
                <p>Clear communication and ongoing post-launch support to keep your site running smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Services */}
        <section className={styles.services_mega} id="services">
          <div className={styles.container}>
            <h2 className={styles.section_title}>Expert WordPress Services</h2>
            <p className={styles.section_subtitle}>Everything you need to succeed online, managed by a single expert.</p>
            
            <div className={styles.services_list}>
              
              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>Custom WordPress Website</h3>
                  <p>I build tailored websites from scratch that align perfectly with your brand identity.</p>
                  <ul className={styles.smc_list}>
                    <li>Business websites & Corporate sites</li>
                    <li>Portfolios & Personal websites</li>
                    <li>Landing pages & Agency websites</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>WordPress Website Redesign</h3>
                  <p>Is your site looking old? I'll modernize it to boost your credibility.</p>
                  <ul className={styles.smc_list}>
                    <li>Modern, fresh redesign</li>
                    <li>Better UX (User Experience)</li>
                    <li>Higher conversion rates & branding</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>WordPress Website Modification</h3>
                  <p>Need changes to an existing site? I provide fast and reliable modifications.</p>
                  <ul className={styles.smc_list}>
                    <li>Update existing or add new pages</li>
                    <li>Fix broken layouts and improve UI</li>
                    <li>Update plugins and themes safely</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>WordPress Bug Fixing</h3>
                  <p>Don't let errors ruin your business. I troubleshoot and fix complex issues.</p>
                  <ul className={styles.smc_list}>
                    <li>White screen of death & PHP errors</li>
                    <li>Plugin conflicts & Theme issues</li>
                    <li>CSS, JavaScript, and Responsive fixes</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>WordPress Speed Optimization</h3>
                  <p>Stop losing visitors to slow loading screens. I'll make your site blazing fast.</p>
                  <ul className={styles.smc_list}>
                    <li>Pass Core Web Vitals & Google PageSpeed</li>
                    <li>Advanced Caching & Image optimization</li>
                    <li>Code minification & Database cleanup</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>WooCommerce Development</h3>
                  <p>Launch a profitable online store with a customized, seamless shopping experience.</p>
                  <ul className={styles.smc_list}>
                    <li>Store redesign & Product pages</li>
                    <li>Payment gateways integration</li>
                    <li>Checkout optimization for higher sales</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>Elementor Expert</h3>
                  <p>Master-level Elementor page building for ultimate flexibility.</p>
                  <ul className={styles.smc_list}>
                    <li>High-converting Landing pages</li>
                    <li>Custom widgets & Smooth animations</li>
                    <li>Responsive fixes for Elementor templates</li>
                  </ul>
                </div>
              </div>

              <div className={styles.service_mega_card}>
                <div className={styles.smc_content}>
                  <h3>Website Maintenance</h3>
                  <p>Focus on your business while I keep your website secure and up to date.</p>
                  <ul className={styles.smc_list}>
                    <li>Core, Theme, and Plugin updates</li>
                    <li>Daily backups & Security monitoring</li>
                    <li>Monthly support & proactive bug fixes</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Free Homepage Design Offer (High Conversion) */}
        <section className={styles.free_offer} id="free-design">
          <div className={styles.free_offer__container}>
            <div className={styles.free_offer__badge}>Special Offer</div>
            <h2>Get Your Homepage Designed <span className={styles.text_gradient}>FREE</span></h2>
            <p>
              Before you hire me, I'll design your homepage at no cost so you can see my quality before making any commitment.
            </p>
            <ul className={styles.offer_guarantees}>
              <li>✓ No obligation</li>
              <li>✓ No hidden charges</li>
              <li>✓ 100% free</li>
              <li>✓ Limited slots available</li>
            </ul>
            <a href="https://wa.me/923479429415" target="_blank" rel="noopener noreferrer" className={styles.btn_primary_large}>Claim My Free Homepage Design</a>
          </div>
        </section>

        {/* Section 6: My Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>My Simple 7-Step Process</h2>
            <div className={styles.timeline}>
              {['Discuss project', 'Free homepage mockup', 'Feedback & Revisions', 'Full Development', 'Rigorous Testing', 'Successful Launch', 'Ongoing Support'].map((step, index) => (
                <div className={styles.timeline_item} key={index}>
                  <div className={styles.timeline_number}>{index + 1}</div>
                  <h4>{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Benefits */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>The Results You Can Expect</h2>
            <div className={styles.benefits_grid}>
              <div className={styles.benefit_item}>🚀 More Leads & Sales</div>
              <div className={styles.benefit_item}>🔍 Better SEO Rankings</div>
              <div className={styles.benefit_item}>💎 Professional Branding</div>
              <div className={styles.benefit_item}>⚡ Fast Website Speeds</div>
              <div className={styles.benefit_item}>📈 Higher Conversions</div>
              <div className={styles.benefit_item}>📱 Responsive Design</div>
              <div className={styles.benefit_item}>🛠️ Easy Management</div>
              <div className={styles.benefit_item}>🌱 Highly Scalable</div>
              <div className={styles.benefit_item}>🔒 Bank-Level Secure</div>
            </div>
          </div>
        </section>

        {/* Section 8: Industries Served */}
        <section className={styles.industries}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Industries I Serve</h2>
            <div className={styles.industries_tags}>
              {['Healthcare', 'Construction', 'Real Estate', 'Law Firms', 'Restaurants', 'Schools', 'Education', 'Finance', 'Travel', 'Startups', 'SaaS', 'Fitness', 'Marketing Agencies', 'Consultants', 'Doctors', 'E-commerce', 'Nonprofits', 'Personal Brands'].map(industry => (
                <span className={styles.industry_tag} key={industry}>{industry}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Frequently Asked Questions</h2>
            <div className={styles.faq_grid}>
              <div className={styles.faq_item}>
                <h4>How much does a WordPress website cost?</h4>
                <p>Costs vary based on complexity, but my pricing is highly affordable compared to traditional agencies. Contact me for a free quote.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>How long does it take?</h4>
                <p>A standard 5-page business website takes 1-2 weeks. Complex eCommerce sites may take 3-4 weeks.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you redesign my website?</h4>
                <p>Yes, I specialize in WordPress website redesigns to improve your brand image, UX, and conversion rates.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you fix WordPress errors?</h4>
                <p>Absolutely. From the white screen of death to plugin conflicts, I handle all types of WordPress bug fixing.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you speed up my website?</h4>
                <p>Yes, WordPress speed optimization is one of my core services. I guarantee faster load times and better Core Web Vitals.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you work with Elementor?</h4>
                <p>Yes, I am an Elementor Expert capable of building custom, pixel-perfect layouts without relying on bloated templates.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you redesign WooCommerce?</h4>
                <p>Yes, I am an experienced WooCommerce developer. I can redesign product pages and optimize the checkout process.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Do you provide support?</h4>
                <p>Yes, I offer unlimited support and website maintenance packages to keep your site secure after launch.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Do you migrate websites?</h4>
                <p>Yes, I safely migrate websites to new hosts or domains with zero downtime and zero data loss.</p>
              </div>
              <div className={styles.faq_item}>
                <h4>Can you create landing pages?</h4>
                <p>Yes, I design high-converting landing pages tailored for Google Ads, Facebook Ads, or email campaigns.</p>
              </div>
            </div>
            {/* Added a subtle note for the remaining 10 FAQs to keep the UI clean, or they can be added later as an accordion */}
            <p style={{textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)'}}>Have more questions? Reach out directly via WhatsApp or Email.</p>
          </div>
        </section>

        {/* Section 10: Final CTA */}
        <section id="contact" className={styles.final_cta}>
          <div className={styles.container}>
            <div className={styles.final_cta_box}>
              <h2>Ready to Build a High-Converting WordPress Website?</h2>
              <p>Join businesses in the USA, UK, Canada, Australia, and worldwide who trust my WordPress expertise.</p>
              
              {/* Form placeholder area for CRO */}
              <div className={styles.final_cta__actions}>
                <a href="#free-design" className={styles.btn_primary_large}>Get My Free Homepage Design</a>
                <a href="mailto:contact@aiwebsiteservice.com" className={styles.btn_secondary_large}>Request Free Consultation</a>
              </div>
              <div className={styles.contact_direct}>
                <a href="https://wa.me/923479429415" className={styles.btn_whatsapp}>
                  <span>📱 Chat on WhatsApp: +92 347 9429415</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
