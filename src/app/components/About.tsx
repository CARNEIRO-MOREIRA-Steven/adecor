import React from 'react'
import './about.css'

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
        <img className='image_about' src='toilette.webp' alt='image realisation toilette'></img>
        <aside className='border_image_about'></aside>  
        </section> 
        </section>
        </section>
        <section className='about_description_zone'>
        <h3 className='about_description_title'>Zone d’intervention</h3>
        <aside className='border_title_about'></aside>
        <section className='about_zone_details'>
        <aside className='about_zone_details_texte'>
        <h3 className='about_description_title_zone'>
           Nous intervenons principalement à Noyon et dans un rayon de 40 km aux alentours.
        </h3>
        <p className='about_description_text_zone'>
          Cela inclut notamment les villes de : </p>
          <ul>
          <li>Compiègne</li> <li>Chauny</li><li> Ham</li> <li> Soissons</li> <li> Roye </li> <li> Ressons-sur-Matz </li>
          </ul>
        </aside>
        <aside><img alt='maps zone intervention' className='maps_zone' src='maps_zone.png'></img></aside>
        </section> 
        </section>
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