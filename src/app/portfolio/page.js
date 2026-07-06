'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { projectsList } from './projects';
import styles from './portfolio.module.css';

const categories = ['All', 'SaaS', 'E-Commerce', 'Corporate', 'Fintech', 'Landing Page'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxProject, setLightboxProject] = useState(null);

  // Filter projects by tags / category
  const filteredProjects = projectsList.filter((project) => {
    if (selectedCategory === 'All') return true;
    
    return project.tags.some(tag => 
      tag.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Corporate' && tag.toLowerCase().includes('business')) ||
      (selectedCategory === 'Corporate' && tag.toLowerCase().includes('enterprise')) ||
      (selectedCategory === 'E-Commerce' && tag.toLowerCase().includes('store'))
    );
  });

  const openLightbox = (project) => {
    setLightboxProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    document.body.style.overflow = 'unset';
  };

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      <Header />
      <main className={styles.portfolioPage}>
        {/* Background elements */}
        <div className={styles.portfolioPage__bg_overlay} aria-hidden="true" />

        <div className={styles.portfolioPage__container}>
          {/* Header */}
          <header className={styles.portfolioPage__header}>
            <h1 className={styles.portfolioPage__title}>
              My Portfolio{' '}
              <span className={styles.portfolioPage__title_highlight}>Gallery</span>
            </h1>
            <p className={styles.portfolioPage__subtitle}>
              Browse through all 36 design concepts and websites I have built using the world&apos;s most advanced AI coding workflows. Click on any design concept to zoom.
            </p>
          </header>

          {/* Category Filter Bar */}
          <div className={styles.filter__bar} role="tablist" aria-label="Filter portfolio categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`${styles.filter__btn} ${selectedCategory === cat ? styles.filter__btn_active : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className={styles.portfolio__grid} role="list" aria-label="Delivered website concepts">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={styles.portfolio__card}
                onClick={() => openLightbox(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(project);
                  }
                }}
              >
                <div className={styles.portfolio__image_wrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={450}
                    height={280}
                    className={styles.portfolio__image}
                    loading="lazy"
                  />
                  <div className={styles.portfolio__card_overlay}>
                    <span className={styles.portfolio__card_hint}>Zoom View</span>
                  </div>
                </div>

                <div className={styles.portfolio__card_info}>
                  <h3 className={styles.portfolio__card_title}>{project.title}</h3>
                  <p className={styles.portfolio__card_desc}>{project.desc}</p>
                  <div className={styles.portfolio__card_tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.portfolio__card_tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Call to Action Card */}
          <div className={styles.bottom__cta_card}>
            <h2 className={styles.bottom__cta_title}>Ready to secure your custom website?</h2>
            <p className={styles.bottom__cta_text}>
              I will design a custom homepage mockup of your website for FREE before you hire me. Zero commitment.
            </p>
            <div className={styles.bottom__cta_actions}>
              <a
                href="https://wa.me/923479429415"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bottom__cta_btn_primary}
              >
                Book Free Consultation on WhatsApp
              </a>
              <Link href="/#free-design" className={styles.bottom__cta_btn_secondary}>
                How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxProject && (
          <div 
            className={styles.lightbox} 
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Visual presentation of ${lightboxProject.title}`}
          >
            <button 
              className={styles.lightbox__close} 
              onClick={closeLightbox}
              aria-label="Close presentation overlay"
            >
              <CloseIcon />
            </button>

            <div 
              className={styles.lightbox__content}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.lightbox__image_wrapper}>
                <Image
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  width={1200}
                  height={750}
                  className={styles.lightbox__image}
                  priority
                />
              </div>
              <div className={styles.lightbox__info}>
                <h3 className={styles.lightbox__title}>{lightboxProject.title}</h3>
                <p className={styles.lightbox__desc}>{lightboxProject.desc}</p>
                <div className={styles.lightbox__tags}>
                  {lightboxProject.tags.map((tag) => (
                    <span key={tag} className={styles.lightbox__tag_pill}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
