import React, { useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function HoverGlowCard({ children, className }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0, relX: 50, relY: 50 })
  const [opacity, setOpacity] = useState(0)

  const x = useSpring(0, { stiffness: 220, damping: 22 })
  const y = useSpring(0, { stiffness: 220, damping: 22 })

  const rotateX = useTransform(y, [-200, 200], [8, -8])
  const rotateY = useTransform(x, [-200, 200], [-8, 8])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const posX = e.clientX - rect.left
    const posY = e.clientY - rect.top
    const relX = (posX / rect.width) * 100
    const relY = (posY / rect.height) * 100

    setPosition({ x: posX, y: posY, relX, relY })

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    x.set(posX - centerX)
    y.set(posY - centerY)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: opacity ? rotateX : 0,
        rotateY: opacity ? rotateY : 0,
        transformPerspective: 1200
      }}
      className={`relative overflow-hidden ${className || ''}`}
    >
      {/* Dynamic Hydro-Refractive Specular Light Sweep - Layer 1 (Lightning Violet Hot Spot) */}
      <div
        className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.25), rgba(157, 0, 255, 0.2) 35%, transparent 65%)`
        }}
      />

      {/* Hydro-Refractive Specular Light Sweep - Layer 2 (Electric Red Chromatic Aberration Rim) */}
      <div
        className="pointer-events-none absolute inset-0 z-40 transition-opacity duration-500"
        style={{
          opacity: opacity * 0.85,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, transparent 35%, rgba(255, 30, 75, 0.15) 55%, rgba(157, 0, 255, 0.18) 70%, transparent 85%)`
        }}
      />

      {children}
    </motion.div>
  )
}
