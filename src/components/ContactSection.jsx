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
      <div className="max-w-2xl mx-auto w-full text-center mb-12">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-white mb-4">
          Let's Connect
        </h2>
        <p className="font-body-lg text-on-surface-variant">
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
          className="w-full py-4 rounded-xl bg-vibrant-yellow text-black font-label-caps text-xs font-black tracking-wider uppercase shadow-[0_0_25px_rgba(244,255,0,0.35)] hover:shadow-[0_0_40px_rgba(244,255,0,0.6)] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
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
        className="max-w-2xl mx-auto w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
      >
        <motion.div variants={itemVariants} className="h-full">
          <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-vibrant-yellow/40 transition-colors">
          <div className="specular-edge"></div>
          <div className="inner-glow"></div>
          <div className="relative">
            <span className="material-symbols-outlined text-vibrant-yellow text-3xl mb-3 block">mail</span>
            <div className="font-label-caps text-on-surface-variant mb-1 text-xs">Email</div>
            <div className="font-body-md text-white text-xs font-semibold">deepan.d@easwari.ac.in</div>
          </div>
          </MagneticCard>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-vibrant-yellow/40 transition-colors">
          <div className="specular-edge"></div>
          <div className="inner-glow"></div>
          <div className="relative">
            <span className="material-symbols-outlined text-vibrant-yellow text-3xl mb-3 block">school</span>
            <div className="font-label-caps text-on-surface-variant mb-1 text-xs">Institution</div>
            <div className="font-body-md text-white text-xs font-semibold">Easwari Engg College</div>
          </div>
          </MagneticCard>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <MagneticCard className="glass-panel p-6 rounded-2xl h-full border border-white/10 hover:border-vibrant-yellow/40 transition-colors">
          <div className="specular-edge"></div>
          <div className="inner-glow"></div>
          <div className="relative">
            <span className="material-symbols-outlined text-vibrant-yellow text-3xl mb-3 block">location_on</span>
            <div className="font-label-caps text-on-surface-variant mb-1 text-xs">Location</div>
            <div className="font-body-md text-white text-xs font-semibold">Chennai, Tamil Nadu, India</div>
          </div>
          </MagneticCard>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection
