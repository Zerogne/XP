"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Instagram, Github } from "lucide-react"

const team = [
  {
    name: "Xuji",
    role: "Lead Developer",
    description: "Passionate about creating innovative digital solutions and helping businesses grow through technology.",
    image: "/placeholder-user.jpg",
    facebook: "https://www.facebook.com/Xuj11/",
    instagram: "https://instagram.com/zgrbayraa",
    github: "https://github.com/Zerogne",
  },
  {
    name: "Dnii",
    role: "UI/UX Designer",
    description: "Creating beautiful and intuitive user experiences that engage users and drive conversions.",
    image: "/placeholder-user.jpg",
    facebook: "https://www.facebook.com/dnii.dnii.0412",
    instagram: "https://www.instagram.com/dnii_d/",
    github: "https://github.com",
  },
]

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

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
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind XP who are dedicated to transforming how businesses connect with their customers through innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TeamCard({ member, index, variants }: { member: (typeof team)[0]; index: number; variants: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="bg-background rounded-3xl p-8 shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
      variants={variants}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 1 }}
      />

      <div className="relative z-10">
        {/* Profile Image */}
        <motion.div
          className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h3
          className="text-xl font-bold text-foreground text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {member.name}
        </motion.h3>

        {/* Role */}
        <motion.p
          className="text-primary font-semibold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {member.role}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-center mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {member.description}
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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