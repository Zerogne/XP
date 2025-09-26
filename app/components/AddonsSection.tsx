"use client"

import { motion } from "framer-motion"
import { addons } from "@/lib/packages"
import { Rocket, Calendar, ArrowRight } from "lucide-react"
import CalendlyButton from "@/components/CalendlyButton"
import * as LucideIcons from "lucide-react"

interface AddonsSectionProps {
    language: 'mn' | 'en'
}

export default function AddonsSection({ language }: AddonsSectionProps) {
    return (
        <motion.section
            className="py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {language === 'mn' ? 'Нэмэлт үйлчилгээ' : 'Additional Services'}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {language === 'mn' ? 'Багцаа нэмэлт боломжуудаар өргөжүүлээрэй' : 'Enhance your package with additional features'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {addons.map((addon, index) => {
                        const IconComponent = (LucideIcons as any)[addon.icon] || LucideIcons.Rocket

                        return (
                            <motion.div
                                key={addon.id}
                                className="relative bg-gradient-to-b from-pink-50/90 to-purple-50/70 dark:from-pink-950/20 dark:to-purple-950/20 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-200/50 dark:border-pink-800/50 hover:border-pink-300/70 dark:hover:border-pink-700/70 transition-all duration-300 hover:shadow-lg group overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                viewport={{ once: true }}
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

                                <div className="relative p-8">
                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-8 h-8" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                                {language === 'mn' ? addon.nameMn : addon.nameEn}
                                            </h3>
                                            <p className="text-foreground/90 leading-relaxed mb-4">
                                                {language === 'mn' ? addon.descriptionMn : addon.descriptionEn}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <CalendlyButton
                                        label={language === 'mn' ? 'Захиалах' : 'Book a call'}
                                        className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    )
}
