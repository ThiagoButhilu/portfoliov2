import { BrowserRouter } from 'react-router-dom'
import { motion } from "framer-motion"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-mark.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

import me from '../../assets/IMG_0273-removebg-preview.png'


export function Intro() {
  const titleName = "Thiago Araujo";

  return (
    <div className="container intro" id="home">
      <div className="hero-text">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}   
          viewport={{
            once: false,
            amount: "some",
            margin: "-50px 0px"
          }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Olá <img src={Hello} alt="Hello" width="20px"/>, Sou
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {titleName}
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Desenvolvedor Front-End
        </motion.h3>
        
        <motion.p
          className="small-resume"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-red-500 p-4">
            6 anos de experiência
          </div>
        </motion.p>
        
        <motion.div
        className='clickable'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <BrowserRouter>
            <NavHashLink smooth to="#form">Contato</NavHashLink>
          </BrowserRouter>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 1 }}
        />
            <motion.div className='social-media'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1 }}>
               <motion.a whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/codevinayak"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" />
                </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                    href="https://github.com/CodeVinayak/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={githubIcon} alt="GitHub" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                    href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={whatsapp} alt="Whatsapp" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                    href="https://t.me/CodeVinayak"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={telegram} alt="telegram" />
                    </motion.a> 
            </motion.div>
        </div>
          <div>
            <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 1 }}
            >
            <img src={me} alt='illustration'/>
            </motion.div>
          </div>
            
    </div>
  )
}