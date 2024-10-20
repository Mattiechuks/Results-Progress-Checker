'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logoImage2 from '../../../public/images/progresslogo2.jpg';

const FooterContainer = styled.div`
  width: 100vw;
  height:5.7vh;
  background-color: #191919;
  position: fixed;
  right: 0;
  bottom: 30px;
`;

const FooterStyled = styled.footer`
  background-color: #191919;
  color: white;
  text-align: center;
  justify-content: center;
  padding: 5px;
  border-top: 1px solid #191919;
  font-size: 0.45rem;

  @media (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

const LogoImage2 = styled(Image)`
  width: 10%;
  height: 10%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterStyled>
        <LogoImage2 src={logoImage2} alt="Logo" />
        <p>
          © 2024 THE DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY IN PARTIAL FULFILLMENT OF THE REQUIREMENTS FOR THE AWARD OF NATIONAL DIPLOMA IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY PETROLEUM TRAINING INSTITUTE EFFURUN, DELTA STATE. JANUARY. ALL RIGHTS RESERVED.
        </p>
      </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
