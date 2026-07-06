'use client';

import { useState } from 'react';
import styles from './Portfolio.module.css';

const portfolioImages = [
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_29_50 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_31_36 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_33_12 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_37_05 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_38_45 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_42_16 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_45_03 PM.png',
  '/portfolio/ChatGPT Image Jul 4, 2026, 07_47_24 PM.png',
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= portfolioImages.length - 2 ? 0 : prev + 1));
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolio__bg_overlay} aria-hidden="true" />
      <div className={styles.portfolio__container}>
        <div className={styles.carousel__wrapper}>
          <button className={`${styles.carousel__btn} ${styles.carousel__btn_prev}`} onClick={handlePrev} aria-label="Previous">
            &#10094;
          </button>
          
          <div className={styles.carousel__viewport}>
            <div 
              className={styles.carousel__track} 
              style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
            >
              {portfolioImages.map((src, index) => (
                <div key={index} className={styles.carousel__slide}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Portfolio slide ${index + 1}`} className={styles.carousel__img} />
                </div>
              ))}
            </div>
          </div>

          <button className={`${styles.carousel__btn} ${styles.carousel__btn_next}`} onClick={handleNext} aria-label="Next">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
