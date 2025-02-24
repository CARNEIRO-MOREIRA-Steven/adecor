import React from 'react'
import './prestation_realisation.css'

interface PrestationRealisationsProps {
    image : string,
    image2 :string,
    image3 : string,
    image4: string,
    className ? : string
}

const PrestationRealisations : React.FC<PrestationRealisationsProps> = ({image, image2, image3, image4, className}) => {
  return (
    <section className='realisations_container' id='realisations_carousel'>
        <img className='realisation_image'  src={image}></img>
        <img className='realisation_image' src={image2}></img>
        <img className='realisation_image' src={image3}></img>
        <img className={`realisation_image ${className || ""}`} src={image4}></img>
    </section>
  )
}

export default PrestationRealisations