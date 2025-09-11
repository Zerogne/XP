"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, Github, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const team = [
  {
    name: {
      en: "Danny",
      mn: "Дэнни"
    },
    role: {
      en: "Founder, Project Manager & Developer",
      mn: "Үүсгэн байгуулагч, Төслийн менежер & Хөгжүүлэгч"
    },
    description: {
      en: "Founder of Xperience, responsible for project management and development. Focuses on providing clients with the products and services they need, leading the team with vision and technical expertise.",
      mn: "Xperience-ийг үүсгэн байгуулж, төслийн менежмент болон хөгжүүлэлтийг хариуцдан ажилладаг. Үйлчлүүлэгчдэдээ хэрэгцээтэй бүтээгдэхүүн үйлчилгээгээр хангахад төвлөрөх ба багийг алсын харааг техникийн мэдлэгээр удирдан чиглүүлдэг."
    },
    image: "https://images8.alphacoders.com/483/483462.png",
    facebook: "https://www.facebook.com/dnii.dnii.0412",
    instagram: "https://www.instagram.com/dnii_d/",
    github: "https://github.com/dnii0412",
    portfolio: "https://dnii0412.github.io/danny-portfolio/",
  },
  {
    name: {
      en: "Bayarbayasgalan",
      mn: "Баярбаясгалан"
    },
    role: {
      en: "Lead Developer",
      mn: "Ахлах хөгжүүлэгч"
    },
    description: {
      en: "Senior Developer of the team. Writes complex code behind every website and plays a crucial role in delivering the final product to clients.",
      mn: "Багийн ахлах хөгжүүлэгч. Вебсайт болгоны ар дахь нарийн төвөгтэй кодуудыг бичиж, үйлчлүүлэгчдийн эцсийн бүтээгдэрүүнийг бэлэн болгон хүргэх чухал үүргийг гүйцэтгэнэ."
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb34N79_25Qvdze3AEKBpgrVV7zWyNLwr_Q&s",
    facebook: "https://www.facebook.com/Xuj11/",
    instagram: "https://instagram.com/zgrbayraa",
    github: "https://github.com/Zerogne",
  },
  {
    name: {
      en: "Batmandakh",
      mn: "Батмандах"
    },
    role: {
      en: "SMM Manager",
      mn: "Сошиал медиа маркетингийн менежер"
    },
    description: {
      en: "Works in product development and social media marketing. Focuses on creating content in social environments to increase user engagement and spread their influence in the business environment.",
      mn: "Бүтээгдэхүүний хөгжүүлэлт болон сошиал медиа маркетингийн чиглэлээр ажилладаг. Сошиал орчинд контент бүтээх замаар хэрэглэгчийн оролцоог нэмэгдүүлж, бизнесийн орчинд өөрсдийн нэр нөлөөгөө түгээхэд төвлөрч ажиллана."
    },
    image: "https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg",
    facebook: "https://www.facebook.com/batmandakh.batsukh.5",
    instagram: "https://www.instagram.com/bta1023/",
    github: null,
  },
  {
    name: {
      en: "Saran-Ochir",
      mn: "Саран-Очир"
    },
    role: {
      en: "Sales Manager, Product Service Manager",
      mn: "Борлуулалтын менежер, бүтээгдэхүүн үйлчилгээний мененжер"
    },
    description: {
      en: "Works as the business and product manager of Xperience. Responsible for introducing their products and services to organizations that come to collaborate, overseeing all stages of negotiations and sales contracts, which supports their future growth and development.",
      mn: "Xperience-ийн бизнесийн болон бүтээгдэхүүний менежерээр ажилладаг. Хамтран ажиллахаар зорин ирж буй байгууллагуудад өөрсдийн бүтээгдэхүүн үйлчилгээгээ танилцуулж, тохиролцооны болон борлуулалтын гэрээ байгуулах бүх үе шатыг хянан зохицуулах үүрэгтэй бөгөөд энэ нь өөрсдийн цаашдын өсөлт хөгжилтийг дэмжих юм."
    },
    image: "/saran-ochir-profile.jpg",
    facebook: "https://www.facebook.com/saran.ochir",
    instagram: "https://www.instagram.com/saagii_21",
    github: "https://github.com/SaagiiSG",
    portfolio: "https://saagii-21.vercel.app",
  },
]

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { t, language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="team" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 text-foreground mb-4">{t('aboutUs.title')}</h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <TeamCard key={member.name.en} member={member} index={index} variants={itemVariants} language={language} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TeamCard({ member, index, variants, language }: { member: (typeof team)[0]; index: number; variants: any; language: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
      variants={variants}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 1 }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Profile Image */}
        <motion.div
          className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-blue-500 to-purple-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src={member.image}
            alt={member.name[language as keyof typeof member.name]}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h3
          className="text-h5 text-foreground text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {member.name[language as keyof typeof member.name]}
        </motion.h3>

        {/* Role */}
        <motion.p
          className="text-primary font-semibold text-center mb-4 text-body-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {member.role[language as keyof typeof member.role]}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-body text-muted-foreground text-justify mb-6 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {member.description[language as keyof typeof member.description]}
        </motion.p>

        {/* Social Links - pushed to bottom */}
        <motion.div
          className="flex justify-center space-x-4 mt-auto pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {member.portfolio && (
            <motion.a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Portfolio"
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          )}
          <motion.a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          {member.github && (
            <motion.a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
        whileHover={{
          borderColor: "hsl(var(--primary) / 0.2)",
          boxShadow: "0 0 30px hsl(var(--primary) / 0.1)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
} 