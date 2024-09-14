import React from 'react';
import './BlogPost.css';

const BlogPost = () => {
  return (
    <div className="blog-post-container">
      <h1>Campus News</h1>
      
      <section className="headline">
        <h2>Meet the Creators of the Result Checker App</h2>
        <p>Four innovative students came together to create the Result Checker App, a tool designed to streamline the process of checking academic results. Their dedication and hard work have made a significant impact on the campus community.</p>
        <ul>
          <li><strong>John Doe</strong> - Lead Developer</li>
          <li><strong>Jane Smith</strong> - UI/UX Designer</li>
          <li><strong>Michael Brown</strong> - Backend Developer</li>
          <li><strong>Emily White</strong> - Project Manager</li>
        </ul>
      </section>

      <section className="headline">
        <h2>Current Top Students in the School</h2>
        <p>Congratulations to the top-performing students for their outstanding academic achievements this semester:</p>
        <ul>
          <li><strong>Sarah Johnson</strong> - 4.0 GPA</li>
          <li><strong>David Lee</strong> - 3.95 GPA</li>
          <li><strong>Emma Wilson</strong> - 3.92 GPA</li>
        </ul>
      </section>

      <section className="headline">
        <h2>Best Student in the Department</h2>
        <p>The best student in the Computer Science department this year is <strong>Alex Martinez</strong>, who has demonstrated exceptional skills and dedication to his studies.</p>
      </section>

      <section className="headline">
        <h2>Other Campus News</h2>
        <ul>
          <li>New library hours announced to accommodate student schedules.</li>
          <li>Upcoming career fair with top companies in attendance.</li>
          <li>Workshops on resume building and interview skills.</li>
        </ul>
      </section>
    </div>
  );
};

export default BlogPost;
