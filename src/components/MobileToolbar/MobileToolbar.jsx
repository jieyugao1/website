import React from 'react'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './MobileToolbar.module.css'
import Backdrop from '../Backdrop/Backdrop';


const MobileToolbar = ( props ) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems clicked={props.sideDrawerToggle} showMobileToolbar={props.open}/>
                </nav>
            </div>
        </div>
    );
};

export default  MobileToolbar;