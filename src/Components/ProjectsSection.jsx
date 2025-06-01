import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { SiMaterialui } from "react-icons/si"
import {SiChakraui} from "react-icons/si"
import Fade from "react-awesome-reveal"
const projects = [
  {
    name: "Juicy Chemistry clone",
    img: "/juicy_Chemistry.png",
    link: "https://juicy-chemistry-clone1.vercel.app/",
    git: "https://github.com/Iqbal0786/Juicy_Chemistry_Clone1",
    about:
      "Juicy Chemistry Clone is an inspired project from Juicy Chemistry.It is an Online E-Commmerce Beauty Products Store,Executed along 5 members during our construct Week ",
    stacks: [
     <AiFillHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
    ],
  },
  {
    name: "Zoomcar clone",
    img: "Zoomcar.png",
    link: "https://zoomcar-clone-livid.vercel.app/",
    git: "https://github.com/umeshyadav4321/Zoomcar-Clone",
    about:
      "Zoom-car clone is a car rental website.Used for booking cars while travelling,cloned using basic React  within 4 days",
    stacks: [
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiMaterialui className={styles.stackIcon} />,
    ],
  },
  {
    name: "Lumen 5 clone",
    img: "Lumen5.png",
    link: "https://lumen5clone8888.netlify.app/",
    git: "https://github.com/KaustubhBadve/spiritual-school-8644",
    about:
      " video creation platform for different brands and companies forsocial media stories, posts, and advertisements.",
    stacks: [
      
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,

    ],
  },
  {
    name: "Boat-Lifestyle clone",
    img: "Boat.png",
    link: "https://tangerine-sunshine-7e926e.netlify.app/",
    git: "https://github.com/soumyah1512/project_boat_lifestyle",
    about:
    "It is an inspired project from Boat lifeStyle website.Tech-Stack used are React,npm libraries.Executed along with 5 members during or Construct-Week.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  }
  
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
