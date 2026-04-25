'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Components from '@/components/Components'
import Research from '@/components/Research'
import Image from 'next/image'
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
      <section style={{ background: '#fff', padding: '0 32px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Image
            src="/images/methodology.png"
            alt="Research methodology diagram"
            width={2816}
            height={1536}
            style={{ width: '100%', height: 'auto', borderRadius: 16 }}
            priority={false}
          />
        </div>
      </section>
      <Milestones />
      <Documents />
      <Technology />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
