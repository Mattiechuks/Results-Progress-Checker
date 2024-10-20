// components/SimpleSettings.tsx
'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    bottom: 30px;
    right: 20px;
    margin-top: 40px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    width: 100%;

    @media (max-width: 768px){
        width: 90%;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 94%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const SimpleSettings: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [level, setLevel] = useState('');
  const [semester, setSemester] = useState('');

  useEffect(() => {
    // Fetch student details from backend
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch('YOUR_DJANGO_BACKEND_URL/api/student-details');
        const data = await response.json();
        setFullName(data.fullName);
        setEmail(data.email);
        setProgram(data.program);
        setLevel(data.level);
        setSemester(data.semester);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };
    fetchStudentDetails();
  }, []);

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSave = () => {
    const formData = new FormData();
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('program', program);
    formData.append('level', level);
    formData.append('semester', semester);

    // Send data to backend
    fetch('YOUR_DJANGO_BACKEND_URL/api/settings', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Settings saved:', data))
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <Container>
      <label>Profile Picture:</label>
      <Input type="file" onChange={handleProfilePictureChange} />
      <label>Full Name:</label>
      <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <label>Email:</label>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Program:</label>
      <Input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
      <label>Level:</label>
      <Input type="text" value={level} onChange={(e) => setLevel(e.target.value)} />
      <label>Semester:</label>
      <Input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
      <Button onClick={handleSave}>Save</Button>
    </Container>
  );
};

export default SimpleSettings;
