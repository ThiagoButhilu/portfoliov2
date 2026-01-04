
import html from '../../assets/html-icon.svg';
import css from '../../assets/css-icon.svg';
import js from '../../assets/js-icon.svg';
import bootstrap from '../../assets/bootstrap-icon.svg';
import react from '../../assets/react-icon.svg';
import wordpress from '../../assets/wordpress.png'
import typescript from '../../assets/typescript-icon.svg'
import mysql from '../../assets/mysql-icon.svg';
import tailwind from '../../assets/tailwind.png'
import vue from '../../assets/Vue.js_Logo_2.svg.png'

import profile from '../../assets/public-domain-vectors-U7qNLqf_Xcs-unsplash.png';

import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";


function Main() {
    const { t } = useTranslation();
    return (
        <div className="container main" id='about' name='about'>
            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.img src={profile} alt='picture'/>
            </motion.div>
            <div>
                <motion.div
          className="about"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t('about.title')}</h2>

          <p>
            <Trans i18nKey="about.description1" components={{ strong: <strong /> }} />
          </p>

          <p>
            <Trans i18nKey="about.description2" components={{ strong: <strong /> }} />
          </p>

          <ul className="about-list">
            <li>✔ {t('about.skill1')}</li>
            <li>✔ {t('about.skill2')}</li>
            <li>✔ {t('about.skill3')}</li>
          </ul>
        </motion.div>

                <motion.div 
                        className='about'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <label><h2>{t('about.skillsTitle')}</h2></label>
                    <div className='container-img'>
                        <img src={html} alt='html'/>
                        <img src={css} alt='css'/>
                        <img src={tailwind} alt='tailwind'/>
                        <img src={js} alt='js'/>
                        <img src={typescript} alt='js'/>
                        <img src={bootstrap} alt='bootstrap'/>
                        <img src={react} alt='react'/>
                        <img src={mysql} alt='mysql'/>
                        <img src={vue} alt='vue'/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Main;