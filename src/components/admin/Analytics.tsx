// components/admin/Analytics.tsx
import React from 'react';
import styled from 'styled-components';
import LoginTrendsChart from '@/components/LoginTrendsChart';
import UserActivityChart from '@/components/UserActivityChart';
import CoursePerformanceChart from '@/components/CoursePerformanceChart';
import GradeDistributionChart from '@/components/GradeDistributionChart';
import PassFailChart from '@/components/PassFailChart';

const AnalyticsContainer = styled.div`
  display: grid;
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;



const Analytics: React.FC = () => {
  return (
    <AnalyticsContainer>
      <LoginTrendsChart />
      <UserActivityChart />
      <CoursePerformanceChart />
      <GradeDistributionChart />
      <PassFailChart />
    </AnalyticsContainer>
  );
};

export default Analytics;
