import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'WordPress Website Modification & Development Services | AI Website Service',
  description: 'Expert WordPress website modification, design, and development services. Get super SEO-friendly, fast, and high-converting WordPress sites from an experienced developer.',
  keywords: 'WordPress services, WordPress website modification, WordPress developer, fix WordPress site, custom WordPress design, WordPress SEO, hire WordPress expert',
};

export default function WordPressServices() {
  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* Section 1: Hero */}
        <section className={styles.hero}>
          <div className={styles.hero__content}>
            <span className={styles.badge}>Expert WordPress Developer</span>
            <h1 className={styles.hero__title}>
              Professional <span className={styles.highlight}>WordPress Website</span> Services & Modification
            </h1>
            <p className={styles.hero__subtitle}>
              From simple theme modifications to complete custom WordPress development. I build SEO-friendly, lightning-fast, and highly converting WordPress websites.
            </p>
            <div className={styles.hero__cta_group}>
              <a href="#contact" className={styles.cta_primary}>Get a Free Quote</a>
              <a href="#services" className={styles.cta_secondary}>Explore My Services</a>
            </div>
          </div>
        </section>

        {/* Section 2: Problem/Agitation */}
        <section className={styles.problem}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Is Your WordPress Site Holding You Back?</h2>
            <div className={styles.problem__grid}>
              <div className={styles.problem__card}>
                <h3>🐢 Slow Loading Speeds</h3>
                <p>A slow WordPress site kills conversions and ruins your Google rankings. Let me optimize it for top speed.</p>
              </div>
              <div className={styles.problem__card}>
                <h3>🔌 Plugin Bloat & Errors</h3>
                <p>Too many plugins cause conflicts and security vulnerabilities. I clean up and streamline your backend.</p>
              </div>
              <div className={styles.problem__card}>
                <h3>📉 Poor SEO Performance</h3>
                <p>Struggling to get traffic? I implement strict on-page SEO best practices tailored for WordPress.</p>
              </div>
              <div className={styles.problem__card}>
                <h3>🛠️ Broken Layouts</h3>
                <p>Need WordPress website modifications? I fix broken themes, responsive issues, and CSS glitches quickly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Services */}
        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>My Core WordPress Services</h2>
            <div className={styles.services__grid}>
              <div className={styles.service__card}>
                <div className={styles.service__icon}>🎨</div>
                <h3>WordPress Website Modification</h3>
                <p>Already have a site? I provide expert WordPress modifications, layout fixes, and custom code adjustments.</p>
              </div>
              <div className={styles.service__card}>
                <div className={styles.service__icon}>🚀</div>
                <h3>Custom Theme Development</h3>
                <p>I design and build custom, lightweight WordPress themes from scratch using modern web standards.</p>
              </div>
              <div className={styles.service__card}>
                <div className={styles.service__icon}>🛒</div>
                <h3>WooCommerce Setup</h3>
                <p>Launch or optimize your online store. I handle WooCommerce configuration, payment gateways, and product layouts.</p>
              </div>
              <div className={styles.service__card}>
                <div className={styles.service__icon}>⚡</div>
                <h3>Speed & Security Audits</h3>
                <p>I analyze your site's performance and implement caching, image optimization, and security hardening.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Me */}
        <section className={styles.why_choose_me}>
          <div className={styles.container}>
            <div className={styles.wcm__content}>
              <h2 className={styles.section_title}>Why Hire Me for Your WordPress Project?</h2>
              <ul className={styles.wcm__list}>
                <li><strong>5+ Years Experience:</strong> Deep knowledge of the WordPress ecosystem, PHP, and modern builders.</li>
                <li><strong>Top-Rated Developer:</strong> Proven track record of delivering successful projects on Freelancer.com.</li>
                <li><strong>SEO-First Approach:</strong> Every site I touch is optimized for search engines right out of the gate.</li>
                <li><strong>Transparent Communication:</strong> No technical jargon. Just clear, honest updates throughout the project.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Portfolio / Case Studies */}
        <section className={styles.portfolio}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Recent WordPress Projects</h2>
            <p className={styles.section_subtitle}>Take a look at some of the premium WordPress websites I've built and modified.</p>
            <div className={styles.portfolio__grid}>
              <div className={styles.portfolio__item}>
                <div className={styles.portfolio__image_placeholder}>Corporate Website Redesign</div>
                <h4>Business Consulting Firm</h4>
                <p>Complete WordPress overhaul resulting in a 40% increase in mobile conversions.</p>
              </div>
              <div className={styles.portfolio__item}>
                <div className={styles.portfolio__image_placeholder}>WooCommerce Modification</div>
                <h4>Boutique Fashion Store</h4>
                <p>Custom WooCommerce modifications to streamline the checkout process and boost sales.</p>
              </div>
              <div className={styles.portfolio__item}>
                <div className={styles.portfolio__image_placeholder}>Blog Speed Optimization</div>
                <h4>Tech News Portal</h4>
                <p>Reduced page load time from 6 seconds to 1.2 seconds, drastically improving SEO rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Process */}
        <section className={styles.process}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>How We Work Together</h2>
            <div className={styles.process__steps}>
              <div className={styles.step}>
                <div className={styles.step__number}>1</div>
                <h3>Discovery</h3>
                <p>We discuss your WordPress goals, existing issues, and required modifications.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.step__number}>2</div>
                <h3>Strategy & Plan</h3>
                <p>I outline the exact plugins, custom code, or theme changes needed.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.step__number}>3</div>
                <h3>Development</h3>
                <p>I get to work, modifying or building your WordPress site on a secure staging environment.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.step__number}>4</div>
                <h3>Launch & Support</h3>
                <p>After your approval, we go live. I provide ongoing support to keep your site healthy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: SEO & Performance */}
        <section className={styles.seo}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Super SEO-Friendly WordPress Sites</h2>
            <p className={styles.seo__text}>
              A beautiful WordPress site is useless if nobody can find it. My WordPress modification and development services include robust SEO foundations. I ensure your site has clean schema markup, proper heading structures, optimized images, and fast server response times so you can attract high-value clients directly from Google.
            </p>
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <section id="contact" className={styles.final_cta}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Ready to Upgrade Your WordPress Site?</h2>
            <p className={styles.section_subtitle}>Let's discuss your project today. I respond quickly and provide clear, actionable advice.</p>
            <div className={styles.final_cta__buttons}>
              <a href="mailto:contact@aiwebsiteservice.com" className={styles.cta_primary}>Email Me Now</a>
              <a href="https://wa.me/923479429415" target="_blank" rel="noopener noreferrer" className={styles.cta_secondary}>Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
