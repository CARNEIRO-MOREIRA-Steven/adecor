import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'


const index = () => {
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./chambre1.png'
      title='Contact'
      className=''
      desciption='Contactez nous pour échanger sur votre projet' />
      <Footer />
    </section>
  )
}

export default index