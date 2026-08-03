import React from 'react'
import { motion } from 'framer-motion'

export default function SlideUp({ children, className = '', delay = 0 }) {
  return (
    <div className={`overflow-visible py-2 ${className}`}>
      <motion.div
        initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
