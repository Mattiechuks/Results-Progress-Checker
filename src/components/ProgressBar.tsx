import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  total: number;
  passed: number;
  carryOver: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, passed, carryOver }) => {
  const totalCourses = total || 0;
  const passedCourses = passed || 0;
  const carryOverCourses = carryOver || 0;
  const remark = passedCourses === totalCourses ? 'Completed' : carryOverCourses > 0 ? 'Carry-over' : 'In Progress';

  return (
    <Container>
      <Bar>
        <Segment width={(passedCourses / totalCourses) * 100} color="#28a745">Passed</Segment>
        <Segment width={(carryOverCourses / totalCourses) * 100} color="#dc3545">Carry-over</Segment>
      </Bar>
      <Remark>{remark}</Remark>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  margin-bottom: 20px;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
`;

interface SegmentProps {
  width: number;
  color: string;
}

const Segment = styled.div<SegmentProps>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ color }) => color};
  text-align: center;
  line-height: 25px;
  color: white;
`;

const Remark = styled.p`
  text-align: right;
  margin: 10px 0 0;
  font-size: 14px;
  color: #6c757d;
`;
