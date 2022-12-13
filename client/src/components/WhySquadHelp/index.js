import React from 'react';
import styles from './WhySquadHelp.module.css'

const WhySquadHelp = () => {
    return (
        <div className={styles['container']}>
            <h4 className={styles['title']}>Why Squadhelp?</h4>
            <h5 className={styles['sub-title']}><span className={styles['blue-part']}>' '</span>Disrupting The Traditional Agency Model</h5>
            <p className={styles['text']}>Squadhelp is reimagining how naming is done, providing fast, affordable, high-quality, soup-to-nuts solutions unlike anyone else.</p>
            <h5 className={styles['sub-title']}><span className={styles['blue-part']}>' '</span>Satisfaction Guarantee</h5>
            <p className={styles['text']}>We have policies in place to ensure that you are satisfied with your experience.</p>
            <div className={styles['links-container']}>
                <a className={styles['link']}>Contest Policies</a>
                <a className={styles['link']}>MarketPlace Policies</a>
            </div>
        </div>
    );
}

export default WhySquadHelp;
