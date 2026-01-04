import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-mark-white.svg'
import whatsapp from '../../assets/whatsapp.svg'

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';



function Footer() {
    const { t } = useTranslation();
    const fullYear = new Date().getFullYear();

    return(
        <div className="footer_container">
           <div>
            
           </div>
           <div>
                <p>{t('footer.rights', { year: fullYear })}</p>   
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
                    href={`https://wa.me/5511958722569?text=${encodeURIComponent(t('whatsapp.message'))}`}
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