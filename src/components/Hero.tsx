import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import ProfileImage from './ProfileImage'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    'Full-Stack Developer',
    'React Specialist',
    'Problem Solver',
    'Tech Enthusiast',
    'Code Craftsman'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 overflow-hidden"
        >
          <ProfileImage
            src="/side.jpg"
            alt="Background Profile 1"
            fallbackText=""
            size="lg"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-20 overflow-hidden"
        >
          <ProfileImage
            src="/3q.jpg"
            alt="Background Profile 2"
            fallbackText=""
            size="md"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-dark-900 dark:text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Phil Ledoit</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-subtitle text-primary-600 dark:text-primary-400 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-body text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Full-stack developer specializing in React, Node.js, and cloud technologies. 
              Building scalable applications and solving complex problems with elegant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download="Phil_Ledoit_Resume.pdf"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ledoit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-dark-700 dark:text-white hover:text-primary-600"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/ledoit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-dark-700 dark:text-white hover:text-primary-600"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:phil@menhir-holdings.com"
                className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-dark-700 dark:text-white hover:text-primary-600"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="card p-8 max-w-md w-full"
            >
              <div className="text-center">
        <ProfileImage
          src="/cool.jpg"
          alt="Phil Ledoit - Main Profile"
          fallbackText="PL"
          size="lg"
        />
                
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                  Phil Ledoit
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 mb-4">
                  Full-Stack Developer
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">25+</div>
                    <div className="text-sm text-dark-600 dark:text-dark-300">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                    <div className="text-sm text-dark-600 dark:text-dark-300">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                    <div className="text-sm text-dark-600 dark:text-dark-300">Technologies</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronDown className="text-dark-700 dark:text-white" size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
