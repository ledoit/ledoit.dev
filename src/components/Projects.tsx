import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Laptop, Server, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.',
      image: <Laptop className="w-16 h-16 text-primary-600" />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      liveUrl: 'https://ledoit.dev',
      githubUrl: 'https://github.com/ledoit/ledoit.github.io'
    },
    {
      id: 2,
      title: 'Data Visualization Tool',
      description: 'Interactive dashboard for data analysis and visualization with real-time updates and custom chart components.',
      image: <Laptop className="w-16 h-16 text-primary-600" />,
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/ledoit'
    },
    {
      id: 3,
      title: 'Responsive Web Application',
      description: 'Mobile-first web application with progressive web app features, offline functionality, and push notifications.',
      image: <Smartphone className="w-16 h-16 text-primary-600" />,
      technologies: ['PWA', 'Service Workers', 'CSS Grid', 'Web APIs'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: 'https://github.com/ledoit'
    },
    {
      id: 4,
      title: 'RESTful API Backend',
      description: 'High-performance REST API with authentication, rate limiting, and comprehensive error handling.',
      image: <Server className="w-16 h-16 text-primary-600" />,
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
      category: 'api',
      liveUrl: '#',
      githubUrl: 'https://github.com/ledoit'
    }
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'api', label: 'APIs' }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-6 group"
              >
                <div className="flex items-center justify-center mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  {project.image}
                </div>

                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 py-2 px-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
