"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue, useScroll, useTransform, useInView } from "framer-motion"
import { useIsMobile } from "../../hooks/use-mobile"

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
  {
    title: "SEO Optimized",
    description: "Built to help your site rank higher in search results.",
    icon: "🔍",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
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

        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()

  // Determine animation direction based on device
  const initialAnim = isMobile
    ? { opacity: 0, x: 100 }
    : { opacity: 0, y: 50, rotateY: -15 }
  const animateAnim = isMobile
    ? { opacity: 1, x: 0 }
    : { opacity: 1, y: 0, rotateY: 0 }

  return (
    <motion.div
      ref={cardRef}
      className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden group"
      initial={initialAnim}
      animate={animateAnim}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={
        isMobile
          ? undefined
          : {
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border animation */}
      <motion.div
        className="absolute inset-0 border-2 rounded-3xl pointer-events-none"
        animate={
          isHovered
            ? {
                borderColor: "hsl(var(--primary))",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              }
            : {
                borderColor: "rgba(0,0,0,0)",
                boxShadow: "0 0 0px hsl(var(--primary) / 0)",
              }
        }
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-4xl mb-4"
          animate={
            isHovered
              ? {
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                }
              : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.5 }}
        >
          {feature.icon}
        </motion.div>

        <motion.h3
          className="text-xl font-semibold mb-2 text-foreground"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-muted-foreground"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {feature.description}
        </motion.p>
      </div>

      <motion.div
        className="mt-4 relative z-10"
        animate={isHovered ? { y: -5 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href="https://www.flowersandsaints.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center group"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <motion.span className="ml-1" animate={isHovered ? { x: 5 } : { x: 0 }} transition={{ duration: 0.3 }}>
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
