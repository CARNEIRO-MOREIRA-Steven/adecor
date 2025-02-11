import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Realisations from './components/Realisations'
import About from './components/About'
import Footer from './components/Footer'

const page = () => {
  return (
    <section>
      <Header />
      <Banner />
      <Reviews />
      <Services />
      <Realisations />
      <About />
      <Footer />
    </section>
  )
}

export default page