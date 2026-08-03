import React from 'react'
import MagneticCard from './MagneticCard'

function ExperienceSection() {
  return (
    <section className="py-16 sm:py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto relative z-20" id="experience">
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">ROLES & POSITIONS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
          CURRENT ROLES & <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">EXPERIENCE</span>
        </h2>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <MagneticCard className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex-1 h-full border border-white/10 hover:border-vibrant-yellow/40 transition-colors">
          <div className="specular-edge"></div>
          <div className="inner-glow"></div>
          <div className="absolute left-0 top-0 w-1 h-full liquid-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <h3 className="font-body-lg text-body-lg font-bold text-white">Fullstack Developer</h3>
            <p className="font-label-caps text-label-caps text-primary mt-1 mb-4">SRM Research Unit • June 2025 - Present</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Building scalable web applications, real-time research tools, and frontend/backend infrastructure for research projects.
            </p>
          </div>
        </MagneticCard>

        <MagneticCard className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex-1 h-full border border-white/10 hover:border-vibrant-yellow/40 transition-colors">
          <div className="specular-edge"></div>
          <div className="inner-glow"></div>
          <div className="absolute left-0 top-0 w-1 h-full liquid-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <h3 className="font-body-lg text-body-lg font-bold text-white">3rd Year B.Tech IT Student</h3>
            <p className="font-label-caps text-label-caps text-primary mt-1 mb-4">Easwari Engineering College • Sep 9, 2024 - Present</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Specializing in Information Technology, algorithms, modern web frameworks, and collaborative technical innovations.
            </p>
          </div>
        </MagneticCard>
      </div>
    </section>
  )
}

export default ExperienceSection
