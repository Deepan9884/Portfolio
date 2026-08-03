import React from 'react'
import MagneticCard from './MagneticCard'

function ExperienceSection() {
  return (
    <section className="py-16 sm:py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto relative z-20" id="experience">
      <div className="mb-12">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Current Roles & Experience</h2>
        <div className="w-12 h-1 liquid-gradient rounded-full"></div>
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
