import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import bannerImage from '/banner.png';

const Banner = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1>Access Your Academic <br /> Records <span>With Ease</span></h1>
            <p>Effortlessly Access and Ease into Academic Achievement at Our Prestigious Institution's Secure Result Portal</p>
            <button onClick={handleLoginClick}>Login</button>
            {/* Temporary links for testing */}
            <button onClick={() => navigate('/user-dashboard/overview')}>User Dashboard</button>
            <button onClick={() => navigate('/admin-dashboard/user-management')}>Admin Dashboard</button>
            <button onClick={() => navigate('/admin-login')}>Admin Login</button>
          </div>
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
