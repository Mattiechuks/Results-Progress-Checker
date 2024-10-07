import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const GeneralSettings: React.FC = () => {
  return (
    <Container>
      <h2>General Settings</h2>
      <div>
        <label>Theme Selection:</label>
        <select>
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
        </select>
      </div>
      <div>
        <label>Time Zone Selector:</label>
        <select>
          <option value="UTC">UTC</option>
          <option value="GMT">GMT</option>
          {/* Add more time zones as needed */}
        </select>
      </div>
    </Container>
  );
};

export default GeneralSettings;
