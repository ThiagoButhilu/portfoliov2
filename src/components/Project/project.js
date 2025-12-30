import githubIcon from '../../assets/github-mark-white.svg'
import { motion } from 'framer-motion'

import studyTracker from '../../assets/studyTracker.png'
import thePolittis from '../../assets/thePolittis.png'
import vistaClara from '../../assets/vistaClara.png'

// imagens dos projetos


const projects = [
  {
    name: 'Study Tracker',
    description: 'Aplicação para controle de estudos com Vue, Pinia e Tailwind.',
    link: 'https://github.com/ThiagoButhilu/study-trecker',
    languages: ['Vue', 'Pinia', 'Tailwind'],
    image: studyTracker
  },
  {
    name: 'Landing Page Ótica',
    description: 'Landing Page para ótica fictícia usando React e Tailwind.',
    link: 'https://github.com/ThiagoButhilu/visual-landing-page',
    languages: ['React', 'Tailwind', 'JavaScript'],
    image: vistaClara
  },
  {
    name: 'E-commerce de doces',
    description: 'E-commerce de doceria usando Next.js e Tailwind.',
    link: 'https://thepolittis.com',
    languages: ['Next.js', 'Tailwind', 'TypeScript'],
    image: thePolittis
  }
]

const Project = () => {
  return (
    <section className="project-container" id="projects">
      {/* Header */}
      <header className="project-header">
        <h1>Meus projetos</h1>
        <p>Alguns projetos que desenvolvi recentemente</p>
      </header>

      {/* Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className='card-content'
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03 }}
          >
           
              
              {/* Image Header */}
              <div className="card-image">
                <img src={project.image} alt='' />
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-title">
                  <h2>{project.name}</h2>
                  <img src={githubIcon} alt="GitHub" />
                </div>

                <p className="card-description">
                  {project.description}
                </p>

                <div className="card-tags">
                  {project.languages.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Ver projeto →
                </a>
              </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
