"use client"

import { motion } from "framer-motion"
import { Offer } from "@/lib/packages"
import FeatureList from "./FeatureList"
import { ArrowRight, Calendar } from "lucide-react"
import CalendlyButton from "@/components/CalendlyButton"
import * as LucideIcons from "lucide-react"

interface PriceCardProps {
  offer: Offer
  language: 'mn' | 'en'
  isPopular?: boolean
}

const tierColors = {
  essential: {
    gradient: "from-sky-500 to-blue-500",
    bgGradient: "from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20",
    borderColor: "border-sky-200/50 dark:border-sky-800/50",
    hoverBorder: "hover:border-sky-300/70 dark:hover:border-sky-700/70"
  },
  standard: {
    gradient: "from-violet-500 to-indigo-500",
    bgGradient: "from-violet-50 to-indigo-50 dark:from-violet-950/20 dark:to-indigo-950/20",
    borderColor: "border-violet-200/50 dark:border-violet-800/50",
    hoverBorder: "hover:border-violet-300/70 dark:hover:border-violet-700/70"
  },
  premium: {
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    borderColor: "border-amber-200/50 dark:border-amber-800/50",
    hoverBorder: "hover:border-amber-300/70 dark:hover:border-amber-700/70"
  }
}

export default function PriceCard({ offer, language, isPopular = false }: PriceCardProps) {
  const colors = tierColors[offer.id]
  const IconComponent = (LucideIcons as any)[offer.icon] || LucideIcons.Globe

  return (
    <motion.div
      className={`relative bg-card/90 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 group overflow-hidden h-full flex flex-col ${isPopular
        ? `border-primary/50 ring-2 ring-primary/20 shadow-lg`
        : `${colors.borderColor}`
        }`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient} opacity-30`} />


      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${colors.gradient} text-white mb-4 shadow-lg`}>
            <IconComponent className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">
            {language === 'mn' ? offer.nameMn : offer.nameEn}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 font-medium">
            {language === 'mn' ? offer.taglineMn : offer.taglineEn}
          </p>

          {offer.priceNoteMn && (
            <div className="text-xs text-muted-foreground mb-2">
              {language === 'mn' ? offer.priceNoteMn : offer.priceNoteEn}
            </div>
          )}
        </div>

        {/* Impact Paragraph */}
        <div className="mb-6 flex-grow">
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {language === 'mn' ? offer.impactMn : offer.impactEn}
          </p>

          <div className="text-xs text-muted-foreground mb-4">
            <strong>{language === 'mn' ? 'Зориулалт:' : 'Ideal for:'}</strong> {language === 'mn' ? offer.idealForMn : offer.idealForEn}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <FeatureList features={offer.features} tier={offer.id} language={language} />
        </div>

        {/* Details Row */}
        <div className="mb-6 p-4 bg-secondary/40 rounded-lg space-y-3">
          <div className="flex justify-between items-center text-xs py-2 border-b border-border/20">
            <span className="text-muted-foreground font-medium">{language === 'mn' ? 'Гүйцэтгэх хугацаа:' : 'Delivery:'}</span>
            <span className="text-foreground font-medium text-right">{language === 'mn' ? offer.deliveryMn : offer.deliveryEn}</span>
          </div>
          <div className="flex justify-between items-center text-xs py-2 border-b border-border/20">
            <span className="text-muted-foreground font-medium">{language === 'mn' ? 'Админ хандалт:' : 'Admin Access:'}</span>
            <span className="text-foreground font-medium text-right">{language === 'mn' ? offer.adminAccessMn : offer.adminAccessEn}</span>
          </div>
          <div className="flex justify-between items-center text-xs py-2 border-b border-border/20">
            <span className="text-muted-foreground font-medium">{language === 'mn' ? 'Яаралтай:' : 'Rush:'}</span>
            <span className="text-foreground font-medium text-right">{language === 'mn' ? offer.rushMn : offer.rushEn}</span>
          </div>
          <div className="flex justify-between items-center text-xs py-2">
            <span className="text-muted-foreground font-medium">{language === 'mn' ? 'Арчилгаа:' : 'Maintenance:'}</span>
            <span className="text-foreground font-medium text-right">{language === 'mn' ? offer.maintenanceMn : offer.maintenanceEn}</span>
          </div>
        </div>

        {/* CTA Button */}
        <CalendlyButton
          label={language === 'mn' ? 'Захиалах' : 'Book a call'}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${colors.gradient} flex items-center justify-center gap-2`}
        />
      </div>
    </motion.div>
  )
}
