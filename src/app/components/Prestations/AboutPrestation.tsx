import React from 'react'
import './about-prestation.css'

interface PrestationsProps {
    title: string;
    description: string;
  }

const AboutPrestation : React.FC<PrestationsProps> = ( { title , description}) => {
  return (
    <section className='about_prestation_container'>
        <section className='about_prestation_description'>
            <h4>{title}</h4>
            <aside dangerouslySetInnerHTML={ {__html :description}} />
        </section>
        {/* <img className='about_prestation_image' src={image} alt={title}></img> */}
    </section>
  )
}

export default AboutPrestation