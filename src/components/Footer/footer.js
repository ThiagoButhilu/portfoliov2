import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-mark-white.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'

import { motion } from "framer-motion";



function Footer() {

    const fullYear = new Date().getFullYear();

    return(
        <div className="footer_container">
           <div>
            
           </div>
           <div>
                <p>© {fullYear} Thiago Araujo. All rights reserved.</p>   
           </div>
           <div className='img_container '>
            <div className='social-media'>
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
                </div>
            </div>
        </div>
    )
}

export default Footer