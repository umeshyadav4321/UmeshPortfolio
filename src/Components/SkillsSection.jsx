import { makeStyles } from "@material-ui/styles"
import { SkillCard } from "./SkillCard"
import styles from "./Styles/SkillsSection.module.css"
import { GrReactjs } from "react-icons/gr"
import { SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiMaterialui } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiNpm } from "react-icons/si"
import { SiPostman } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import {SiChakraui} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import {SiCypress} from "react-icons/si"
import {DiVisualstudio} from "react-icons/di"


export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p>Skills</p>
        <p>Front-end skills</p>
        
        <div className={styles.skillsContFront}>
        <SkillCard
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="Chakra UI"
            icon={
              <SiChakraui
                className={`${styles.skillIcon} ${styles.muiIcon}`}
              />
            }
          />
          <SkillCard
            skill="Typescript"
            icon={
              <SiTypescript
                className={`${styles.skillIcon} ${styles.muiIcon}`}
              />
            }
          />
          <SkillCard
            skill="Cypress"
            icon={
              <SiCypress
                className={`${styles.skillIcon} ${styles.muiIcon}`}
              />
            }
          />
        </div>
        
        
        <p>Tools</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Vs Code"
            icon={
              <DiVisualstudio className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
      </Fade>
    </div>
  )
}
