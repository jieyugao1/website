import React from 'react'
import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../DrawerToggle/DrawerToggle'

const Toolbar = (props) => {
    return (
        <header className={[styles.Toolbar, styles.TransitionNav].join(' ')}>    
            <DrawerToggle clicked={props.mobileToolbarToggle}/>
            <nav className={styles.DesktopOnly}>
                <NavigationItems clicked={props.sideDrawerToggle}/>
            </nav>
        </header>
    )
}


export default Toolbar