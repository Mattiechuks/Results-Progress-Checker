import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Result Checker App</h1>
      
      <section className="project-description">
        <h2>Project Description</h2>
        <p>The Result Checker App is a web application designed to streamline the process of checking academic results for students. It provides a user-friendly interface for students to view their results, track their progress, and access important academic information.</p>
      </section>

      <section className="creation-process">
        <h2>Creation Process</h2>
        <p>The development of the Result Checker App involved several key steps:</p>
        <ul>
          <li><strong>Planning:</strong> Identifying the requirements and features needed for the app.</li>
          <li><strong>Design:</strong> Creating wireframes and mockups to visualize the user interface.</li>
          <li><strong>Development:</strong> Coding the frontend and backend using modern web technologies.</li>
          <li><strong>Testing:</strong> Conducting thorough testing to ensure the app is functional and bug-free.</li>
          <li><strong>Deployment:</strong> Launching the app and making it accessible to users.</li>
        </ul>
      </section>

      <section className="technology-used">
        <h2>Technology Used</h2>
        <p>The Result Checker App was built using the following technologies:</p>
        <ul>
          <li><strong>React:</strong> For building the user interface.</li>
          <li><strong>Vite:</strong> For fast and efficient development.</li>
          <li><strong>Node.js:</strong> For the backend server.</li>
          <li><strong>Express:</strong> For handling server-side logic.</li>
          <li><strong>MongoDB:</strong> For the database to store user data and results.</li>
          <li><strong>CSS:</strong> For styling the application.</li>
        </ul>
      </section>

      <section className="how-to-use">
        <h2>How to Use the Web App</h2>
        <p>Using the Result Checker App is simple and straightforward:</p>
        <ol>
          <li><strong>Login:</strong> Enter your credentials to log in to the app.</li>
          <li><strong>Dashboard:</strong> Access your personalized dashboard to view your academic progress.</li>
          <li><strong>Results:</strong> Navigate to the results section to view your semester results and overall GPA.</li>
          <li><strong>Profile:</strong> Manage your profile information and update your details as needed.</li>
          <li><strong>Notifications:</strong> Stay updated with important announcements and notifications.</li>
        </ol>
      </section>
    </div>
  );
};

export default About;
