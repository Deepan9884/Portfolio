import React from 'react'
import { motion } from 'framer-motion'
import MagneticCard from './MagneticCard'
import SlideUp from './SlideUp'

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: "code",
      title: "Fullstack Web Dev",
      description: "Building end-to-end applications with modern frontend & backend stacks"
    },
    {
      icon: "science",
      title: "SRM Research",
      description: "Architecting software tools & data pipelines for research innovation"
    },
    {
      icon: "emoji_events",
      title: "Hackathon Winning",
      description: "2x Hackathon winner accustomed to high-speed rapid prototyping"
    },
    {
      icon: "workspace_premium",
      title: "Marquee Batch 2028",
      description: "Selected into prestigious tech leadership and marquee cohort"
    },
    {
      icon: "speed",
      title: "Performance & UX",
      description: "Optimizing responsive UI/UX with smooth liquid glass aesthetics"
    },
    {
      icon: "school",
      title: "Academic Excellence",
      description: "3rd Year B.Tech IT Scholar at Easwari Engineering College"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto text-center" id="capabilities">
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">SKILLS & STRENGTHS</span>
        </div>
        <SlideUp>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
            WHAT I BRING <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">TO THE TABLE</span>
          </h2>
        </SlideUp>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto mb-16"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {capabilities.map((capability, idx) => (
          <motion.div 
            variants={itemVariants}
            key={idx}
          >
            <MagneticCard className="glass-panel p-8 rounded-2xl text-center group hover:border-vibrant-yellow/40 transition-colors h-full">
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-vibrant-yellow/20 flex items-center justify-center group-hover:bg-vibrant-yellow/30 transition-colors">
                <span className="material-symbols-outlined text-vibrant-yellow text-3xl">{capability.icon}</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-white mb-3">{capability.title}</h3>
              <p className="font-body-md text-on-surface-variant text-sm">{capability.description}</p>
            </div>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CapabilitiesSection
