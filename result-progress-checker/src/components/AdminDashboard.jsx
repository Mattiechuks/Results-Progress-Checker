import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><NavLink to="/admin-dashboard/analytics">Analytics</NavLink></li>
            <li><NavLink to="/admin-dashboard/result-upload">Result Upload</NavLink></li>
            <li><NavLink to="/admin-dashboard/user-management">User Management</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="admin-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
