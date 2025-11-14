import { useState } from 'react'
import './App.css'
import Hero1 from './components/Hero1'
import Section from './components/Section'
import GallerySection from './components/GallerySection'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Hero1 />
         <Section />
         <GallerySection />
         <Testimonials />
         <CTA />
         <Footer />
    </>
  )
}

export default App;
