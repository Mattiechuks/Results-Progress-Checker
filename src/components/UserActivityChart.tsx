'use client';

import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const UserActivityChart: React.FC = () => {
  return (
    <ChartContainer>
      <h2>User Activity</h2>
      {/* Add chart implementation here */}
    </ChartContainer>
  );
};

export default UserActivityChart;
