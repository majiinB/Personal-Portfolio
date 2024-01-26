import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    const [scrollOffset, setScrollOffset] = useState(10);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.container} id="portfolio">
            <div className={styles.content} style={{ transform: `translateY(-${scrollOffset}px)` }}>
                <h1 className={styles.title1}>Hi I am Arthur M. Artugue an aspiring <br /></h1>
                <h1 className={styles.title2}>Software Engineer</h1>
                <div className={styles.buttonsContain}>
                    <a className={styles.buttonLinked}>LinkedIn</a>
                    <a href='https://github.com/majiinB' className={styles.buttonGit}>GitHub</a>
                </div>
            </div>
            <div className={styles.heroImageContainer} style={{ transform: `translateY(-${scrollOffset}px)` }}>
                <img
                    src={getImageUrl("HeroImage2.png")}
                    alt="Arthur Picture"
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
};
