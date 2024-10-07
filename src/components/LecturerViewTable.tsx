'use client';
import styled from 'styled-components';
import StatusDot from './StatusDot';

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

const DetailedButton = styled.button`
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

const LecturerViewTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>NAME</Th>
          <Th>RECENT LOGIN</Th>
          <Th>DATE UPLOADED</Th>
          <Th>COURSE TAUGHT WITH STUDENTS ENROLLED</Th>
          <Th>DETAILED INSIGHTS</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Dr. Jane Smith</Td>
          <Td>2024-10-01</Td>
          <Td>2024-09-30</Td>
          <Td>Advanced Algorithms (75 students)</Td>
          <Td><StatusDot status="Active" /></Td>
          <Td><DetailedButton>View</DetailedButton></Td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default LecturerViewTable;
