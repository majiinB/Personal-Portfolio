import React from 'react'
import styles from './Skills.module.css'
import { getImageUrl } from '../../utils'

export const Skills = () => {
    return (
        <section className={styles.container} id='skills'>
            <div className={styles.contentsInsideContainer}>
                <div className={styles.headerContain}>
                    <div className={styles.shape}></div>
                    <h3 className={styles.header}>SKILLS</h3>
                </div>
                <div className={styles.skillsContainer}>
                    <div className={styles.frontendSkills}>
                        <h4 className={styles.skillsHeader}>
                            FRONT-END
                        </h4>
                        <div className={styles.languages}>
                            <img src={getImageUrl("FrontendLang/HTML.png")} alt="" />
                            <img src={getImageUrl("FrontendLang/CSS.png")} alt="" />
                            <img src={getImageUrl("FrontendLang/TAILWIND.png")} alt="" />
                            <img src={getImageUrl("FrontendLang/JAVASCRIPT.png")} alt="" />
                            <img src={getImageUrl("FrontendLang/NEXT.png")} alt="" />
                            <img src={getImageUrl("FrontendLang/REACT.png")} alt="" />
                        </div>
                    </div>
                    <div className={styles.backendSkills}>
                        <h4 className={styles.skillsHeader}>
                            BACK-END
                        </h4>
                        <div className={styles.languages}>
                            <img src={getImageUrl("BackendLang/JAVA.png")} alt="" />
                            <img src={getImageUrl("BackendLang/C_SHARP.png")} alt="" />
                            <img src={getImageUrl("BackendLang/PHP.png")} alt="" />
                            <img src={getImageUrl("BackendLang/NODE.png")} alt="" />
                            <img src={getImageUrl("BackendLang/MYSQL.png")} alt="" />
                            <img src={getImageUrl("BackendLang/MONGODB.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
