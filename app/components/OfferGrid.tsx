"use client"

import { motion } from "framer-motion"
import { packages, Offer } from "@/lib/packages"
import PriceCard from "./PriceCard"

interface OfferGridProps {
  language: 'mn' | 'en'
}

export default function OfferGrid({ language }: OfferGridProps) {
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
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {packages.map((offer, index) => (
        <motion.div
          key={offer.id}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
          className="h-full"
        >
          <PriceCard
            offer={offer}
            language={language}
            isPopular={offer.id === 'standard'}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
