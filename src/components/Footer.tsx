import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ledoit',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ledoit',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:phil@menhir-holdings.com',
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Phil Ledoit
            </h3>
            <p className="text-dark-300 mb-4">
              Full-Stack Developer crafting modern web experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-full transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right text-dark-300"
          >
            <p className="flex items-center justify-center md:justify-end">
              © {currentYear} Phil Ledoit. All rights reserved.
            </p>
            <p className="flex items-center justify-center md:justify-end mt-2 text-sm">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> and modern web technologies
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-dark-800 text-center text-dark-400"
        >
          <p>
            Ready to build something amazing together? Let's connect!
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
