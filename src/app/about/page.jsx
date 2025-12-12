import AboutStory from "@/components/AboutUs/AboutStory"
import CeoMessage from "@/components/AboutUs/CeoMessage"
import HeroEngineering from "@/components/AboutUs/Hero"
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs"

export const metadata = {
  title: 'About Us - Bharat Engrs',
  description: 'Learn about Bharat Engrs - Leading electrical engineering and panel manufacturing company.',
}

export default function AboutUsPage() {
  return (
    <main>
     <HeroEngineering />
     <AboutStory />
     <CeoMessage />
     <WhyChooseUs />
    </main>
  )
}

