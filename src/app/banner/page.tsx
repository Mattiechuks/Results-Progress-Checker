'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Banner.module.css';
import Image from 'next/image';
import bannerImage from '../../../public/images/banner.png';

const Banner: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  const handleStudentDashboardClick = () => {
    router.push('/student-dashboard');
  };
  const handleAdminDashboardClick = () => {
    router.push('/admin-dashboard');
  };
  const handleAdminClick = () => {
    router.push('/admin-login');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            <h1>Access Your Academic <br /> Records <span>With Ease</span></h1>
            <p>Effortlessly Access and Ease into Academic Achievement at Our Prestigious Institution's Secure Result Portal</p>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleAdminClick}>Admin Login</button>
            <button onClick={handleStudentDashboardClick}>Student Dashboard</button>
            <button onClick={handleAdminDashboardClick}>Admin Dashboard</button>
            <button onClick={handleContactClick}>Contact Us</button>
          </div>
          <Image src={bannerImage} alt="Banner" className={styles.bannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
