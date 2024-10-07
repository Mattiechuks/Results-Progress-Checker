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

const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const UserRolePermissionTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>ROLE NAME</Th>
          <Th>NUMBER OF USERS</Th>
          <Th>PERMISSION</Th>
          <Th>ACTIONS</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Admin</Td>
          <Td>5</Td>
          <Td>Full Access</Td>
          <Td><ActionButton>Edit</ActionButton></Td>
        </tr>
        <tr>
          <Td>Student</Td>
          <Td>200</Td>
          <Td>View Only</Td>
          <Td><ActionButton>Edit</ActionButton></Td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default UserRolePermissionTable;
