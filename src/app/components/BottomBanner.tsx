import React from 'react'
import './bottom_banner.css'

const BottomBanner = () => {
  return (
    <section className='bottom_banner'>
      <ul className='list_container'>
        <li><img src='award-solid.svg' alt='icon garantie decenale'></img> Garantie décénnale</li>
        <li><img src='euro-sign-solid.svg' alt='icon euro devis gratuit'></img>Devis gratuit</li>
        <li><img src='file-signature-solid.svg' alt='icon gestion de projet'></img> Gestion de projet</li>
        <li><img src='helmet-safety-solid.svg' alt='icon ouvrier qualifié'></img> Ouvriers qualifiés</li>
        </ul>
    </section>
  )
}

export default BottomBanner