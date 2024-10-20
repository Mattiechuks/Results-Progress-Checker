// components/RecentActivity.tsx
import React from 'react';
import styled from 'styled-components';

const ActivityContainer = styled.div`
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
`;

const ActivityItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

const RecentActivity = () => {
  const activities = [
    'Updated grades for John Doe',
    'Added new student: Jane Smith',
    'Posted end-of-term results',
  ];

  return (
    <ActivityContainer>
      {activities.map((activity, index) => (
        <ActivityItem key={index}>{activity}</ActivityItem>
      ))}
    </ActivityContainer>
  );
};

export default RecentActivity;
