import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FaqAccordion from './FaqAccordion';
import styles from './page.module.css';

const faqData = [
  {
    question: 'Why should I hire a WordPress developer instead of doing it myself?',
    answer: 'While WordPress is user-friendly, building a fast, secure, and highly-converting website requires deep technical knowledge. A professional WordPress developer ensures your site follows best practices for SEO, loads instantly, and provides a flawless user experience, saving you hundreds of hours.'
  },
  {
    question: 'How much does it cost to hire a WordPress expert?',
    answer: 'The cost depends entirely on your project requirements. A simple redesign might be a few hundred dollars, while a complex WooCommerce platform will be more. However, as a freelance WordPress expert, my overhead is low, meaning you get agency-level quality at a much more affordable rate.'
  },
  {
    question: 'Do you offer ongoing WordPress maintenance?',
    answer: 'Yes! After your website is launched, I offer comprehensive WordPress maintenance packages. This includes daily backups, security monitoring, plugin updates, and priority bug fixing to ensure your site never goes down.'
  },
  {
    question: 'Can you fix my slow-loading WordPress site?',
    answer: 'Absolutely. Speed optimization is one of my core WordPress services. I will analyze your Core Web Vitals, implement advanced caching, optimize images, and clean up bloated code to guarantee lightning-fast load times.'
  },
  {
    question: 'Do you work with clients internationally?',
    answer: 'Yes, I work with clients all over the world, primarily in the USA, UK, Canada, and Australia. I maintain flexible working hours to ensure seamless communication regardless of your time zone.'
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: 'Expert WordPress Development & Maintenance Services',
  description: 'Hire an expert WordPress developer for custom design, development, modification, speed optimization, and bug fixing. Get a FREE homepage mockup today!',
  keywords: 'Custom WordPress Development Services, Expert WordPress Maintenance, Hire WordPress Developer, WordPress Website Redesign, WordPress Bug Fixing',
  alternates: {
    canonical: 'https://aiwebsiteservice.com/services/wordpress',
  },
  openGraph: {
    title: 'Expert WordPress Development & Maintenance Services',
    description: 'Hire an expert WordPress developer for custom design, development, modification, and bug fixing. Get a FREE homepage mockup today!',
    url: 'https://aiwebsiteservice.com/services/wordpress',
    siteName: 'AI Website Service',
    type: 'website',
  },
};

// Custom SVG Icons
const CodeIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const ShieldIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const WrenchIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const GlobeIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const LaptopIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const LightningIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ChartIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default function WordPressLandingPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Header />
      
      <main className={styles.main}>
        
        {/* Section 1: Hero (Centered) */}
        <section className={styles.hero}>
          <div className={styles.hero_bg_accent}></div>
          <div className={styles.container}>
            <div className={styles.hero_content}>
              <h1 className={styles.hero_title}>
                Expert <span className={styles.hero_title_highlight}>WordPress</span> Development & Maintenance Services
              </h1>
              <p className={styles.hero_subtitle}>
                I build, update, and fix WordPress websites for businesses worldwide. 
                Focus on growing your business while I handle the technical heavy lifting.
              </p>
              
              <div className={styles.hero_actions}>
                <a href="#free-design" className={styles.btn_primary}>Get Your Free Homepage Design</a>
                <a href="#contact" className={styles.btn_secondary}>Discuss Your Full Project</a>
              </div>

              <div className={styles.hero_trust_snippet}>
                <span className={styles.stars}>★★★★★</span>
                <span>Trusted by businesses in the US, UK, Australia & beyond</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Free Homepage Design (Lead Magnet) */}
        <section id="free-design" className={styles.lead_magnet}>
          <div className={styles.container}>
            <div className={styles.lm_grid}>
              <div className={styles.lm_content}>
                <h2>Try Before You Buy: Get a <br/>Free Custom Homepage Design</h2>
                <p>
                  I know hiring a developer online can feel risky. That's why I offer a 100% free, 
                  no-obligation homepage mockup before you ever pay a dime. I want to prove my 
                  quality and build trust from day one.
                </p>
                <a href="https://wa.me/923479429415" target="_blank" rel="noopener noreferrer" className={styles.btn_primary}>
                  Claim Your Free Design Now
                </a>
              </div>
              
              <div className={styles.lm_steps}>
                <div className={styles.lm_step}>
                  <div className={styles.lm_step_num}>1</div>
                  <div className={styles.lm_step_text}>
                    <h3>Contact Me</h3>
                    <p>Send a quick message via WhatsApp or Email.</p>
                  </div>
                </div>
                <div className={styles.lm_step}>
                  <div className={styles.lm_step_num}>2</div>
                  <div className={styles.lm_step_text}>
                    <h3>Discuss Requirements</h3>
                    <p>We'll have a brief chat about your brand and goals.</p>
                  </div>
                </div>
                <div className={styles.lm_step}>
                  <div className={styles.lm_step_num}>3</div>
                  <div className={styles.lm_step_text}>
                    <h3>Receive Your Mockup</h3>
                    <p>Get a high-quality homepage design tailored to your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core WordPress Services */}
        <section className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Core WordPress Services</h2>
            <p className={styles.section_subtitle}>
              Everything you need to launch, scale, and secure your WordPress website.
            </p>
            
            <div className={styles.services_grid}>
              <div className={styles.service_card}>
                <div className={styles.service_icon}><CodeIcon /></div>
                <h3>Full Website Development</h3>
                <p>Custom, responsive, and SEO-friendly WordPress websites built from scratch tailored to your exact business needs.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}><DesignIcon /></div>
                <h3>Website Updates & Redesign</h3>
                <p>Modernize your outdated website with a fresh UI/UX that builds trust and massively improves your conversion rates.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}><ShieldIcon /></div>
                <h3>Maintenance & Support</h3>
                <p>Enjoy peace of mind with regular daily backups, safe plugin updates, continuous security checks, and uptime monitoring.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}><WrenchIcon /></div>
                <h3>Bug Fixing & Troubleshooting</h3>
                <p>Fast resolution for fatal errors, white screen of death, slow loading speeds, plugin conflicts, and responsive CSS issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Me */}
        <section className={styles.why_me}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Why Choose Me?</h2>
            <p className={styles.section_subtitle}>
              An international standard of quality without the massive agency overhead.
            </p>
            
            <div className={styles.why_grid}>
              <div className={styles.why_item}>
                <div className={styles.why_icon} style={{ color: '#2563eb' }}><GlobeIcon /></div>
                <div className={styles.why_text}>
                  <h3>Seamless Communication</h3>
                  <p>Fluent English and highly responsive across all major time zones (USA, UK, AU, etc.). You will never be left in the dark.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon} style={{ color: '#2563eb' }}><LaptopIcon /></div>
                <div className={styles.why_text}>
                  <h3>Expert-Level Coding</h3>
                  <p>Clean semantic HTML, modern CSS, and lightweight WordPress structures that rank well on Google and load instantly.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon} style={{ color: '#2563eb' }}><LightningIcon /></div>
                <div className={styles.why_text}>
                  <h3>Fast Turnaround Times</h3>
                  <p>I respect your deadlines. Projects are delivered swiftly without ever compromising on the premium quality you expect.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon} style={{ color: '#2563eb' }}><ChartIcon /></div>
                <div className={styles.why_text}>
                  <h3>Focus on ROI</h3>
                  <p>I don't just build pretty websites. I build conversion-optimized funnels designed to turn your visitors into paying clients.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Social Proof & Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>What International Clients Say</h2>
            <p className={styles.section_subtitle}>
              Don't just take my word for it. Here is what business owners around the world have experienced.
            </p>
            
            <div className={styles.test_grid}>
              <div className={styles.test_card}>
                <p className={styles.test_quote}>"Absolutely fantastic experience. The communication was flawless despite the time zone difference, and the final website exceeded all my expectations. Highly recommended!"</p>
                <div className={styles.test_author}>
                  <div className={styles.test_avatar}></div>
                  <div className={styles.test_info}>
                    <h4>John D.</h4>
                    <p>🇺🇸 USA, Tech Startup</p>
                  </div>
                </div>
              </div>
              <div className={styles.test_card}>
                <p className={styles.test_quote}>"Fixed critical bugs on my WooCommerce store within hours. Very professional, fast, and knows WordPress inside and out. Will definitely hire again for ongoing maintenance."</p>
                <div className={styles.test_author}>
                  <div className={styles.test_avatar}></div>
                  <div className={styles.test_info}>
                    <h4>Sarah M.</h4>
                    <p>🇬🇧 United Kingdom, E-commerce</p>
                  </div>
                </div>
              </div>
              <div className={styles.test_card}>
                <p className={styles.test_quote}>"The free homepage design offer completely won me over. Seeing the quality upfront gave me the confidence to proceed with the full build. A brilliant developer."</p>
                <div className={styles.test_author}>
                  <div className={styles.test_avatar}></div>
                  <div className={styles.test_info}>
                    <h4>David K.</h4>
                    <p>🇦🇺 Australia, Agency Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Freelance WordPress Expert vs. Agency */}
        <section className={styles.expert_vs_agency}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Why Hire a Freelance WordPress Expert?</h2>
            <p className={styles.section_subtitle}>
              Skip the massive agency overhead and get direct access to premium WordPress development.
            </p>
            
            <div className={styles.eva_grid}>
              <div className={styles.eva_card}>
                <h3>Typical Web Agency</h3>
                <ul className={styles.eva_list}>
                  <li><span className={styles.eva_icon_cross}>✖</span> High costs due to office overhead and managers.</li>
                  <li><span className={styles.eva_icon_cross}>✖</span> You talk to a project manager, not the developer.</li>
                  <li><span className={styles.eva_icon_cross}>✖</span> Slow response times and bureaucratic processes.</li>
                  <li><span className={styles.eva_icon_cross}>✖</span> Your project might be handed off to junior devs.</li>
                </ul>
              </div>
              <div className={`${styles.eva_card} ${styles.eva_freelance}`}>
                <div className={styles.eva_badge}>Your Best Choice</div>
                <h3>My Freelance Service</h3>
                <ul className={styles.eva_list}>
                  <li><span className={styles.eva_icon_check}>✔</span> Cost-effective pricing for premium quality.</li>
                  <li><span className={styles.eva_icon_check}>✔</span> Direct 1-on-1 communication with your developer.</li>
                  <li><span className={styles.eva_icon_check}>✔</span> Fast, agile turnaround times with zero red tape.</li>
                  <li><span className={styles.eva_icon_check}>✔</span> 100% of the work is done by a senior WordPress expert.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: WordPress Tech Stack & Capabilities */}
        <section className={styles.tech_stack}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Advanced WordPress Capabilities</h2>
            <p className={styles.section_subtitle}>
              From custom themes to complex e-commerce integrations, I use the industry's best tools to build your site.
            </p>
            
            <div className={styles.tech_grid}>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>🎨</div>
                <h3>Elementor Pro Mastery</h3>
                <p>Pixel-perfect, highly responsive layouts built with the world's leading page builder.</p>
              </div>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>🛒</div>
                <h3>WooCommerce</h3>
                <p>Robust online stores optimized for high conversion rates and seamless checkouts.</p>
              </div>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>⚡</div>
                <h3>Speed Optimization</h3>
                <p>Passing Google Core Web Vitals with advanced caching and code minification.</p>
              </div>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>🛠️</div>
                <h3>Advanced Custom Fields (ACF)</h3>
                <p>Creating highly dynamic, easily manageable backend data structures for your team.</p>
              </div>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>🔒</div>
                <h3>Ironclad Security</h3>
                <p>Hardening your WordPress installation against malware, brute force, and exploits.</p>
              </div>
              <div className={styles.tech_card}>
                <div className={styles.tech_icon}>🔍</div>
                <h3>Technical SEO</h3>
                <p>Schema markup, proper semantic HTML, and clean architecture that Google loves.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: SEO FAQ */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Frequently Asked Questions</h2>
            <p className={styles.section_subtitle}>
              Everything you need to know about hiring a WordPress developer.
            </p>
            <FaqAccordion faqs={faqData} />
          </div>
        </section>

        {/* Section 6: The Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>How We Work Together</h2>
            <p className={styles.section_subtitle}>A simple, transparent, and completely stress-free process.</p>
            
            <div className={styles.process_flow}>
              <div className={styles.process_step}>
                <div className={styles.process_num}>1</div>
                <h3>Discovery & Strategy</h3>
                <p>We analyze your business goals, target audience, and specific requirements.</p>
              </div>
              <div className={styles.process_step}>
                <div className={styles.process_num}>2</div>
                <h3>Free Homepage Mockup</h3>
                <p>I design a custom, high-converting homepage layout to prove my value to you.</p>
              </div>
              <div className={styles.process_step}>
                <div className={styles.process_num}>3</div>
                <h3>Full Development</h3>
                <p>Once approved, I build out the full responsive website with unlimited revisions.</p>
              </div>
              <div className={styles.process_step}>
                <div className={styles.process_num}>4</div>
                <h3>Launch & Support</h3>
                <p>We launch your new site and I provide ongoing maintenance and security support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Final Call to Action */}
        <section id="contact" className={styles.final_cta}>
          <div className={styles.container}>
            <div className={styles.final_cta_box}>
              <h2>Ready to Transform Your Online Presence?</h2>
              <p>
                Stop losing customers to outdated design and slow loading speeds. 
                Take advantage of my zero-risk Free Homepage Design offer today.
              </p>
              <div className={styles.final_cta_actions}>
                <a href="#free-design" className={styles.btn_white}>Get Your Free Homepage Design</a>
                <a href="mailto:contact@aiwebsiteservice.com" className={styles.btn_outline_white}>Discuss Your Full Project</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer hideCtaBlock={true} />
    </>
  );
}
