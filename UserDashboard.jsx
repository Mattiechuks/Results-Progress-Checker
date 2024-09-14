import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="student-dashboard-container">
      <div className="student-sidebar">
        <h2>Student Dashboard</h2>
        <nav>
          <ul>
            <li><NavLink to="/user-dashboard/nd">ND Level</NavLink></li>
            <li><NavLink to="/user-dashboard/hnd">HND Level</NavLink></li>
            <li><NavLink to="/user-dashboard/overview">Result Overview</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="student-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
