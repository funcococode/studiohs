import React ,{useState,useEffect} from 'react'
import styles from "../app/app.module.css";
import { ArrowRightIcon } from '@heroicons/react/outline';
import footerImg from "../app/footerImg.svg";
const Contact = () => {
    let [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Get in touch</h2>
            <div className={styles.contactWrapper}>
                <form className={styles.contactForm}>
                    <p>
                        Hi, My name is <input className={styles.contactInput} type="text" id="fullName" placeholder="Type Here..." />
                    </p>
                    <p>
                        My Email address is <input className={styles.contactInput} type="email" id="email" placeholder="Enter your email address" />
                    </p>
                    <p>
                        You can call/text me at <input className={styles.contactInput} type="text" id="mobile" placeholder="Enter your mobile number" />
                    </p>
                    <br />
                    <p>
                        <input checked={isChecked} onChange={handleChange} type="checkbox" id="checkbox" className={styles.contactCheckbox} />
                        <label htmlFor="checkbox">{isChecked ? <p><span style={{textDecoration:"line-through",color:'lightgrey',marginRight:"10px"}}>Can we call you in office hours?</span>Okay Sure!</p> : "Can we call you in office hours?"}</label>
                    </p>
                    <button className={styles.formButton}>Get Enquiry <span><ArrowRightIcon /></span></button>
                </form>
                
            </div>
            <footer className={styles.contactFooter}>
                <ul>
                    <li className={styles.footerListItem}>StudioHS</li>
                    <li className={styles.footerListItem}>Professional Production and Recording Studio</li>
                </ul>
                <ul>
                    <li className={styles.footerListItem}>hello@studiohs.com</li>
                    <li className={styles.footerListItem}>+92-8085850222</li>
                </ul>
                <ul>
                    <li className={styles.footerListItem}>StudioHS, Lane-4, Prem Vihar</li>
                    <li className={styles.footerListItem}>Satna, Madhya Pradesh</li>
                </ul>
                <ul>
                    <li className={styles.footerListItem}>+91-7000584572</li>
                    <li className={styles.footerListItem}>info@studiohs.com</li>
                </ul>
                <ul>
                    <li className={styles.footerListItem}>Copyright &copy; StudioHS</li>
                    <li className={styles.footerListItem}>2021 - Rachit Shrivastava</li>
                </ul>
            </footer>
        </section>
    )
}

export default Contact
