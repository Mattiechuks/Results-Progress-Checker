// components/student/ResultOption.tsx
'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

interface Course {
  name: string;
  score: number;
}

interface Result {
  name: string;
  semester: string;
  courses: Course[];
  profilePicUrl?: string;
}

const ResultOption: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [mostRecentResult, setMostRecentResult] = useState<Result | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch results from the backend
    const fetchResults = async () => {
      try {
        const response = await fetch('YOUR_DJANGO_BACKEND_URL/api/results');
        const data = await response.json();
        setResults(data.results);
        setMostRecentResult(data.mostRecentResult);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };
    fetchResults();
  }, []);

  const generatePDF = (result: Result) => {
    const doc = new jsPDF();
    const profilePicUrl = result.profilePicUrl;
    // Add profile picture
    if (profilePicUrl) {
      doc.addImage(profilePicUrl, 'JPEG', 10, 10, 30, 30);
    }
    // Add result information
    doc.text(`Name: ${result.name}`, 10, 50);
    doc.text(`Semester: ${result.semester}`, 10, 60);
    doc.text(`Courses:`, 10, 70);
    result.courses.forEach((course, index) => {
      doc.text(`${index + 1}. ${course.name} - ${course.score}`, 10, 80 + index * 10);
    });
    // Save PDF
    doc.save(`Result_${result.semester}.pdf`);
  };

  const downloadTranscript = () => {
    const doc = new jsPDF();
    results.forEach((result) => {
      doc.addPage();
      doc.text(`Name: ${result.name}`, 10, 50);
      doc.text(`Semester: ${result.semester}`, 10, 60);
      doc.text(`Courses:`, 10, 70);
      result.courses.forEach((course, index) => {
        doc.text(`${index + 1}. ${course.name} - ${course.score}`, 10, 80 + index * 10);
      });
      if (result === results[0] && result.profilePicUrl) {
        doc.addImage(result.profilePicUrl, 'JPEG', 10, 10, 30, 30);
      }
    });
    doc.save('Transcript.pdf');
  };

  if (isLoading) {
    return <p>Loading results...</p>;
  }

  return (
    <Container>
      <h1>Results</h1>
      <div>
        {results.map((result, index) => (
          <ResultContainer key={index}>
            <h2>Semester: {result.semester}</h2>
            <button onClick={() => generatePDF(result)}>Download PDF</button>
          </ResultContainer>
        ))}
      </div>
      {mostRecentResult ? (
        <div>
          <button onClick={() => generatePDF(mostRecentResult)}>View Result</button>
          <button onClick={() => downloadTranscript()}>Download Transcript</button>
        </div>
      ) : (
        <Message>No recent results uploaded</Message>
      )}
    </Container>
  );
};

export default ResultOption;

const Container = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
`;

const ResultContainer = styled.div`
  margin-bottom: 20px;
`;

const Message = styled.p`
  margin-top: 20px;
  color: red;
`;
