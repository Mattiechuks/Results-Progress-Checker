'use client';

import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  background-color: #2c2c2c;
  color: #fff;
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #444;
`;

const Td = styled.td`
  background-color: #1c1c1c;
  color: #fff;
  padding: 0.75rem;
  border-bottom: 1px solid #444;
`;

const GeneralReportsTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>USER TYPE</Th>
          <Th>COURSE MATERIAL</Th>
          <Th>VIEW</Th>
          <Th>UPLOADS</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Lecturer</Td>
          <Td>Advanced Algorithms</Td>
          <Td>14</Td>
          <Td>11</Td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default GeneralReportsTable;
