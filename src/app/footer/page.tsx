'use client';
import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import logoImage2 from '../../../public/images/progresslogo2.jpg';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.footerContainer}>
      <footer className={`${styles.footer} ${isVisible ? styles.visible : styles.hidden}`}>
        <Image src={logoImage2} alt="Logo" className={styles.logoImage2} />
        <p>© 2024 THE DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY IN PARTIAL FULFILLMENT OF THE REQUIREMENTS FOR THE AWARD OF NATIONAL DIPLOMA IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY PETROLEUM TRAINING INSTITUTE EFFURUN, DELTA STATE. JANUARY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Footer;
