"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { ArrowRight, Calendar } from "lucide-react"
import CalendlyButton from "@/components/CalendlyButton"
import ButtonCard from "@/components/ui/ButtonCard"
import * as LucideIcons from "lucide-react"

interface PackagesPreviewProps {
    locale?: 'mn' | 'en'
    onViewAll?: () => void
    href?: string
}

interface PackagePreview {
    id: 'essential' | 'standard' | 'premium' | 'social-media'
    nameMn: string
    nameEn: string
    audienceMn: string
    audienceEn: string
    icon: string
    gradient: string
    borderColor: string
    isRecommended?: boolean
}

const packagePreviews: PackagePreview[] = [
    {
        id: 'essential',
        nameMn: 'Essential Package',
        nameEn: 'Essential Package',
        audienceMn: '• Интенрэт дээрх байр суурь\n• Шинэ үйлчлүүлэгдийг татах\n• Хэрэглэгчиддээ Итгэлзэл төрүүлэх\n• Бүтээгдэхүүн үйлчилгээний мэдээлэл нэг дор',
        audienceEn: '• Online presence\n• Attract new customers\n• Build trust with clients\n• All product & service info in one place',
        icon: 'Globe',
        gradient: 'from-sky-400 to-blue-500',
        borderColor: 'border-sky-200/50 dark:border-sky-800/50'
    },
    {
        id: 'standard',
        nameMn: 'Standard Package',
        nameEn: 'Standard Package',
        audienceMn: '• Бизнессдээ хөрөнгө оруулах цогц шийдлүүд\n• Вебсайтаа хүссэнэээрэе удирдах\n• Шинэ захиалагч татах\n• Түншүүдтэй холбогдох\n• Итгэлзэл төрүүлэх',
        audienceEn: '• Comprehensive investment solutions for your business\n• Manage your website as you wish\n• Attract new clients\n• Connect with partners\n• Build trust',
        icon: 'Palette',
        gradient: 'from-violet-400 to-indigo-500',
        borderColor: 'border-violet-200/50 dark:border-violet-800/50',
        isRecommended: true
    },
    {
        id: 'premium',
        nameMn: 'Premium Package',
        nameEn: 'Premium Package',
        audienceMn: '• Цаг хэмнэж, ашигтай ажиллах ухаалаг шийдэл\n• Автоматжуулсан борлуулалтын урсгал\n• Бизнессээ онлайн хэлбэрт явуулж, үйл ажиллагаагаа өргөжүүлэн, шинэ боломжуудыг нээх\n• Том брэндийн хэмжээнд харагдах байдал\n• Цогц дижитал экосистем',
        audienceEn: '• Time-saving, profitable smart solutions\n• Automated sales flow\n• Run your business online, expand operations, and open new opportunities\n• Large brand-level appearance\n• Comprehensive digital ecosystem',
        icon: 'Crown',
        gradient: 'from-amber-400 to-orange-500',
        borderColor: 'border-amber-200/50 dark:border-amber-800/50'
    },
    {
        id: 'social-media',
        nameMn: 'Social Media',
        nameEn: 'Social Media',
        audienceMn: 'Брэндээ сошиал орчинд таниулж, шинэ хэрэглэгчдийг татах мэргэжлийн рийл, постер дизайн.',
        audienceEn: 'Introduce your brand in social environment and attract new users with professional reel and poster design.',
        icon: 'Rocket',
        gradient: 'from-fuchsia-400 to-pink-500',
        borderColor: 'border-fuchsia-200/50 dark:border-fuchsia-800/50'
    }
]

export default function PackagesPreview({ locale, onViewAll, href = "/offers" }: PackagesPreviewProps) {
    const { language } = useLanguage()
    const currentLocale = locale || language

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
        <section className="py-24 bg-gradient-to-b from-blue-50/30 via-white to-white dark:from-blue-950/20 dark:via-background dark:to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                        <span>{currentLocale === 'mn' ? 'Бидний танд хүргэх үнэ цэнэ' : 'Our Value for You'}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-8 tracking-wide">
                        {currentLocale === 'mn' ? 'Бидний саналууд' : 'Our Offers'}
                    </h2>
                </motion.div>

                {/* Packages Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {packagePreviews.map((pkg, index) => {
                        const IconComponent = (LucideIcons as any)[pkg.icon] || LucideIcons.Globe

                        return (
                            <motion.div
                                key={pkg.id}
                                variants={itemVariants}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative rounded-3xl border-2 shadow-lg transition-all duration-300 bg-gradient-to-b from-white/80 to-white/60 dark:from-white/15 dark:to-white/8 backdrop-blur-sm ${pkg.borderColor} hover:shadow-2xl hover:-translate-y-2 hover:scale-105`}
                                data-testid={`package-card-${pkg.id}`}
                                role="button"
                                tabIndex={0}
                                aria-label={`${currentLocale === 'mn' ? pkg.nameMn : pkg.nameEn} - ${currentLocale === 'mn' ? pkg.audienceMn : pkg.audienceEn}`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        window.location.href = href
                                    }
                                }}
                                onClick={() => {
                                    if (onViewAll) {
                                        onViewAll()
                                    } else {
                                        window.location.href = href
                                    }
                                }}
                            >

                                <div className="p-8 h-full flex flex-col min-h-[340px]">
                                    {/* Icon Badge */}
                                    <div className={`size-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} grid place-items-center shadow-inner mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-${pkg.gradient.split('-')[1]}-500/30`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-medium text-foreground mb-4 text-center">
                                        {currentLocale === 'mn' ? pkg.nameMn : pkg.nameEn}
                                    </h3>

                                    {/* Audience */}
                                    <div className="text-xs text-muted-foreground leading-normal mb-6 flex-grow text-left">
                                        {(currentLocale === 'mn' ? pkg.audienceMn : pkg.audienceEn).split('\n').map((line, index) => (
                                            <div key={index} className="mb-1">
                                                {line}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* CTA Row */}
                <motion.div
                    className="flex flex-col items-center justify-center mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.a
                            href={href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group text-sm shadow-md"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                                if (onViewAll) {
                                    e.preventDefault()
                                    onViewAll()
                                }
                            }}
                        >
                            <span>{currentLocale === 'mn' ? 'Бүх саналуудыг үзэх' : 'View All Offers'}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>

                        <ButtonCard
                            icon={<Calendar className="w-4 h-4 text-gray-600" />}
                            text={currentLocale === 'mn' ? 'Зөвлөхтэй холбогдох' : 'Book a Call'}
                            onClick={() => window.open('https://calendly.com/saranochir-s/30min?hide_gdpr_banner=1', '_blank')}
                            className="px-8 py-3"
                        />
                    </div>
                    <p className="text-sm mt-4 text-muted-foreground text-center max-w-md leading-relaxed">
                        {currentLocale === 'mn'
                            ? 'Бүх багц, нэмэлт үйлчилгээ болон үнэгүй саналуудыг дэлгэрэнгүй үзэж, зөвлөхтэй цаг товлон холбогдсоноор захиалга өгөх боломжтой.'
                            : 'See all packages, add‑ons, and free offers in detail, and book a consultation to place your order.'
                        }
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
