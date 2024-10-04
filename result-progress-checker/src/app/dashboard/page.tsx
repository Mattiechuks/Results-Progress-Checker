'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link legacyBehavior href="/dashboard/overview"><a className={pathname === '/dashboard/overview' ? styles.active : ''}>Overview</a></Link></li>
          <li><Link legacyBehavior href="/dashboard/analytics"><a className={pathname === '/dashboard/analytics' ? styles.active : ''}>Analytics</a></Link></li>
          <li><Link legacyBehavior href="/dashboard/transcripts"><a className={pathname === '/dashboard/transcripts' ? styles.active : ''}>Transcripts</a></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
