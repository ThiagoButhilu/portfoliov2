
import html from '../../assets/html-icon.svg';
import css from '../../assets/css-icon.svg';
import js from '../../assets/js-icon.svg';
import bootstrap from '../../assets/bootstrap-icon.svg';
import react from '../../assets/react-icon.svg';
import sass from '../../assets/sass-icon.svg'
import wordpress from '../../assets/wordpress.png'
import typescript from '../../assets/typescript-icon.svg'
import mysql from '../../assets/mysql-icon.svg';

import profile from '../../assets/public-domain-vectors-U7qNLqf_Xcs-unsplash.png';

import { motion } from "framer-motion";


function Main() {
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
          <h2>Sobre mim</h2>

          <p>
            Olá, eu sou <strong>Thiago Rodrigues</strong>, Desenvolvedor Front-end
            com foco em <strong>React, TypeScript e Next.js</strong>.
          </p>

          <p>
            Tenho mais de <strong>6 anos de experiência</strong> criando interfaces
            modernas, performáticas e escaláveis, sempre aplicando boas práticas
            e foco na experiência do usuário.
          </p>

          <ul className="about-list">
            <li>✔ Interfaces modernas e responsivas</li>
            <li>✔ Componentização e boas práticas</li>
            <li>✔ Integração com APIs REST</li>
          </ul>
        </motion.div>

                <motion.div 
                        className='about'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <label><h2>Principais habilidades</h2></label>
                    <div className='container-img'>
                        <img src={html} alt='html'/>
                        <img src={css} alt='css'/>
                        <img src={sass} alt='css'/>
                        <img src={js} alt='js'/>
                        <img src={typescript} alt='js'/>
                        <img src={bootstrap} alt='bootstrap'/>
                        <img src={react} alt='react'/>
                        <img src={mysql} alt='mysql'/>
                        <img src={wordpress} alt='wordpress'/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Main;