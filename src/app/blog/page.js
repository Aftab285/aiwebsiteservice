'use client';

import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { categories, blogPosts } from './posts';
import styles from './blog.module.css';

export default function BlogHome() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Header />
      <div className={styles.blogPage}>
        <div className={styles.blog__bg_overlay} aria-hidden="true" />
        
        <div className={styles.blog__container}>
          {/* Header */}
          <header className={styles.blog__header}>
            <h1 className={styles.blog__title}>AI Web Development Blog</h1>
            <p className={styles.blog__subtitle}>
              Insights, guides, and tutorials on building lightning-fast, SEO-optimized websites using advanced AI tools.
            </p>
          </header>

          {/* Categories list */}
          <div className={styles.categories__list} role="tablist" aria-label="Blog categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`${styles.category__btn} ${selectedCategory === cat ? styles.category__btn_active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className={styles.posts__grid} role="region" aria-live="polite">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className={styles.post__card}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s forwards`
                }}
              >
                <div className={styles.post__card_preview} aria-hidden="true">
                  {post.icon}
                </div>
                <div className={styles.post__card_content}>
                  <span className={styles.post__card_category}>{post.category}</span>
                  <h2 className={styles.post__card_title}>{post.title}</h2>
                  <p className={styles.post__card_desc}>{post.metaDesc}</p>
                  <a href={`/blog/${post.slug}`} className={styles.post__card_link}>
                    <span>Read Article</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
