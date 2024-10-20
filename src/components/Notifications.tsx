// components/Notifications.tsx
import React from 'react';
import styled from 'styled-components';

const NotificationsContainer = styled.div`
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
`;

const NotificationItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

const Notifications = () => {
  const notifications = [
    'Deadline for grade submissions: Nov 30, 2024',
    'System maintenance: Dec 5, 2024',
    'New policy update on exam grading',
  ];

  return (
    <NotificationsContainer>
      {notifications.map((notification, index) => (
        <NotificationItem key={index}>{notification}</NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;
