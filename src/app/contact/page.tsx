import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import FormContact from '../components/FormContact'


const index = () => {
  return (
    <section className='contact_page' >
      <Header  />
      <BannerPrestation 
      image='./chambre1.png'
      title=''
      className='contact'
      desciption='Que vous ayez une idée précise en tête ou besoin de conseils, nous serions ravis de discuter de vos besoins.' />
      <aside className='border_title'></aside>
      <FormContact />
      <Footer />
    </section>
  )
}

export default index