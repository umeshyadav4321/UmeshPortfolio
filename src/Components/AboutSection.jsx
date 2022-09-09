import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/profilepic.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h2>
              I am <span>Umesh Yadav</span>{" "}
            </h2>
            <p>
            An aspiring Frontend developer specializing in React
technology .Passionate about coding and learning new
technologies. Looking forward to working in a organization
and scaling it to new heights.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
