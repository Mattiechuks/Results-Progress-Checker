// components/GeneralSettings.tsx
'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 72%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const GeneralSettings: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [theme, setTheme] = useState('dark');
  const [timezone, setTimezone] = useState('UTC');

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    formData.append('theme', theme);
    formData.append('timezone', timezone);

    // Send data to backend
    fetch('YOUR_DJANGO_BACKEND_URL/api/settings', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Settings saved:', data))
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <Container>
      <h2>General Settings</h2>
      <div>
        <label>Profile Picture:</label>
        <input type="file" onChange={handleProfilePictureChange} />
      </div>
      <div>
        <label>Theme Selection:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>
      </div>
      <div>
        <label>Time Zone Selector:</label>
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
          <option value="UTC">UTC</option>
          <option value="GMT">GMT</option>
          {/* Add more time zones as needed */}
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
    </Container>
  );
};

export default GeneralSettings;
