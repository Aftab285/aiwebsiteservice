import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { blogPosts } from '../posts';
import styles from '../blog.module.css';

// SVG Icons
const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="wa-grad-detail" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#55f27a" />
        <stop offset="100%" stopColor="#05c329" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="15" fill="url(#wa-grad-detail)" />
    <path d="M16 8.5c-4.14 0-7.5 3.36-7.5 7.5 0 1.48.43 2.85 1.17 4.02l-.77 2.82 2.89-.76A7.44 7.44 0 0016 23.5c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5zm0 1.25c3.45 0 6.25 2.8 6.25 6.25S19.45 22.25 16 22.25c-1.25 0-2.4-.37-3.37-1.01l-.24-.16-1.74.46.47-1.7-.18-.28A6.2 6.2 0 019.75 16c0-3.45 2.8-6.25 6.25-6.25zm3.17 7.7c-.17-.08-1.02-.5-1.18-.56-.16-.06-.27-.08-.38.08-.11.16-.44.56-.54.67-.1.11-.2.13-.37.05-.17-.08-.73-.27-1.39-.86-.51-.46-.86-1.02-.96-1.19-.1-.17-.01-.26.07-.34.08-.07.17-.2.25-.3.08-.1.11-.17.17-.28.06-.11.03-.21-.01-.3-.04-.08-.38-.92-.52-1.26-.14-.33-.28-.28-.38-.29-.1-.01-.21-.01-.32-.01-.11 0-.29.04-.44.2-.15.16-.58.57-.58 1.39 0 .82.6 1.62.68 1.73.08.11 1.18 1.8 2.86 2.53.4.17.71.28.96.36.4.13.77.11 1.06.07.32-.05 1-.41 1.14-.81.14-.4.14-.74.1-.81-.04-.07-.15-.11-.32-.2z" fill="#ffffff" />
  </svg>
);

// Dynamic Metadata Generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} | AI Website Developer Blog`,
    description: post.metaDesc,
    alternates: {
      canonical: `https://aiwebsiteservice.com/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://aiwebsiteservice.com/blog/${post.slug}`,
      title: post.title,
      description: post.metaDesc,
      publishedTime: new Date(post.date).toISOString(),
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className={styles.articlePage} style={{ textAlign: 'center' }}>
          <div className={styles.article__container}>
            <h1 className={styles.article__title}>Article Not Found</h1>
            <p className={styles.article__meta}>The requested blog post does not exist.</p>
            <a href="/blog" className={styles.article__cta_btn} style={{ marginTop: '24px', display: 'inline-block' }}>
              Return to Blog
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Find related posts details
  const relatedPosts = blogPosts.filter((p) => post.related.includes(p.slug));

  // JSON-LD Structured Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDesc,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'AI Website Service',
      url: 'https://aiwebsiteservice.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Website Service',
      url: 'https://aiwebsiteservice.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aiwebsiteservice.com/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Header />
      
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.articlePage}>
        <div className={styles.blog__bg_overlay} aria-hidden="true" />
        
        <article className={styles.article__container}>
          {/* Header */}
          <header className={styles.article__header}>
            <div className={styles.article__meta}>
              <span className={styles.article__category}>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h1 className={styles.article__title}>{post.title}</h1>
          </header>

          {/* Body Content */}
          <div 
            className={styles.article__content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article FAQ Section */}
          <section style={{ marginBottom: '48px' }} aria-labelledby="faq-section-title">
            <h2 id="faq-section-title" className={styles.related__title}>Article FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {post.faqs.map((faq, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>{faq.q}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Design Offer CTA */}
          <div className={styles.article__cta}>
            <h3 className={styles.article__cta_title}>Get a FREE Homepage Design Concept</h3>
            <p className={styles.article__cta_text}>
              Tell us about your project requirements on WhatsApp and we will create a custom homepage concept for free.
            </p>
            <a 
              href="https://wa.me/923479429415" 
              className={styles.article__cta_btn}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={24} />
              <span>Claim Free Design on WhatsApp</span>
            </a>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className={styles.related__posts} aria-labelledby="related-title">
              <h2 id="related-title" className={styles.related__title}>Related Articles</h2>
              <div className={styles.related__grid}>
                {relatedPosts.map((rel) => (
                  <a 
                    key={rel.slug} 
                    href={`/blog/${rel.slug}`} 
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={styles.post__card} style={{ height: '100%' }}>
                      <div className={styles.post__card_content}>
                        <span className={styles.post__card_category}>{rel.category}</span>
                        <h3 className={styles.post__card_title} style={{ fontSize: '1.05rem' }}>{rel.title}</h3>
                        <p className={styles.post__card_desc} style={{ fontSize: '0.82rem' }}>{rel.metaDesc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <Footer />
    </>
  );
}
