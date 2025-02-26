import React from 'react'

const InterventionZone = () => {
  return (
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
        <aside><img alt='maps zone intervention' className='maps_zone' src='maps_zone.webp' loading='lazy'></img></aside>
        </section> 
        </section>
  )
}

export default InterventionZone