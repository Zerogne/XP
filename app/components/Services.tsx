"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Smartphone, Globe, Search, Zap } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    titleKey: "webDevelopment.title",
    descriptionKey: "webDevelopment.description",
    featuresKey: "webDevelopment.features",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    titleKey: "mobileApps.title",
    descriptionKey: "mobileApps.description",
    featuresKey: "mobileApps.features",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    titleKey: "uiuxDesign.title",
    descriptionKey: "uiuxDesign.description",
    featuresKey: "uiuxDesign.features",
    color: "from-orange-500 to-red-500",
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t } = useLanguage()

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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, variants }: { service: (typeof services)[0]; index: number; variants: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const { t } = useLanguage()

  return (
    <motion.div
      ref={cardRef}
      className="bg-background rounded-3xl p-8 shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      {/* Subtle gradient background - only on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="text-primary">
            {service.icon}
          </div>
        </div>
        
        <motion.h3
          className="text-xl font-semibold text-foreground mb-3"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t(`services.${service.titleKey}`)}
        </motion.h3>
        
        <motion.p
          className="text-muted-foreground mb-6 leading-relaxed"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t(`services.${service.descriptionKey}`)}
        </motion.p>
        
        <motion.ul
          className="space-y-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {(() => {
            const features = t(`services.${service.featuresKey}`)
            if (Array.isArray(features)) {
              return features.map((feature: string, featureIndex: number) => (
                <motion.li
                  key={featureIndex}
                  className="flex items-center text-sm text-muted-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {feature}
                </motion.li>
              ))
            }
            return null
          })()}
        </motion.ul>
      </div>
    </motion.div>
  )
}
