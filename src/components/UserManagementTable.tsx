'use client';

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

const StatusDot = styled.span`
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
`;

const ProfileButton = styled.button`
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

const UserManagementTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>ID</Th>
          <Th>Status</Th>
          <Th>Profile Action</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Jane Smith</Td>
          <Td>jane.smith@example.com</Td>
          <Td>12345</Td>
          <Td><StatusDot /></Td>
          <Td><ProfileButton>Profile</ProfileButton></Td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default UserManagementTable;
