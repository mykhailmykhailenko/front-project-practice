import React from 'react';
import FindBrandName from '../../components/FindBrandName'
import WhySquadHelp from '../../components/WhySquadHelp'
import styles from './DashboardBrand.module.css'

const DashboardBrand = () => {
    return (
        <div className={styles['container']}>
            <FindBrandName />
            <WhySquadHelp />
        </div>
    );
}

export default DashboardBrand;
