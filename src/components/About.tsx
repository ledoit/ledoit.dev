import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users, Award } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, number: '25+', label: 'GitHub Repositories' },
    { icon: Users, number: '3+', label: 'Years Experience' },
    { icon: Award, number: '10+', label: 'Technologies Mastered' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating 
              robust, scalable applications. My expertise spans the entire development 
              stack, from crafting intuitive user interfaces to building powerful 
              backend systems and managing cloud infrastructure.
            </p>
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I thrive on solving complex problems and turning innovative ideas into 
              reality. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or mentoring fellow developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <stat.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 dark:text-dark-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
