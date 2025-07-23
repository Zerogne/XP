"use client"
import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import Services from "./components/Services"
import React, { useContext } from "react"
import { LanguageContext } from "../components/LanguageProvider"

export default function Home() {
  const { language } = useContext(LanguageContext)
  return (
    <>
      <Hero  />
      <WearYourStory  />
      <Services />
      <FeatureCarousel />
      <PortfolioGrid />
      <Marquee />
      <ContactForm />
    </>
  )
}
