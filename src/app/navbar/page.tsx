'use client';
import React, { useState } from "react";
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../../public/images/progresslogo1.jpg';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <Image src={logoImage} alt="Logo" className={styles.logoImage} />
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={menuOpen ? styles.show : "X"}>
                    <li><Link href="/">Home</Link></li>
                    <li className={styles.CTA}><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
