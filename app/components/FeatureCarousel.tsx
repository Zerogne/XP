"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"


const features = [
  {
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements to create a solid foundation.",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Planning",
    description: "Detailed project planning with wireframes, user flows, and technical architecture to ensure smooth development.",
    icon: "📋",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Development",
    description: "Building your project with modern technologies, clean code, and best practices for optimal performance.",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Launch",
    description: "Thorough testing, deployment, and post-launch support to ensure your project succeeds in the real world.",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
  },
]

export default function FeatureCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Indices for the visible cards: [left, center-left, center-right, right]
  const [cardIndices, setCardIndices] = useState([
    features.length - 1,
    0,
    1,
    2
  ])

  // For each card, determine its relative position to the center (from -2 to 2)
  const getRelativePosition = (idx: number) => idx - 2

  // All cards have the same static properties
  const getCardStyle = (): React.CSSProperties => ({
    width: '100%',
    minWidth: 0,
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto',
    opacity: 1,
    zIndex: 1,
  })

  // Remove all animation and auto-sliding logic

  return (
    <motion.div
      ref={containerRef}
      className="py-10 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y: backgroundY }}>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Process
        </motion.h2>

        {/* Static 4-card carousel, all cards same size, no animation, no overlap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {cardIndices.map((featureIdx, idx) => (
            <div
              key={featureIdx + '-' + idx}
              className="h-[300px] sm:h-[350px] lg:h-[400px]"
            >
              <FeatureCard
                feature={features[featureIdx]}
                index={featureIdx}
                small={false}
                pos={"center"}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Update FeatureCard to accept a 'small' prop for scaling and 'pos' for fade effect
function FeatureCard({ feature, index, small, pos }: { feature: (typeof features)[0]; index: number; small?: boolean; pos?: string }) {
  // Animate opacity: 1 for center, 0.3 for side cards
  const contentOpacity = pos === 'center' ? 1 : 0.3;
  // Counteract card scale for text content
  const contentScale = pos === 'center' ? 1 : 1 / 0.8;
  return (
    <motion.div
      className={`w-full h-full p-4 sm:p-6 lg:p-8 bg-background rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden group border border-border/50 ${small ? 'scale-90 opacity-70 pointer-events-none' : ''}`}
      style={{ minWidth: 0, maxWidth: '100%' }}
      initial={{ opacity: 0, x: 300, rotateY: 45 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -300, rotateY: -45 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      whileHover={small ? {} : {
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 border-2 rounded-3xl pointer-events-none border-primary/20"
        animate={{
          boxShadow: [
            "0 0 0px hsl(var(--primary) / 0.1)",
            "0 0 20px hsl(var(--primary) / 0.2)",
            "0 0 0px hsl(var(--primary) / 0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Only fade and counter-scale the content, no entrance/exit/position animation on text */}
      <motion.div className="relative z-10 w-full" animate={{ opacity: contentOpacity }} transition={{ duration: 0.5, ease: 'linear' }} style={{ scale: contentScale, minWidth: 0, maxWidth: '100%' }}>
        <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 text-center">
          {feature.icon}
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-foreground text-center">
          {feature.title}
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed max-w-xs mx-auto">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  )
}
