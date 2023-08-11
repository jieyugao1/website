import styles from './Research.module.css';
import Abstract1 from '../../assets/abstract1.pdf'
import Paper2 from '../../assets/paper2.pdf'
const Research = (props) => {
    return (
        <div className={styles.parent}>
            <h1 style={{marginLeft: "22px"}}>Working Papers</h1>
            <ul className={styles.list}>
            <li>
                <div style={{fontWeight: 'bold'}} className={styles.cardHeader}>On the Importance of Heteroskedasticity in Causal Inference</div>
            
                <a href={Abstract1} target="_blank" rel="noreferrer">Abstract</a> 
            </li>
            <li>
                <p style={{fontWeight: 'bold'}}>Bayesian Analysis of a Self-selection Model with

Multiple Outcomes</p>
              
                    <a href={Paper2} target="_blank" rel="noreferrer">Paper</a>       

            </li>
            <li>
                <p style={{fontWeight: 'bold'}}>Product Pricing with Consumer Learning</p>
            </li>
            </ul>
        </div>
    )
}

export default Research;