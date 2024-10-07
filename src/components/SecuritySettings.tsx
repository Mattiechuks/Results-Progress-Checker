'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SecuritySettings: React.FC = () => {
  return (
    <Container>
      <h2>Security Settings</h2>
      <div>
        <label>Password Policies:</label>
        <div>
          <input type="checkbox" id="strongPassword" />
          <label htmlFor="strongPassword">Enable Strong Password</label>
        </div>
        <div>
          <label>Password Length:</label>
          <input type="number" min="8" defaultValue="8" />
        </div>
        <div>
          <label>Password Expiration:</label>
          <input type="number" min="30" defaultValue="30" /> days
        </div>
      </div>
      <div>
        <label>Multi-Factor Authentication (MFA):</label>
        <div>
          <input type="checkbox" id="enableMFA" />
          <label htmlFor="enableMFA">Enable MFA</label>
        </div>
        <div>
          <label>MFA Settings:</label>
          <div>
            <input type="checkbox" id="emailVerification" />
            <label htmlFor="emailVerification">Email Verification</label>
          </div>
          <div>
            <input type="checkbox" id="smsVerification" />
            <label htmlFor="smsVerification">SMS Verification</label>
          </div>
        </div>
      </div>
      <div>
        <label>Session Timeout:</label>
        <div>
          <input type="checkbox" id="enableSessionTimeout" />
          <label htmlFor="enableSessionTimeout">Enable Session Timeout</label>
        </div>
      </div>
    </Container>
  );
};

export default SecuritySettings;
