import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['left']}>
                <h5 className={styles['left-header']}>Got Questions?</h5>
                <p className={styles['left-text']}>
                    Speak with a Squadhelp platform expert to
                    learn more and get your questions answered.
                </p>
                <button className={styles['left-btn']}>Schedule Consultation</button>
            </div>
            <div className={styles['right']}>
                <ul>
                    <li>
                       
                        <a href='#' className={styles['left-link']}><i class="fas fa-phone"></i><span>(877) 355-3585</span></a>
                    </li>
                    <li>
                        <a href='#' className={styles['left-link']}><i class="fas fa-comment-dots"></i><span>Live Chat</span></a>
                    </li>
                    <li>
                        <a href='#' className={styles['left-link']}><i class="fas fa-envelope"></i><span>Contact Us</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;
