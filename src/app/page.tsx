import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Realisations from './components/Realisations'
import About from './components/About'
import Footer from './components/Footer'

export const metadata = {
  title: "A'Decor | Peintre à Noyon - Travaux de rénovation",
  description: "A'Decor, artisan peintre à Noyon. Travaux de peinture intérieure, extérieure et rénovation. Devis gratuit et rapide.",
  alternates: {
    canonical: "https://adecor-renovation.fr/revetement-de-sols",
  },
}
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