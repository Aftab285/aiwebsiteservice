import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.check_icon}>
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function AboutMe() {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.about_container}>
        
        <div className={styles.about_image_wrapper}>
          <Image 
            src="/images/aftab-profile.jpg" 
            alt="Aftab - AI Website Developer" 
            fill
            className={styles.about_image}
          />
        </div>

        <div className={styles.about_content}>
          <h3 className={styles.about_subtitle}>Meet Your AI Website Developer</h3>
          <h2 className={styles.about_title}>Hi, I'm Aftab 👋</h2>
          
          <p className={styles.about_text}>
            I'm passionate about building modern, high-converting websites that help businesses grow. With over <strong>5+ years</strong> of WordPress experience and a specialization in <strong>AI-powered website development</strong>, I help clients launch faster, smarter, and more scalable websites.
          </p>

          <h3 className={styles.cta_title} style={{marginTop: '10px', marginBottom: '5px'}}>Why Work With Me?</h3>
          <ul className={styles.why_list}>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>5+ years of WordPress website development experience</span>
            </li>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>1+ year specializing in AI website development</span>
            </li>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>Top Rated Website Developer on Freelancer.com</span>
            </li>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>SEO-friendly, responsive, and fast-loading websites</span>
            </li>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>Clear communication from start to finish</span>
            </li>
            <li className={styles.why_item}>
              <CheckIcon />
              <span>Ongoing support after project delivery</span>
            </li>
          </ul>

          <div className={styles.cta_box}>
            <h3 className={styles.cta_title}>Let's Build Something Amazing Together</h3>
            <p className={styles.cta_text}>
              Have a project in mind? Let's discuss how we can build a website that helps your business stand out.
            </p>
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsapp_btn}
            >
              <WhatsAppIcon />
              Chat with me on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
