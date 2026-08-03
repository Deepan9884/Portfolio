import React, { createContext, useContext, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

const CursorLightContext = createContext(null)

export function CursorLightProvider({ children }) {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const normalizedX = useMotionValue(0.5)
  const normalizedY = useMotionValue(0.5)

  // Smooth versions for floating background elements
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)

      if (typeof window !== 'undefined') {
        normalizedX.set(clientX / window.innerWidth)
        normalizedY.set(clientY / window.innerHeight)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, normalizedX, normalizedY])

  return (
    <CursorLightContext.Provider
      value={{
        mouseX,
        mouseY,
        smoothMouseX,
        smoothMouseY,
        normalizedX,
        normalizedY
      }}
    >
      {children}
    </CursorLightContext.Provider>
  )
}

export function useCursorLight() {
  return useContext(CursorLightContext)
}
