// components/ProgressTracker.tsx
import React from 'react';
import styled from 'styled-components';

const TrackerContainer = styled.div`
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
`;

const CourseStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StatusLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const StatusValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

interface FailedCourse {
  status: string;
  count: number;
}

interface ProgressData {
  passedCourses: number;
  carryOverCourses: number;
  failedCourses: FailedCourse[];
}

const progressData: ProgressData = {
  passedCourses: 8,
  carryOverCourses: 2,
  failedCourses: [
    { status: 'Fail (Repeat Semester)', count: 1 },
    { status: 'Fail (Repeat Session)', count: 1 },
    { status: 'Fail (Advised to Withdraw)', count: 0 },
    { status: 'Fail (Withdrawn)', count: 0 },
  ],
};

const ProgressTracker = () => {
  const getRemarks = (data: ProgressData) => {
    if (data.failedCourses.every(course => course.count === 0) && data.carryOverCourses === 0) {
      return 'Distinction';
    }
    return 'Pass';
  };

  return (
    <TrackerContainer>
      <CourseStatus>
        <StatusLabel>Passed Courses</StatusLabel>
        <StatusValue>{progressData.passedCourses}</StatusValue>
      </CourseStatus>
      <CourseStatus>
        <StatusLabel>Carry Over Courses</StatusLabel>
        <StatusValue>{progressData.carryOverCourses}</StatusValue>
      </CourseStatus>
      {progressData.failedCourses.map((course, index) => (
        <CourseStatus key={index}>
          <StatusLabel>{course.status}</StatusLabel>
          <StatusValue>{course.count}</StatusValue>
        </CourseStatus>
      ))}
      <CourseStatus>
        <StatusLabel>Remarks</StatusLabel>
        <StatusValue>{getRemarks(progressData)}</StatusValue>
      </CourseStatus>
    </TrackerContainer>
  );
};

export default ProgressTracker;
