import React from 'react'
import { motion, useTransform } from 'framer-motion'
import { useCursorLight } from './CursorLightProvider'

function HeroSection({ scrollY, heroScrollProgress }) {
  const { normalizedX, normalizedY } = useCursorLight() || {}

  // Hero photo & content opacity during sticky scroll section
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

  const traits = [
    { icon: 'code', text: 'Fullstack Dev' },
    { icon: 'science', text: 'SRM Research' },
    { icon: 'emoji_events', text: 'Hackathons' },
    { icon: 'workspace_premium', text: 'Marquee 2028' },
    { icon: 'school', text: 'IT Scholar' },
  ]

  return (
    <section className="h-full relative w-full overflow-hidden flex flex-col justify-between px-3 sm:px-8 lg:px-12 pt-3 pb-3 sm:pt-4 sm:pb-4">
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
        className="absolute top-[3%] sm:top-[4%] left-0 right-0 w-full flex justify-center items-center pointer-events-none z-10 px-4 pr-16 md:pr-4"
        style={{ opacity: heroContentOpacity }}
      >
        <div className="font-display-lg font-black tracking-tighter text-vibrant-yellow leading-none whitespace-nowrap text-[12vw] sm:text-[14vw] lg:text-[16vw] flex items-center">
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
          className="h-[70vh] sm:h-[82vh] md:h-[94vh] lg:h-[106vh] max-h-[1350px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]" 
          src="/deepan_portrait_nobg.png"
          style={{
            opacity: photoOpacity,
            scale: photoScale,
            willChange: "opacity, transform",
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 98%)'
          }}
          onError={(e) => {
            e.target.src = '/deepan_portrait.jpeg'
          }}
        />
      </motion.div>

      {/* 2. Bottom Main Layout Grid (z-30: In front of portrait image waist) */}
      <motion.div 
        className="relative z-30 w-full max-w-[1440px] mx-auto mt-auto pt-4 sm:pt-8 bg-gradient-to-t from-background/95 via-background/60 to-transparent lg:bg-none pb-2 sm:pb-0"
        style={{ opacity: heroContentOpacity }}
      >
        
        {/* Main 3-Column Overlay Row: Left Content, Open Center for Portrait, Right Traits */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end pb-3 sm:pb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 5.2, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* LEFT COLUMN (lg:col-span-5): Main Headline, CTAs, and Stacked Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="font-headline-md text-3xl sm:text-5xl lg:text-[62px] xl:text-7xl font-extrabold text-white leading-[1.08] sm:leading-[1.05] tracking-tight mb-3 sm:mb-5 drop-shadow-2xl">
              Fullstack,<br/>
              Applied<br/>
              Differently.
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href="#contact"
                className="liquid-glass-btn px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-label-caps text-xs tracking-wider shadow-lg"
              >
                Let's Connect
              </a>
              <a
                href="#timeline"
                className="liquid-glass-btn px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-label-caps text-xs tracking-wider shadow-lg"
              >
                My Journey
              </a>
            </div>

            {/* Quick Stats Badges tucked neatly on the left */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl glass-panel bg-white/5 border border-white/10 backdrop-blur-2xl hover:border-vibrant-yellow/40 transition-colors flex-shrink-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-vibrant-yellow font-display-lg text-base sm:text-lg font-black">2x</span>
                <span className="font-label-caps text-[9px] font-bold text-white tracking-wider uppercase whitespace-nowrap">Hackathon Winner</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl glass-panel bg-white/5 border border-white/10 backdrop-blur-2xl hover:border-vibrant-yellow/40 transition-colors flex-shrink-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.3 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-vibrant-yellow font-display-lg text-sm sm:text-base font-black whitespace-nowrap">3rd Yr</span>
                <span className="font-label-caps text-[9px] font-bold text-white tracking-wider uppercase leading-tight whitespace-nowrap">B.Tech IT Easwari</span>
              </motion.div>
            </div>
          </div>

          {/* CENTER COLUMN (lg:col-span-4): Clean open space reserved for Deepan's Portrait */}
          <div className="hidden lg:block lg:col-span-4 pointer-events-none min-h-[50px]"></div>

          {/* RIGHT COLUMN (lg:col-span-3): Desktop Feature Traits Panel */}
          <div className="hidden lg:flex lg:col-span-3 justify-end">
            <div className="glass-panel p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl w-full max-w-[220px] flex flex-col gap-3.5">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              {traits.map((trait, idx) => (
                <motion.div 
                  key={idx}
                  className="relative flex items-center gap-3 text-white font-label-caps text-xs font-bold tracking-wider"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + (idx * 0.08), ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <span className="material-symbols-outlined text-vibrant-yellow text-lg">{trait.icon}</span>
                  <span>{trait.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MOBILE ONLY: Compact Horizontal Traits Pills (< lg) */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full max-w-full flex-wrap">
            {traits.map((trait, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full glass-panel bg-white/5 border border-white/10 backdrop-blur-xl text-white font-label-caps text-[9px] font-bold tracking-wider"
              >
                <span className="material-symbols-outlined text-vibrant-yellow text-xs">{trait.icon}</span>
                <span>{trait.text}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Bottom Corner Info Text Bar (Desktop & Tablets) */}
        <motion.div 
          className="hidden sm:flex flex-col sm:flex-row justify-between items-start sm:items-end pt-3 sm:pt-5 border-t border-white/10 text-xs text-on-surface-variant gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.5 }}
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
