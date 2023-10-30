import styles from './Research.module.css';
import Paper2 from '../../assets/paper2.pdf'
import Paper3 from '../../assets/paper3.pdf'
import JMP from '../../assets/jmp.pdf'

const Research = (props) => {
    return (
        <div className={styles.parent}>
            <h1 style={{ marginLeft: "22px", fontWeight: 'bold' }}>Working Papers</h1>
            <ul className={styles.list}>
                <li>
                    <div style={{ fontWeight: 'bold' }} className={styles.cardHeader}>On the Importance of Heteroskedasticity in Causal Inference</div>
                    <div style={{ marginTop: '10px' }} className={styles.cardHeader}> With Ivan Jeliazkov</div>
                    <p>There is a large and rapidly growing causal inference literature, yet little is known about the impact of heteroskedascity in popular causal settings. In observational studies where the presence of heteroskedasticity can not be ruled out with certainty, its effects in both treatment assignment and response generation must be studied. Our approach is Bayesian and involves specific modeling whose practical adequacy is then addressed through model comparisons. We build upon and extend existing methods for several well-known settngs such as sharp and fuzzy regression discontinuity designs, the potential outcomes framework, and propensity score matching. Key features of our approach in these settngs include flexible modeling and context-specific computationally efficient estimation algorithms, the ability to recover various functions of the treatment parameters, and an improved efficiency of estimation relative to alternatives that employ only a subset of the data in the analysis. Simulation studies are used to gauge the adequacy of the proposed methods, while their practical applicability is studied in three applications -- we examine the effect of academic probation on subsequent academic performance, the influence of Medigap on healthcare expenditures, and the impact of COVID-19 vaccination on mental wellbeing. These applications illustrate the consequences of misspecification and provide strong evidence that the presence of heteroskedascity should not be ignored.</p>
                    <a href={JMP} target="_blank" rel="noreferrer" style={{ textAlign: "center" }}>Paper</a>
                </li>
                <li>
                    <div style={{ fontWeight: 'bold' }} className={styles.cardHeader}>Bayesian Analysis of a Self-selection Model with

                        Multiple Outcomes</div>

                    <a href={Paper2} target="_blank" rel="noreferrer" style={{ textAlign: "center" }}>Paper</a>

                </li>
                <li>
                    <div style={{ fontWeight: 'bold' }} className={styles.cardHeader}>Product Pricing with Consumer Learning</div>
                    <a href={Paper3} target="_blank" rel="noreferrer" style={{ textAlign: "center" }}>Paper</a>
                </li>
            </ul>
        </div >
    )
}

export default Research;