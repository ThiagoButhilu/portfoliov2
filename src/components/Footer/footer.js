import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-mark-white.svg'
import whatsapp from '../../assets/whatsapp.svg'

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
                    href="https://www.linkedin.com/in/thiago-araujo-rodrigues-2a6689134/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" />
                </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                    href="https://github.com/ThiagoButhilu"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={githubIcon} alt="GitHub" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                    href="https://wa.me/5511958722569?text=Olá!%20Vi%20seu%20portfólio."
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img src={whatsapp} alt="Whatsapp" />
                    </motion.a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer