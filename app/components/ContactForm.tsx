"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function ContactForm() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61578833769304",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/xp.digital.dev/",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Gmail",
      url: "mailto:xpdigital.dev@gmail.com",
      icon: Mail,
      color: "from-red-500 to-red-600",
    },
    {
      name: "Phone",
      url: "tel:+976 80296007",
      icon: Phone,
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section id="contact1" className="contact1 mb-16 scroll-mt-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {socialLinks.map((social, index) => {
            const isLink = social.name === "Facebook" || social.name === "Instagram";
            const isEmail = social.name === "Gmail";
            const isPhone = social.name === "Phone";

            const content = (
              <div className="group relative bg-background rounded-xl p-4 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden cursor-pointer">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-4 h-4 text-white" style={{ minWidth: '16px', minHeight: '16px' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {social.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {social.name === "Phone" ? "+976 80296007" :
                        social.name === "Gmail" ? "xpdigital.dev@gmail.com" :
                          "Connect with us"}
                    </p>
                  </div>
                </div>
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
              </div>
            );

            if (isLink) {
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {content}
                </motion.a>
              );
            } else if (isEmail) {
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {content}
                </motion.a>
              );
            } else if (isPhone) {
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {content}
                </motion.a>
              );
            } else {
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            }
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            {t('contact.readyToStart')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
