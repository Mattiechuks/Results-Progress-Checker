// components/ProfileIcon.tsx
'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileIcon = () => {
  const [profilePicUrl, setProfilePicUrl] = useState('');

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        const response = await fetch('YOUR_DJANGO_BACKEND_URL/api/profile-pic');
        const data = await response.json();
        setProfilePicUrl(data.profilePicUrl);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };
    fetchProfilePic();
  }, []);

  return (
    <ProfilePicContainer>
      <ProfileImage src={profilePicUrl} alt="Profile Picture" />
    </ProfilePicContainer>
  );
};

export default ProfileIcon;

const ProfilePicContainer = styled.div`
  width: 75px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid #ecf0f1;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
