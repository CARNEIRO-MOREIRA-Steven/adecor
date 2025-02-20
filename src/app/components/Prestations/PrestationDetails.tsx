import React from 'react'
import './prestation-details.css'

interface PrestationDetailsProps {
    image : string;
    title : string;
    subtitle : string;
    description: string[];
    className?: string;
}

const PrestationDetails : React.FC<PrestationDetailsProps> = ( {title,subtitle, image, description, className}) => {
  return (
    <section>
    <section className={`prestation-container ${className || ""}`}>
        <img className='prestation-image' src={image}></img>
        <section className='prestation-details'>
            <h4 className='prestation-title'>{title}</h4>
            <h5 className='prestation-subtitle'>{subtitle}</h5>
            <aside>
                <ul className='prestation-list'>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li> // Affichage de chaque élément de la liste
                    ))}
                </ul>
            </aside>
        </section>
    </section>
    </section>
  )
}

export default PrestationDetails