import React from 'react';
import styles from './Teaching.module.css';
const TeachingListItem = (props) => {

    const { title, session, children, pdfPath } = props;
    return (
        <li>
            <div className={styles.listItemFirst}>
                <div>
                    <div style={{ fontWeight: 'bold' }} className={styles.cardHeader}>{title}</div>
                    <a href={pdfPath} target="blank">Teaching Evaluation</a>
                </div>

                <div>{session}</div>
            </div>
            {children}
        </li>
    )
}

export default TeachingListItem;
