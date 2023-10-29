import styles from './Home.module.css';
import ProfilePhoto from '../../assets/jieyu.png'
import Resume from '../../assets/Resume.pdf';
import CV from '../../assets/cv.pdf';
import JMP from '../../assets/jmp.pdf';
const Home = (props) => {
    return (
        <div className={styles.home}>

            <div className={styles.content}>
                <div className={styles.intro}>
                    <div>
                        <p style={{ fontSize: '50px' }}>Jieyu Gao</p>
                        <p className={styles.paragraph}>I am a Ph.D. candidate in Economics at the University of California-Irvine.</p>
                        <p className={styles.paragraph}>My research focuses on <span className={styles.bold}>Bayesian econometrics </span>and <span className={styles.bold}>causal inference.</span>.</p>
                        <div className={styles.buttons}>
                            <div>
                                <button className={styles.button}><a href={Resume} className={styles.anchor} target="_blank" rel="noreferrer">Resume</a></button>
                            </div>

                            <div>
                                <button className={styles.button}><a href={CV} className={styles.anchor} target="_blank" rel="noreferrer">CV</a></button>
                            </div>
                            {/* <button>Resume</button> */}
                            {/* <button>CV</button> */}
                        </div>
                    </div>
                    <img className={styles.image} src={ProfilePhoto} alt="profile-headshot" />
                </div>
                <div className={styles.abstract}>
                    <h4>Job Market Paper: On the Importance of Heteroskedasticity in Causal Inference</h4>
                    <h5>With Ivan Jeliazkov</h5>
                    <p>There is a large and rapidly growing causal inference literature, yet little is known about the impact of heteroskedascity in popular causal models. Our approach is Bayesian and specifically models heteroskedasticity. We build upon and extend existing methods for several well-known settngs such as sharp and fuzzy regression discontinuity designs, the potential outcomes framework, and propensity score matching. Key features of our approach in these settngs include flexible modeling and context-specific computationally efficient estimation algorithms, the ability to recover arbitrary functions of the treatment parameters instead of only focusing on averages, and more efficient estimation based on all of the available data rather than a small subset as required by alternative estimation methods. Simulation studies are used to gauge adequacy of the proposed modeling and estimation methodology and reveal their applicability in studies involving the effect of academic probation on students'subsequent academic performance, the effect of Medigap on healthcare expenditures, and the impact of COVID-19 vaccination on mental health conditions. These applications illustrate the practical consequences of misspecification and provide strong evidence that the presence of heteroskedascity should not be ignored.</p>
                    <button className={styles.button}><a href={JMP} className={styles.anchor} target="_blank" rel="noreferrer">PDF</a></button>
                </div>
            </div>



        </div>
    )
}

export default Home;