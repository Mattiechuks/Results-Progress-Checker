import React from 'react';
import styles from './HNDLevel.module.css';

const mockData = {
  sessions: [
    {
      sessionName: 'Session 1',
      semesters: [
        {
          semesterName: 'Semester 1',
          courses: ['Course 1', 'Course 2', 'Course 3'],
          progress: 'Locked'
        },
        {
          semesterName: 'Semester 2',
          courses: ['Course 4', 'Course 5', 'Course 6'],
          progress: 'Locked'
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

const HNDLevel: React.FC = () => {
  return (
    <div className={styles.hndLevel}>
      <h1>HND Level</h1>
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
  );
};

export default HNDLevel;
