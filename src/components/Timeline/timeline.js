
import React from "react";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
//https://codepen.io/FlorinPop17/pen/GLEPZy

const Timeline = () => {
    const { t } = useTranslation();

    const jsonData = [ //timeline dates
    {
        text: t('timeline.items.tim1.text'),
        date: t('timeline.items.tim1.date'),
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
        text: t('timeline.items.tim2.text'),
        date: t('timeline.items.tim2.date'),
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
        text: t('timeline.items.tim3.text'),
        date: t('timeline.items.tim3.date'),
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
        text: t('timeline.items.tim4.text'),
        date: t('timeline.items.tim4.date'),
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
                tag: 'React',
                color: '#48dbf9'
            },
            {
                tag: 'TS',
                color: '#007acc'
            },
            {
                tag: 'Grails',
                color: '#db8e81'
            }
        ]
    }
]

const TimelineItem = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
    }}
    viewport={{ once: true }}
    className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.text}</p>
                <div className="language-div">
                    {data.language.map((lang) => (
                        <span className="tag" key={lang.tag} style={{ background: lang.color }}>
                            {lang.tag}
                        </span>
                    ))}
                </div>
                
            <span className="circle" />
        </div>
    </motion.div>
);

    return (
        jsonData.length > 0 && (
            <div className="body-container" style={{backgroundColor: '#fff'}} id="experiences">
                <h1>{t('timeline.title')}</h1>
                <div className="timeline-container">
                    {jsonData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            </div>
        )
    );
};

export {Timeline}
