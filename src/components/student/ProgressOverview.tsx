// components/ProgressOverview.tsx
'use client';
import React, { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar';
import styled from 'styled-components';

interface Course {
  courseName: string;
  score: number;
}

interface Semester {
  semesterName: string;
  courses: Course[];
}

interface Session {
  sessionName: string;
  semesters: Semester[];
}

interface ProgressData {
  isNDCompleted: boolean;
  sessions: Session[];
  overallCGPA: number;
  remarks: string;
  classRanking: {
    optionRanking: number;
    overallRanking: number;
  };
  carryOverCourses: string[];
}

const ProgressOverview: React.FC = () => {
  const [progressData, setProgressData] = useState<ProgressData>({
    isNDCompleted: false,
    sessions: [],
    overallCGPA: 0,
    remarks: '',
    classRanking: {
      optionRanking: 0,
      overallRanking: 0,
    },
    carryOverCourses: [],
  });

  useEffect(() => {
    // Fetch progress data from the backend
    const fetchProgressData = async () => {
      try {
        const response = await fetch('YOUR_DJANGO_BACKEND_URL/api/progress-overview');
        const data = await response.json();
        setProgressData(data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };
    fetchProgressData();
  }, []);

  const calculateGPA = (courses: Course[]) => {
    const totalScore = courses.reduce((sum, course) => sum + course.score, 0);
    return (totalScore / (courses.length * 100)) * 4.0; // GPA on a 4.0 scale
  };

  const calculateCGPA = (allGPAs: number[]) => {
    const totalGPA = allGPAs.reduce((sum, gpa) => sum + gpa, 0);
    return totalGPA / allGPAs.length;
  };

  return (
    <Container>
      <h1>Progress Overview</h1>
      <div>
        {progressData.sessions.map((session, index) => {
          const sessionGPAs = session.semesters.map(semester => calculateGPA(semester.courses));
          return (
            <SessionContainer key={index}>
              <h2>{session.sessionName} - CGPA: {calculateCGPA(sessionGPAs).toFixed(2)}</h2>
              {session.semesters.map((semester, idx) => (
                <SemesterContainer key={idx}>
                  <h3>
                    {semester.semesterName} - GPA: {calculateGPA(semester.courses).toFixed(2)}
                    {idx > 0 && ` CGPA: ${calculateCGPA(sessionGPAs.slice(0, idx + 1)).toFixed(2)}`}
                  </h3>
                  <ProgressBar
                    total={semester.courses.length}
                    passed={semester.courses.filter(course => course.score >= 50).length}
                    carryOver={semester.courses.filter(course => course.score < 50).length}
                  />
                </SemesterContainer>
              ))}
            </SessionContainer>
          );
        })}
      </div>
      <Remarks>Overall CGPA: {progressData.overallCGPA.toFixed(2)}</Remarks>
      <Remarks>Remarks: {progressData.remarks}</Remarks>
      <Ranking>
        <p>Option Ranking: {progressData.classRanking.optionRanking}</p>
        <p>Overall Ranking: {progressData.classRanking.overallRanking}</p>
      </Ranking>
      {progressData.carryOverCourses.length > 0 && (
        <CarryOver>
          <h3>Carry Over Courses:</h3>
          <ul>
            {progressData.carryOverCourses.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))}
          </ul>
        </CarryOver>
      )}
    </Container>
  );
};

export default ProgressOverview;

const Container = styled.div`
  position: relative;
  bottom:35px;
  right: 30px;
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  width: 98%;
  @media (max-width: 768px){
    width: 93%;
  }
`;

const SessionContainer = styled.div`
  margin-bottom: 20px;
`;

const SemesterContainer = styled.div`
  margin-bottom: 10px;
`;

const Remarks = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Ranking = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const CarryOver = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;
