'use client';

import { useState } from 'react';
import styles from './page.module.css';

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function FaqAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faq_item} ${activeIndex === index ? styles.active : ''}`}
        >
          <button 
            className={styles.faq_question} 
            onClick={() => toggleFaq(index)}
            aria-expanded={activeIndex === index}
          >
            {faq.question}
            <span className={styles.faq_icon}><ChevronDown /></span>
          </button>
          <div className={styles.faq_answer}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
