"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"


const features = [
  {
    title: "Minimal Design",
    description: "Clean aesthetics that put your content in the spotlight.",
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Responsive",
    description: "Flawless experiences across all devices and screen sizes.",
    icon: "📱",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fast Performance",
    description: "Lightning-quick load times for smooth user interactions.",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Accessibility",
    description: "Inclusive design practices for all users.",
    icon: "🌈",
    color: "from-green-500 to-emerald-500",
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
    width: 300,
    minWidth: 300,
    maxWidth: 300,
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
          Why Choose Us
        </motion.h2>

        {/* Static 4-card carousel, all cards same size, no animation, no overlap */}
        <div className="flex justify-center items-center gap-4 max-w-3xl mx-auto h-[400px] sm:h-[450px] px-2">
          {cardIndices.map((featureIdx, idx) => (
            <div
              key={featureIdx + '-' + idx}
              style={getCardStyle()}
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
      className={`absolute inset-0 w-full h-full p-8 bg-background rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden group border border-border/50 ${small ? 'scale-90 opacity-70 pointer-events-none' : ''}`}
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
        <div className="text-5xl mb-6 text-center">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-center leading-relaxed">
          {feature.description}
        </p>
      </motion.div>

      <motion.div
        className="mt-6 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a
          href="https://www.flowersandsaints.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center group font-medium"
          whileHover={small ? {} : { x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
