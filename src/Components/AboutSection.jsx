import React from "react";

import styles from "./Styles/AboutSection.module.css"
import Fade from "react-awesome-reveal"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p className={styles.sectionTitle}>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="NewProfile.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Umesh Yadav</span>{" "}
            </h2>
            <p>
            Creative and detail-oriented Frontend Developer with 2.5 years of experience in designing and implementing responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frontend framework like React. Passionate about developing high-quality code and delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
