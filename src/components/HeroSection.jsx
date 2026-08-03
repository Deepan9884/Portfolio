import React from 'react'
import { motion, useTransform } from 'framer-motion'
import { useCursorLight } from './CursorLightProvider'

function HeroSection({ scrollY, heroScrollProgress }) {
  const { normalizedX, normalizedY } = useCursorLight() || {}

  // Hero photo & content opacity during sticky scroll section
  // Phase 1 & Phase 2 (0 -> 0.55): Hero content remains 100% visible and static.
  // Phase 3 (0.55 -> 0.85): Hero content completely fades out BEFORE sticky pin releases.
  const photoOpacity = useTransform(
    heroScrollProgress || scrollY,
    heroScrollProgress ? [0.6, 0.85] : [0, 300],
    [1, 0]
  )
  const photoScale = useTransform(
    heroScrollProgress || scrollY,
    heroScrollProgress ? [0.6, 0.85] : [0, 300],
    [1, 0.94]
  )

  const heroContentOpacity = useTransform(
    heroScrollProgress || scrollY,
    heroScrollProgress ? [0.5, 0.78] : [0, 250],
    [1, 0]
  )

  // Cursor Parallax displacement for central portrait image
  const photoParallaxX = useTransform(normalizedX || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [-20, 20])
  const photoParallaxY = useTransform(normalizedY || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [-10, 10])

  // Parallax floating glass orbs
  const orb1X = useTransform(normalizedX || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [-40, 40])
  const orb1Y = useTransform(normalizedY || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [-30, 30])

  const orb2X = useTransform(normalizedX || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [30, -30])
  const orb2Y = useTransform(normalizedY || useTransform(scrollY || heroScrollProgress, [0, 1], [0.5, 0.5]), [0, 1], [40, -40])

  return (
    <section className="h-full relative w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 lg:px-12 pt-4 pb-4">
      {/* Floating Liquid Ambient Orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y, opacity: heroContentOpacity }}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-vibrant-yellow/10 blur-[90px] pointer-events-none z-0"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y, opacity: heroContentOpacity }}
        className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-[110px] pointer-events-none z-0"
      />

      {/* 0. Giant Background Logo: DEEPAN. (z-10: Perfectly centered behind portrait photo z-20) */}
      <motion.div
        className="absolute top-[4%] left-0 right-0 w-full flex justify-center items-center pointer-events-none z-10"
        style={{ opacity: heroContentOpacity }}
      >
        <div className="font-display-lg font-black tracking-tighter text-vibrant-yellow leading-none whitespace-nowrap text-[16vw] flex items-center">
          {['D', 'E', 'E', 'P', 'A', 'N'].map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ x: 180, opacity: 0, filter: 'blur(16px)' }}
              animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 1.5,
                delay: 2.1 + idx * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.4, ease: "backOut" }}
            className="text-white"
          >
            .
          </motion.span>
        </div>
      </motion.div>

      {/* 1. Central Portrait Image (z-20: In front of giant DEEPAN logo z-10) with Cursor Parallax */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 top-0 flex justify-center items-end pointer-events-none z-20 overflow-visible"
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: photoParallaxX, y: photoParallaxY }}
      >
        <motion.img 
          alt="Deepan D Portrait" 
          className="h-[80vh] md:h-[95vh] lg:h-[110vh] max-h-[1400px] w-auto max-w-none object-contain object-bottom drop-shadow-2xl" 
          src="/deepan_portrait_nobg.png"
          style={{
            opacity: photoOpacity,
            scale: photoScale,
            willChange: "opacity, transform",
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)'
          }}
          onError={(e) => {
            e.target.src = '/deepan_portrait.jpeg'
          }}
        />
      </motion.div>

      {/* 2. Bottom Main Layout Grid (z-30: In front of portrait image waist) */}
      <motion.div 
        className="relative z-30 w-full max-w-[1400px] mx-auto mt-auto pt-8"
        style={{ opacity: heroContentOpacity }}
      >
        
        {/* Main 3-Column Overlay Row */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 5.2, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* LEFT COLUMN: Stacked Stats Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4 w-full max-w-[240px] mx-auto lg:mx-0">
            <motion.div
              className="flex flex-col items-center justify-center p-4 rounded-2xl glass-panel bg-white/5 border border-white/10 backdrop-blur-2xl w-[140px] hover:border-vibrant-yellow/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 5.2 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="text-vibrant-yellow font-display-lg text-2xl font-black mb-1">2x</div>
              <div className="font-label-caps text-[10px] text-center font-bold text-white tracking-wider">Hackathon Winner</div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center p-4 rounded-2xl glass-panel bg-white/5 border border-white/10 backdrop-blur-2xl w-[150px] hover:border-vibrant-yellow/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 5.5 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="text-vibrant-yellow font-display-lg text-3xl sm:text-4xl font-black mb-1 leading-none">3rd Yr</div>
              <div className="font-label-caps text-[10px] text-center font-bold leading-tight text-white tracking-wider">B.Tech IT<br/>Easwari</div>
            </motion.div>
          </div>

          {/* CENTER COLUMN: Main Headline & Compact Buttons */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-2">
            <h1 className="font-headline-md text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-5 drop-shadow-2xl">
              Fullstack,<br/>
              Applied<br/>
              Differently.
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <a
                href="#contact"
                className="liquid-glass-btn px-6 py-3 rounded-full font-label-caps text-xs tracking-wider shadow-lg"
              >
                Let's Connect
              </a>
              <a
                href="#timeline"
                className="liquid-glass-btn px-6 py-3 rounded-full font-label-caps text-xs tracking-wider shadow-lg"
              >
                My Journey
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Feature Traits Panel */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl w-full max-w-[220px] flex flex-col gap-3.5">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              {[
                { icon: 'code', text: 'Fullstack Dev' },
                { icon: 'science', text: 'SRM Research' },
                { icon: 'emoji_events', text: 'Hackathons' },
                { icon: 'workspace_premium', text: 'Marquee 2028' },
                { icon: 'school', text: 'IT Scholar' },
              ].map((trait, idx) => (
                <motion.div 
                  key={idx}
                  className="relative flex items-center gap-3 text-white font-label-caps text-xs font-bold tracking-wider"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 5.8 + (idx * 0.15), ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <span className="material-symbols-outlined text-vibrant-yellow text-lg">{trait.icon}</span>
                  <span>{trait.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Bottom Corner Info Text Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end pt-5 border-t border-white/10 text-xs text-on-surface-variant gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 6.5 }}
        >
          <div className="font-body-md leading-snug">
            Fullstack Developer & Researcher.<br/>
            That's Deepan D.
          </div>
          <div className="max-w-xs text-left sm:text-right font-body-md leading-relaxed min-h-[48px]">
            3rd Year B.Tech IT Student at Easwari Engg College & Fullstack Developer at SRM Research Unit.
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
