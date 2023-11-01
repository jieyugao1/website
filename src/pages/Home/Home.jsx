import styles from './Home.module.css';
import ProfilePhoto from '../../assets/jieyu.png'
import Resume from '../../assets/Resume.pdf';
import CV from '../../assets/cv.pdf';
import JMP from '../../assets/GaoJeliazkov2023.pdf';
const Home = (props) => {
    return (
        <div className={styles.home}>

            <div className={styles.content}>
                <div className={styles.intro}>
                    <div>
                        <p className={styles.name}>Jieyu Gao</p>
                        <p className={styles.paragraph}>I am a Ph.D. candidate in Economics at the University of California-Irvine.</p>
                        <p className={styles.paragraph}>My research focuses on <span className={styles.bold}>Bayesian econometrics </span>and <span className={styles.bold}>causal inference.</span></p>
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
                    <h4>Job Market Paper: The Impact of Heteroskedasticity in Observational Studies of Causal Effects</h4>
                    <h5>With Ivan Jeliazkov</h5>
                    <p className={styles.abstractContent}>There is a large and rapidly growing causal inference literature, yet little is known about the impact of heteroskedascity in popular causal settings. In observational studies where the presence of heteroskedasticity can not be ruled out with certainty, its effects in both treatment assignment and response generation must be studied. Our approach is Bayesian and involves specific modeling whose practical adequacy is then addressed through model comparisons. We build upon and extend existing methods for several well-known settngs such as sharp and fuzzy regression discontinuity designs, the potential outcomes framework, and propensity score matching. Key features of our approach in these settngs include flexible modeling and context-specific computationally efficient estimation algorithms, the ability to recover various functions of the treatment parameters, and an improved efficiency of estimation relative to alternatives that employ only a subset of the data in the analysis. Simulation studies are used to gauge the adequacy of the proposed methods, while their practical applicability is studied in three applications -- we examine the effect of academic probation on subsequent academic performance, the influence of Medigap on healthcare expenditures, and the impact of COVID-19 vaccination on mental wellbeing. These applications illustrate the consequences of misspecification and provide strong evidence that the presence of heteroskedascity should not be ignored.</p>
                    <button className={styles.button}><a href={JMP} className={styles.anchor} target="_blank" rel="noreferrer">PDF</a></button>
                </div>
            </div>



        </div>
    )
}

export default Home;