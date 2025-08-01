"use client"
import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import FloatingActionButton from "./components/FloatingActionButton"
import Marquee from "./components/Marquee"

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <Services />
      <AboutUs />
      <FeatureCarousel />
      <PortfolioGrid />
      <Marquee />
      <ContactForm />
      <FloatingActionButton />
    </>
  )
}
