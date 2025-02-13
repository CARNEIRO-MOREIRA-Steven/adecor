import React from 'react';
import './banner-prestations.css'
import BottomBanner from '../BottomBanner';

const BannerPrestation = () => {

  return (
    <section className='container_banner_prestation'>
        <img alt='image banner' className='banner_image_prestation' src='banner_image.jpg'></img>
        <section className='container_intro_banner_prestation'>
        <section className='intro_banner_prestation'>
            <h1 className='banner_title_prestation'>Peinture intérieur</h1>
            <h2 className='banner_subtitle_prestation'>Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.</h2>
            <aside className='banner_cta_prestation'>
            <button type='submit' className='contact_button_prestation'>Nous contacter</button>
            </aside>
        </section>
            <BottomBanner />
        </section>
        
    </section>
  )
}

export default BannerPrestation