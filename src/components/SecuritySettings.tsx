// components/SecuritySettings.tsx
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

const SecuritySettings: React.FC = () => {
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [passwordExpiration, setPasswordExpiration] = useState(30);
  const [enableMFA, setEnableMFA] = useState(false);
  const [enableSessionTimeout, setEnableSessionTimeout] = useState(false);

  const handleSave = () => {
    console.log('Strong Password:', strongPassword);
    console.log('Password Length:', passwordLength);
    console.log('Password Expiration:', passwordExpiration);
    console.log('Enable MFA:', enableMFA);
    console.log('Enable Session Timeout:', enableSessionTimeout);
    // Add code to send data to the backend
  };

  return (
    <Container>
      <h2>Security Settings</h2>
      <div>
        <label>Password Policies:</label>
        <div>
          <input type="checkbox" checked={strongPassword} onChange={() => setStrongPassword(!strongPassword)} />
          <label>Enable Strong Password</label>
        </div>
        <div>
          <label>Password Length:</label>
          <input type="number" min="8" value={passwordLength} onChange={(e) => setPasswordLength(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Password Expiration:</label>
          <input type="number" min="30" value={passwordExpiration} onChange={(e) => setPasswordExpiration(parseInt(e.target.value))} /> days
        </div>
      </div>
      <div>
        <label>Multi-Factor Authentication (MFA):</label>
        <div>
          <input type="checkbox" checked={enableMFA} onChange={() => setEnableMFA(!enableMFA)} />
          <label>Enable MFA</label>
        </div>
      </div>
      <div>
        <label>Session Timeout:</label>
        <div>
          <input type="checkbox" checked={enableSessionTimeout} onChange={() => setEnableSessionTimeout(!enableSessionTimeout)} />
          <label>Enable Session Timeout</label>
        </div>
      </div>
      <button onClick={handleSave}>Save</button>
    </Container>
  );
};

export default SecuritySettings;
