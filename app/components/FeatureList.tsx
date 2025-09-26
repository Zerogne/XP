"use client"

import { Check } from "lucide-react"
import { Feature } from "@/lib/packages"

interface FeatureListProps {
  features: Feature[]
  tier: 'essential' | 'standard' | 'premium'
  language: 'mn' | 'en'
}

const tierColors = {
  essential: "from-sky-500 to-blue-500",
  standard: "from-violet-500 to-indigo-500",
  premium: "from-amber-500 to-orange-500"
}

export default function FeatureList({ features, tier, language }: FeatureListProps) {
  const tierFeatures = features.filter(f => f.tier === tier)

  return (
    <ul className="space-y-3">
      {tierFeatures.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${tierColors[tier]} flex items-center justify-center mt-0.5`}>
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-foreground/90 leading-relaxed">
            {language === 'mn' ? feature.labelMn : feature.labelEn}
          </span>
        </li>
      ))}
    </ul>
  )
}
