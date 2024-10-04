import React from 'react';
import styles from './ResultOverview.module.css';

const ResultOverview: React.FC = () => {
  return (
    <div className={styles.resultOverview}>
      <h1>Result Overview</h1>
      <div className={styles.studentProgress}>
        <img src="/path/to/passport.jpg" alt="Student Passport" className={styles.passportPhoto} />
        <div className={styles.progressDetails}>
          <h2>Student Progress</h2>
          <p>Progress details go here...</p>
        </div>
      </div>
      <div className={styles.results}>
        <h2>Semester Results</h2>
        <p>Detailed semester-by-semester grade breakdowns with cumulative GPA for clear academic progress tracking.</p>
      </div>
    </div>
  );
};

export default ResultOverview;
