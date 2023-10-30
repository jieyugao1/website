import React from 'react'

import styles from './Sidedrawer.module.css'
import Backdrop from '../Backdrop/Backdrop';
const Sidedrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <section>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.CloseWindow} onClick={props.closed}>X</div>
                <div className={styles.Contact}>
                    <p className={styles.Title}>Contact</p>
                    <div className={styles.Description}>
                        <p className={styles.Captions}>Email</p>
                        <p className={styles.contactInfo}>jieyug1@uci.edu</p>
                    </div>

                    <div className={styles.Description}>
                        <p className={styles.Captions}>Linkedin</p>
                        <a className={styles.contactInfo} href="https://www.linkedin.com/in/jieyu-gao/" target="_blank" rel="noreferrer">linkedin.com/in/jieyu-gao</a>
                    </div>
                    <div className={styles.Description}>
                        <p className={styles.Captions}>Office</p>
                        <p className={styles.contactInfo}>Social Science Tower 338, UCI Campus</p>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Sidedrawer;