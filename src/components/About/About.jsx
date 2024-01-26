import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than a certain value
            if (window.scrollY > 35) {
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
        <section className={`${styles.container} ${scrolled ? styles.scrolled : ''}`} id="about">
            <div className={`${styles.contentInsideBox} ${scrolled ? styles.scrolledInsideBox : ''}`}>
                <div className={styles.imageHolder}>
                    <img src={getImageUrl("contestPicture.png")} alt="" />
                    <img src={getImageUrl("groupPicture.png")} alt="" />
                </div>
                <div className={styles.textHolder}>
                    <div className={styles.aboutMeHeaderContainer}>
                        <div className={styles.aboutMeHeaderShape}></div>
                        <h3 className={styles.headerAboutMe}>ABOUT ME</h3>
                    </div>
                    <h4 className={styles.aboutMeBody}>Hello, I'm Arthur M. Artugue, currently pursuing my degree in Computer Science with a major in
                        application development at the University of Makati. My specialization lies in backend development, where I excel at server-side
                        scripting. I have hands-on experience with React and the Next.js framework, and my programming skills extend to JavaScript, Node.js,
                        Java, PHP, and C#.
                        <br />
                        <br />
                        In the realm of databases, I am proficient in both MySQL and MongoDB. My passion for technology and commitment to honing my
                        skills make me eager to contribute meaningfully to the field of computer science. I look forward to leveraging my expertise to
                        create innovative solutions and contribute to the ever-evolving world of application development.
                    </h4>
                </div>
            </div>
        </section>
    );
}
