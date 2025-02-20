import React from 'react';
import './banner-prestations.css'
import BottomBanner from '../BottomBanner';

interface BannerPrestationProps {
  image: string;
  title: string; 
  desciption: string;
  className?: string;
}

const BannerPrestation : React.FC<BannerPrestationProps> = ( { title, image, desciption, className}) => {

  return (
    <section className='container_banner_prestation'>
       {/* <img alt={title} className='banner_image_prestation' src={image}></img> */}
        <section className= {`container_intro_banner_prestation ${className || ""}`}>
        <section className='intro_banner_prestation'>
            <h1 className='banner_title_prestation'>{title}</h1>
            <h2 className='banner_subtitle_prestation'>{desciption}</h2>
            <aside className='banner_cta_prestation'>
            <button type='submit' className='contact_button_prestation'><a href='/contact'>Contactez-nous</a></button>
            </aside>
        </section>
        </section>
        
    </section>
  )
}

export default BannerPrestation