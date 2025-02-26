import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import FormContact from '../components/FormContact'


const index = () => {
  return (
    <section >
      <Header  />
      <BannerPrestation 
      image='./chambre1.png'
      title=''
      className='contact'
      desciption='Que vous ayez une idée précise en tête ou besoin de conseils, nous serions ravis de discuter de vos besoins.' />
      <FormContact />
      <Footer />
    </section>
  )
}

export default index