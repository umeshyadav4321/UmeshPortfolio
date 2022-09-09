import styles from "./Styles/ContactSection.module.css"

import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'


import Fade from "react-reveal/Fade"
export function ContactSection() {
  const form = useRef();

  
  const handleOnSubmit = (e) => {
    e.preventDefault()
   
    emailjs.sendForm('service_z1jmg68', 'template_l2ppgmh', e.target, 'GoVhOH5beuU75PqqT').then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      },
    )
    e.target.reset()
  }
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom>
        <p className={styles.contactHeading}>Contact Me</p>
        <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <input
          
        
          label="Email"
          className={styles.feedback_input}
          name="email"
          placeholder="Email…"
          required
          
        />
        <input
         
          className={styles.feedback_input}
          
          label="Name"
          name="from_name"
          placeholder="Name…"
          required
          
        />
        <input
          
          className={styles.feedback_input}
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <button type="submit" color="green">Send</button>
        
      </Form>
    </div>
      
        <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
          <a href="mailto:jagtappunam129@gmail.com">
            <AiOutlineMail className={styles.emailicon} />
          </a>
          <a
            href="https://linkedin.com/in/punam-jagtap-090839232/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a href="https://github.com/punam102/" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone: 8010475989</p>{" "}
        <p className={styles.text}>Email: jagtappunam129@gmail.com</p>
      </Fade>
    </div>
  )
}
