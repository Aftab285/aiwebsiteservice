'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const feedbackItems = [
  {
    name: 'Sarah Jenkins',
    title: 'Founder, EcoStart Digital',
    text: '“I was blown away by the free homepage concept! It was beautiful, fast, and exactly what we were looking for. The transition to the full site build was seamless. Easily the best freelance experience I’ve had.”',
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    title: 'Product Lead, Finflow Inc.',
    text: '“Usually, building SaaS pages takes weeks of iteration and developer handoff meetings. Antigravity had our homepage concept ready in 24 hours. The code is clean, loading speeds are perfect, and conversion is up 20%.”',
    initials: 'MC',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Director, R&K Law Group',
    text: '“We needed a premium web presence that projected trust and professionalism. The custom schema implementation, metadata alignment, and SEO optimization they handled went way beyond standard developers.”',
    initials: 'ER',
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === feedbackItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? feedbackItems.length - 1 : prev - 1));
  };

  return (
    <section className={styles.testimonials} id="testimonials" aria-labelledby="testimonials-title">
      <div className={styles.testimonials__bg_overlay} aria-hidden="true" />

      <div className={styles.testimonials__container}>
        {/* Header */}
        <header className={styles.testimonials__header}>
          <div className={styles.testimonials__label}>
            <span>Testimonials</span>
          </div>
          <h2 className={styles.testimonials__title} id="testimonials-title">
            What Clients{' '}
            <span className={styles.testimonials__title_highlight}>Are Saying</span>
          </h2>
          <p className={styles.testimonials__subtitle}>
            Read the experiences of startups, SaaS firms, and small businesses who upgraded their online presence.
          </p>
        </header>

        {/* Carousel Slider */}
        <div className={styles.slider__outer}>
          <div className={styles.slider__track}>
            <div 
              className={styles.slider__inner}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {feedbackItems.map((item, idx) => (
                <div key={item.name} className={styles.slider__slide}>
                  <div className={styles.card}>
                    {/* Stars */}
                    <div className={styles.card__stars} aria-label="5 out of 5 stars rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    {/* Text */}
                    <p className={styles.card__text}>{item.text}</p>
                    {/* Author info */}
                    <div className={styles.card__author}>
                      <div className={styles.card__avatar} aria-hidden="true">
                        {item.initials}
                      </div>
                      <div className={styles.card__meta}>
                        <h3 className={styles.card__name}>{item.name}</h3>
                        <span className={styles.card__title}>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button 
              onClick={prevSlide} 
              className={styles.control_btn}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <div className={styles.dots} role="tablist" aria-label="Slides selectors">
              {feedbackItems.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={activeSlide === idx}
                  aria-label={`Slide ${idx + 1}`}
                  className={`${styles.dot} ${activeSlide === idx ? styles.dot_active : ''}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide} 
              className={styles.control_btn}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
