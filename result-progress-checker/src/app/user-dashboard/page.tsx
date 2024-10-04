import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './UserDashboard.module.css';

const UserDashboard: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.studentDashboardContainer}>
      <div className={styles.studentSidebar}>
        <h2>Student Dashboard</h2>
        <nav>
          <ul>
            <li><Link href="/user-dashboard/nd"><a className={router.pathname === '/user-dashboard/nd' ? styles.active : ''}>ND Level</a></Link></li>
            <li><Link href="/user-dashboard/hnd"><a className={router.pathname === '/user-dashboard/hnd' ? styles.active : ''}>HND Level</a></Link></li>
            <li><Link href="/user-dashboard/overview"><a className={router.pathname === '/user-dashboard/overview' ? styles.active : ''}>Result Overview</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.studentDashboardContent}>
        {/* The content for each route will be rendered here */}
      </div>
    </div>
  );
};

export default UserDashboard;
