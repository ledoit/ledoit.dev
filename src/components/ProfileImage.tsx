import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProfileImageProps {
  src?: string
  alt?: string
  fallbackText?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = 'Profile',
  fallbackText = 'PL',
  className = '',
  size = 'lg'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-3xl',
    lg: 'w-32 h-32 text-6xl',
    xl: 'w-40 h-40 text-7xl'
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (imageError || !src) {
    return (
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`${sizeClasses[size]} bg-gradient-to-br from-primary-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold ${className}`}
      >
        {fallbackText}
      </motion.div>
    )
  }

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={`${sizeClasses[size]} rounded-full mx-auto mb-6 overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold">
          {fallbackText}
        </div>
      )}
    </motion.div>
  )
}

export default ProfileImage
