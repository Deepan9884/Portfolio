import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-margin_mobile md:px-margin_desktop border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-3xl relative overflow-hidden">
      {/* Background Subtle Specular Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-vibrant-yellow/40 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="font-headline-md text-2xl font-black tracking-tighter text-vibrant-yellow bg-vibrant-yellow/10 px-3.5 py-1.5 rounded-xl inline-block mb-4 border border-vibrant-yellow/20 shadow-[0_0_15px_rgba(244,255,0,0.15)]">
              DEEPAN D®
            </div>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Fullstack Developer & 3rd Year B.Tech IT Student at Easwari Engineering College | SRM Research Unit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-label-caps text-xs text-white mb-4 tracking-wider uppercase font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-on-surface-variant hover:text-vibrant-yellow transition-colors text-sm">Home</a></li>
              <li><a href="#timeline" className="text-on-surface-variant hover:text-vibrant-yellow transition-colors text-sm">About & Journey</a></li>
              <li><a href="#projects" className="text-on-surface-variant hover:text-vibrant-yellow transition-colors text-sm">Projects</a></li>
              <li><a href="#capabilities" className="text-on-surface-variant hover:text-vibrant-yellow transition-colors text-sm">Skills</a></li>
              <li><a href="#contact" className="text-on-surface-variant hover:text-vibrant-yellow transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="font-label-caps text-xs text-white mb-4 tracking-wider uppercase font-bold">Specializations</h3>
            <ul className="space-y-2">
              <li className="text-on-surface-variant text-sm">Fullstack Web Development</li>
              <li className="text-on-surface-variant text-sm">SRM Research Engineering</li>
              <li className="text-on-surface-variant text-sm">Hackathon Innovation</li>
              <li className="text-on-surface-variant text-sm">Marquee Batch 2028 Cohort</li>
              <li className="text-on-surface-variant text-sm">React & Next.js Architecture</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-label-caps text-xs text-white mb-4 tracking-wider uppercase font-bold">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-vibrant-yellow/40 transition-all text-white text-sm">
                <span className="material-symbols-outlined text-base">code</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-vibrant-yellow/40 transition-all text-white text-sm font-bold">
                in
              </a>
            </div>
            <p className="text-on-surface-variant text-sm font-mono">
              deepan.d@easwari.ac.in
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-sm">
            © {currentYear} Deepan D. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
