import styles from './Teaching.module.css';
import TeachingListItem from './TeachingListItem';
import Winter2023 from '../../assets/TeachingEvals/ECON122AWinter2023.pdf'
import Fall2022 from '../../assets/TeachingEvals/ECON122AFall2022.pdf'
import SummerII2022 from '../../assets/TeachingEvals/ECON122ASummerII2022.pdf'
import Spring2022 from '../../assets/TeachingEvals/ECON13Spring2022.pdf'
import Winter2022 from '../../assets/TeachingEvals/ECON123BWinter2022.pdf'
import Fall2021 from '../../assets/TeachingEvals/ECON122BFall2021.pdf'
import SummerII2021 from '../../assets/TeachingEvals/ECON167SummerII2021.pdf'
import SummerI2021 from '../../assets/TeachingEvals/ECON122ASummerI2021.pdf'
import Spring2021 from '../../assets/TeachingEvals/ECON100CSpring2021.pdf'
import Winter2021 from '../../assets/TeachingEvals/ECON122AWinter2021.pdf'
import Fall2020 from '../../assets/TeachingEvals/ECON122BFall2020.pdf'
import SummerII2020 from '../../assets/TeachingEvals/ECON20ASummerII2020.pdf'
import SummerI2020 from '../../assets/TeachingEvals/ECON15ASummerI2020.pdf'
import Spring2020 from '../../assets/TeachingEvals/ECON142CWSpring2020.pdf'
import Winter2020 from '../../assets/TeachingEvals/ECON142AWinter2020.pdf'
import Fall2019 from '../../assets/TeachingEvals/Econ13Fall2019.pdf'
const Teaching = (props) => {
    return (
        <div className={styles.parent}>
            <h1 style={{ marginLeft: "22px" }}>Courses Taught</h1>
            <ul className={styles.list}>
                <TeachingListItem title="ECON 122A: Applied Econometrics I" session="Winter 2023" pdfPath={Winter2023}><p>"TA knew her stuff well so she explained the concepts well"</p>
                    <p>"She was very helpful with questions revolving around the course material. Always
                        responsive to students' questions and concerns."</p></TeachingListItem>
                <TeachingListItem title="ECON 122A: Applied Econometrics I" session="Fall 2022" pdfPath={Fall2022}><p>"I like how the TA is very clear when she explains material from lecture as well as
                    being able to explain things that would be covered in lecture later that week. I also
                    really appreciated how she used the basis of some homework problems to make
                    examples to go over during the discussions, as sometimes the wording of these
                    problems is a bit confusing."</p>
                    <p>"Anytime a student would need help or had a question about the lab assignments,
                        the TA would respond with helpful information that wouldn't directly give the
                        answers."</p><p>"She is very kind and accommodating. She explains concepts well and replies to
                            emails quickly. I wish all my TAs were like her."</p></TeachingListItem>

                <TeachingListItem title="ECON 122A: Applied Econometrics I" session="Summer II 2022" pdfPath={SummerII2022}><p>"TA's explanation is simple and easy to understand."</p>
                    <p>"There is a detailed explanation of knowledge, followed by key formulas and
                        examples."</p></TeachingListItem>
                <TeachingListItem title="ECON 13: Global Economy" session="Spring 2022" pdfPath={Spring2022}><p>"Nothing really i really liked her teaching even if i went like twice because even
                    though I didn't attend I was able to understand the lecture those two times."</p><p>"I think the TA is perfect."</p></TeachingListItem>
                <TeachingListItem title="ECON 123B: Econometrics" session="Winter 2022" pdfPath={Winter2022}><p>"Jieyu gave helpful feedback on the homework assignments and helped me
                    understand what type of mistakes I made. This helped me review the homework
                    and know what to do differently for future assignments."</p><p>"The TA was able to capture some of the key points explained by the professor and
                        re-explain them well, and the TA gave examples of questions that we were able to
                        find in the assignment."</p></TeachingListItem>
                <TeachingListItem title="ECON 122B: Applied Econometrics II" session="Fall 2021" pdfPath={Fall2021}><p>"I appreciated how your notes were concise, but also extremely effective. In other
                    words, if I needed to quickly review something for a homework assignment or for
                    an exam, for the most part I was able to find it in your notes. I also liked how you
                    gave us a practice problem in every discussion because for this class it is important
                    to know not only understand the general idea of a topic, but also how to solve them
                    both with Eviews and without Eviews."</p><p>"She would go through material thoroughly and wrap up important points."</p></TeachingListItem>


                <TeachingListItem title="ECON 167 International Trade and Commercial Policy" session="Summer II 2021" pdfPath={SummerII2021}><p>"Explains the knowledge in detail."</p></TeachingListItem>
                <TeachingListItem title="ECON 122A: Applied Econometrics I" session="Summer I 2021" pdfPath={SummerI2021}><p>"They understand the professor's lectures and offer practice examples for certain
                    topics."</p>
                    <p>"TA has provided a lot of help to my study this summer!"</p></TeachingListItem>
                <TeachingListItem title="ECON 100C: Intermediate Economics III" session="Spring 2021" pdfPath={Spring2021}><p>"Nice simple explanations of the material allowed me to digest some of the harder
                    concepts."</p><p>"The TA is so patient and can provide conscientious teaching always."</p><p>"Jieyu is very good"</p></TeachingListItem>
                <TeachingListItem title="ECON 122A: Applied Econometrics I" session="Winter 2021" pdfPath={Winter2021}><p>"Jieyu Gao was able to explain instructions to our class assignments clearly and
                    answered student questions in email effectively and quickly."</p>
                    <p>"This TA was great as she was very responsive and willing to aid students in
                        understanding the course material more deeply. It is clear that this TA cares about
                        students by her thoughtfulness and thoroughness in her discussion videos."</p></TeachingListItem>
                <TeachingListItem title="ECON 122B: Applied Econometrics II" session="Fall 2020" pdfPath={Fall2020}><p>"Jieyu Gao is one of the nices TA I have seen with patience and energy."</p>
                    <p>"Communication and ability to give constructive advise."</p></TeachingListItem>
                <TeachingListItem title="ECON 20A: Basic Economics I" session="Summer II 2020" pdfPath={SummerII2020}><p>"Helping students if they are stuck."</p>
                </TeachingListItem>
                <TeachingListItem title="ECON 15A: Probability and Statistics ECON I" session="Summer I 2020" pdfPath={SummerI2020}>
                    <p>"She presented the material in a way that was easy to understand and her
                        worksheets were really helpful."</p><p>She was great in that she did not just go over the practice problems but she also
                            just went over major concepts as well in like a study guide format. She also stopped
                            often during the zoom discussion to ask if anyone had questions.</p>
                </TeachingListItem>
                <TeachingListItem title="ECON 142CW: Industrial Organization III" session="Spring 2020" pdfPath={Spring2020}>
                    <p>"Jieyu was extremely helpful during office hours. She answered all of my questions
                        and helped me with anything I was confused on. Whenever I would email her, she
                        would respond quickly and was very flexible in working with my schedule if I
                        wasn't able to attend the normal office hours."</p>
                </TeachingListItem>
                <TeachingListItem title="ECON 142A: Industrial Organization I" session="Winter 2020" pdfPath={Winter2020}>
                    <p>"She went over the calculations that we needed to understand. And made notes for
                        us. Extremely helpful."</p>
                </TeachingListItem>
                <TeachingListItem title="ECON 13: Global Economy" session="Fall 2019" pdfPath={Fall2019}>
                    <p>"She is a great TA. She is very willing to help the students. She explains the
                        questions very well, and she is always on time for office hours."</p>
                    <p>"She is very nice and makes the class fun."</p>
                    <p>"This TA is one of the best I’ve had. She goes over every single thing needed to pass
                        the class."</p>
                </TeachingListItem>


            </ul>
        </div>
    )
}

export default Teaching;