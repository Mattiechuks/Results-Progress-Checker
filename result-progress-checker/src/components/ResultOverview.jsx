import React from 'react';
import './ResultOverview.css';

const ResultOverview = () => {
  return (
    <div className="result-overview">
      <h1>Result Overview</h1>
      <div className="student-progress">
        <img src="/path/to/passport.jpg" alt="Student Passport" className="passport-photo" />
        <div className="progress-details">
          <h2>Student Progress</h2>
          <p>Progress details go here...</p>
        </div>
      </div>
      <div className="results">
        <h2>Semester Results</h2>
        <p>Detailed semester-by-semester grade breakdowns with cumulative GPA for clear academic progress tracking.</p>
      </div>
    </div>
  );
};

export default ResultOverview;
