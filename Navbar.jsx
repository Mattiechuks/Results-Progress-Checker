import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logoImage from '/progresslogo1.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <img src={logoImage} alt="Logo" className="logo-image" />
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={menuOpen ? "show" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className="CTA"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
