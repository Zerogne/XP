"use client"

import { motion } from "framer-motion"
import { faq } from "@/lib/packages"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQSectionProps {
    language: 'mn' | 'en'
}

export default function FAQSection({ language }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <motion.section
            className="py-16 bg-secondary/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {language === 'mn' ? 'Түгээмэл асуултууд' : 'Frequently Asked Questions'}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {language === 'mn' ? 'Манай үйлчилгээний талаар асуудаг асуултууд' : 'Common questions about our services'}
                    </p>
                </div>

                <div className="space-y-3">
                    {faq.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`bg-card/90 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                ? 'border-primary/50 shadow-lg shadow-primary/10'
                                : 'border-border/20 hover:border-border/40'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <button
                                className={`w-full p-6 text-left flex items-center justify-between transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 group ${openIndex === index
                                    ? 'bg-primary/5'
                                    : 'hover:bg-accent/30'
                                    }`}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className={`text-lg font-semibold pr-4 transition-colors duration-300 ${openIndex === index
                                    ? 'text-primary'
                                    : 'text-foreground group-hover:text-primary/80'
                                    }`}>
                                    {language === 'mn' ? item.questionMn : item.questionEn}
                                </h3>
                                <motion.div
                                    className="flex-shrink-0 p-1 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${openIndex === index
                                        ? 'text-primary'
                                        : 'text-muted-foreground group-hover:text-primary/80'
                                        }`} />
                                </motion.div>
                            </button>

                            <motion.div
                                className="overflow-hidden"
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                    opacity: { duration: 0.2 }
                                }}
                            >
                                <motion.div
                                    className="px-6 pb-6"
                                    initial={false}
                                    animate={{
                                        y: openIndex === index ? 0 : -10,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: openIndex === index ? 0.1 : 0,
                                        ease: "easeOut"
                                    }}
                                >
                                    <p className="text-foreground/90 leading-relaxed">
                                        {language === 'mn' ? item.answerMn : item.answerEn}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
