// components/SummaryStats.tsx
import React from 'react';
import styled from 'styled-components';

const SummaryStatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
`;

const StatBox = styled.div`
  flex: 1;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const SummaryStats = () => {
  return (
    <SummaryStatsContainer>
      <StatBox>
        <StatValue>85%</StatValue>
        <StatLabel>Pass Rate</StatLabel>
      </StatBox>
      <StatBox>
        <StatValue>3.5</StatValue>
        <StatLabel>Average GPA</StatLabel>
      </StatBox>
      <StatBox>
        <StatValue>450</StatValue>
        <StatLabel>Total Students</StatLabel>
      </StatBox>
    </SummaryStatsContainer>
  );
};

export default SummaryStats;
