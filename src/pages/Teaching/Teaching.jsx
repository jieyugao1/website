import styles from './Teaching.module.css';
const Teaching = (props) => {
    return (
        <div className={styles.parent}>
        <h1 style={{marginLeft: "22px"}}>Courses Taught</h1>
        <ul className={styles.list}>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122A: Applied Econometrics I</div>
            </div>
            <div>Winter 2023</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122A: Applied Econometrics I</div>
            </div>
            <div>Fall 2022</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122A: Applied Econometrics I</div>
            </div>
            <div>Summer II 2022</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 13: Global Economy</div>
            </div>
            <div>Spring 2022</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122B: Applied Econometrics II</div>
            </div>
            <div>Winter 2022</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122B: Applied Econometrics II</div>
            </div>
            <div>Fall 2021</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 167 International Trade and Commercial Policy</div>
            </div>
            <div>Summer II 2021</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122A: Applied Econometrics I</div>
            </div>
            <div>Summer I 2021</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 100C: Intermediate Economics III</div>
            </div>
            <div>Spring 2021</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122A: Applied Econometrics I</div>
            </div>
            <div>Winter 2021</div>
        </li>
        <li>
            <div>
            <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>ECON 122B: Applied Econometrics II</div>
            </div>
            <div>Fall 2020</div>
        </li>
        </ul>
    </div>
    )
}

export default Teaching;