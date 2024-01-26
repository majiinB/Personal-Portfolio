import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than a certain value
            if (window.scrollY > 25) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl('x.png') : getImageUrl('menu-icon.png')}
                    alt="menu button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                    <li><Link to="about" smooth={true} duration={500} offset={-225}>ABOUT</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} offset={-50}>SKILLS</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} offset={-80}>PROJECTS</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
};
