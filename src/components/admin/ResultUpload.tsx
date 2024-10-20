// components/admin/ResultUpload.tsx
'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

// Mock data for students
const students: Record<string, Record<string, { id: number; name: string }[]>> = {
  fullTime: {
    ND1: [
      { id: 1, name: 'Student A' },
      { id: 2, name: 'Student B' },
    ],
    ND2: [],
    HND1: [],
    HND2: [],
  },
  partTime: {
    ND1: [],
    ND2: [],
    HND1: [],
    HND2: [],
  },
};

// Mock data for courses
const courses: { id: number; title: string; unit: string }[] = [
  { id: 1, title: 'Intro to Programming', unit: '3' },
  { id: 2, title: 'Data Structures', unit: '4' },
  { id: 3, title: 'Computer Networks', unit: '3' },
];

// Mock data for submitted results
const mockResults: Record<string, Record<string, CourseDetails[]>> = {
  'Student A': {
    fullTime: [
      { courseTitle: 'Intro to Programming', courseUnit: '3', testScore: '25', examScore: '60', total: '85', gpa: '3.4' },
      { courseTitle: 'Data Structures', courseUnit: '4', testScore: '30', examScore: '55', total: '85', gpa: '3.4' },
    ],
    partTime: [],
  },
  'Student B': {
    fullTime: [],
    partTime: [],
  },
  'Student C': {
    fullTime: [],
    partTime: [],
  },
};

interface CourseDetails {
  courseTitle: string;
  courseUnit: string;
  testScore: string;
  examScore: string;
  total: string;
  gpa: string;
}

const ResultUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 12px;
    gap: 10px;
    background-color: transparent;
    width: 98.2vw;
    padding: 20px;
    text-align: left;

@media (max-width: 768px) {
    margin-top: 100px;
    width: 82%;
    min-width: 79.8%;
    margin: auto;
  }
  @media (max-width: 600px) {
    position: relative;
    width: 79%;
    min-width: 79.8%;
    margin: auto;
  }
`;

const CourseRow = styled.div`
  margin-bottom: 15px;
`;

const AddCourseButton = styled.button`
  padding: 12px 24px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const FinalGPA = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const RemoveCourseButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
`;

const ProgressBarContainer = styled.div`
  width: 76%;
  background-color: ;
  border-radius: 25px;
  margin: 20px 0;
  @media (max-width: 768px){
    width: 100%;
  }
`;

const ProgressBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  background-color: #76c7c0;
  height: 30px;
  width: auto;
  border-radius: 25px;
  text-align: center;
  line-height: 30px;
  color: white;
  margin-top: 10px;
`;

const UploadFieldsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1100px;
  @media (max-width: 768px){
    width: 370px;
  }
`;

const UploadField = styled.div`
  width: 50%;
