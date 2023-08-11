import styles from './Home.module.css';
import ProfilePhoto from '../../assets/jieyu.png'

const Home = (props) => {
    return (
        <div className={styles.home}>

            <div className={styles.content}>
            <div>
            <p style={{fontSize: '50px'}}>Jieyu Gao</p>
            <p className={styles.paragraph}>I am a Ph.D. candidate in Economics at the University of California-Irvine.</p>
            <p className={styles.paragraph}>My research focuses on <span className={styles.bold}>Bayesian econometrics </span>and <span className={styles.bold}>causal inference.</span>.</p>
            </div>
            <img className={styles.image} src={ProfilePhoto} alt="profile-headshot"/>
            </div>
        </div>
    )
}

export default Home;