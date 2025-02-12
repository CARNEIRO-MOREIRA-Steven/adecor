import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className='container_services'>
        <h2 className='title_services'>Nos services</h2>
        <aside className='border_title'></aside>
        <h3 className='subtitle_services'>Nous vous proposons une gamme complète de services adaptés à vos besoins :</h3>
        <section className='services_cards'>
            <aside className='card card_1'>
                <h4 className='card_title'>Peinture intérieure</h4>
            </aside>
            <aside className='card card_2'>
                <h4 className='card_title'>Isolation</h4>
            </aside>
            <aside className='card card_3'>
                <h4 className='card_title'>Décoration</h4>
            </aside>
            <aside className='card card_4'>
                <h4 className='card_title'>Peinture extérieur</h4>
            </aside>
            <aside className='card card_5'>
                <h4 className='card_title'>Revetement de sols</h4>
            </aside>
            <aside className='card card_6'>
                <h4 className='card_title'>Aménagement intérieur</h4>
            </aside>
        </section>
    </section>
  )
}

export default Services