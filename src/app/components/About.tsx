import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className='container_about'>
        <h2 className='about_title'>Bienvenue chez A’Decor</h2>
        <aside className='border_title_about'></aside>
        <section className='about_content'>
        <section className='about_description'>
            <h3 className='about_description_title'>Ou nous construisons votre vision</h3>
            <p className='about_description_text'>Vous recherchez un professionnel de confiance pour transformer votre intérieur à Noyon et ses environs ? <br></br><br></br>
            Chez A’Decor, nous mettons notre expertise à votre service pour donner vie à vos projets d’aménagement et de décoration.<br></br><br></br>
            Zone d’intervention : <br></br>
            Nous intervenons principalement à Noyon et dans les communes environnantes.<br></br><br></br>
            Faites appel à nos services pour des résultats professionnels et durables, où que vous soyez dans la région.</p>
        </section>
        <section className='about_image'>
        <img className='image_about' src='toilette.png' alt='image realisation toilette'></img>
        <aside className='border_image_about'></aside>   
        </section>
        </section>
        <button type='submit' className='about_button'>Contactez nous dès aujourd’hui <br></br>
        06.56.77.27.92
        </button>
    </section>
  )
}

export default About