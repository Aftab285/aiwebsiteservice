import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './page.module.css';

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

export default function WordPressLandingPage() {
  return (
    <>
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
                <div className={styles.service_icon}>🚀</div>
                <h3>Full Website Development</h3>
                <p>Custom, responsive, and SEO-friendly WordPress websites built from scratch tailored to your exact business needs.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}>✨</div>
                <h3>Website Updates & Redesign</h3>
                <p>Modernize your outdated website with a fresh UI/UX that builds trust and massively improves your conversion rates.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}>🛡️</div>
                <h3>Maintenance & Support</h3>
                <p>Enjoy peace of mind with regular daily backups, safe plugin updates, continuous security checks, and uptime monitoring.</p>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_icon}>🔧</div>
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
                <div className={styles.why_icon}>🌍</div>
                <div className={styles.why_text}>
                  <h3>Seamless Communication</h3>
                  <p>Fluent English and highly responsive across all major time zones (USA, UK, AU, etc.). You will never be left in the dark.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon}>💻</div>
                <div className={styles.why_text}>
                  <h3>Expert-Level Coding</h3>
                  <p>Clean semantic HTML, modern CSS, and lightweight WordPress structures that rank well on Google and load instantly.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon}>⚡</div>
                <div className={styles.why_text}>
                  <h3>Fast Turnaround Times</h3>
                  <p>I respect your deadlines. Projects are delivered swiftly without ever compromising on the premium quality you expect.</p>
                </div>
              </div>
              <div className={styles.why_item}>
                <div className={styles.why_icon}>📈</div>
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
