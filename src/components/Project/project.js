import githubIcon from '../../assets/github-mark-white.svg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import studyTracker from '../../assets/studyTracker.png'
import thePolittis from '../../assets/thePolittis.png'
import vistaClara from '../../assets/vistaClara.png'
import studyTrackerCrud from '../../assets/studyTrackerCrud.png'

// imagens dos projetos

const Project = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.items.studyTracker.name'),
      description: t('projects.items.studyTracker.description'),
      link: 'https://github.com/ThiagoButhilu/study-trecker',
      languages: ['Vue', 'Pinia', 'Tailwind'],
      image: studyTracker
    },
    {
      name: t('projects.items.landingPage.name'),
      description: t('projects.items.landingPage.description'),
      link: 'https://github.com/ThiagoButhilu/visual-landing-page',
      languages: ['React', 'Tailwind', 'JavaScript'],
      image: vistaClara
    },
    {
      name: t('projects.items.ecommerce.name'),
      description: t('projects.items.ecommerce.description'),
      link: 'https://thepolittis.com',
      languages: ['Next.js', 'Tailwind', 'TypeScript'],
      image: thePolittis
    },
    {
      name: t('projects.items.crud.name'),
      description: t('projects.items.crud.description'),
      link: 'https://thepolittis.com',
      languages: ['Vue', 'Pinia', 'Tailwind', 'TypeScript'],
      image: studyTrackerCrud
    }
  ]
  return (
    <section className="project-container" id="projects">
      {/* Header */}
      <header className="project-header">
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.subtitle')}</p>
      </header>

      {/* Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className='project-card'
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Image Header */}
            <div className="card-image">
              <img src={project.image} alt={project.name} />
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
                {t('projects.viewProject')}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
