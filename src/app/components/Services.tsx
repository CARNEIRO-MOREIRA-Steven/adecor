"use client"
import React, { useState, useEffect } from 'react'
import './services.css'

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <section className='container_services' id='services'>
        <h2 className='title_services'>Nos services</h2>
        <aside className='border_title'></aside>
        <h3 className='subtitle_services subtitle_services_1'>Confiez nous vos travaux d'isolation et de peinture</h3>
        <h3 className='subtitle_services subtitle_services_2'>Nous vous proposons une gamme complète de services adaptés à vos besoins :</h3>
        <section className='services_cards'>
            <aside className='card card_1'>
                <div className='card_content'>
                <h4 className='card_title'>Peinture intérieure</h4>
                <a className='link_card' href='./peinture-interieure'>
                {isMobile ? 'Peinture intérieure' : 'Rénover mes peintures intérieures'}</a>
                </div>
            </aside>
            <aside className='card card_2'>
                <div className='card_content'>
                <h4 className='card_title'>Aménagement et Isolation</h4>
                <a className='link_card' href='./isolation'>                
                {isMobile ? 'Isolation' : 'Rénover mon isolation'}</a>
                </div>
            </aside>
            <aside className='card card_3'>
                <div className='card_content'>
                <h4 className='card_title'>Peinture extérieure</h4>
                <a className='link_card' href='./peinture-exterieure'>
                {isMobile ? 'Peinture extérieure' : 'Rénover mes peintures extérieures'}</a>
                </div>
            </aside>
            <aside className='card card_4'>
                <div className='card_content'>
                <h4 className='card_title'>Revetement de sols</h4>
                <a className='link_card' href='./revetement-de-sols'>Rénover mes sols</a>
                </div>
            </aside>
        </section>
    </section>
  )
}

export default Services