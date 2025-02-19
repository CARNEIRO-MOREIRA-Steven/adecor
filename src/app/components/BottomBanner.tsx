import React from 'react'
import './bottom_banner.css'

const BottomBanner = () => {
  return (
    <section className='bottom_banner'>
      <ul className='list_container'>
        <li><img src='award-solid.svg' alt='garantie decenale'></img> Garantie décénale</li>
        <li><img src='euro-sign-solid.svg' alt='devis gratuit'></img>Devis gratuit</li>
        <li><img src='file-signature-solid.svg' alt='gestion de projet'></img> Gestion de projet</li>
        <li><img src='helmet-safety-solid.svg' alt='ouvrier qualifié'></img> Ouvriers qualifié</li>
        </ul>
    </section>
  )
}

export default BottomBanner