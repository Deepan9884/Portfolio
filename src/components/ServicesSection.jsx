import React from 'react'
import { motion } from 'framer-motion'
import MagneticCard from './MagneticCard'

function ServicesSection() {
  const services = [
    {
      name: "Starter",
      price: "$5,000",
      period: "one-time",
      description: "Perfect for small projects and MVPs",
      features: [
        "Single page website",
        "Responsive design",
        "Basic animations",
        "Contact form",
        "SEO optimization",
        "1 month support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "one-time",
      description: "For serious businesses ready to scale",
      features: [
        "Multi-page website",
        "Custom WebGL elements",
        "Advanced animations",
        "CMS integration",
        "Performance optimization",
        "3 months support",
        "Analytics setup",
        "Custom features"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Tailored solutions for complex needs",
      features: [
        "Everything in Professional",
        "Full WebGL experience",
        "Custom backend",
        "API integrations",
        "Design system",
        "6+ months support",
        "Team training",
        "Priority updates"
      ],
      highlighted: false
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
    <section className="min-h-screen flex flex-col justify-center py-12 px-margin_mobile md:px-margin_desktop max-w-[1440px] mx-auto" id="services">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <motion.div 
            variants={itemVariants}
            key={idx}
            className="h-full"
          >
            <MagneticCard className={`glass-panel rounded-2xl p-8 relative overflow-hidden group h-full ${
              service.highlighted ? 'border-2 border-vibrant-yellow/50' : ''
            }`}>
            <div className="specular-edge"></div>
            <div className="inner-glow"></div>
            {service.highlighted && (
              <div className="absolute top-4 right-4 bg-vibrant-yellow text-black text-xs font-label-caps px-3 py-1 rounded-full">
                POPULAR
              </div>
            )}
            <div className="relative">
              <h3 className="font-headline-md text-2xl font-bold text-white mb-2">{service.name}</h3>
              <div className="mb-4">
                <span className="font-display-lg text-[48px] font-bold text-vibrant-yellow">{service.price}</span>
                <span className="font-body-md text-on-surface-variant ml-2">/ {service.period}</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-vibrant-yellow text-sm mt-0.5 flex-shrink-0">check_circle</span>
                    <span className="font-body-md text-on-surface text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-label-caps text-label-caps font-bold transition-all duration-300 ${
                service.highlighted 
                  ? 'bg-vibrant-yellow text-black hover:shadow-[0_0_20px_rgba(244,255,0,0.4)]' 
                  : 'bg-white/5 text-white border border-white/20 hover:bg-white/10'
              }`}>
                Get Started
              </button>
            </div>
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ServicesSection
