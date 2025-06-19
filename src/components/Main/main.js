
import html from '../../assets/html-icon.svg';
import css from '../../assets/css-icon.svg';
import js from '../../assets/js-icon.svg';
import bootstrap from '../../assets/bootstrap-icon.svg';
import react from '../../assets/react-icon.svg';
import sass from '../../assets/sass-icon.svg'
import wordpress from '../../assets/wordpress.png'

import mysql from '../../assets/mysql-icon.svg';

import profile from '../../assets/profile.jpg';

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
                <motion.div className='about' initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                    <motion.label 
                    >
                        <h2>Sobre mim</h2>
                    </motion.label>
                        <motion.p 
                        
                        >Olá! Sou Thiago Araujo, desenvolvedor front-end apaixonado por criar interfaces modernas e experiências digitais memoráveis. Com 26 anos e uma paixão inabalável pela tecnologia, dedico-me a transformar designs em realidade através do código.</motion.p>

                        <motion.p
                        
                        >Como desenvolvedor front-end, sou especializado em criar soluções web inovadoras que combinam performance, acessibilidade e design de ponta. Meu foco está em desenvolver aplicações que não apenas funcionam perfeitamente, mas também proporcionam uma experiência única aos usuários.</motion.p>

                        <motion.p
                        
                        >Estou sempre em busca de novos desafios e oportunidades para expandir minhas habilidades técnicas, mantendo-me atualizado com as últimas tendências e tecnologias do mercado.</motion.p>
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