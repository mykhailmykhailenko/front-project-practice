import React from 'react';
import styles from './FindBrandName.module.css'

const FindBrandName = () => {
    return (
        <div className={styles['container']}>
            <h4 className={styles['title']}>Find The Perfect Brand Name Today!</h4>
            <div className={styles['link-wrapper']}>
                <a className={styles['link']}><span>Explore Names for Sale</span><i class="fas fa-arrow-right"></i></a>
                <span className={styles['text']}>or</span>
                <a className={styles['link']}>I want a Custom Name</a>
            </div>
        </div>
    );
}

export default FindBrandName;
