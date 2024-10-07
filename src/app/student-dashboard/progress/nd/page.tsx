'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import DashboardSection from '@/components/DashboardSection';
import ProfileIcon from '@/components/ProfileIcon';
import styles from './NDLevel.module.css';
import styled from 'styled-components';

const NDLevel = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


const mockData = {
  sessions: [
    {
      sessionName: 'Session 1',
      semesters: [
        {
          semesterName: 'Semester 1',
          courses: ['Course 1', 'Course 2', 'Course 3'],
          progress: 'Completed'
        },
        {
          semesterName: 'Semester 2',
          courses: ['Course 4', 'Course 5', 'Course 6'],
          progress: 'In Progress'
        }
      ]
    },
    {
      sessionName: 'Session 2',
      semesters: [
        {
          semesterName: 'Semester 1',
          courses: ['Course 7', 'Course 8', 'Course 9'],
          progress: 'Locked'
        },
        {
          semesterName: 'Semester 2',
          courses: ['Course 10', 'Course 11', 'Course 12'],
          progress: 'Locked'
        }
      ]
    }
  ]
};

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
        <ProfileIcon>👤</ProfileIcon>
        <Link href="/student-dashboard">
          <SidebarItem>Student Dashboard</SidebarItem>
        </Link>
        <Link href="/student-dashboard/progress">
          <SidebarItem>Progress</SidebarItem>
        </Link>
        <Link href="/student-dashboard/progress/nd">
          <SidebarItem>ND-Level</SidebarItem>
        </Link>
        <Link href="/student-dashboard/progress/hnd">
          <SidebarItem>HND-Level</SidebarItem>
        </Link>
        <Link href="/student-dashboard/result">
          <SidebarItem>Result</SidebarItem>
        </Link>
        <Link href="/student-dashboard/settings">
          <SidebarItem>Settings</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <DashboardSection>
          <div className={styles.ndLevel}>
            <h1>ND Level</h1>
            <div className={styles.sessions}>
              {mockData.sessions.map((session, index) => (
                <div key={index} className={styles.session}>
                  <h2>{session.sessionName}</h2>
                  {session.semesters.map((semester, idx) => (
                    <div key={idx} className={`${styles.semester} ${styles[semester.progress.toLowerCase()]}`}>
                      <h3>{semester.semesterName}</h3>
                      <p>Courses: {semester.courses.join(', ')}</p>
                      <p>Progress: {semester.progress}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <button>Print Semester Result</button>
              <button>Print Transcript</button>
            </div>
          </div>
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default NDLevel;

const Container = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #b23;
  width: 98.2vw;
  @media (min-width: 768px) {
    margin-top: 90px;
    width: 98.2vw;
  }
`;

const MainContent = styled.div`
  justify-content: center;
  margin: auto;
  margin-right:20px;
  padding: 20px;
  padding-left: 0; 
  width: 55%;
  
  @media (min-width: 768px) {
    margin-right: 30px;
    width: 78%;
  }
`;

