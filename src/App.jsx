import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import FixedMorphingNavbar from './components/FixedMorphingNavbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import TimelineSection from './components/TimelineSection'
import ProjectsSection from './components/ProjectsSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FadeInSection from './components/FadeInSection'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import { CursorLightProvider } from './components/CursorLightProvider'

function App() {
  const { scrollY, scrollYProgress } = useScroll()
  
  // Single perfectly-tuned spring for silky smooth scrolling across all components
  const smoothScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, mass: 0.5 })
  
  // Target ref for sticky hero scroll section
  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Phase 1: Complete navbar formation in the first 35% of sticky scroll distance with ZERO lag
  // This guarantees navbar is 100% formed BEFORE any vertical scrolling/page transition begins
  const rawNavProgress = useTransform(heroScrollProgress, [0, 0.35], [0, 1])
  const navProgress = useSpring(rawNavProgress, { stiffness: 300, damping: 30 })

  const mainPaddingLeft = useTransform(navProgress, [0, 1], ["0px", "310px"])

  return (
    <CursorLightProvider>
      <div className="font-body-md text-body-md bg-background antialiased relative overflow-x-clip cursor-none select-none">
        <Preloader />
        
        {/* Optimized GPU Grain Overlay */}
        <div className="fixed inset-0 grain-overlay z-[9997] pointer-events-none"></div>
        
        {/* Multi-layered Liquid Glass Cursor */}
        <CustomCursor />
        
        {/* Scroll Progress Indicator with Glass Glow */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-vibrant-yellow origin-left z-[100] shadow-[0_0_12px_#f4ff00]"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Background Texture */}
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-screen opacity-40" 
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLvX0NNd1h7hBkQAHJgA1lfEPBXcPlOYg9ZeT8kW_J9RU2nbWpxJ55u0c9PA4Fkxwxkc6Zr_ykPKwRYLJrLMVmtuRYSwK0jKXG0NzJsqxy2WuOU6kbhgp4l1UX2eLy5rZSRTamTllpORwS8uGY3LLFnAPNV6rXV2AJMxYHp8VK5_M8YLCEkydBbo8KcmwS9j0VpnrehMUf6919oWM_LFqSd5aTLx-ujV3JvLAKYVvJTqwg58tn7ly-CO4Q')"
            }}
          ></div>
        </div>

        <FixedMorphingNavbar scrollY={smoothScrollY} progress={navProgress} />

        <motion.div 
          className="min-h-screen"
          style={{ paddingLeft: mainPaddingLeft }}
        >
          {/* Main Content Area */}
          <main className="w-full mx-auto relative">
            {/* Sticky Pinned Hero Section (220vh):
                Phase 1 (0 -> 0.35): Hero stays pinned at top while navbar forms 100% with NO vertical scroll.
                Phase 2 (0.35 -> 0.70): Navbar stays locked in sidebar. Hero remains pinned.
                Phase 3 (0.70 -> 1.00): Hero content fades out as Experience section scrolls up cleanly into view. */}
            <div ref={heroRef} className="relative h-[220vh]" id="home">
              <div className="sticky top-0 h-screen w-full overflow-hidden">
                <HeroSection scrollY={smoothScrollY} heroScrollProgress={heroScrollProgress} />
              </div>
            </div>
            
            <FadeInSection direction="up">
              <ExperienceSection />
            </FadeInSection>

            <FadeInSection direction="none">
              <TimelineSection />
            </FadeInSection>
            
            <FadeInSection direction="up">
              <ProjectsSection />
            </FadeInSection>
            
            <FadeInSection direction="left">
              <CapabilitiesSection />
            </FadeInSection>
            
            <FadeInSection direction="right">
              <ServicesSection />
            </FadeInSection>
            
            <FadeInSection direction="up">
              <FAQSection />
            </FadeInSection>
            
            <FadeInSection direction="up">
              <CTASection />
            </FadeInSection>
            
            <FadeInSection direction="up">
              <ContactSection />
            </FadeInSection>

            <FadeInSection direction="none">
              <Footer />
            </FadeInSection>
            
          </main>
        </motion.div>
      </div>
    </CursorLightProvider>
  )
}

export default App
