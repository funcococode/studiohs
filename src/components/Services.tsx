import React, { Component } from 'react'
import styles from "../app/app.module.css";

export default class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.servicesContainer}>
                    <h1 className={styles.serviceContainerWatermark}>Services</h1>
                   <div className={styles.service__1}>
                       <div className={styles.serviceCardWrapper}>
                            <h2 className={styles.serviceNumber}>01</h2>
                            <p className={styles.serviceName}>Music Production</p>
                            <article className={styles.serviceDesc}>We produce music for various artists and TV ads as well as movies.
                            </article>
                       </div>
                   </div>
                   <div className={styles.service__2}>
                       <div className={styles.serviceCardWrapper}>
                            <h2 className={styles.serviceNumber}>02</h2>
                            <p className={styles.serviceName}>Music Composition</p>
                            <article className={styles.serviceDesc}>
                                Want your lyrics to get composed brilliantly? We can do it in no time!
                            </article>
                       </div>
                   </div>
                   <div className={styles.service__3}>
                       <div className={styles.serviceCardWrapper}>
                            <h2 className={styles.serviceNumber}>03</h2>
                            <p className={styles.serviceName}>Movie Scoring</p>
                            <article className={styles.serviceDesc}>
                                Need Professional BGM for your next short film or your full fleged 2.5 hour masterpiece? We got you covered with our team.
                            </article>
                       </div>
                   </div>
                   <div className={styles.service__4}>
                       <div className={styles.serviceCardWrapper}>
                            <h2 className={styles.serviceNumber}>04</h2>
                            <p className={styles.serviceName}>Mixing Mastering</p>
                            <article className={styles.serviceDesc}>
                                With our highly trained mixing and mastering engineers, we provide you the industry level tone that is perfectly cooked for your next release.
                            </article>
                       </div>
                   </div>
                </section>
            </React.Fragment>
        )
    }
}
