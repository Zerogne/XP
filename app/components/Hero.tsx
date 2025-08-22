"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { useEffect, useState } from "react"

export default function Hero() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, -200])
  const y3 = useTransform(scrollY, [0, 300], [0, -150])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-background min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: y1 }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: y2 }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: y3 }}
      />

      {/* Interactive Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-y-12 lg:gap-x-16 lg:px-8">
        {/* Text Content */}
        <motion.div
          className="w-full max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            {t('hero.badge') || 'Creative Agency'}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gradient bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-xl leading-8 text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById('our-work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">{t('hero.exploreButton')}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61578833769304"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-4 text-foreground font-semibold hover:text-primary transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {t('hero.learnMore')}
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { number: "5", label: "Projects" },
              { number: "10", label: "Clients" },
              { number: "3", label: "Years" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

                {/* Interactive 3D Design Element */}
        <motion.div
          className="hidden lg:flex w-full justify-end mb-8 lg:mb-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl scale-110" />
            
            {/* Main 3D Container */}
            <motion.div
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* 3D Cube Structure */}
              <div className="relative w-64 h-64 mx-auto">
                {/* Main Cube */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-2xl border border-white/30"
                  animate={{
                    rotateX: [0, 10, 0],
                    rotateY: [0, 15, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ▶
                </motion.div>
                
                <motion.div
                  className="absolute top-8 right-6 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute top-16 left-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  animate={{
                    y: [0, 6, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✏️
                </motion.div>
                
                <motion.div
                  className="absolute top-20 right-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  T
                </motion.div>
                
                {/* Color Wheel */}
                <motion.div
                  className="absolute bottom-8 left-12 w-12 h-12 rounded-full overflow-hidden"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full bg-conic-gradient from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" />
                </motion.div>
                
                {/* Floating Cubes */}
                <motion.div
                  className="absolute bottom-16 right-8 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-sm"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-20 right-16 w-3 h-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-sm"
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Palette */}
                <motion.div
                  className="absolute bottom-6 right-4 w-8 h-6 bg-white/20 rounded-lg border border-white/30 flex gap-1 p-1"
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-2 h-4 bg-pink-400 rounded-sm" />
                  <div className="w-2 h-4 bg-yellow-400 rounded-sm" />
                  <div className="w-2 h-4 bg-green-400 rounded-sm" />
                </motion.div>
                
                {/* Bookmark Ribbon */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-lg"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Floating Elements Around Container */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
