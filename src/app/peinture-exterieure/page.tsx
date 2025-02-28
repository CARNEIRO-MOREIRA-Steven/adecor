import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'
import PrestationDetails from '../components/Prestations/PrestationDetails'

const index = () => {

  return (
    <section className='peinture_interieur_container'>
      <Header />
      <BannerPrestation 
      image='./garde_corps_avant.webp'
      title='Peinture extérieure'
      className='special'
      desciption='Apportez une nouvelle vie à votre maison grâce à des peintures extérieures de haute qualité.' />
      <AboutPrestation
        image = 'garde_corps_après.webp'
        title='A’DECOR, spécialiste en Peinture extérieure basé à Noyon, dans l’Oise'
        description="<p>Nous vous proposons des solutions de peinture extérieure pour protéger vos façades tout en améliorant l'apparence de votre maison.
        Nous utilisons des peintures spécifiques résistantes aux intempéries pour garantir une longue durée de vie à vos surfaces extérieures.</p>
        <p>Notre service comprend la préparation minutieuse des surfaces, l'application de peintures de qualité, et des finitions impeccables pour garantir
        une protection et une esthétique optimales.</p>
        <p>Améliorez l’apparence de votre maison tout en la protégeant des agressions extérieures grâce à nos prestations de peinture extérieure.</p>"
      />
       <PrestationDetails
        image='./devant_maison_salle.webp'
        className='special one'
        title='Préparation et soins des surfaces'
        subtitle=''
        description={[
          "Inspection des surfaces extérieures pour détecter les zones de besoin.",
          "Nettoyage en profondeur des surfaces avant l’application de la peinture.",
          "Traitement des zones endommagées (réparation des fissures, traitement anti-humidité).",
          "Application de primaires pour assurer une bonne adhérence de la peinture."
        ]} />
      <PrestationDetails
        className='inverted special two'
        image='./devant_maison_avant.webp'
        title='Application et finitions'
        subtitle=''
        description={[
          "Application de produits resilientes aux intempéries.",
          "Peinture des fasades, fenêtres, portes et autres éléments extérieurs.",
          "Choix des finitions : mate, satinée ou brillante selon vos préférences.",
          "Protection des surfaces sensibles (fenêtres, sols) contre les éclaboussures."
        ]} />
        <PrestationDetails
        className='last special three'
        image='./devant_maison.webp'
        title='Expertise et qualité :'
        subtitle=''
        description={[
          "Finitions soignées sur les bords, les contours et les détails pour un rendu uniforme.",
          "Application de produits de protection pour prolonger la durée de vie de la peinture.",
          "Nettoyage des zones de travail et mise en valeur des surfaces fraîchement peintes.",
        ]} />
       <PrestationRealisations 
        image='./grille_avant.webp' 
        image2='./grille_apres.webp'
        image3='./devant_maison_avant.webp'
        image4='./devant_maison.webp'
        />
      <Footer />
    </section>
  )
}

export default index