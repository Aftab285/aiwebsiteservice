'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projectsList } from '@/app/portfolio/projects';
import styles from './PortfolioSlider.module.css';

export default function PortfolioSlider() {
  const [lightboxProject, setLightboxProject] = useState(null);

  const featuredProjects = [
    { id: 'sc1', title: '', desc: '', image: '/portfolio/showcase1.jpg' },
    { id: 'sc2', title: '', desc: '', image: '/portfolio/showcase2.jpg' },
    { id: 'sc3', title: '', desc: '', image: '/portfolio/showcase3.jpg' },
    { id: 'sc4', title: '', desc: '', image: '/portfolio/showcase4.jpg' },
    { id: 'sc5', title: '', desc: '', image: '/portfolio/showcase5.jpg' },
    { id: 'sc6', title: '', desc: '', image: '/portfolio/showcase6.jpg' },
    { id: 'sc7', title: '', desc: '', image: '/portfolio/showcase7.jpg' },
    { id: 'sc9', title: '', desc: '', image: '/portfolio/showcase9.jpg' },
  ];

  // Duplicate for seamless infinite marquee scroll
  const marqueeProjects = [...featuredProjects, ...featuredProjects];

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

  const ExpandIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );

  return (
    <section className={styles.portfolioSlider} id="portfolio-slider" aria-labelledby="slider-title">
      <div className={styles.portfolioSlider__bg_overlay} aria-hidden="true" />

      <div className={styles.portfolioSlider__container}>
        <div className={styles.portfolioSlider__header}>
          <h2 className={styles.portfolioSlider__title}>Recent Projects</h2>
        </div>

        {/* Slider Section */}
        <div className={styles.slider__wrapper}>
          <div className={styles.slider__track_container}>
            <div className={styles.slider__track}>
              {marqueeProjects.map((project, index) => (
                <article 
                  key={`${project.id}-${index}`}
                  className={styles.slide}
                  onClick={() => openLightbox(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openLightbox(project);
                    }
                  }}
                >
                  <div className={styles.slide__image_container}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={375}
                      className={styles.slide__image}
                      loading="lazy"
                    />
                    <div className={styles.slide__overlay}>
                      <div className={styles.slide__expand_btn}>
                        <ExpandIcon />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
