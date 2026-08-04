import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import Typing from './../typing'
import mouseClick from '../../assets/White.png'
import resume from '../../assets/thiago-araujo-rodrigues.pdf'

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const currentLanguage = i18n.language;

    return (
        <div className="header-fixed header_position container">
            <Router>
                
                    <HashLink className='logo'>
                        <span><Typing></Typing></span>
                    </HashLink>
                <nav>
                    <HashLink to="/#home" smooth>
                        {t('header.home')}
                    </HashLink>
                    <HashLink to="/#about" smooth>
                        {t('header.about')}
                    </HashLink>
                    <HashLink to="/#projects" smooth>
                        {t('header.projects')}
                    </HashLink>
                    <HashLink to="/#experiences" smooth>
                        {t('header.experiences')}
                    </HashLink>
                    <HashLink to="/#form" smooth>
                        {t('header.contact')}
                    </HashLink>
                    <a href={resume} download="Curriculo_Thiago_Atualizado.pdf" className='button'>
                        {t('header.resume')}
                    </a>
                    <div className="language-toggle">
                        <motion.button
                            className={`lang-btn ${currentLanguage === 'pt-BR' ? 'active' : ''}`}
                            onClick={() => changeLanguage('pt-BR')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="Português"
                        >
                            PT
                        </motion.button>
                        <motion.button
                            className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="English"
                        >
                            EN
                        </motion.button>
                    </div>
                </nav>
            </Router>
        </div>
    )
}

export default Header;