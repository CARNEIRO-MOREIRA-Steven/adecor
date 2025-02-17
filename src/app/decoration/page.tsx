import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationDetails from '../components/Prestations/PrestationDetails'

const index = () => {
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./chambre1.png'
      title='Décoration'
      className=''
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
      <AboutPrestation
        image='./chambre2.png'
        title='A’Decor, spécialiste en Décoration intérieure basé à Noyon, dans l’Oise'
        description="<p>Notre service de décoration intérieure vous aide à personnaliser vos espaces en fonction de vos goûts et de votre style.
        Nous vous accompagnons dans le choix des couleurs, des matériaux, des revêtements et des accessoires pour créer un intérieur qui vous ressemble.</p>
        <p>Nous proposons un large éventail de solutions pour aménager vos pièces de manière harmonieuse et fonctionnelle. Nous vous guidons pour optimiser
        l’agencement de vos espaces tout en apportant une touche de modernité et d'élégance à votre intérieur.</p>
        <p>Créez un espace à la fois pratique et esthétique grâce à nos conseils professionnels en décoration.</p>
            " />
      <PrestationDetails
        image='./decoration_plan.jpg'
        title='Analyse et conseils en décoration intérieure'
        description={[
          "Étude de l’espace pour déterminer le style et l’ambiance souhaités.",
          "Sélection des couleurs et des matériaux pour un rendu harmonieux.",
          "Proposition d'agencement et de mobilier adaptés à chaque pièce.",
          "Création d’une ambiance personnalisée et moderne, en fonction de vos goûts."
        ]} />
      <PrestationDetails
        className='inverted'
        image='./deplacement_meuble.jpg'
        title='Mise en œuvre de la décoration intérieure'
        description={[
          "Peinture décorative, application de papiers peints ou toiles de verre.",
          "Pose de revêtements muraux et de sols pour sublimer votre intérieur.",
          "Aménagement et agencement des espaces pour une fonctionnalité optimale.",
          "Installation de luminaires et accessoires décoratifs pour compléter l’atmosphère."
        ]} />
        <PrestationDetails
        className='last'
        image='./decoration_finition.jpg'
        title='Finitions et touches finales en décoration'
        description={[
          "Application de finitions minutieuses pour un rendu impeccable.",
          "Aménagement des espaces avec des éléments décoratifs uniques (rideaux, tableaux, plantes).",
          "Conseils en entretien pour conserver votre décoration en parfait état sur le long terme."
        ]} />
      <Footer />
    </section>
  )
}

export default index