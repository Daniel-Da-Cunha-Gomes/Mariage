import { Header } from "@/components/Component/header"
import { Hero } from "@/components/Component/hero"
import { OurStory } from "@/components/Component/our-story"
import { WeddingDetails } from "@/components/Component/wedding-details"
import { Countdown } from "@/components/Component/countdown"
import { Gallery } from "@/components/Component/gallery"
import { RSVP } from "@/components/Component/rsvp"
import { PracticalInfo } from "@/components/Component/practical-info"
import { GiftRegistry } from "@/components/Component/gift-registry"
import { Footer } from "@/components/Component/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Countdown />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <RSVP />
      <PracticalInfo />
      <GiftRegistry />
      <Footer />
    </div>
  )
}
