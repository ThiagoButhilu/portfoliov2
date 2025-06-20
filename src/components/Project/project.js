import githubIcon from '../../assets/github-mark-white.svg'
import { motion } from "framer-motion"
import SpotlightCard from '../SpotlightCard';

const jsonData = [
  {
    name: 'teste',
    description: 'Description',
    link: 'www.google.com',
    languages: ['mysql', 'react', 'bootstrap']
  }
]

const Project = () => (
  <div className="project-container" id='projects'>
    <h1>Meus projetos</h1>
    {jsonData.length === 0 ? (
    <div className="container project" id='project' name='project'>
      {jsonData.map((data) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="card"
        >
          <SpotlightCard className="custom-spotlight-card" spotlightColor="#6658d3">
            <div className="card-header">
              <img src={githubIcon} alt='github'/>
            </div>
            <div className="card-body">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
            <div className="card-footer">
              {data.languages.map((language) => (
                <p key={language}>{language}</p>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
    ) : (
        <div>
            <h3>Ainda nada por aqui! </h3>
        </div>
    )}
  </div>
);

export default Project;