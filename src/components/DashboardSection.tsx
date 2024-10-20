'use client';

import styled from 'styled-components';

const DashboardSection = styled.div`
  position: relative;
  right: 40px;
  width: 100%;
  padding: 20px;
  background-color: #e3dac9;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export default DashboardSection;
