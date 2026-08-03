import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load sequence
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const letters = ['D', 'E', 'E', 'P', 'A', 'N']

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center flex-col px-4"
        >
          {/* Glass Card Container */}
          <div className="glass-panel p-10 sm:p-14 rounded-3xl flex flex-col items-center justify-center border border-white/15 max-w-md w-full relative overflow-hidden">
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>

            {/* Glowing Liquid Sphere Effect in background */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-40 h-40 rounded-full bg-vibrant-yellow/15 blur-3xl pointer-events-none -z-10"
            />

            {/* Staggered Title */}
            <div className="flex items-center text-white font-headline-md text-4xl sm:text-5xl font-extrabold tracking-widest mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-vibrant-yellow ml-0.5"
              >
                .
              </motion.span>
            </div>

            {/* Glass Progress Bar */}
            <div className="w-56 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 backdrop-blur-md">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                className="h-full bg-vibrant-yellow rounded-full shadow-[0_0_15px_rgba(244,255,0,0.9)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4 }}
              className="mt-4 font-label-caps text-xs text-white/70 tracking-widest uppercase"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
