import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><NavLink to="/dashboard/overview">Overview</NavLink></li>
          <li><NavLink to="/dashboard/analytics">Analytics</NavLink></li>
          <li><NavLink to="/dashboard/transcripts">Transcripts</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
