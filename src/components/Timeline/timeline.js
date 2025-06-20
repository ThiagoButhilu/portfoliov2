
import React from "react";
import { motion } from "framer-motion"
//https://codepen.io/FlorinPop17/pen/GLEPZy

const jsonData = [ //timeline dates
    {
        text: 'Menor Aprendiz - Infraestrutura - TIM Brasil',
        date: 'February 25 2019',
        language: [
            {
                tag: 'JS',
                color: '#ffd63b'
            },
            {
                tag: 'CSS',
                color: '#0074b3'
            },
            {
                tag: 'HTML',
                color: '#ff4a2b'
            },
            {
                tag: 'ASP',
                color: '#000000'
            }
        ]
    },
    {
        text: 'Estágiario - Lee Brock Camargo Advogados(LBCA)',
        date: 'March 04 2019',
        language: [{
                tag: 'JS',
                color: '#ffd63b'
            },
            {
                tag: 'CSS',
                color: '#0074b3'
            },
            {
                tag: 'HTML',
                color: '#ff4a2b'
            },
            {
                tag: 'ASP',
                color: '#000000'
            },
            {
                tag: 'MySQL',
                color: '#00768e'
            },
            {
                tag: 'Bootstrap',
                color: '#563c76'
            }


        ]
    },
    {
        text: 'Antlia Serviços de Tecnologia e Informática',
        date: 'March 07 2019',
        language: [{
			tag: 'ASP',
			color: '#000000'
        },
        {
			tag: 'VB',
			color: '#91e498'
        }]
    },
    {
        text:
            'Muve Digital',
        date: 'March 18 2019',
        language: [{
                tag: 'JS',
                color: '#ffd63b'
            },
            {
                tag: 'CSS',
                color: '#0074b3'
            },
            {
                tag: 'HTML',
                color: '#ff4a2b'
            },
            {
                tag: 'Grails',
                color: '#db8e81'
            },
            {
                tag: 'Bootstrap',
                color: '#563c76'
            },
            {
                tag: 'React',
                color: '#48dbf9'
            }
        ]
    }
]


const TimelineItem = ({ data }) => (
  <motion.div 
initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }
  }}
  viewport={{ once: false }}
    className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.text}</p>
                <div className="language-div">
                    {data.language.map((data, idx) => (
                        <span className="tag" style={{ background: data.color }}>
                            {data.tag}
                        </span>
                    ))}
                </div>
                
            <span className="circle" />
        </div>
    </motion.div>
);

const Timeline = () => (
    jsonData.length > 0 && (
        <div className="body-container" id="experiences">
            <h1>experiências</h1>
            <div className="timeline-container">
                {jsonData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    )
);

export {Timeline}
