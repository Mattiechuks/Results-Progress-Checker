// components/VisualAnalytics.tsx
import React from 'react';
import VisualAnalyticsBarChart from './VisualAnalyticsBarChart';
import VisualAnalyticsPieChart from './VisualAnalyticsPieChart';
import styled from 'styled-components';

const AnalyticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }


 @media (max-width: 600px) {
    
 }
`;

const VisualAnalytics = () => {
  return (
    <AnalyticsContainer>
      <VisualAnalyticsBarChart />
      <VisualAnalyticsPieChart />
    </AnalyticsContainer>
  );
};

export default VisualAnalytics;
