import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils'
import styles from './Projects.module.css'

export const Projects = () => {
    const githubBKRepoUrl = 'https://github.com/majiinB/Book-keeper-final-project.git';
    const githubARRepoUrl = 'https://github.com/majiinB/archivary.git';
    const handleClickBk = () => {
        window.location.href = githubBKRepoUrl;
    };
    const handleClickAr = () => {
        window.location.href = githubARRepoUrl;
    };

    return (
        <section className={styles.container} id='projects'>
            <div className={styles.projectsHeaderContainer}>
                <div className={styles.projectsHeaderShape}></div>
                <h3 className={styles.headerProjects}>PROJECTS</h3>
            </div>
            <div className={styles.contentInsideBox}>
                <div className={styles.card} onClick={handleClickBk}>
                    <div className={styles.cardContent}>
                        <div className={styles.imageHolder}>
                            <img src={getImageUrl("project/BookKeeper.png")} alt="" />
                        </div>
                        <div className={styles.textHolder}>
                            BookKeeper: A user-friendly Library Management System (LMS)
                            developed as a first-year final project in compliance with
                            computer programming requirements. Orchestrated by a
                            four-member team, I served as the lead developer/backend developer,
                            focusing on crafting a robust backend infrastructure for
                            seamless library operations.
                        </div>
                    </div>
                </div>
                <div className={styles.card} onClick={handleClickAr}>
                    <div className={styles.cardContent}>
                        <div className={styles.imageHolder}>
                            <img src={getImageUrl("project/Archivary.png")} alt="" />
                        </div>
                        <div className={styles.textHolder}>
                            Archivary: Developed by a five-member team, Archivary
                            stands as an advanced Library Management System seamlessly
                            integrating principles from object-oriented programming,
                            data structures, and operating systems. In my role as the
                            backend developer, I contributed to crafting a robust
                            backend infrastructure, ensuring optimal functionality and
                            compliance with the diverse aspects of the computer science
                            curriculum.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
