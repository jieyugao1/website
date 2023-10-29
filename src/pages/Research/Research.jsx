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
                    <p>There is a large and rapidly growing causal inference literature, yet little is known about the impact of heteroskedascity in popular causal models. Our approach is Bayesian and specifically models heteroskedasticity. We build upon and extend existing methods for several well-known settngs such as sharp and fuzzy regression discontinuity designs, the potential outcomes framework, and propensity score matching. Key features of our approach in these settngs include flexible modeling and context-specific computationally efficient estimation algorithms, the ability to recover arbitrary functions of the treatment parameters instead of only focusing on averages, and more efficient estimation based on all of the available data rather than a small subset as required by alternative estimation methods. Simulation studies are used to gauge adequacy of the proposed modeling and estimation methodology and reveal their applicability in studies involving the effect of academic probation on students'subsequent academic performance, the effect of Medigap on healthcare expenditures, and the impact of COVID-19 vaccination on mental health conditions. These applications illustrate the practical consequences of misspecification and provide strong evidence that the presence of heteroskedascity should not be ignored.</p>
                    <a href={JMP} target="_blank" rel="noreferrer">Paper</a>
                </li>
                <li>
                    <p style={{ fontWeight: 'bold' }}>Bayesian Analysis of a Self-selection Model with

                        Multiple Outcomes</p>

                    <a href={Paper2} target="_blank" rel="noreferrer">Paper</a>

                </li>
                <li>
                    <p style={{ fontWeight: 'bold' }}>Product Pricing with Consumer Learning</p>
                    <a href={Paper3} target="_blank" rel="noreferrer">Paper</a>
                </li>
            </ul>
        </div>
    )
}

export default Research;