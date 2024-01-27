import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
    const fbLink = 'https://www.facebook.com/profile.php?id=100008476154521';
    const gitLink = 'https://github.com/majiinB';
    const handleClickFb = () => {
        window.location.href = fbLink;
    };
    const handleClickGit = () => {
        window.location.href = gitLink;
    };
    return (
        <section className={styles.container} id='contact'>
            <div className={styles.content}>
                <div className={styles.emailAndPhoneContain}>
                    <div className={styles.headerContain}>
                        <h3 className={styles.contactMe}>CONTACT ME &nbsp;</h3>
                        <h3 className={styles.through}> THROUGH</h3>
                    </div>
                    <div className={styles.emailAndPhone}>
                        <div className={styles.emailContain}>
                            <img src={getImageUrl("mail.png")} alt="" />
                            <a href="mailto:artuguearthur@gmail.com">
                                <h5>arthurartugue392@gmail.com</h5>
                            </a>
                        </div>
                        <div className={styles.phoneContain}>
                            <img src={getImageUrl("phone.png")} alt="" />
                            <h5>(+63)9953653123</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.socialsContain}>
                    <div className={styles.socialsContent}>
                        <img src={getImageUrl("facebook-logo.png")} alt="" onClick={handleClickFb} />
                        <img src={getImageUrl("linkedin-logo.png")} alt="" />
                        <img src={getImageUrl("github-logo-white.png")} alt="" onClick={handleClickGit} />
                    </div>
                </div>
            </div>
        </section>
    )
}
