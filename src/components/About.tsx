import { Fragment } from "react";
import styles from "../app/app.module.css";

function About(){
    return(
        <Fragment>
            <section id="aboutSection" className={styles.sections}>
                    <div className={styles.sectionWithBG}></div>
                    <div className={styles.sectionMainArea} >
                        <p className={styles.sectionLeadLine}>
                            FROM <span>IDEA</span><br />THROUGH <span>SCRATCH</span> <br/>TO COMPLETE <span>WAVs</span>
                        </p>
                        <article>
                            <p>
                                In StudioHS clients are treated as a family member.
                                There is a service for every budget
                                We are not bound to a particular city.
                                We provide best quality audio all across the india while working remotely
                            </p>
                            <small>Take a look at what we have created.</small>
                        </article>
                    </div>
                </section>
        </Fragment>
    )
}

export default About;