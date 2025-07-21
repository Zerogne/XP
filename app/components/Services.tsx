"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Smartphone, Globe, Search, Zap } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern Stack"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "E-commerce",
    description: "Complete e-commerce solutions with payment integration, inventory management, and analytics.",
    features: ["Payment Gateway", "Inventory System", "Analytics", "Admin Dashboard"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Search engine optimization and digital marketing strategies to grow your online presence.",
    features: ["Keyword Research", "Content Strategy", "Link Building", "Analytics"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience with advanced optimization techniques.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Setup"],
    color: "from-indigo-500 to-purple-500",
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development services to help your business succeed in the digital world.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, variants }: { service: (typeof services)[0]; index: number; variants: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="bg-background rounded-3xl p-8 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
      variants={variants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 0.3 }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-xl font-semibold text-foreground mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-muted-foreground mb-6 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.description}
        </motion.p>

        {/* Features */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="https://www.flowersandsaints.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
        whileHover={{
          borderColor: "hsl(var(--primary) / 0.2)",
          boxShadow: "0 0 30px hsl(var(--primary) / 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
