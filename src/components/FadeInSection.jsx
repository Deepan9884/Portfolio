import React from 'react'
import { motion } from 'framer-motion'

export default function FadeInSection({ children, direction = 'up', delay = 0, className = '' }) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -40, y: 0 }
      case 'right':
        return { x: 40, y: 0 }
      case 'down':
        return { x: 0, y: -40 }
      case 'none':
        return { x: 0, y: 0 }
      case 'up':
      default:
        return { x: 0, y: 35 }
    }
  }

  const initialPos = getInitialPosition()

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPos, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}
