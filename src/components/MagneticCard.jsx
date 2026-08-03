import React, { useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function MagneticCard({ children, className }) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50, pixelX: 0, pixelY: 0 })

  // Tilt springs
  const x = useSpring(0, { stiffness: 250, damping: 20 })
  const y = useSpring(0, { stiffness: 250, damping: 20 })

  // Magnetic displacement springs (subtle pull toward cursor)
  const pullX = useSpring(0, { stiffness: 180, damping: 18 })
  const pullY = useSpring(0, { stiffness: 180, damping: 18 })

  const rotateX = useTransform(y, [-150, 150], [9, -9])
  const rotateY = useTransform(x, [-150, 150], [-9, 9])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setCursorPos({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
      pixelX: mouseX,
      pixelY: mouseY
    })

    const offsetX = mouseX - centerX
    const offsetY = mouseY - centerY

    x.set(offsetX)
    y.set(offsetY)

    // Magnetic pull distance (max 8px movement)
    pullX.set(offsetX * 0.08)
    pullY.set(offsetY * 0.08)
  }

  const handleMouseLeave = () => {
    setHover(false)
    x.set(0)
    y.set(0)
    pullX.set(0)
    pullY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hover ? rotateX : 0,
        rotateY: hover ? rotateY : 0,
        x: pullX,
        y: pullY,
        transformPerspective: 1200
      }}
      className={`relative overflow-hidden ${className || ''}`}
    >
      {/* Hydro-Refractive Specular Reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-400 z-10"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(450px circle at ${cursorPos.pixelX}px ${cursorPos.pixelY}px, rgba(255, 255, 255, 0.2), rgba(244, 255, 0, 0.1) 35%, transparent 70%)`
        }}
      />
      {children}
    </motion.div>
  )
}
