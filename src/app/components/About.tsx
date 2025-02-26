import React from 'react'
import './about.css'
import InterventionZone from './InterventionZone'

const About = () => {
  return (
    <section className='container_about'>
        <h2 className='about_title'>Bienvenue chez <span>A’Decor</span></h2>
        <aside className='border_title_about'></aside>
        <section className='about_description_entreprise'>
        <section className='about_description_entreprise_content'>
        <h3 className='about_description_title'>Ou nous construisons votre vision</h3>
        <p className='about_description_text_entreprise'>Vous recherchez un professionnel de confiance pour transformer votre intérieur à Noyon et ses environs ? <br></br><br></br>
            Chez A’Decor, nous mettons notre expertise à votre service pour donner vie à vos projets d’aménagement et de décoration.</p>
        </section>
        <section>
        <section className='about_image'>
        <img className='image_about' src='toilette.webp' alt='image realisation toilette' loading='lazy'></img>
        <aside className='border_image_about'></aside>  
        </section> 
        </section>
        </section>
        <InterventionZone />
        <section className='about_content'>
        <section className='about_description_contact'>
            <p className='about_description_text'>
            Faites appel à nos services pour des résultats professionnels et durables, où que vous soyez dans la région.</p>
        </section>
        </section>
        <button type='submit' className='about_button'>Contactez nous dès aujourd’hui <br></br>
        06.56.77.27.92
        </button>
    </section>
  )
}

export default About