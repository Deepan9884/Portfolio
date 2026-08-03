import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isTextHover, setIsTextHover] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [particles, setParticles] = useState([])

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Multi-tier spring physics for fluid trailing lag effect
  // Tier 1: Core dot (ultra precise)
  const dotX = useSpring(mouseX, { damping: 35, stiffness: 600 })
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 600 })

  // Tier 2: Outer liquid ring (fluid lag)
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 180 })
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 180 })

  // Tier 3: Glass halo aura (slowest fluid trail)
  const haloX = useSpring(mouseX, { damping: 16, stiffness: 90 })
  const haloY = useSpring(mouseY, { damping: 16, stiffness: 90 })

  const particleIdRef = useRef(0)
  const lastEmitRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)

      // Emit trailing particles periodically
      const now = Date.now()
      if (now - lastEmitRef.current > 35) {
        lastEmitRef.current = now
        const id = particleIdRef.current++
        const color = id % 2 === 0 ? 'rgba(255, 30, 75, 0.7)' : 'rgba(157, 0, 255, 0.7)'
        setParticles((prev) => [
          ...prev.slice(-14), // max 14 particles
          { id, x: clientX, y: clientY, size: Math.random() * 5 + 3, color }
        ])
      }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (!target) return

      const tagName = target.tagName.toLowerCase()
      const isInteractive =
        tagName === 'a' ||
        tagName === 'button' ||
        tagName === 'input' ||
        tagName === 'textarea' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'

      const isText =
        ['h1', 'h2', 'h3', 'h4', 'p', 'span'].includes(tagName) &&
        !isInteractive &&
        target.textContent?.trim().length > 0

      setIsPointer(isInteractive)
      setIsTextHover(isText)
    }

    const handleMouseDown = () => setIsMouseDown(true)
    const handleMouseUp = () => setIsMouseDown(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    setIsVisible(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  // Cleanup old particles
  useEffect(() => {
    if (particles.length === 0) return
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1))
    }, 450)
    return () => clearTimeout(timer)
  }, [particles])

  // Don't render custom cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Trailing Red & Lightning Violet Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed top-0 left-0 rounded-full blur-[1px] pointer-events-none"
          style={{
            x: p.x,
            y: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            translateX: '-50%',
            translateY: '-50%'
          }}
        />
      ))}

      {/* 2. Tier 3: Outer Glass Halo Aura */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full border border-lightning-violet/40 backdrop-blur-[6px] bg-white/[0.02] shadow-[0_0_25px_rgba(157,0,255,0.25)] pointer-events-none"
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isMouseDown ? 0.8 : isPointer ? 1.6 : isTextHover ? 1.4 : 1,
          borderColor: isPointer
            ? 'rgba(255, 30, 75, 0.8)'
            : 'rgba(157, 0, 255, 0.4)'
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* 3. Tier 2: Liquid Accent Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-vibrant-red/80 rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,30,75,0.4)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isMouseDown ? 0.6 : isPointer ? 1.4 : isTextHover ? 1.2 : 1,
          backgroundColor: isPointer
            ? 'rgba(157, 0, 255, 0.25)'
            : isTextHover
            ? 'rgba(255, 30, 75, 0.15)'
            : 'rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* 4. Tier 1: Core Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-vibrant-red rounded-full pointer-events-none shadow-[0_0_12px_#ff1e4b]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isMouseDown ? 1.8 : isPointer ? 0.4 : 1
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}
