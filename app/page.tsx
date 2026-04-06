'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Components from '@/components/Components'
import Documents from '@/components/Documents'
import Technology from '@/components/Technology'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Components />
      <Documents />
      <Technology />
      <Team />
      <Footer />
    </main>
  )
}
