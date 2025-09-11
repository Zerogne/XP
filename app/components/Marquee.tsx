"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  // The text to repeat
  const marqueeText = "Xperience — Your Digital Growth Partner."
  // Render two copies for seamless loop
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
        style={{ willChange: "transform" }}
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(156 163 175)",
                minWidth: '100vw',
                display: 'inline-block',
              }}
            >
              {marqueeText}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
