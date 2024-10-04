'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminDashboard.module.css';

const AdminDashboard: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.adminDashboardContainer}>
      <div className={styles.adminSidebar}>
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link legacyBehavior href="/admin-dashboard/analytics"><a className={pathname === '/admin-dashboard/analytics' ? styles.active : ''}>Analytics</a></Link></li>
            <li><Link legacyBehavior href="/admin-dashboard/result-upload"><a className={pathname === '/admin-dashboard/result-upload' ? styles.active : ''}>Result Upload</a></Link></li>
            <li><Link legacyBehavior href="/admin-dashboard/user-management"><a className={pathname === '/admin-dashboard/user-management' ? styles.active : ''}>User Management</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.adminDashboardContent}>
        {/* The content for each route will be rendered here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
