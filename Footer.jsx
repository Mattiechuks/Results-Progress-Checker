import React, { useEffect, useState } from 'react';
import './Footer.css';
import logoImage2 from '/progresslogo2.jpg';

const Footer = () => {
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
    <div className="footer-container">
      <footer className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
        <img src={logoImage2} alt="Logo" className="logo-image2" />
        <p>© 2024 THE DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY IN PARTIALFULFILLMENT OF THE REQUIREMENTS FOR THE AWARD OF NATIONAL DIPLOMA IN COMPUTERSCIENCE AND INFORMATION TECHNOLOGY PETROLEUM TRAINING INSTITUTE EFFURUN,DELTA STATE.JANUARY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Footer;
