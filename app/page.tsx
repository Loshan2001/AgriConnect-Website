'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Components from '@/components/Components'
import Research from '@/components/Research'
import Documents from '@/components/Documents'
import Milestones from '@/components/Milestones'
import Technology from '@/components/Technology'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Components />
      <Research />
      <Milestones />
      <Documents />
      <Technology />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