`;

const ResultUpload: React.FC = () => {
    const [studyMode, setStudyMode] = useState<'fullTime' | 'partTime'>('fullTime');
    const [levelND, setLevelND] = useState<'ND1' | 'ND2'>('ND1');
    const [levelHND, setLevelHND] = useState<'HND1' | 'HND2'>('HND1');
    const [semester, setSemester] = useState<'First' | 'Second'>('First');
    const [selectedStudentND, setSelectedStudentND] = useState('');
    const [selectedStudentHND, setSelectedStudentHND] = useState('');
    const [courseDetailsND, setCourseDetailsND] = useState<CourseDetails[]>([
      { courseTitle: '', courseUnit: '', testScore: '', examScore: '', total: '', gpa: '' },
    ]);
    const [courseDetailsHND, setCourseDetailsHND] = useState<CourseDetails[]>([
      { courseTitle: '', courseUnit: '', testScore: '', examScore: '', total: '', gpa: '' },
    ]);
  
    const fetchStudentResults = (studentName: string, isHND: boolean) => {
      const results = mockResults[studentName]?.[studyMode] || [];
      if (isHND) {
        setCourseDetailsHND(results.length ? results : [{ courseTitle: '', courseUnit: '', testScore: '', examScore: '', total: '', gpa: '' }]);
      } else {
        setCourseDetailsND(results.length ? results : [{ courseTitle: '', courseUnit: '', testScore: '', examScore: '', total: '', gpa: '' }]);
      }
    };
  
    const handleInputChange = (index: number, field: keyof CourseDetails, value: string, isHND: boolean) => {
      const newCourseDetails = isHND ? [...courseDetailsHND] : [...courseDetailsND];
      newCourseDetails[index][field] = value;
      if (field === 'courseTitle') {
        const selectedCourse = courses.find((course) => course.title === value);
        if (selectedCourse) {
          newCourseDetails[index]['courseUnit'] = selectedCourse.unit;
        }
      }
      newCourseDetails[index]['total'] = (
        parseInt(newCourseDetails[index]['testScore'] || '0', 10) +
        parseInt(newCourseDetails[index]['examScore'] || '0', 10)
      ).toString();
      newCourseDetails[index]['gpa'] = (
        (parseInt(newCourseDetails[index]['total'], 10) / 100) * 4
      ).toFixed(2);
      
      if (isHND) {
        setCourseDetailsHND(newCourseDetails);
      } else {
        setCourseDetailsND(newCourseDetails);
      }
    };
  
    const handleAddCourse = (isHND: boolean) => {
      const newCourseDetails = isHND ? [...courseDetailsHND] : [...courseDetailsND];
      newCourseDetails.push({ courseTitle: '', courseUnit: '', testScore: '', examScore: '', total: '', gpa: '' });
    
      if (isHND) {
        setCourseDetailsHND(newCourseDetails);
      } else {
        setCourseDetailsND(newCourseDetails);
      }
    };
  
    const handleRemoveCourse = (index: number, isHND: boolean) => {
      const newCourseDetails = isHND ? [...courseDetailsHND] : [...courseDetailsND];
      newCourseDetails.splice(index, 1);
    
      if (isHND) {
        setCourseDetailsHND(newCourseDetails);
      } else {
        setCourseDetailsND(newCourseDetails);
      }
    };
  
    const handleSubmit = (e: React.FormEvent, isHND: boolean) => {
      e.preventDefault();
      if (isHND) {
        console.log('Submitted HND result:', { selectedStudentHND, courseDetailsHND });
      } else {
        console.log('Submitted ND result:', { selectedStudentND, courseDetailsND });
      }
  
      if (semester === 'Second') {
        const semesterGPA_ND = calculateFinalGPA(false);
        const semesterGPA_HND = calculateFinalGPA(true);
        const previousSemesterGPA_ND = 3.0; // This should come from backend ideally
        const previousSemesterGPA_HND = 3.5; // This should come from backend ideally
        const CGPA_ND = ((parseFloat(semesterGPA_ND) + previousSemesterGPA_ND) / 2).toFixed(2);
        const CGPA_HND = ((parseFloat(semesterGPA_HND) + previousSemesterGPA_HND) / 2).toFixed(2);
        console.log('Semester GPA ND:', semesterGPA_ND);
        console.log('CGPA ND:', CGPA_ND);
        console.log('Semester GPA HND:', semesterGPA_HND);
        console.log('CGPA HND:', CGPA_HND);
      }
      
      // Add code to send data to the backend
    };
  
    const calculateFinalGPA = (isHND: boolean) => {
      const details = isHND ? courseDetailsHND : courseDetailsND;
      const totalUnits = details.reduce(
        (sum, course) => sum + parseInt(course.courseUnit || '0', 10),
        0
      );
      const totalPoints = details.reduce(
        (sum, course) => sum + parseInt(course.courseUnit || '0', 10) * parseFloat(course.gpa),
        0
      );
      return (totalPoints / totalUnits).toFixed(2);
    };
  
    const totalStudentsND = students[studyMode][levelND].length;
    const totalStudentsHND = students[studyMode][levelHND].length;
    const resultsUploadedND = Object.keys(mockResults).filter(
      (student) => mockResults[student][studyMode]?.length > 0
    ).length;
    const resultsUploadedHND = Object.keys(mockResults).filter(
      (student) => mockResults[student][studyMode]?.length > 0
    ).length;
  
    const progressND = (resultsUploadedND / totalStudentsND) * 100;
    const progressHND = (resultsUploadedHND / totalStudentsHND) * 100;
  
    return (
      <ResultUploadContainer>
        <label>
          Select Study Mode:
          <select value={studyMode} onChange={(e) => setStudyMode(e.target.value as 'fullTime' | 'partTime')}>
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
          </select>
        </label><br />
        <label>
          Select Semester:
          <select value={semester} onChange={(e) => setSemester(e.target.value as 'First' | 'Second')}>
            <option value="First">First Semester</option>
            <option value="Second">Second Semester</option>
          </select>
        </label><br />
        <UploadFieldsContainer>
          <UploadField>
            <h3>ND Upload</h3>
            <form onSubmit={(e) => handleSubmit(e, false)}>
              <label>
                Select Level:
                <select value={levelND} onChange={(e) => setLevelND(e.target.value as 'ND1' | 'ND2')}>
                  <option value="ND1">ND1</option>
                  <option value="ND2">ND2</option>
                </select>
              </label><br />
              <label>
                Select Student:
                <select
                  value={selectedStudentND}
                  onChange={(e) => {
                    setSelectedStudentND(e.target.value);
                    fetchStudentResults(e.target.value, false);
                  }}
                >
                  <option value="">Select a student</option>
                  {students[studyMode][levelND].map((student) => (
                    <option key={student.id} value={student.name}>
                      {student.name}
                    </option>
                  ))}
                </select>
              </label>
              {courseDetailsND.map((course, index) => (
                <CourseRow key={index}>
                  <label>
                    Course Title:
                    <select
                      value={course.courseTitle}
                      onChange={(e) => handleInputChange(index, 'courseTitle', e.target.value, false)}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </label><br />
                  <label>
                    Course Unit:
                    <input type="text" value={course.courseUnit} readOnly />
                  </label><br />
                  <label>
                    Test Score:
                    <input
                      type="text"
                      value={course.testScore}
                      onChange={(e) => handleInputChange(index, 'testScore', e.target.value, false)}
                    />
                  </label><br />
                  <label>
                    Exam Score:
                    <input
                      type="text"
                      value={course.examScore}
                      onChange={(e) => handleInputChange(index, 'examScore', e.target.value, false)}
                    />
                  </label><br />
                  <label>
                    Total:
                    <input type="text" value={course.total} readOnly />
                  </label><br />
                  <RemoveCourseButton type="button" onClick={() => handleRemoveCourse(index, false)}>
                    Remove Course
                  </RemoveCourseButton>
                </CourseRow>
              ))}
                          <AddCourseButton type="button" onClick={() => handleAddCourse(false)}>
              Add Course
            </AddCourseButton>
            <FinalGPA>Final GPA: {calculateFinalGPA(false)}</FinalGPA>
            {semester === 'Second' && <FinalGPA>CGPA: {calculateFinalGPA(false)}</FinalGPA>}
            <SubmitButton type="submit">Upload</SubmitButton>
          </form>
        </UploadField>

        <UploadField>
          <h3>HND Upload</h3>
          <form onSubmit={(e) => handleSubmit(e, true)}>
            <label>
              Select Level:
              <select value={levelHND} onChange={(e) => setLevelHND(e.target.value as 'HND1' | 'HND2')}>
                <option value="HND1">HND1</option>
                <option value="HND2">HND2</option>
              </select>
            </label><br />
            <label>
              Select Student:
              <select
                value={selectedStudentHND}
                onChange={(e) => {
                  setSelectedStudentHND(e.target.value);
                  fetchStudentResults(e.target.value, true);
                }}
              >
                <option value="">Select a student</option>
                {students[studyMode][levelHND].map((student) => (
                  <option key={student.id} value={student.name}>
                    {student.name}
                  </option>
                ))}
              </select>
            </label>
            {courseDetailsHND.map((course, index) => (
              <CourseRow key={index}>
                <label>
                  Course Title:
                  <select
                    value={course.courseTitle}
                    onChange={(e) => handleInputChange(index, 'courseTitle', e.target.value, true)}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </label><br />
                <label>
                  Course Unit:
                  <input type="text" value={course.courseUnit} readOnly />
                </label><br />
                <label>
                  Test Score:
                  <input
                    type="text"
                    value={course.testScore}
                    onChange={(e) => handleInputChange(index, 'testScore', e.target.value, true)}
                  />
                </label><br />
                <label>
                  Exam Score:
                  <input
                    type="text"
                    value={course.examScore}
                    onChange={(e) => handleInputChange(index, 'examScore', e.target.value, true)}
                  />
                </label><br />
                <label>
                  Total:
                  <input type="text" value={course.total} readOnly />
                </label><br />
                <RemoveCourseButton type="button" onClick={() => handleRemoveCourse(index, true)}>
                  Remove Course
                </RemoveCourseButton>
              </CourseRow>
            ))}
            <AddCourseButton type="button" onClick={() => handleAddCourse(true)}>
              Add Course
            </AddCourseButton>
            <FinalGPA>Final GPA: {calculateFinalGPA(true)}</FinalGPA>
            {semester === 'Second' && <FinalGPA>CGPA: {calculateFinalGPA(true)}</FinalGPA>}
            <SubmitButton type="submit">Upload</SubmitButton>
          </form>
        </UploadField>
      </UploadFieldsContainer>
      <ProgressBarContainer>
        <ProgressBar width={progressND}>
          {resultsUploadedND}/{totalStudentsND} ND Results Uploaded
        </ProgressBar>
        <ProgressBar width={progressHND}>
          {resultsUploadedHND}/{totalStudentsHND} HND Results Uploaded
        </ProgressBar>
      </ProgressBarContainer>
    </ResultUploadContainer>
  );
};

export default ResultUpload;
