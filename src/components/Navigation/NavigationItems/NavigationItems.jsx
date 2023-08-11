import React from 'react'
import styles from './NavigationItems.module.css'
import styles2 from './NavigationItem/NavigationItem.module.css';
import NavigationItem from './NavigationItem/NavigationItem'
import Resume from '../../../assets/Resume.pdf';

const NavigationItems = props => {
    return (
        <ul className={styles.NavigationItems} >
            <NavigationItem  link="/" exact>Home</NavigationItem>
            <NavigationItem  link="/research">Research</NavigationItem>
            <NavigationItem link="/teaching">Teaching</NavigationItem>
            <li className={styles2.NavigationItem}><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
            <li className={styles.NavigationItem} onClick={props.clicked}>Contact</li>
        </ul>
    )
}

export default NavigationItems;