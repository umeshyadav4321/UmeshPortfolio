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
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Overstock.com clone",
    img: "/overstock.png",
    link: "https://overstock-clone-2.netlify.app/",
    git: "https://github.com/SumitB1412/overstock-clone.git",
    about:
      "This is e-commerce website used for shopping wide range of products.This was a team project where I with my teammates had created. ",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Shopbop.com clone",
    img: "shopbop.jpeg",
    link: "https://shopbop.netlify.app/",
    git: "https://github.com/iShilajit/shopbopclone",
    about:
      " This is e-commerce application for Cloths and v. This was a team project where I with my teammates had created.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  // {
  //   name: "Zara.com clone",
  //   img: "/zara.jpg",
  //   link: "https://thotapavankumar.github.io/Zara_Project_Clone/",
  //   git: "https://github.com/Gajanan-Watt/zara_web.git",
  //   about:
  //     " It is an e-commerce website having varieties of luxury items which are of high quality. We have tried to clone the pixel perfect website with the help of HTML. Implemented using HTML, CSS and javascript.",
  //   stacks: [
  //     
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  {
    name: "Headphonezone.com clone",
    img: "headphone.jpeg",
    link: "https://goofy-poitras-94a175.netlify.app/",
    git: "https://github.com/SankalpJaiswal/Head-Phone-Zone.git",
    about:
    "we learn about the fundamentals of Javascript and introduction to Data Structure and Algorithms,  By using these concepts we have built our project website..",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
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
