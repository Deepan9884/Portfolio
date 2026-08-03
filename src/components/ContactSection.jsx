import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MagneticCard from './MagneticCard'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto" id="contact">
      <div className="max-w-6xl mx-auto w-full text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#ff1e4b]/15 border-2 border-[#ff1e4b]/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,30,75,0.4)] mb-8">
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff1e4b] animate-ping" />
          <span className="font-label-caps text-sm sm:text-base font-black tracking-[0.2em] text-[#ff1e4b] uppercase">GET IN TOUCH</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[96px] font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase drop-shadow-2xl py-2">
          LET'S <span className="liquid-text-gradient drop-shadow-[0_0_50px_rgba(255,30,75,0.7)]">CONNECT</span>
        </h2>
        <div className="h-2 w-44 bg-gradient-to-r from-transparent via-[#ff1e4b] to-transparent rounded-full shadow-[0_0_25px_rgba(255,30,75,0.8)] my-6 mx-auto"></div>
        <p className="font-body-lg text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          Have an exciting project, research opportunity, or hackathon collaboration? Drop me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-label-caps text-label-caps text-on-surface-variant mb-2 ml-1">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border-0 glass-input rounded-xl px-4 py-3.5 text-white placeholder-on-surface-variant/40 focus:ring-0 text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-label-caps text-label-caps text-on-surface-variant mb-2 ml-1">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full bg-transparent border-0 glass-input rounded-xl px-4 py-3.5 text-white placeholder-on-surface-variant/40 focus:ring-0 text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-label-caps text-label-caps text-on-surface-variant mb-2 ml-1">
            Message
          </label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your idea or project..."
            rows="4"
            className="w-full bg-transparent border-0 glass-input rounded-xl px-4 py-3.5 text-white placeholder-on-surface-variant/40 focus:ring-0 custom-scrollbar text-sm"
            required
          ></textarea>
        </div>

        <motion.button 
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl bg-vibrant-red text-white font-label-caps text-xs font-black tracking-wider uppercase shadow-[0_0_25px_rgba(255,30,75,0.4)] hover:shadow-[0_0_40px_rgba(255,30,75,0.7)] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
        >
          <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
          <span className="material-symbols-outlined">{submitted ? 'check' : 'send'}</span>
        </motion.button>
      </form>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
      >
        {/* Email Card */}
        <motion.div variants={itemVariants} className="h-full">
          <a href="mailto:deepan9210@gmail.com" className="block h-full">
            <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-[#ff1e4b]/60 transition-colors group">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative">
                <span className="material-symbols-outlined text-[#ff1e4b] text-3xl mb-3 block group-hover:scale-110 transition-transform">mail</span>
                <div className="font-label-caps text-white/60 mb-1 text-xs uppercase font-bold">Official Email</div>
                <div className="font-body-md text-white text-xs font-semibold break-all">deepan9210@gmail.com</div>
              </div>
            </MagneticCard>
          </a>
        </motion.div>

        {/* Phone Card */}
        <motion.div variants={itemVariants} className="h-full">
          <a href="tel:9884932408" className="block h-full">
            <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-[#ff1e4b]/60 transition-colors group">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative">
                <span className="material-symbols-outlined text-[#ff1e4b] text-3xl mb-3 block group-hover:scale-110 transition-transform">call</span>
                <div className="font-label-caps text-white/60 mb-1 text-xs uppercase font-bold">Phone Number</div>
                <div className="font-body-md text-white text-xs font-semibold">+91 9884932408</div>
              </div>
            </MagneticCard>
          </a>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div variants={itemVariants} className="h-full">
          <a href="https://www.linkedin.com/in/deepan-d-b00a5b327/" target="_blank" rel="noreferrer" className="block h-full">
            <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-[#ff1e4b]/60 transition-colors group">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative">
                <span className="material-symbols-outlined text-[#ff1e4b] text-3xl mb-3 block group-hover:scale-110 transition-transform">work</span>
                <div className="font-label-caps text-white/60 mb-1 text-xs uppercase font-bold">LinkedIn</div>
                <div className="font-body-md text-white text-xs font-semibold">deepan-d-b00a5b327</div>
              </div>
            </MagneticCard>
          </a>
        </motion.div>

        {/* GitHub Card */}
        <motion.div variants={itemVariants} className="h-full">
          <a href="https://github.com/Deepan9884" target="_blank" rel="noreferrer" className="block h-full">
            <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-[#ff1e4b]/60 transition-colors group">
              <div className="specular-edge"></div>
              <div className="inner-glow"></div>
              <div className="relative">
                <span className="material-symbols-outlined text-[#ff1e4b] text-3xl mb-3 block group-hover:scale-110 transition-transform">code</span>
                <div className="font-label-caps text-white/60 mb-1 text-xs uppercase font-bold">GitHub</div>
                <div className="font-body-md text-white text-xs font-semibold">Deepan9884</div>
              </div>
            </MagneticCard>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection
