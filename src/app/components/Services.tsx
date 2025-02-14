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
    <section className='container_services'>
        <h2 className='title_services'>Nos services</h2>
        <aside className='border_title'></aside>
        <h3 className='subtitle_services subtitle_services_1'>Confiez nous vos travaux de peinture et de decoration</h3>
        <h3 className='subtitle_services subtitle_services_2'>Nous vous proposons une gamme complète de services adaptés à vos besoins :</h3>
        <section className='services_cards'>
            <aside className='card card_1'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux de peinture intérieure</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>
                {isMobile ? 'Peinture intérieure' : 'Rénover mes peintures intérieures'}</a>
                </button>
                </div>
            </aside>
            <aside className='card card_2'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux d'isolation</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>                
                {isMobile ? 'Isolation' : 'Rénover mon isolation'}</a>
                </button>
                </div>
            </aside>
            <aside className='card card_3'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux de décoration</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>
                {isMobile ? 'Décoration' : 'Rénover ma décoration'}</a>
                
                </button>
                </div>
            </aside>
            <aside className='card card_4'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux de peinture extérieur</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>
                {isMobile ? 'Peinture extérieur' : 'Rénover mes peintures intérieures'}</a>
                </button>
                </div>
            </aside>
            <aside className='card card_5'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux de revetement de sols</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>Rénover mes sols</a></button>
                </div>
            </aside>
            <aside className='card card_6'>
                <div className='card_content'>
                <h4 className='card_title'>Travaux d'aménagement intérieur</h4>
                <button className='btn_card'><a className='link_card' href='./peinture-interieure'>
                {isMobile ? 'Aménagement' : 'Réagencer mon intérieur'}</a>
                </button>
                </div>
            </aside>
        </section>
    </section>
  )
}

export default Services