import React from 'react'
import './realisations.css'

const Realisations = () => {
  return (
    <section className='container_realisations'>
        <h2 className='realisations_title'>Nos dernières réalisations</h2>
        <aside className='border_title_realisation'></aside>
        <section className='container_image_realisation'>
        <img className='image_realisation' src="devant_maison.png" alt="" />
        <img className='image_realisation' src="chambre1.png" alt="" />
        <img className='image_realisation' src="chambre2.png" alt="" />
        </section>
    </section>
  )
}

export default Realisations